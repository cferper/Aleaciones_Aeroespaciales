(() => {
  'use strict';
  const E=globalThis.VFEngine, bank=E.bankCheck(globalThis.VFBank), $=id=>document.getElementById(id), panel=$('vf-panel');
  const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const num=n=>n.toLocaleString('es-ES',{maximumFractionDigits:2});
  let storage;try{storage=window.localStorage;}catch{storage=null;}
  const loaded=E.load(storage,bank);
  let state=loaded.state, raw=loaded.raw, recovery=!!loaded.error, conflict=false, screen=state.session?'session':'config';
  let config=state.session?.config || {block:'aluminio',count:15,penalty:true,mode:'nuevo'};
  const question=id=>bank.questions.find(q=>q.id===id);
  function warning(message){$('vf-aviso').textContent=message||'';$('vf-aviso').hidden=!message;}
  if(recovery)warning('No se pudo recuperar la práctica V/F. El dato anterior se conserva. Puedes descargarlo antes de restablecer esta sección.');
  function commit(candidate){
    if(recovery || conflict)return;
    const result=E.save(storage,candidate,raw,bank);
    if(result.conflict){conflict=true;warning(result.error);render();return;}
    state=candidate;
    if(result.ok){raw=result.raw;warning('');}else warning('No se pudo guardar. La práctica sigue en memoria; no cierres ni recargues la página. '+result.error);
    render();
  }
  function sources(q){return `<details class="fuentes"><summary>Consultar fuentes originales</summary><ul>${q.sources.map(s=>`<li>${esc(s.document)} · página ${s.pdfPage} del PDF${s.printedPage?` · impresa ${esc(s.printedPage)}`:''}. ${esc(s.section||q.subtopic)}</li>`).join('')}</ul></details>`;}
  function correction(q,a){
    const label=a.result==='correct'?'Correcto':a.result==='wrong'?'Incorrecto':'En blanco';
    return `<section class="vf-correccion vf-${a.result}" role="status" aria-live="polite"><h3 tabindex="-1">${label}</h3><p>Respuesta correcta: <strong>${q.correct?'Verdadero':'Falso'}</strong>${a.choice===null?' · Pregunta omitida, sin penalización.':` · Tu respuesta: ${a.choice?'Verdadero':'Falso'}.`}</p><p>${esc(q.explanation)}</p>${sources(q)}</section>`;
  }
  function historySummary(){const h=Object.values(state.history);return {pending:h.filter(x=>x.pending).length,historical:h.filter(x=>x.wrong>0).length};}
  function configView(){
    const h=historySummary();
    panel.innerHTML=`<article class="tarjeta vf-config"><h2>Elige tu práctica</h2><form id="vf-configurar"><div class="vf-ajustes"><label>Bloque<select id="vf-bloque">${Object.entries({...E.BLOCKS,todos:'Todos los temas'}).map(([id,title])=>`<option value="${id}" ${id===config.block?'selected':''}>${esc(title)}${id==='aluminio'?' · Temas 1–5':''}</option>`).join('')}</select></label><label>Número de preguntas<select id="vf-cantidad">${[10,15,30].map(n=>`<option ${n===config.count?'selected':''}>${n}</option>`).join('')}</select></label><label>Preguntas<select id="vf-origen">${[['nuevo','Nueva selección'],['pendientes','Fallos pendientes'],['historicos','Todos los fallos históricos']].map(([id,title])=>`<option value="${id}" ${config.mode===id?'selected':''}>${title}</option>`).join('')}</select></label></div><label class="vf-penalizacion"><input type="checkbox" id="vf-penalizacion" ${config.penalty?'checked':''}> Penalizar fallos (−0,33)</label><p id="vf-disponibles" class="nota" aria-live="polite"></p><button id="vf-iniciar" type="submit" ${recovery||conflict?'disabled':''}>Comenzar práctica</button></form><p class="nota">Corrección al responder. Acierto +1; blanco 0. Nota orientativa.</p><p>Errores: <strong>${h.pending} pendientes</strong> · ${h.historical} preguntas falladas en el historial.</p>${state.session?'<button type="button" class="boton-secundario" data-vf-action="resume">Volver a la tanda guardada</button>':''}${recovery?'<div class="acciones"><button type="button" data-vf-action="backup" class="boton-secundario">Descargar dato V/F conservado</button><button type="button" data-vf-action="reset" class="boton-peligro">Restablecer solo V/F</button></div>':''}<details class="gestion"><summary>Historial de errores</summary>${historyView()}</details></article>`;
    availability();
  }
  function historyView(){
    const entries=Object.entries(state.history).filter(([,h])=>h.wrong>0).sort((a,b)=>Date.parse(b[1].lastWrongAt)-Date.parse(a[1].lastWrongAt));
    return entries.length?`<ul class="vf-historial">${entries.map(([id,h])=>`<li>${esc(question(id)?.statement||id)} <span class="nota">${h.pending?'Pendiente':'Resuelto'} · ${h.wrong} fallo(s), ${h.correct} acierto(s) · último fallo ${esc(new Date(h.lastWrongAt).toLocaleDateString('es-ES'))}</span></li>`).join('')}</ul>`:'<p>Aún no hay errores registrados.</p>';
  }
  function readConfig(){return {block:$('vf-bloque').value,count:Number($('vf-cantidad').value),penalty:$('vf-penalizacion').checked,mode:$('vf-origen').value};}
  function availability(){
    config=readConfig();const n=E.pool(bank,config,state).length, actual=Math.min(n,config.count);
    $('vf-disponibles').textContent=n?`${n} disponibles. Tanda de ${actual} preguntas${actual<config.count?' (cantidad disponible menor que la elegida)':''}.${config.block==='todos'?' Reparto entre bloques, sin favorecer al más grande.':''}`:'No hay preguntas disponibles en esta selección.';
    $('vf-iniciar').disabled=!n||recovery||conflict;
  }
  function sessionView(){
    const s=state.session;if(s.status==='finished'){resultsView();return;}
    const q=question(s.order[s.index]), a=s.answers[q.id];
    panel.innerHTML=`<article class="tarjeta vf-pregunta ${a?'vf-respondida':'vf-sin-responder'}"><p class="etiqueta">${esc(E.BLOCKS[q.block])} · Tema ${q.topic} · ${s.index+1} de ${s.order.length}</p><progress aria-label="Preguntas recorridas" value="${Object.keys(s.answers).length}" max="${s.order.length}"></progress><h2 id="vf-enunciado" tabindex="-1">${esc(q.statement)}</h2><p class="nota vf-condiciones">${esc(q.conditions)}</p><div class="acciones vf-respuestas"><button type="button" data-vf-answer="true" ${a||conflict?'disabled':''}>Verdadero</button><button type="button" data-vf-answer="false" ${a||conflict?'disabled':''}>Falso</button><button type="button" data-vf-answer="blank" class="boton-secundario" ${a||conflict?'disabled':''}>Pasar / Dejar en blanco</button></div>${a?correction(q,a)+`<button type="button" class="vf-siguiente" data-vf-action="next" ${conflict?'disabled':''}>${s.index===s.order.length-1?'Ver resumen':'Siguiente pregunta'}</button>`:''}<p class="nota">${s.config.penalty?'Penalización activada: fallo −0,33.':'Sin penalización por fallo.'}</p><button type="button" data-vf-action="config" class="boton-secundario">Elegir otra práctica</button></article>`;
  }
  function resultsView(){
    const s=state.session, r=E.score(s);
    panel.innerHTML=`<article class="tarjeta"><h2 id="vf-resumen" tabindex="-1">Resumen de la práctica</h2><p class="vf-nota"><strong>${num(r.grade)} / 10</strong><span class="nota">Nota orientativa</span></p><dl class="estadisticas"><div><dt>Aciertos</dt><dd>${r.correct}</dd></div><div><dt>Fallos</dt><dd>${r.wrong}</dd></div><div><dt>En blanco</dt><dd>${r.blank}</dd></div><div><dt>Porcentaje de aciertos (sobre ${r.total})</dt><dd>${num(r.percent)} %</dd></div><div><dt>Penalización aplicada</dt><dd>${r.penalty?'−0,33 por fallo · −'+num(r.wrong*r.penalty)+' puntos':'Desactivada'}</dd></div></dl><div class="acciones"><button type="button" data-vf-action="retry" ${!r.wrong||conflict?'disabled':''}>Repetir falladas</button><button type="button" data-vf-action="new" ${conflict?'disabled':''}>Nueva tanda</button><button type="button" data-vf-action="config" class="boton-secundario">Volver a elegir tema</button></div></article><section class="vf-revision" aria-label="Revisión de la tanda"><h2>Revisa tus respuestas</h2>${s.order.map((id,i)=>{const q=question(id);return `<details class="tarjeta"><summary>${i+1}. ${esc(q.statement)}</summary>${correction(q,s.answers[id])}</details>`;}).join('')}</section>`;
  }
  function render(){if(screen==='config'||recovery)configView();else sessionView();}
  function focusCurrent(){($('vf-enunciado')||$('vf-resumen'))?.focus();}
  function begin(c){
    if(recovery||conflict)return;
    if(state.session?.status==='running' && !window.confirm('La nueva práctica sustituirá la tanda en curso. Los errores registrados se conservan. ¿Continuar?'))return;
    screen='session';commit(E.start(state,bank,c));focusCurrent();
  }
  panel.addEventListener('submit',event=>{if(event.target.id!=='vf-configurar')return;event.preventDefault();try{begin(readConfig());}catch(e){warning(e.message);}});
  panel.addEventListener('change',()=>{if(screen==='config')availability();});
  panel.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button||button.disabled)return;
    try{
      if(button.dataset.vfAnswer){if(recovery||conflict)return;commit(E.answer(state,bank,button.dataset.vfAnswer==='blank'?null:button.dataset.vfAnswer==='true'));panel.querySelector('.vf-correccion h3')?.focus();return;}
      const action=button.dataset.vfAction;
      if(action==='config'){screen='config';config={...config,mode:config.mode==='recientes'?'nuevo':config.mode};render();}
      if(action==='resume'){screen='session';render();focusCurrent();}
      if(action==='next'&&!conflict){commit(E.advance(state));focusCurrent();}
      if(action==='new')begin({...state.session.config,mode:'nuevo'});
      if(action==='retry')begin({...state.session.config,mode:'recientes'});
      if(action==='backup'){
        const url=URL.createObjectURL(new Blob([raw||''],{type:'application/json'})), link=document.createElement('a');link.href=url;link.download='copia-vf-conservada.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
      }
      if(action==='reset'&&window.confirm('¿Restablecer únicamente el dato V/F no recuperable? Descárgalo antes si deseas conservarlo. El estudio y los simulacros no se modifican.')){
        recovery=false;conflict=false;commit(E.fresh());
      }
    }catch(e){warning(e.message);}
  });
  $('modo-vf').addEventListener('click',()=>{
    $('modo-vf-panel').hidden=false;$('modo-temas').hidden=true;$('modo-simulacro').hidden=true;
    for(const id of ['modo-vf','modo-estudio','modo-examen'])$(id).setAttribute('aria-pressed',String(id==='modo-vf'));
    $('estado-contenido').textContent='V/F por temas · Corrección inmediata';document.querySelector('.saltar').href='#vf-panel';render();
  });
  for(const id of ['modo-estudio','modo-examen'])$(id).addEventListener('click',()=>{$('modo-vf-panel').hidden=true;$('modo-vf').setAttribute('aria-pressed','false');});
  window.addEventListener('storage',event=>{if(event.key===E.KEY||event.key===null){conflict=true;warning('La práctica V/F cambió en otra pestaña. Recarga antes de continuar.');render();}});
  render();
})();
