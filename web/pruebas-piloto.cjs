"use strict";
const assert=require("node:assert/strict"), fs=require("node:fs"), path=require("node:path"), crypto=require("node:crypto"), vm=require("node:vm");
const E=require("./dist/simulacro-motor.js");
const read=(p)=>JSON.parse(fs.readFileSync(path.join(__dirname,p),"utf8"));
const pilot=read("simulacros/piloto-01.json"), demo=read("simulacros/demo.json");
const approved=read("../borradores/fase2b/FICHAS_ACADEMICAS_01.json");
const manifest=read("../borradores/fase2b/MANIFIESTO_VISUALES.json");
const sourceInventory=read("fuentes.json");
let passed=0;
function test(n,f){f();passed++;console.log("✓ "+n);}
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
const assess=(s,f)=>s.exam.questions.filter(q=>q.type!=="vf").forEach(q=>s.assessments[q.id]={reason:"Comparación con los criterios del piloto.",scores:Object.fromEntries(q.rubric.map(r=>[r.id,r.max*f]))});
const wrong=()=>{const s=E.start(pilot);s.exam.questions.filter(q=>q.type==="vf").forEach(q=>s.answers[q.id]={choice:!q.correct,texts:{}});return E.submit(s);};
test("42 IDs únicos y estructura 30/5/2/5",()=>{
 E.validate(pilot);assert.equal(E.selected(pilot).length,42);assert.equal(new Set(pilot.questions.map(q=>q.id)).size,42);
 assert.deepEqual(pilot.blocks.map(b=>b.count),[30,5,2,5]);assert.equal(pilot.status,"piloto");assert.equal(demo.status,"demo");
});
test("contenido, claves y metadatos idénticos a las 42 fichas aprobadas",()=>{
 for(const q of pilot.questions){const a=approved.find(a=>a.id===q.originalId);assert.ok(a);
  for(const [k,v] of Object.entries({prompt:a.enunciado,model:a.respuesta,explanation:a.explicacion,matrixId:a.matriz,conditions:a.condiciones,difficulty:a.dificultad,difficultyReason:a.justificacion_dificultad,cognitiveLevel:a.nivel_cognitivo,verification:a.estado_verificacion,essential:a.indispensables,majorErrors:a.errores_graves,minorOmissions:a.omisiones_secundarias,maxPoints:a.puntos}))assert.equal(q[k],v,`${q.id}.${k}`);
  if(["vf","justificada"].includes(q.type))assert.equal(q.correct,a.respuesta==="V");
  assert.deepEqual(q.sources,a.fuentes.map(s=>({document:s.pdf,pdfPage:s.pagina_pdf})));
  assert.deepEqual(q.rubric?.map(r=>[r.max,r.label])||[],a.rubrica);
 }
});
test("15 V y 15 F, dificultad 6/12/12",()=>{
 const vf=pilot.questions.filter(q=>q.type==="vf");assert.equal(vf.filter(q=>q.correct).length,15);
 assert.deepEqual(["Básica","Intermedia","Avanzada"].map(d=>vf.filter(q=>q.difficulty===d).length),[6,12,12]);
});
test("rúbricas: 2/10/8 puntos por pregunta, 100 total y reparto 45/26/29",()=>{
 const group={Al:0,Ti:0,resto:0};let total=0;
 for(const q of pilot.questions){assert.equal(q.type==="vf"?1:q.rubric.reduce((n,r)=>n+r.max,0),q.maxPoints);total+=q.maxPoints;
  assert.equal(Object.values(q.topicPoints).reduce((n,v)=>n+v,0),q.maxPoints);
  for(const [t,p] of Object.entries(q.topicPoints))group[+t<=5?"Al":+t===6?"Ti":"resto"]+=p;
 }assert.equal(total,100);assert.deepEqual(group,{Al:45,Ti:26,resto:29});
});
test("referencias PDF: archivos reales y páginas dentro del inventario",()=>{
 for(const q of pilot.questions)for(const s of q.sources){assert.ok(fs.existsSync(path.join(__dirname,"../Aleaciones",s.document)));assert.ok(Number.isInteger(s.pdfPage)&&s.pdfPage>0);
  const source=sourceInventory.find(x=>x.document === "Aleaciones/"+s.document);assert.ok(source);assert.ok(s.pdfPage<=source.pages);
 }assert.ok(sourceInventory);
});
test("siete imágenes locales, sin rutas Windows, idénticas por SHA-256",()=>{
 const images=pilot.questions.flatMap(q=>q.stimulus?.images||[]);assert.equal(images.length,7);
 for(const im of images){assert.match(im.src,/^assets\/piloto-01\/[\w_-]+\.png$/);const data=fs.readFileSync(path.join(__dirname,"dist",im.src));
  const m=manifest.find(m=>m.asset===path.basename(im.src));assert.ok(m);assert.equal(crypto.createHash("sha256").update(data).digest("hex"),m.sha256);
  assert.equal(data.subarray(1,4).toString(),"PNG");assert.ok(im.alt&&!/modificad|laminar|equiaxial/.test(im.alt));
 }
});
test("compilado incluye demo intacta y piloto intacto",()=>{const ctx=vm.createContext({});vm.runInContext(fs.readFileSync(path.join(__dirname,"dist/simulacros-contenido.js"),"utf8"),ctx);const compiled=JSON.parse(JSON.stringify(ctx.ExamContent));assert.deepEqual(compiled.find(e=>e.id===demo.id),demo);assert.deepEqual(compiled.find(e=>e.id===pilot.id),pilot);});
test("negativo VF se conserva: todos fallos, abiertos cero, solo global truncada",()=>{const s=wrong();assess(s,0);const r=E.result(s);near(r.blocks[0].counts.net,-9.9);near(r.blocks[0].grade,-3.3);near(r.subtotal,-.99);assert.equal(r.grade,0);});
test("negativo VF resta a parciales abiertos sin truncamiento intermedio",()=>{const s=wrong();assess(s,.5);const r=E.result(s);near(r.grade,2.51);near(r.blocks[1].grade,5);near(r.blocks[2].grade,5);near(r.blocks[3].grade,5);});
test("pesos configurables y notas ponderadas con VF negativa",()=>{const s=wrong();assess(s,.5);s.exam.blocks.forEach(b=>b.weight=1);near(E.result(s).grade,2.925);});
test("políticas section/global/none y compatibilidad de sesiones antiguas",()=>{const s=wrong();assess(s,0);s.exam.floorPolicy="none";near(E.result(s).grade,-.99);s.exam.floorPolicy="section";assert.equal(E.result(s).grade,0);assert.equal(E.result(s).blocks[0].grade,0);delete s.exam.floorPolicy;assert.equal(E.result(s).blocks[0].grade,0);s.exam.floorPolicy="otro";assert.throws(()=>E.result(s));});
test("+1, −0,33 y blanco 0; pleno examen diez",()=>{const s=E.start(pilot);s.answers[pilot.questions[0].id]={choice:pilot.questions[0].correct,texts:{}};s.answers[pilot.questions[1].id]={choice:!pilot.questions[1].correct,texts:{}};E.submit(s);near(E.result(s).blocks[0].counts.net,.67);assert.equal(E.result(s).blocks[0].counts.blank,28);
 const full=E.start(pilot);full.exam.questions.filter(q=>q.type==="vf").forEach(q=>full.answers[q.id]={choice:q.correct,texts:{}});E.submit(full);assess(full,1);near(E.result(full).grade,10);
});
test("recuperación congela examen, imágenes y política; estudio independiente",()=>{const map=new Map([["aleaciones-progreso-v1","progreso original"]]);const storage={getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)};const s=E.start(pilot);s.index=36;s.answers["piloto-01-v01"]={choice:null,texts:{respuesta:"Observación e inferencia\n\nSegundo párrafo."}};assert.ok(E.save(storage,s).ok);assert.deepEqual(E.load(storage).session,s);assert.equal(map.get("aleaciones-progreso-v1"),"progreso original");E.submit(s);assess(s,.5);E.save(storage,s);near(E.result(E.load(storage).session).grade,3.5);});
test("piloto documental no puede etiquetarse validado por generación",()=>{const x=JSON.parse(JSON.stringify(pilot));x.status="validado";assert.throws(()=>E.validate(x));x.status="piloto";x.questions[0].reviewStatus="pendiente";assert.throws(()=>E.validate(x));});
test("todas las imágenes se validan, no solo la primera",()=>{const x=JSON.parse(JSON.stringify(pilot));x.questions.find(q=>q.type==="visual").stimulus.images[1].src="C:/ruta.png";assert.throws(()=>E.validate(x));});
console.log(`\n${passed} pruebas específicas del piloto superadas.`);
