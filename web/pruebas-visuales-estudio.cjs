"use strict";
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const dir='borradores/fase42_visuales/';
const caseCorrections=new Map(read('borradores/fase43_publicacion/CASOS_CORREGIDOS.json').map(c=>[c.id,c]));
function atPhase42(c){const correction=caseCorrections.get(c.id);if(!correction)return c;assert.deepEqual(c,correction.after,'Cambio de caso no registrado: '+c.id);return correction.before;}
const audit=read(dir+'AUDITORIA_COMPLETA.json'),changes=read(dir+'CAMBIOS.json'),baseline=read(dir+'INTEGRIDAD_ANTES.json'),visual=read(dir+'MANIFIESTO_VISUAL.json');
const topics=Array.from({length:10},(_,i)=>read(`web/temas/t${i+1}.json`));
const phase45Corrections = new Map(JSON.parse(fs.readFileSync(path.join(__dirname, '../borradores/fase45_interfaz/RESPUESTAS_AJUSTADAS.json'), 'utf8')).map(c=>[c.id,c]));
function atPhase45(card) { const r=phase45Corrections.get(card.id); if(!r)return card; assert.deepEqual(card,r.after,'Respuesta de fase 4.5 inesperada: '+card.id); return r.before; }
const cards=topics.flatMap(t=>t.cards).map(atPhase45),by=new Map(cards.map(c=>[c.id,c]));
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
let count=0;function test(name,fn){fn();console.log('✓ '+name);count++;}
test('Auditoría individual de las 312 activas y reparto A/B/C 1/10/0',()=>{
 assert.equal(audit.length,312);assert.equal(new Set(audit.map(c=>c.id)).size,312);
 assert.deepEqual(audit.map(c=>c.id).sort(),cards.filter(c=>!c.archived).map(c=>c.id).sort());
 assert.equal(changes.length,11);assert.equal(changes.filter(c=>c.category==='A').length,1);assert.equal(changes.filter(c=>c.category==='B').length,10);assert.equal(changes.filter(c=>c.category==='C').length,0);
});
test('Correcciones exactas, mismo objetivo y metadatos conservados',()=>{
 for(const c of changes){assert.deepEqual(by.get(c.id),c.after,c.id);assert.equal(c.before.id,c.after.id);assert.equal(c.sameObjective,true);
  const omit=card=>Object.fromEntries(Object.entries(card).filter(([key])=>!['question','answer','explanation','visual'].includes(key)));
  assert.deepEqual(omit(c.before),omit(c.after),c.id);
 }
});
test('Resto de tarjetas activas intactas y ningún ID archivado o añadido',()=>{
 assert.deepEqual(cards.map(c=>c.id),baseline.ids);assert.equal(cards.filter(c=>c.archived).length,9);
 for(const c of audit.filter(c=>!c.affected))assert.equal(hash(JSON.stringify(by.get(c.id))),c.cardHashBefore,c.id);
});
test('La comparación 5052 textual no necesita consultar una curva',()=>{
 const c=by.get('t1-acritud-plasticidad');assert.ok(!/gr[aá]fic|curva/.test(c.question));assert.ok(c.answer.includes('disminución del alargamiento'));assert.ok(c.explanation.includes('Rm y Rp0,2'));
});
test('Los límites del criterio Zn/Mg están en el enunciado, no escondidos en la solución',()=>{
 const q=by.get('t4-av-ratio-hueco-esquema').question;for(const text of ['3 < Zn/Mg < 7','Zn/Mg < 2,5','Zn/Mg = 2,8'])assert.ok(q.includes(text));
});
test('Recurso auténtico con ruta portátil, dimensiones y hash comprobados',()=>{
 const c=by.get('t1-acritud-limite-elastico');assert.equal(c.visual.src,'assets/estudio/t1-5052-acritud.png');assert.equal(c.visual.pdfPage,6);
 assert.ok(c.sources.some(s=>s.document===c.visual.document&&s.pdfPage===c.visual.pdfPage));
 const image=fs.readFileSync(path.join(root,visual.file));assert.equal(hash(image),visual.sha256);
 assert.deepEqual([image.readUInt32BE(16),image.readUInt32BE(20)],[940,900]);assert.equal(cards.filter(c=>c.visual).length,1);
});
test('Imagen antes de revelar, ampliación segura y texto alternativo',()=>{
 const app=fs.readFileSync(path.join(root,'web/dist/app.js'),'utf8');
 const source=app.slice(app.indexOf('  function cardVisual('),app.indexOf('  function stats()'));
 const ctx=vm.createContext({esc:text=>String(text).replaceAll('<','&lt;')});vm.runInContext(source,ctx);
 const html=ctx.cardVisual(by.get('t1-acritud-limite-elastico'));
 assert.ok(html.includes('<img'));assert.ok(html.includes('target="_blank"'));assert.ok(html.includes('rel="noopener"'));assert.ok(html.includes('alt="Gráfica'));
 assert.equal(ctx.cardVisual({}), '');assert.equal(ctx.cardVisual({visual:{src:'https://example.com/image.png'}}), '');
 assert.ok(app.indexOf('${cardVisual(card)}')<app.indexOf('<section id="respuesta"'));
});
test('Base de casos intacta con dos imágenes de fase 4.3; mapas, SRS, pilotos y PDF sin cambios',()=>{
 assert.deepEqual(topics.map(t=>({id:t.id,cases:t.cases.map(atPhase42),map:t.map})),baseline.casesAndMaps);
 for(const [file,digest]of Object.entries(baseline.files))assert.equal(hash(fs.readFileSync(path.join(root,file))),digest,file);
});
test('Compilado igual a los diez JSON y versión de caché actualizada',()=>{
 const ctx=vm.createContext({});vm.runInContext(fs.readFileSync(path.join(root,'web/dist/contenido.js'),'utf8'),ctx);
 assert.deepEqual(JSON.parse(JSON.stringify(ctx.StudyContent.subjects[0].topics)),topics);
 const index=fs.readFileSync(path.join(root,'web/dist/index.html'),'utf8');assert.ok(index.includes('app.js?v=20261016-f45'));assert.ok(index.includes('estilos.css?v=20261015-f44'));assert.ok(index.includes('contenido.js?v=20261016-f45'));
});
console.log(`${count} pruebas de recursos visuales de estudio superadas.`);
