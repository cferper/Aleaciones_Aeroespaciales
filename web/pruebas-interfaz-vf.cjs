'use strict';
// Interfaz real y motor real con DOM mínimo. La geometría se verifica en navegador.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
let passed=0;
function test(name,fn){fn();console.log('✓ '+name);passed++;}
function boot(entries=new Map()){
 const elements=new Map(),events={},focus=[];
 function el(id){
  if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',checked:true,hidden:false,events:{},setAttribute(k,v){this[k]=v;},addEventListener(k,fn){this.events[k]=fn;},focus(){focus.push(id);},querySelector(selector){return this.innerHTML.includes('vf-correccion')?el(selector):null;}});
  return elements.get(id);
 }
 el('vf-bloque').value='aluminio';el('vf-cantidad').value='15';el('vf-origen').value='nuevo';
 const document={getElementById(id){if(['vf-enunciado','vf-resumen'].includes(id)&&!el('vf-panel').innerHTML.includes('id="'+id+'"'))return null;return el(id);},querySelector:el};
 const ctx=vm.createContext({document,window:{localStorage:{getItem:k=>entries.get(k)||null,setItem:(k,v)=>entries.set(k,v)},confirm:()=>true,addEventListener:(k,fn)=>events[k]=fn},console});
 for(const file of ['vf-motor.js','vf-contenido.js','vf-ui.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'dist',file),'utf8'),ctx);
 function click(dataset){el('vf-panel').events.click({target:{closest:()=>({dataset,disabled:false})}});}
 return {ctx,el,entries,events,focus,click,record:()=>JSON.parse(entries.get('aleaciones-vf-v1')),start(){el('vf-bloque').value='todos';el('vf-cantidad').value='10';el('vf-origen').value='nuevo';el('vf-panel').events.submit({target:{id:'vf-configurar'},preventDefault(){}});}};
}
test('Inicio y respuesta enfocan pregunta y corrección',()=>{
 const b=boot();b.start();assert.equal(b.focus.at(-1),'vf-enunciado');
 assert.match(b.el('vf-panel').innerHTML,/vf-sin-responder/);
 b.click({vfAnswer:'true'});assert.equal(b.focus.at(-1),'.vf-correccion h3');
 assert.match(b.el('vf-panel').innerHTML,/vf-respondida/);assert.match(b.el('vf-panel').innerHTML,/class="vf-siguiente"/);
 assert.equal((b.el('vf-panel').innerHTML.match(/data-vf-answer="[^"]+"[^>]*disabled/g)||[]).length,3);
});
test('Diez respuestas y avance final muestran y enfocan resumen',()=>{
 const b=boot();b.start();for(let i=0;i<10;i++){b.click({vfAnswer:'blank'});b.click({vfAction:'next'});}
 assert.equal(b.record().session.status,'finished');assert.equal(b.focus.at(-1),'vf-resumen');
 assert.match(b.el('vf-panel').innerHTML,/Resumen de la práctica/);
 assert.equal(Object.values(b.record().session.answers).filter(a=>a.result==='blank').length,10);
});
test('Recargar conserva orden, respuesta y corrección bloqueada',()=>{
 const b=boot();b.start();b.click({vfAnswer:'false'});const before=b.record();
 const reloaded=boot(b.entries);assert.deepEqual(reloaded.record(),before);
 assert.match(reloaded.el('vf-panel').innerHTML,/vf-respondida/);
 assert.match(reloaded.el('vf-panel').innerHTML,/Respuesta correcta/);
});
test('Volver desde configuración enfoca la tanda guardada',()=>{
 const b=boot();b.start();b.click({vfAction:'config'});assert.match(b.el('vf-panel').innerHTML,/Elige tu práctica/);
 b.click({vfAction:'resume'});assert.equal(b.focus.at(-1),'vf-enunciado');
});
test('Un cambio en otra pestaña bloquea la tanda sin sobrescribir',()=>{
 const b=boot();b.start();const before=b.entries.get('aleaciones-vf-v1');
 b.events.storage({key:'aleaciones-vf-v1'});b.click({vfAnswer:'true'});
 assert.equal(b.entries.get('aleaciones-vf-v1'),before);assert.match(b.el('vf-aviso').textContent,/otra pestaña/);
});
test('La navegación oculta los controles V/F y conserva las otras claves',()=>{
 const entries=new Map([['aleaciones-progreso-v1','sentinel-study'],['aleaciones-simulacros-v1','sentinel-exam']]),b=boot(entries);
 b.el('modo-vf').events.click();assert.equal(b.el('modo-vf-panel').hidden,false);
 b.el('modo-estudio').events.click();assert.equal(b.el('modo-vf-panel').hidden,true);
 b.start();b.click({vfAnswer:'blank'});
 assert.equal(entries.get('aleaciones-progreso-v1'),'sentinel-study');assert.equal(entries.get('aleaciones-simulacros-v1'),'sentinel-exam');
});
console.log(`${passed} pruebas de interfaz V/F superadas.`);
