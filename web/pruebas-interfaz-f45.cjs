"use strict";
// Ejecuta la interfaz real con un DOM mínimo y el almacén real, sin navegador ni red.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const read=p=>fs.readFileSync(path.join(__dirname,p),'utf8');
const clone=x=>JSON.parse(JSON.stringify(x));
let passed=0;
function test(name,fn){fn();console.log('✓ '+name);passed++;}
function boot(){
 const elements=new Map(),tools=new Map(),entries=new Map();
 function el(id){if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',hidden:false,dataset:{},events:{},addEventListener(type,fn){this.events[type]=fn;},setAttribute(){},focus(){},querySelector(){return el('focus');},querySelectorAll(){return [];}});return elements.get(id);}
 const storage={writes:0,getItem:k=>entries.get(k)||null,setItem(k,v){this.writes++;entries.set(k,v);}};
 const ctx=vm.createContext({document:{getElementById:el,querySelector:el,querySelectorAll:()=>[],modelContext:{registerTool:t=>tools.set(t.name,t)}},window:{localStorage:storage,addEventListener(){}},setInterval(){},AbortController,console});
 for(const file of ['contenido.js','progreso.js','estudio-filtros.js'])vm.runInContext(read('dist/'+file),ctx);
 const old=ctx.StudyProgress.fresh();
 const archived=ctx.StudyContent.subjects[0].topics.flatMap(t=>t.cards).filter(c=>c.archived);
 for(const c of archived)old.cards[c.id]=ctx.StudyProgress.schedule(null,'easy',Date.parse('2026-01-01T00:00:00Z'));
 storage.setItem('aleaciones-progreso-v1',JSON.stringify(old));storage.writes=0;
 vm.runInContext(read('dist/app.js'),ctx);
 const event=(id,type,target=el(id))=>el(id).events[type]({target});
 const action=(dataset)=>event('panel','click',{closest:()=>({dataset})});
 return {ctx,el,storage,old,archived,tools,event,action,topic(id){el('tema').value=id;event('tema','change');},level(n){el('nivel-estudio').value=String(n);event('nivel-estudio','change');},record(){return JSON.parse(entries.get('aleaciones-progreso-v1'));}};
}
test('312 activas: respuesta principal, ampliación cerrada, fuentes separadas y cuatro valoraciones',()=>{
 const b=boot(),topics=b.ctx.StudyContent.subjects[0].topics;
 let reviewed=0,expanded=0;
 for(const t of topics){b.topic(t.id);b.action({action:'start-practice'});
  for(const card of t.cards.filter(c=>!c.archived)){
   assert.ok(b.el('panel').innerHTML.includes(`data-card-id="${card.id}"`));
   b.action({action:'reveal-card'});const closed=b.el('panel').innerHTML;
   assert.ok(closed.includes(card.answer.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')));
   assert.equal((closed.match(/data-rating=/g)||[]).length,4);
   assert.ok(closed.includes('Consultar fuentes'));
   if(closed.includes('toggle-explanation')){
    expanded++;assert.ok(closed.includes('id="explicacion-tecnica" hidden'));
    assert.ok(closed.indexOf('</section><details class="fuentes">')>0,'Fuentes fuera de ampliación');
    b.action({action:'toggle-explanation'});assert.ok(b.el('panel').innerHTML.includes('Ocultar explicación'));
    assert.ok(!b.el('panel').innerHTML.includes('id="explicacion-tecnica" hidden'));
    b.action({action:'toggle-explanation'});assert.equal(b.el('panel').innerHTML,closed);
    b.action({action:'toggle-explanation'});
   }
   b.action({rating:'good'});reviewed++;
  }
 }
 assert.equal(reviewed,312);assert.equal(expanded,153);
 assert.deepEqual(Object.keys(b.record().cards).sort(),clone(topics.flatMap(t=>t.cards.map(c=>c.id))).sort());
 for(const c of b.archived)assert.deepEqual(b.record().cards[c.id],clone(b.old.cards[c.id]));
 console.log(`  ${reviewed} revisadas; ${expanded} con ampliación y ${reviewed-expanded} sólo respuesta.`);
});
test('Todos los recorridos y contadores excluyen archivo sin borrar su progreso',()=>{
 const b=boot(),topics=b.ctx.StudyContent.subjects[0].topics;
 for(const t of topics){b.topic(t.id);const n=t.cards.filter(c=>!c.archived).length;
  assert.ok(b.el('alcance-tema').textContent.includes(n+' tarjetas,'));
  assert.ok(b.el('estado-contenido').textContent.includes(n+' tarjetas'));
  b.level(3);b.event('todos-pendientes','click');assert.ok(b.el('panel').innerHTML.includes('1 de '+n));
  assert.ok(b.el('estadisticas').innerHTML.includes(`<dd>${n} / ${n}</dd>`));
  const p=b.tools.get('read_study_progress').execute({});assert.equal(p.cards,n);assert.equal(p.pending,n);
 }
 b.event('pendientes-asignatura','click');assert.ok(b.el('panel').innerHTML.includes('1 de 312'));
 const visible=[...['alcance-tema','estado-contenido','contador-filtro','estadisticas','panel','mensaje','indice-temas'].map(id=>b.el(id).textContent+b.el(id).innerHTML)].join(' ');
 assert.ok(!/archivad|incluye archivo|incluido archivo/i.test(visible));
 assert.equal(b.storage.writes,0);
 assert.deepEqual(b.record(),clone(b.old));
 const P=b.ctx.StudyProgress;assert.deepEqual(clone(P.mergeImport(P.fresh(),JSON.stringify(P.makeExport(b.record(),Date.now())))),b.record());
});
test('Revelar, ampliar, ocultar, filtrar y navegar no escriben progreso',()=>{
 const b=boot();b.action({action:'reveal-card'});b.action({action:'toggle-explanation'});b.action({action:'toggle-explanation'});
 b.level(2);b.el('concepto-estudio').value='acritud';b.event('concepto-estudio','change');b.topic('t6');b.level(3);
 assert.equal(b.storage.writes,0);assert.deepEqual(b.record(),clone(b.old));
});
test('Las cuatro valoraciones conservan intervalos y cierran la ampliación en la siguiente tarjeta',()=>{
 for(const [rating,minutes] of [['again',10],['hard',2880],['good',4320],['easy',10080]]){
  const b=boot();const id=b.el('panel').innerHTML.match(/data-card-id="([^"]+)/)[1];b.action({action:'reveal-card'});b.action({action:'toggle-explanation'});
  const before=Date.now();b.action({rating});const r=b.record().cards[id];
  assert.ok(Date.parse(r.dueAt)>=before+minutes*60000&&Date.parse(r.dueAt)<=Date.now()+minutes*60000);
  assert.equal(b.storage.writes,1);b.action({action:'reveal-card'});
  assert.ok(!b.el('panel').innerHTML.includes('Ocultar explicación'));
  for(const c of b.archived)assert.deepEqual(b.record().cards[c.id],clone(b.old.cards[c.id]));
 }
});
test('Tres ajustes explícitos conservan IDs, objetivos, fuentes y resto de los campos',()=>{
 const changes=JSON.parse(read('../borradores/fase45_interfaz/RESPUESTAS_AJUSTADAS.json'));
 const b=boot(),cards=b.ctx.StudyContent.subjects[0].topics.flatMap(t=>t.cards);
 assert.equal(changes.length,3);
 for(const r of changes){assert.deepEqual(clone(cards.find(c=>c.id===r.id)),r.after);const {answer:a,...before}=r.before,{answer:z,...after}=r.after;assert.deepEqual(before,after);assert.notEqual(a,z);}
});
console.log(`${passed} pruebas de interfaz fase 4.5 superadas.`);
