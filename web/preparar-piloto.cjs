"use strict";
// Adaptación reproducible de las fichas aprobadas; no crea ni reescribe preguntas.
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.join(__dirname, "..");
const folder = path.join(root, "borradores/fase2b");
const fichas = JSON.parse(fs.readFileSync(path.join(folder, "FICHAS_ACADEMICAS_01.json"), "utf8"));
const types = {VF:"vf", J:"justificada", V:"visual", D:"desarrollo"};
const assets = path.join(__dirname, "dist/assets/piloto-01");
fs.mkdirSync(assets, {recursive:true});
const manifest = JSON.parse(fs.readFileSync(path.join(folder,"MANIFIESTO_VISUALES.json"),"utf8"));
for (const im of manifest) {
  const data = fs.readFileSync(path.join(folder,"assets",im.asset));
  if (crypto.createHash("sha256").update(data).digest("hex") !== im.sha256) throw new Error("Recurso distinto del aprobado: " + im.asset);
  fs.writeFileSync(path.join(assets,im.asset),data);
}
const exam = {
  version:1, id:"piloto-01", title:"Piloto 01 de Aleaciones Aeroespaciales", status:"piloto", penalty:.33, floorPolicy:"global",
  referenceDistribution:"Piloto de estudio revisado documentalmente; no validado oficialmente por el profesor. Configuración inicial: 42 preguntas, Al 45 %, Ti 26 %, resto 29 % de puntos. Estos pesos y el mínimo global cero son orientativos, no una regla oficial del examen. Al cambiar cantidades o pesos cambia también el reparto por contenidos.",
  blocks:[{type:"vf",title:"Verdadero/falso",count:30,weight:30},{type:"justificada",title:"V/F con justificación",count:5,weight:10},{type:"visual",title:"Interpretación visual",count:2,weight:20},{type:"desarrollo",title:"Desarrollo",count:5,weight:40}],
  questions:fichas.map((q) => {
    const item = {id:"piloto-01-"+q.id.toLowerCase(), originalId:q.id, matrixId:q.matriz, topic:"Tema "+q.tema, topicNumber:q.tema, subtopic:q.subtema, type:types[q.formato], prompt:q.enunciado,
      difficulty:q.dificultad, difficultyReason:q.justificacion_dificultad, cognitiveLevel:q.nivel_cognitivo,
      model:q.respuesta, explanation:q.explicacion, conditions:q.condiciones, verification:q.estado_verificacion, reviewStatus:"documental",
      maxPoints:q.puntos, topicPoints:q.reparto_temas || {[q.tema]:q.puntos}, essential:q.indispensables, majorErrors:q.errores_graves, minorOmissions:q.omisiones_secundarias,
      sources:q.fuentes.map((s)=>({document:s.pdf,pdfPage:s.pagina_pdf})),
    };
    if (["VF","J"].includes(q.formato)) item.correct = q.respuesta === "V";
    if (q.formato !== "VF") {
      item.parts=[{id:"respuesta",prompt:q.formato === "J" ? "Justificación científica" : "Respuesta a los apartados del enunciado"}];
      item.rubric=q.rubrica.map(([max,label],i)=>({id:"criterio-"+(i+1),max,label}));
    }
    if (q.formato === "V") {
      const names=q.id === "V01" ? ["V01_A.png","V01_B.png","V01_tabla.png"] : ["V02_A.png","V02_B.png","V02_C.png","V02_D.png"];
      const labels=q.id === "V01" ? ["Fotografía A","Fotografía B","Tabla Al–13 % Si"] : ["Fotografía A","Fotografía B","Curva C","Curva D"];
      item.stimulus={kind:"image",context:"Recursos originales. Las condiciones, unidades y límites de interpretación se indican en el enunciado.",synthetic:false,
        source:q.fuentes.filter(s=>q.id === "V01" ? s.pagina_pdf<=23 : [21,22,24].includes(s.pagina_pdf)).map(s=>`${s.pdf}, página PDF ${s.pagina_pdf}`).join("; "),
        images:names.map((name,i)=>({src:"assets/piloto-01/"+name,alt:labels[i],label:labels[i]}))};
    }
    return item;
  })
};
require("./dist/simulacro-motor.js").validate(exam);
fs.writeFileSync(path.join(__dirname,"simulacros/piloto-01.json"),JSON.stringify(exam,null,2)+"\n");
console.log("Piloto adaptado: 42 fichas y siete PNG idénticos a los aprobados.");
