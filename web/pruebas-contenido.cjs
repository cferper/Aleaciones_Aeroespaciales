// Ejecutar desde la carpeta del proyecto: node web/pruebas-contenido.cjs
// Comprueba datos y referencias; no sustituye la revisión académica de los PDF.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const contexto = vm.createContext({});
vm.runInContext(
  fs.readFileSync(path.join(__dirname, "dist", "contenido.js"), "utf8"),
  contexto,
  { filename: "contenido.js" },
);
const contenido = contexto.StudyContent;
assert.ok(contenido && Array.isArray(contenido.subjects), "Faltan asignaturas.");
assert.ok(contenido.subjects.length > 0, "No hay asignaturas.");
const ids = new Set();

function comprobarId(id) {
  assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, "ID no válido.");
  assert.ok(!ids.has(id), `ID repetido: ${id}`);
  ids.add(id);
}

function comprobarFuentes(fuentes) {
  assert.ok(Array.isArray(fuentes) && fuentes.length > 0, "Faltan fuentes.");
  for (const fuente of fuentes) {
    assert.equal(typeof fuente.document, "string");
    assert.match(fuente.document, /^Aleaciones\/.+\.pdf$/, "Ruta de fuente no válida.");
    assert.ok(!fuente.document.split("/").includes(".."), "La fuente sale de la carpeta de materiales.");
    assert.ok(
      fs.existsSync(path.join(__dirname, "..", fuente.document)),
      `No existe la fuente: ${fuente.document}`,
    );
    assert.ok(Number.isInteger(fuente.pdfPage) && fuente.pdfPage > 0, "Página PDF no válida.");
    assert.equal(typeof fuente.printedPage, "string");
    assert.ok(fuente.printedPage === "" || /^\d+-\d+$/.test(fuente.printedPage), "Página impresa no válida.");
    assert.ok(typeof fuente.section === "string" && fuente.section.trim(), "Falta el apartado de la fuente.");
  }
}

function comprobarConceptos(conceptos, etiquetas) {
  assert.ok(Array.isArray(conceptos) && conceptos.length > 0, "Faltan conceptos.");
  assert.equal(new Set(conceptos).size, conceptos.length, "Concepto repetido.");
  for (const concepto of conceptos) {
    assert.ok(Object.hasOwn(etiquetas, concepto), `Concepto sin etiqueta: ${concepto}`);
    assert.ok(typeof etiquetas[concepto] === "string" && etiquetas[concepto].trim(), "Etiqueta vacía.");
  }
}

for (const asignatura of contenido.subjects) {
  comprobarId(asignatura.id);
  assert.ok(Array.isArray(asignatura.topics) && asignatura.topics.length > 0);
  for (const tema of asignatura.topics) {
    comprobarId(tema.id);
    assert.ok(Number.isInteger(tema.number) && tema.number > 0);
    assert.ok(tema.conceptLabels && typeof tema.conceptLabels === "object");
    for (const tarjeta of tema.cards) {
      comprobarId(tarjeta.id);
      for (const campo of ["question", "answer"]) {
        assert.ok(typeof tarjeta[campo] === "string" && tarjeta[campo].trim(), `Tarjeta sin ${campo}.`);
      }
      comprobarConceptos(tarjeta.concepts, tema.conceptLabels);
      comprobarFuentes(tarjeta.sources);
    }
    for (const caso of tema.cases) {
      comprobarId(caso.id);
      for (const campo of ["title", "initial", "change", "constants", "solution"]) {
        assert.ok(typeof caso[campo] === "string" && caso[campo].trim(), `Caso sin ${campo}.`);
      }
      for (const campo of ["elastic", "elongation", "reason"]) {
        assert.ok(typeof caso.prompts?.[campo] === "string" && caso.prompts[campo].trim(), "Caso sin pregunta.");
      }
      assert.ok(Array.isArray(caso.criteria) && caso.criteria.length > 0, "Caso sin criterios de comparación.");
      comprobarConceptos(caso.concepts, tema.conceptLabels);
      comprobarFuentes(caso.sources);
      assert.ok(Array.isArray(caso.options) && caso.options.length >= 2, "Faltan opciones del caso.");
      assert.equal(new Set(caso.options).size, caso.options.length);
      assert.ok(caso.options.every((opcion) => typeof opcion === "string" && opcion.trim()));
      for(const [key,options] of Object.entries(caso.predictionOptions || {})) {
        assert.ok(['elastic','elongation'].includes(key));
        assert.ok(Array.isArray(options) && options.length>=2);
        assert.equal(new Set(options).size,options.length);
        assert.ok(options.every(o=>typeof o==='string' && o.trim()));
      }
    }
    const mapa = tema.map;
    if (mapa.sources) comprobarFuentes(mapa.sources);
    comprobarId(mapa.id);
    assert.ok(typeof mapa.solution === "string" && mapa.solution.trim(), "Falta la explicación del mapa.");
    for (const relacion of mapa.edges) {
      comprobarConceptos(relacion.concepts, tema.conceptLabels);
      comprobarFuentes(relacion.sources);
      for (const campo of ["from", "relation", "to"]) {
        assert.ok(typeof relacion[campo] === "string" && relacion[campo].trim(), "Relación incompleta.");
      }
    }
    const destinos = new Set();
    for (const hueco of Object.values(mapa.blanks)) {
      assert.ok(Number.isInteger(hueco.edgeIndex) && hueco.edgeIndex >= 0 && hueco.edgeIndex < mapa.edges.length, "Índice de relación no válido.");
      assert.ok(["from", "relation", "to"].includes(hueco.target), "Destino de hueco no válido.");
      assert.equal(hueco.answer, mapa.edges[hueco.edgeIndex][hueco.target], "La solución no coincide con la relación.");
      assert.ok(hueco.options.includes(hueco.answer), "Solución ausente de las opciones.");
      const destino = `${hueco.edgeIndex}:${hueco.target}`;
      assert.ok(!destinos.has(destino), "Dos huecos ocultan el mismo destino.");
      destinos.add(destino);
    }
  }
}

// Los IDs de la muestra deben mantenerse para conservar el progreso guardado.
const piloto = contenido.subjects.find((asignatura) => asignatura.id === "aleaciones")
  ?.topics.find((tema) => tema.id === "t1");
assert.ok(piloto, "Falta el piloto aprobado.");
const idsTarjetas = new Set(Array.from(piloto.cards, (tarjeta) => tarjeta.id));
for (const id of [
  "t1-acritud-proceso",
  "t1-acritud-plasticidad",
  "t1-recocido-etapas",
]) assert.ok(idsTarjetas.has(id), "Ha cambiado un ID de la muestra original.");
assert.ok(piloto.cases.some((caso) => caso.id === "t1-caso-recocido"));
assert.equal(piloto.map.id, "t1-mapa-acritud-recocido");
assert.equal(piloto.cards.filter(c=>!c.isNewPhase4).length, 36);
assert.equal(piloto.cases.length, 5);
assert.equal(piloto.map.edges.length, 12);
assert.equal(Object.keys(piloto.map.blanks).length, 2);
assert.equal(piloto.map.blanks.process.answer, "Deformación plástica en frío");
assert.equal(piloto.map.blanks.relation.answer, "disminuye");

// Los rangos corresponden a los originales revisados visualmente para el piloto.
// La validación comprueba su correspondencia, no demuestra el contenido académico.
for (const actividad of [...piloto.cards.filter(c=>!c.isNewPhase4), ...piloto.cases, ...piloto.map.edges]) {
  assert.ok(actividad.sources.some((fuente) => fuente.document === "Aleaciones/RESUMENES JUANMI/Tema 1.pdf"), "Falta el resumen de Juanmi.");
  assert.ok(actividad.sources.some((fuente) => fuente.document === "Aleaciones/Tema 1 .pdf"), "Falta el contraste con el libro.");
  for (const fuente of actividad.sources) {
    if (fuente.document === "Aleaciones/RESUMENES JUANMI/Tema 1.pdf") {
      assert.ok(fuente.pdfPage >= 2 && fuente.pdfPage <= 9);
      assert.equal(fuente.printedPage, "");
    } else if (fuente.document === "Aleaciones/Tema 1 .pdf") {
      assert.equal(fuente.document, "Aleaciones/Tema 1 .pdf");
      assert.ok(fuente.pdfPage >= 1 && fuente.pdfPage <= 21);
      const impresa = Number(fuente.printedPage.split("-")[1]);
      assert.ok(fuente.printedPage === "" || fuente.printedPage.startsWith("4-"));
      assert.ok(fuente.printedPage === "" || [2 * fuente.pdfPage - 1, 2 * fuente.pdfPage].includes(impresa), "Página impresa incompatible con el pliego escaneado.");
    }
  }
}
const temas=contenido.subjects[0].topics;
assert.deepEqual(Array.from(temas,t=>t.number),[1,2,3,4,5,6,7,8,9,10]);
const inventario=JSON.parse(fs.readFileSync(path.join(__dirname,'fuentes.json'),'utf8'));
for(const tema of temas){
  assert.ok(tema.cards.length>=18 && tema.cases.length>=3 && tema.map.edges.length>=7);
  for(const item of [...tema.cards,...tema.cases,...tema.map.edges,...(tema.map.sources ? [{sources:tema.map.sources}] : [])])for(const fuente of item.sources){
    const original=inventario.find(p=>p.document===fuente.document);
    assert.ok(original,`Fuente no inventariada: ${fuente.document}`);
    assert.ok(fuente.pdfPage<=original.pages,`Página fuera de PDF: ${fuente.document}`);
    if(original.topic!==tema.number) assert.ok(fuente.crossTopicReason?.trim(),'Fuente de otro tema sin justificación.');
  }
  for(const hueco of Object.values(tema.map.blanks)){
    assert.equal(new Set(hueco.options).size,hueco.options.length,'Opciones repetidas.');
    assert.ok(hueco.hint && hueco.question);
  }
}
console.log(`Contenido verificado: ${temas.length} temas, ${temas.reduce((n,t)=>n+t.cards.length,0)} tarjetas, ${temas.reduce((n,t)=>n+t.cases.length,0)} casos. IDs originales conservados; referencias, páginas, conceptos y huecos válidos.`);
