/* Práctica independiente: no lee ni escribe progreso ni intentos de examen. */
(function (root) {
  'use strict';
  const KEY = 'aleaciones-vf-v1';
  const BLOCKS = {aluminio:'Aluminio',titanio:'Titanio',aceros:'Aceros',magnesio:'Magnesio',fractura:'Fractura',seleccion:'Selección de materiales'};
  const copy = x => JSON.parse(JSON.stringify(x));
  const own = (o,k) => Object.prototype.hasOwnProperty.call(o,k);
  const plain = o => o && typeof o === 'object' && !Array.isArray(o);
  const integer = n => Number.isSafeInteger(n) && n >= 0;
  const validId = id => typeof id === 'string' && /^vf-t\d{1,2}-\d{3}$/.test(id);
  const assert = (condition,message) => { if (!condition) throw new Error(message); };
  function bankCheck(bank) {
    assert(bank && bank.version === 1 && Array.isArray(bank.questions), 'Banco V/F no compatible.');
    const ids = new Set();
    for (const q of bank.questions) {
      assert(validId(q.id) && !ids.has(q.id), 'Identificador V/F duplicado o inválido.'); ids.add(q.id);
      assert(own(BLOCKS,q.block) && Number.isInteger(q.topic) && q.topic >= 1 && q.topic <= 10, 'Bloque o tema inválido.');
      assert(q.block === (q.topic <= 5 ? 'aluminio' : ['titanio','aceros','magnesio','fractura','seleccion'][q.topic-6]), 'Tema fuera de su bloque.');
      for (const field of ['subtopic','objective','statement','explanation','conditions','verification']) assert(typeof q[field] === 'string' && q[field].trim(), 'Ficha incompleta: '+field);
      assert(typeof q.correct === 'boolean' && ['basica','intermedia','avanzada'].includes(q.difficulty), 'Clave o dificultad inválida.');
      assert(q.sources?.length && q.sources.every(s => typeof s.document === 'string' && s.document.startsWith('Aleaciones/') && !s.document.includes('..') && s.document.endsWith('.pdf') && Number.isInteger(s.pdfPage) && s.pdfPage > 0), 'Fuente inválida.');
    }
    return bank;
  }
  function shuffle(items, random = Math.random) {
    const result = [...items];
    for (let i=result.length-1; i>0; i--) { const j=Math.min(i,Math.floor(random()*(i+1))); [result[i],result[j]]=[result[j],result[i]]; }
    return result;
  }
  function fresh() { return {version:1, revision:0, session:null, history:{}}; }
  function pool(bank,config,state) {
    assert(config && (config.block === 'todos' || own(BLOCKS,config.block)), 'Elige un bloque válido.');
    assert([10,15,30].includes(config.count) && typeof config.penalty === 'boolean', 'Configuración inválida.');
    assert(['nuevo','pendientes','historicos','recientes'].includes(config.mode || 'nuevo'), 'Modo de selección inválido.');
    const recent = new Set(state.session ? Object.entries(state.session.answers).filter(([,a]) => a.result === 'wrong').map(([id])=>id) : []);
    return bank.questions.filter(q => (config.block === 'todos' || q.block === config.block) && (
      !config.mode || config.mode === 'nuevo' ||
      config.mode === 'pendientes' && state.history[q.id]?.pending ||
      config.mode === 'historicos' && state.history[q.id]?.wrong > 0 ||
      config.mode === 'recientes' && recent.has(q.id)
    ));
  }
  function select(bank,config,state,random) {
    const available = pool(bank,config,state), limit=Math.min(config.count,available.length);
    if (config.block !== 'todos') return shuffle(available,random).slice(0,limit);
    // Ronda entre los seis bloques, sin ponderarlos por el tamaño del banco.
    const buckets = Object.fromEntries(Object.keys(BLOCKS).map(b=>[b,shuffle(available.filter(q=>q.block===b),random)]));
    const selected=[];
    while (selected.length < limit) {
      for (const b of shuffle(Object.keys(BLOCKS),random)) {
        if (buckets[b].length && selected.length < limit) selected.push(buckets[b].pop());
      }
    }
    return shuffle(selected,random);
  }
  function start(state,bank,config,random=Math.random,now=new Date().toISOString()) {
    const questions=select(bank,config,state,random);
    assert(questions.length, 'No hay preguntas disponibles para esta selección.');
    const next=copy(state);
    next.session={id:now,bankVersion:bank.version,config:{...config,mode:config.mode || 'nuevo'},order:questions.map(q=>q.id),answers:{},index:0,status:'running',startedAt:now,finishedAt:null};
    next.revision++; return next;
  }
  function answer(state,bank,choice,now=new Date().toISOString()) {
    assert(choice === true || choice === false || choice === null, 'Respuesta inválida.');
    const next=copy(state), s=next.session;
    assert(s && s.status === 'running', 'No hay una práctica activa.');
    const id=s.order[s.index], q=bank.questions.find(q=>q.id===id);
    assert(!own(s.answers,id), 'La respuesta ya está registrada.');
    const result=choice === null ? 'blank' : choice === q.correct ? 'correct' : 'wrong';
    s.answers[id]={choice,result,at:now};
    const h=next.history[id] || {attempts:0,correct:0,wrong:0,blank:0,pending:false,lastAt:null,lastResult:null,lastWrongAt:null,resolvedAt:null};
    h.attempts++; h[result]++; h.lastAt=now; h.lastResult=result;
    if (result === 'wrong') {h.pending=true; h.lastWrongAt=now; h.resolvedAt=null;}
    if (result === 'correct') {if(h.pending)h.resolvedAt=now; h.pending=false;}
    next.history[id]=h; next.revision++; return next;
  }
  function advance(state,now=new Date().toISOString()) {
    const next=copy(state), s=next.session;
    assert(s && s.status === 'running' && own(s.answers,s.order[s.index]), 'Responde o deja en blanco antes de continuar.');
    if (s.index+1 === s.order.length) {s.status='finished'; s.finishedAt=now;} else s.index++;
    next.revision++; return next;
  }
  function score(s) {
    const counts={correct:0,wrong:0,blank:0};
    for (const a of Object.values(s.answers)) counts[a.result]++;
    const total=s.order.length, penalty=s.config.penalty ? 0.33 : 0;
    const net=counts.correct-penalty*counts.wrong;
    return {...counts,total,penalty,net,grade:Math.max(0,10*net/total),percent:100*counts.correct/total,answered:Object.keys(s.answers).length};
  }
  function validate(state,bank) {
    assert(plain(state) && state.version===1 && integer(state.revision) && plain(state.history), 'Historial V/F no válido.');
    const bankMap = new Map(bank.questions.map(q=>[q.id,q]));
    const date = s => typeof s === 'string' && Number.isFinite(Date.parse(s));
    assert(Object.keys(state.history).length <= 10000, 'Historial demasiado grande.');
    for (const [id,h] of Object.entries(state.history)) {
      assert(validId(id) && plain(h) && ['attempts','correct','wrong','blank'].every(k=>integer(h[k])) && h.attempts===h.correct+h.wrong+h.blank, 'Registro histórico inválido.');
      assert(typeof h.pending==='boolean' && (!h.pending || h.wrong>0) && date(h.lastAt) && ['correct','wrong','blank'].includes(h.lastResult), 'Estado de error inválido.');
      assert((h.lastWrongAt===null || date(h.lastWrongAt)) && (h.resolvedAt===null || date(h.resolvedAt)), 'Fecha histórica inválida.');
    }
    if (state.session !== null) {
      const s=state.session;
      assert(plain(s) && s.bankVersion===bank.version && Array.isArray(s.order) && s.order.length>0 && s.order.length<=30 && new Set(s.order).size===s.order.length && s.order.every(id=>bankMap.has(id)), 'Sesión o versión del banco no recuperable.');
      pool(bank,s.config,state);
      assert(['running','finished'].includes(s.status) && Number.isInteger(s.index) && s.index>=0 && s.index<s.order.length && plain(s.answers) && date(s.startedAt), 'Sesión inválida.');
      const answered=Object.keys(s.answers);
      assert(answered.length <= s.order.length && answered.every(id=>s.order.includes(id)), 'Respuestas ajenas a la tanda.');
      for (let i=0; i<s.order.length; i++) {
        const id=s.order[i], a=s.answers[id];
        assert((i>=s.index || a) && (i<=s.index || !a), 'Orden de respuestas incoherente.');
        if (a) assert(plain(a) && (a.choice===null || typeof a.choice==='boolean') && a.result===(a.choice===null ? 'blank' : a.choice===bankMap.get(id).correct ? 'correct' : 'wrong') && date(a.at) && state.history[id]?.attempts>0, 'Respuesta guardada inválida.');
      }
      if (s.status==='finished') assert(answered.length===s.order.length && s.index===s.order.length-1 && date(s.finishedAt), 'Tanda incompleta marcada como terminada.');
    }
    return state;
  }
  function load(storage,bank) {
    let raw=null;
    try {raw=storage?.getItem(KEY) ?? null; if(raw===null)return {state:fresh(),raw,error:null};
      assert(raw.length<4000000,'El almacenamiento V/F supera el límite.');
      return {state:validate(JSON.parse(raw),bank),raw,error:null};
    } catch(e) {return {state:fresh(),raw,error:e.message};}
  }
  function save(storage,state,previousRaw,bank) {
    try {
      validate(state,bank); assert(storage,'El navegador no ofrece almacenamiento local.');
      assert(storage.getItem(KEY)===previousRaw,'La práctica cambió en otra pestaña. Recarga antes de continuar.');
      const raw=JSON.stringify(state); storage.setItem(KEY,raw); return {ok:true,raw};
    } catch(e) {return {ok:false,error:e.message,conflict: /otra pestaña/.test(e.message)};}
  }
  const api={KEY,BLOCKS,fresh,bankCheck,shuffle,pool,select,start,answer,advance,score,validate,load,save};
  if(typeof module!=='undefined' && module.exports) module.exports=api;
  root.VFEngine=api;
})(globalThis);
