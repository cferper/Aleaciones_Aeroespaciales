"use strict";
// Importación literal del borrador aprobado. No genera preguntas ni toca Piloto 01.
const fs = require("node:fs"), path = require("node:path"), crypto = require("node:crypto");
const folder = path.join(__dirname, "../borradores/fase3a_piloto02");
const fichas = JSON.parse(fs.readFileSync(path.join(folder, "FICHAS_ACADEMICAS_02.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(folder, "MANIFIESTO_VISUALES_02.json"), "utf8"));
const types = {VF:"vf", J:"justificada", V:"visual", D:"desarrollo"};
const resources = {
  V01: [["P02_V01_diagrama.png", "Panel A — diagrama Al–Cu"], ["P02_V01_rutas.png", "Panel B — rutas térmicas Al–Mg–Si"]],
  V02: [["P02_V02_A.png", "Panel A — micrografía, 500×"], ["P02_V02_B.png", "Panel B — micrografía, 500×"], ["P02_V02_curva.png", "Panel C — Ti–6Al–4V"]]
};
const exam = {
  version:1, id:"piloto-02", title:"Piloto 02 de Aleaciones Aeroespaciales · Metalurgia", status:"piloto", penalty:.33, floorPolicy:"global",
  referenceDistribution:"Piloto de estudio revisado documentalmente; no validado oficialmente por el profesor. Metalurgia de aleaciones: 42 preguntas, Al 45 %, Ti 25 %, resto 30 % de puntos. Los pesos, dificultad y mínimo global cero son orientativos, no una predicción ni una regla oficial del examen. Cambiar cantidades o pesos cambia también el reparto por contenidos.",
  blocks:[{type:"vf",title:"Verdadero/falso",count:30,weight:30},{type:"justificada",title:"V/F con justificación",count:5,weight:10},{type:"visual",title:"Interpretación visual",count:2,weight:20},{type:"desarrollo",title:"Desarrollo",count:5,weight:40}],
  questions:fichas.map(q => {
    const item = {id:"piloto-02-"+q.plaza.toLowerCase(), originalId:q.id, matrixId:q.matriz, topic:"Tema "+q.tema, topicNumber:q.tema, subtopic:q.subtema, type:types[q.formato], prompt:q.enunciado,
      learningObjective:q.objetivo, pilot01Relationship:q.relacion_piloto01, difficulty:q.dificultad, difficultyReason:q.justificacion_dificultad, cognitiveLevel:q.nivel_cognitivo,
      model:q.respuesta, explanation:q.explicacion, conditions:q.condiciones, verification:q.estado_verificacion, reviewStatus:"documental",
      maxPoints:q.puntos, topicPoints:q.reparto_temas || {[q.tema]:q.puntos}, essential:q.indispensables, majorErrors:q.errores_graves, minorOmissions:q.omisiones_secundarias,
      sources:q.fuentes.map(s=>({document:s.pdf,pdfPage:s.pagina_pdf}))};
    if (["VF","J"].includes(q.formato)) item.correct = q.respuesta === "V";
    if (q.formato !== "VF") {
      item.parts=[{id:"respuesta",prompt:q.formato === "J" ? "Justificación científica" : "Respuesta a los apartados del enunciado"}];
      item.rubric=q.rubrica.map(([max,label],i)=>({id:"criterio-"+(i+1),max,label}));
    }
    if (q.formato === "V") {
      const names = resources[q.plaza];
      item.stimulus={kind:"image",synthetic:false,context:"Recursos auténticos. Se conservan ejes, unidades y aumentos originales. Las condiciones y límites de interpretación figuran en el enunciado.",
        source:[...new Set(names.map(([name])=>{const m=manifest.find(m=>m.archivo===name); if (!m) throw new Error("Falta procedencia: "+name); return `${m.pdf}, página PDF ${m.pagina_pdf}`;}))].join("; "),
        images:names.map(([name,label])=>({src:"assets/piloto-02/"+name,alt:label,label}))};
    }
    return item;
  })
};
require("./dist/simulacro-motor.js").validate(exam);
if (exam.questions.length!==42 || manifest.length!==5) throw new Error("Estructura distinta del borrador aprobado.");
// Verificar todo antes de escribir, para evitar una importación incompleta.
const images=manifest.map(m=>{const bytes=fs.readFileSync(path.join(folder,"assets",m.archivo));
  if(crypto.createHash("sha256").update(bytes).digest("hex")!==m.sha256) throw new Error("PNG distinto del aprobado: "+m.archivo);
  return {name:m.archivo,bytes};});
const assets=path.join(__dirname,"dist/assets/piloto-02"); fs.mkdirSync(assets,{recursive:true});
for(const im of images) fs.writeFileSync(path.join(assets,im.name),im.bytes);
fs.writeFileSync(path.join(__dirname,"simulacros/piloto-02.json"),JSON.stringify(exam,null,2)+"\n");
console.log("Piloto 02 adaptado: 42 fichas literales y cinco PNG originales verificados por SHA-256.");
