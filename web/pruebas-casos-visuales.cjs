"use strict";
const fs=require('fs'),path=require('path'),assert=require('assert/strict'),crypto=require('crypto'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const revisions=read('borradores/fase43_publicacion/CASOS_CORREGIDOS.json');
const manifest=read('borradores/fase43_publicacion/MANIFIESTO_RECOCIDO.json');
const topics=Array.from({length:10},(_,i)=>read(`web/temas/t${i+1}.json`));
const cases=topics.flatMap(t=>t.cases),cards=topics.flatMap(t=>t.cards),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
let passed=0;function test(name,fn){fn();console.log('✓ '+name);passed++;}
test('40 casos, 10 mapas y 312 tarjetas activas con IDs únicos',()=>{assert.equal(cases.length,40);assert.equal(new Set(cases.map(c=>c.id)).size,40);assert.equal(topics.length,10);assert.equal(cards.filter(c=>!c.archived).length,312);assert.equal(new Set(cards.map(c=>c.id)).size,321);});
test('Dos casos sólo añaden imagen y conservan enunciados, criterios e historial compatible',()=>{
 assert.deepEqual(revisions.map(c=>c.id),['t1-caso-aumentar-acritud','t1-caso-recocido']);
 for(const r of revisions){assert.deepEqual(cases.find(c=>c.id===r.id),r.after);const {visual,...rest}=r.after;assert.deepEqual(rest,r.before);assert.equal(r.sameObjective,true);assert.ok(visual);}
});
test('Acritud reutiliza la figura existente; recocido tiene una figura distinta de la página 7',()=>{
 const [a,b]=revisions.map(r=>r.after);assert.deepEqual(a.visual,cards.find(c=>c.id==='t1-acritud-limite-elastico').visual);
 assert.notEqual(a.visual.src,b.visual.src);assert.equal(b.visual.pdfPage,7);assert.equal(b.visual.printedPage,'4-13');
});
test('PNG de recocido auténtico, dimensiones y condiciones conservadas',()=>{
 const image=fs.readFileSync(path.join(root,manifest.file));assert.equal(hash(image),manifest.sha256);assert.deepEqual([image.readUInt32BE(16),image.readUInt32BE(20)],[900,790]);
 assert.equal(hash(fs.readFileSync(path.join(root,manifest.document))),manifest.pdfSha256);
 const caption=revisions[1].after.visual.caption;for(const text of ['33 %','una hora','100 y 400 °C','MPa','A (%)'])assert.ok(caption.includes(text));
});
test('Todas las imágenes de estudio y pilotos tienen rutas existentes y portátiles',()=>{
 const visuals=[...cards,...cases].filter(c=>c.visual).map(c=>c.visual);
 for(const exam of ['piloto-01','piloto-02'])for(const q of read(`web/simulacros/${exam}.json`).questions)visuals.push(...(q.stimulus?.images||[]));
 assert.equal(visuals.length,15);for(const v of visuals){assert.ok(v.src.startsWith('assets/'));assert.ok(!v.src.includes('..'));assert.ok(fs.existsSync(path.join(root,'web/dist',v.src)));}
});
test('La interfaz renderiza la imagen antes de los campos y permite ampliarla',()=>{
 const app=fs.readFileSync(path.join(root,'web/dist/app.js'),'utf8');const start=app.indexOf('  function renderCases()');const casesCode=app.slice(start,app.indexOf('  function mapDraft()'));
 assert.ok(casesCode.includes('${cardVisual(c)}<div class="caso-formulario">'));
 const ctx=vm.createContext({esc:t=>String(t)});vm.runInContext(app.slice(app.indexOf('  function cardVisual('),app.indexOf('  function stats()')),ctx);
 for(const r of revisions){const html=ctx.cardVisual(r.after);assert.ok(html.includes('target="_blank"'));assert.ok(html.includes('<img'));assert.ok(html.includes(r.after.visual.src));}
});
test('Almacenamiento y algoritmo idénticos a la base de fase 4.2',()=>{
 const before=read('borradores/fase42_visuales/INTEGRIDAD_ANTES.json');
 for(const f of ['web/dist/progreso.js','web/dist/simulacro-motor.js','web/dist/simulacro-ui.js','web/dist/estudio-filtros.js'])assert.equal(hash(fs.readFileSync(path.join(root,f))),before.files[f]);
 assert.ok(fs.readFileSync(path.join(root,'web/dist/progreso.js'),'utf8').includes('aleaciones-progreso-v1'));
 assert.ok(fs.readFileSync(path.join(root,'web/dist/simulacro-motor.js'),'utf8').includes('aleaciones-simulacro-v1'));
});
console.log(`${passed} pruebas de casos visuales superadas.`);
