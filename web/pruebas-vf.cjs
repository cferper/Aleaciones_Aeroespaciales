'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const E=require('./dist/vf-motor.js'),bank=E.bankCheck(JSON.parse(fs.readFileSync(path.join(__dirname,'vf/banco.json'),'utf8'))),clone=x=>JSON.parse(JSON.stringify(x));
let passed=0;
function test(name,fn){fn();passed++;console.log('✓ '+name);}
const cfg=(block='todos',count=15,penalty=true,mode='nuevo')=>({block,count,penalty,mode});
function rng(seed){return ()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
const keys=Object.keys(E.BLOCKS);
test('180 fichas: bloques, temas, dificultad y fuentes originales',()=>{
 assert.equal(bank.questions.length,180);
 assert.deepEqual(keys.map(b=>bank.questions.filter(q=>q.block===b).length),[75,35,20,20,15,15]);
 assert.deepEqual(['basica','intermedia','avanzada'].map(d=>bank.questions.filter(q=>q.difficulty===d).length),[27,81,72]);
 for(const q of bank.questions)for(const s of q.sources)assert.ok(fs.existsSync(path.join(__dirname,'..',s.document)));
 assert.ok(bank.questions.filter(q=>q.correct).length>=80&&bank.questions.filter(q=>q.correct).length<=100);
 assert.equal(new Set(bank.questions.map(q=>q.statement.normalize('NFD').toLowerCase())).size,180);
 for(const q of bank.questions)assert.ok(!/como (se ve|muestra)|gráfica (anterior|adjunta)|figura (anterior|adjunta)|en la imagen/i.test(q.statement));
});
test('Compilado V/F idéntico al JSON revisado',()=>{const ctx={};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'dist/vf-contenido.js'),'utf8'),ctx);assert.deepEqual(clone(ctx.VFBank),bank);});
test('Cotejo por ficha con anclajes y hashes, sin páginas fuera de PDF',()=>{
 const review=JSON.parse(fs.readFileSync(path.join(__dirname,'../borradores/fase5/REVISION_ACADEMICA.json'),'utf8'));
 assert.equal(review.reviews.length,180);assert.equal(review.missingAnchors.length,0);
 const limits={1:21,2:19,3:10,4:45,5:28,6:44,7:13,8:22,9:24,10:9};
 for(const q of bank.questions){assert.ok(q.sources.every(s=>s.pdfPage<=limits[q.topic]));const r=review.reviews.find(r=>r.id===q.id);assert.match(r.sourcePDFSHA256,/^[a-f0-9]{64}$/);assert.ok(r.evidence.some(e=>e.anchor));}
});
for(const block of [...keys,'todos'])for(const count of [10,15,30])test(`${block}: tanda de ${count}, disponibilidad real, sin repeticiones`,()=>{
 const s=E.start(E.fresh(),bank,cfg(block,count),rng(count));
 const expected=Math.min(count,bank.questions.filter(q=>block==='todos'||q.block===block).length);
 assert.equal(s.session.order.length,expected);assert.equal(new Set(s.session.order).size,expected);
 if(block==='aluminio')assert.ok(s.session.order.every(id=>bank.questions.find(q=>q.id===id).topic<=5));
 if(block!=='todos')assert.ok(s.session.order.every(id=>bank.questions.find(q=>q.id===id).block===block));
 E.validate(s,bank);
});
test('Todos: reparto máximo de una pregunta de diferencia entre bloques en 10/15/30',()=>{for(let seed=1;seed<101;seed++)for(const n of [10,15,30]){const s=E.start(E.fresh(),bank,cfg('todos',n),rng(seed));const ns=keys.map(b=>s.session.order.filter(id=>bank.questions.find(q=>q.id===id).block===b).length);assert.ok(Math.max(...ns)-Math.min(...ns)<=1);}});
test('Selecciones diferentes y representación de los cinco temas de Al a lo largo de tandas',()=>{const seen=new Set(),orders=new Set();for(let seed=1;seed<50;seed++){const s=E.start(E.fresh(),bank,cfg('aluminio',30),rng(seed));orders.add(s.session.order.join());s.session.order.forEach(id=>seen.add(bank.questions.find(q=>q.id===id).topic));}assert.equal(seen.size,5);assert.ok(orders.size>40);});
test('Los datos originales no se mutan y cada respuesta bloquea una segunda elección',()=>{let s=E.start(E.fresh(),bank,cfg(),rng(1));const before=clone(s),q=bank.questions.find(q=>q.id===s.session.order[0]);s=E.answer(s,bank,q.correct);assert.deepEqual(before.session.answers,{});assert.equal(s.session.answers[q.id].result,'correct');assert.throws(()=>E.answer(s,bank,!q.correct),/registrada/);});
test('Acierto, fallo y blanco: estado inmediato y blancos no pendientes',()=>{let s=E.start(E.fresh(),bank,cfg(),rng(2));for(const type of ['correct','wrong','blank']){const q=bank.questions.find(q=>q.id===s.session.order[s.session.index]);s=E.answer(s,bank,type==='blank'?null:type==='correct'?q.correct:!q.correct);assert.equal(s.session.answers[q.id].result,type);assert.equal(s.history[q.id].pending,type==='wrong');s=E.advance(s);E.validate(s,bank);}assert.deepEqual(E.score(s.session).answered,3);});
test('No se puede avanzar sin registrar respuesta o blanco',()=>{assert.throws(()=>E.advance(E.start(E.fresh(),bank,cfg())),/Responde/);});
function finish(penalty){let s=E.start(E.fresh(),bank,cfg('todos',10,penalty),rng(3));for(let i=0;i<10;i++){const q=bank.questions.find(q=>q.id===s.session.order[i]);s=E.answer(s,bank,i<5?q.correct:i<8?!q.correct:null);s=E.advance(s);}return s;}
test('Puntuación con −0,33: 5 aciertos, 3 fallos y 2 blancos → 4,01/10',()=>{const s=finish(true),r=E.score(s.session);assert.equal(r.grade,4.01);assert.equal(r.correct,5);assert.equal(r.wrong,3);assert.equal(r.blank,2);assert.equal(r.percent,50);assert.equal(s.session.status,'finished');E.validate(s,bank);});
test('Sin penalización: 5 aciertos sobre 10 → 5/10',()=>{assert.equal(E.score(finish(false).session).grade,5);});
test('Mínimo cero y normalización sobre tanda real menor de 30',()=>{let s=E.start(E.fresh(),bank,cfg('fractura',30,true));for(let i=0;i<15;i++){const q=bank.questions.find(q=>q.id===s.session.order[i]);s=E.answer(s,bank,!q.correct);s=E.advance(s);}assert.equal(E.score(s.session).grade,0);assert.equal(E.score(s.session).total,15);});
test('Repetir falladas conserva sólo errores recientes, sin blancos ni duplicados',()=>{const s=finish(true),retry=E.start(s,bank,cfg('todos',30,true,'recientes'));assert.equal(retry.session.order.length,3);assert.ok(retry.session.order.every(id=>s.session.answers[id].result==='wrong'));});
test('Históricos: acertar resuelve pendiente sin borrar errores previos; blanco no resuelve',()=>{let s=finish(true);const id=Object.keys(s.history).find(id=>s.history[id].pending);s=E.start(s,bank,cfg('todos',30,true,'pendientes'));const target=s.session.order[0];s=E.answer(s,bank,null);assert.equal(s.history[target].pending,true);s=E.advance(s);s=E.start(s,bank,cfg('todos',30,true,'pendientes'),()=>0);const first=s.session.order[0],q=bank.questions.find(q=>q.id===first);s=E.answer(s,bank,q.correct);assert.equal(s.history[first].pending,false);assert.equal(s.history[first].wrong,1);assert.equal(s.history[first].correct,1);assert.ok(s.history[first].resolvedAt);assert.ok(E.pool(bank,cfg('todos',30,true,'historicos'),s).some(q=>q.id===first));assert.ok(!E.pool(bank,cfg('todos',30,true,'pendientes'),s).some(q=>q.id===first));assert.ok(id);});
test('Recuperación exacta: configuración, orden, posición y corrección después de recarga',()=>{const entries=new Map(),storage={getItem:k=>entries.get(k)??null,setItem:(k,v)=>entries.set(k,v)};let s=E.start(E.fresh(),bank,cfg('titanio',30,false));const q=bank.questions.find(q=>q.id===s.session.order[0]);s=E.answer(s,bank,!q.correct);const saved=E.save(storage,s,null,bank);assert.equal(saved.ok,true);const recovered=E.load(storage,bank);assert.deepEqual(recovered.state,s);assert.throws(()=>E.answer(recovered.state,bank,q.correct),/registrada/);});
test('Sólo se escribe la clave V/F; progreso e intentos anteriores permanecen idénticos',()=>{const entries=new Map([['aleaciones-progreso-v1','sentinela-estudio'],['aleaciones-simulacro-v1','sentinela-examen']]),storage={getItem:k=>entries.get(k)??null,setItem:(k,v)=>entries.set(k,v)};E.save(storage,finish(true),null,bank);assert.equal(entries.get('aleaciones-progreso-v1'),'sentinela-estudio');assert.equal(entries.get('aleaciones-simulacro-v1'),'sentinela-examen');assert.equal(entries.size,3);});
test('Dato corrupto se conserva y la carga no escribe ni reinicia',()=>{let raw='{roto',writes=0;const storage={getItem:()=>raw,setItem(){writes++;}};const result=E.load(storage,bank);assert.ok(result.error);assert.equal(result.raw,raw);assert.equal(writes,0);});
test('Se rechazan respuestas manipuladas, orden duplicado y finalización prematura',()=>{for(const alter of [s=>s.session.order[1]=s.session.order[0],s=>s.session.status='finished',s=>s.session.answers[s.session.order[0]]={choice:true,result:'blank',at:new Date().toISOString()}]){const s=E.start(E.fresh(),bank,cfg());alter(s);assert.throws(()=>E.validate(s,bank));}});
test('Otra pestaña no puede sobrescribir respuestas ya guardadas',()=>{let raw=null;const storage={getItem:()=>raw,setItem:(k,v)=>raw=v};const a=E.save(storage,E.start(E.fresh(),bank,cfg()),null,bank);assert.ok(a.ok);const b=E.save(storage,E.start(E.fresh(),bank,cfg()),null,bank);assert.equal(b.ok,false);assert.equal(b.conflict,true);assert.equal(raw,a.raw);});
test('Almacenamiento no disponible o lleno informa sin lanzar excepción',()=>{assert.equal(E.save(null,finish(true),null,bank).ok,false);assert.equal(E.save({getItem:()=>null,setItem(){throw Error('Cuota');}},finish(true),null,bank).ok,false);});
test('Selección vacía y configuraciones inválidas se rechazan',()=>{assert.throws(()=>E.start(E.fresh(),bank,cfg('todos',10,true,'pendientes')),/No hay/);assert.throws(()=>E.start(E.fresh(),bank,cfg('gep')));assert.throws(()=>E.start(E.fresh(),bank,cfg('todos',100)));});
console.log(`${passed} pruebas V/F superadas. La validación automática no es validación académica oficial.`);
