"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const E = require("./dist/simulacro-motor.js");
const demo = JSON.parse(fs.readFileSync(path.join(__dirname, "simulacros/demo.json"), "utf8"));
const clone = (x) => JSON.parse(JSON.stringify(x));
let passed = 0;
function test(name, fn) { fn(); passed++; console.log(`✓ ${name}`); }
function submitted() { return E.submit(E.start(demo)); }
function memory() { const entries = new Map(); return {getItem: (k) => entries.get(k) ?? null, setItem: (k, v) => entries.set(k, v), entries}; }
function evaluate(s, fraction = 1) {
  E.selected(s.exam).filter((q) => q.type !== "vf").forEach((q) => { s.assessments[q.id] = {reason: "Comparación razonada con la solución modelo.", scores: Object.fromEntries(q.rubric.map((r) => [r.id, r.max * fraction]))}; });
}
function answer(s, id, choice, texts = {}) { s.answers[id] = {choice, texts}; }
test("demostración separada, seis preguntas y cuatro formatos", () => {
  E.validate(demo); assert.equal(demo.status, "demo"); assert.equal(E.selected(demo).length, 6); assert.equal(new Set(demo.questions.map((q) => q.type)).size, 4);
});
test("no se publican datos demo como examen validado", () => { const x = clone(demo); x.status = "validado"; assert.throws(() => E.validate(x)); });
test("configuración rechaza cantidades imposibles, pesos negativos y bloques vacíos con peso", () => {
  for (const change of [(e) => e.blocks[0].count = 30, (e) => e.blocks[0].weight = -1, (e) => e.blocks[0].count = 0, (e) => e.penalty = NaN]) { const x = clone(demo); change(x); assert.throws(() => E.validate(x)); }
});
test("IDs repetidos y referencias PDF inválidas se rechazan", () => {
  const x = clone(demo); x.questions[1].id = x.questions[0].id; assert.throws(() => E.validate(x));
  const y = clone(demo); y.questions[0].sources = [{document: "apuntes.pdf", pdfPage: 0}]; assert.throws(() => E.validate(y));
});
test("estímulos exigen procedencia y las imágenes no pueden ser sintéticas", () => {
  const x = clone(demo); x.questions[4].stimulus.source = ""; assert.throws(() => E.validate(x));
  x.questions[4].stimulus = {kind: "image", context: "Contexto", source: "Autor y fuente", src: "assets/micrografia.jpg", alt: "Micrografía", synthetic: true}; assert.throws(() => E.validate(x));
  x.questions[4].stimulus.synthetic = false; E.validate(x);
});
test("el examen no revela resultados antes de entregar", () => assert.throws(() => E.result(E.start(demo))));
test("V/F completamente en blanco da cero sin errores", () => {
  const b = E.result(submitted()).blocks[0]; assert.deepEqual(b.counts, {correct: 0, wrong: 0, blank: 3, net: 0}); assert.equal(b.grade, 0);
});
test("V/F distingue puntos netos negativos y nota académica mínima cero", () => {
  const s = E.start(demo); demo.questions.filter((q) => q.type === "vf").forEach((q) => answer(s, q.id, !q.correct));
  const b = E.result(E.submit(s)).blocks[0]; assert.equal(b.counts.net, -0.99); assert.equal(b.grade, 0);
});
test("acierto, fallo y blanco aplican exactamente +1, −0,33 y 0", () => {
  const s = E.start(demo); answer(s, "demo-vf-1", true); answer(s, "demo-vf-2", true);
  const b = E.result(E.submit(s)).blocks[0]; assert.equal(b.counts.net, 1 - 0.33); assert.equal(b.grade, (1 - 0.33) / 3 * 10);
});
test("todos los aciertos alcanzan diez en V/F", () => {
  const s = E.start(demo); demo.questions.filter((q) => q.type === "vf").forEach((q) => answer(s, q.id, q.correct)); assert.equal(E.result(E.submit(s)).blocks[0].grade, 10);
});
test("los bloques abiertos quedan pendientes sin autoevaluación completa y razonada", () => {
  const s = submitted(); evaluate(s); s.assessments["demo-justificada"].reason = "  "; const r = E.result(s); assert.equal(r.grade, null); assert.equal(r.blocks[1].pending, 1);
});
test("puntuaciones parciales se normalizan y recalculan la nota", () => {
  const s = submitted(); evaluate(s, .5); assert.equal(E.result(s).grade, 3.5); evaluate(s); assert.equal(E.result(s).grade, 7);
});
test("cero explícito es válido, campo vacío es pendiente", () => {
  const s = submitted(); evaluate(s, 0); assert.equal(E.result(s).grade, 0); s.assessments["demo-tabla"].scores.calculo = null; assert.equal(E.result(s).grade, null);
});
test("no hay penalización automática en V/F justificado ni corrección por palabras", () => {
  const s = E.start(demo); answer(s, "demo-justificada", true, {justificacion: "Respuesta incorrecta"}); E.submit(s); evaluate(s); assert.equal(E.result(s).blocks[1].grade, 10);
});
test("pesos que no suman 100 se normalizan explícitamente", () => {
  const s = submitted(); s.exam.blocks.forEach((b) => b.weight = 1); evaluate(s); const r = E.result(s); assert.equal(r.weightTotal, 4); assert.equal(r.grade, 7.5); assert.equal(r.blocks[0].weight, .25);
});
test("bloques desactivados y cambios en la distribución funcionan", () => {
  const x = clone(demo); x.blocks.forEach((b) => { b.count = b.type === "vf" ? 1 : 0; b.weight = b.type === "vf" ? 100 : 0; });
  const s = E.start(x); answer(s, "demo-vf-1", true); const r = E.result(E.submit(s)); assert.equal(r.grade, 10); assert.equal(E.selected(x).length, 1);
});
test("rúbricas rechazan puntuaciones fuera de rango y criterios desconocidos", () => {
  const s = submitted(); evaluate(s); s.assessments["demo-tabla"].scores.calculo = 4; assert.throws(() => E.result(s));
  s.assessments["demo-tabla"].scores.calculo = 3; s.assessments["demo-tabla"].scores.extra = 0; assert.throws(() => E.result(s));
});
test("navegación, blancos y textos sobreviven al guardado y recarga", () => {
  const m = memory(); const s = E.start(demo); answer(s, "demo-justificada", false, {justificacion: "Justificación\ncon dos párrafos"}); answer(s, "demo-vf-1", null); s.index = 4;
  assert.equal(E.save(m, s).ok, true); assert.deepEqual(E.load(m).session, s);
});
test("corrección, rúbricas y configuración quedan congeladas con el intento", () => {
  const m = memory(); const s = submitted(); evaluate(s, .5); E.save(m, s); assert.equal(E.result(E.load(m).session).grade, 3.5);
  const original = clone(demo); const running = E.start(original); original.penalty = 9; assert.equal(running.exam.penalty, .33);
});
test("sesiones corruptas se detectan sin sobrescribir el dato original", () => {
  const m = memory(); m.setItem(E.KEY, "{incorrecto"); assert.ok(E.load(m).error); assert.equal(m.getItem(E.KEY), "{incorrecto");
  const s = E.start(demo); s.index = 999; assert.equal(E.save(m, s).ok, false); assert.equal(m.getItem(E.KEY), "{incorrecto");
});
test("fallos de almacenamiento no destruyen respuestas en memoria", () => {
  const s = E.start(demo); answer(s, "demo-vf-1", true); const m = {setItem() { throw new Error("cuota"); }}; assert.equal(E.save(m, s).ok, false); assert.equal(s.answers["demo-vf-1"].choice, true); assert.ok(E.load(null).error);
});
test("estudio y simulacro utilizan claves de almacenamiento independientes", () => {
  const m = memory(); m.setItem("aleaciones-progreso-v1", "copia de estudio"); E.save(m, E.start(demo)); assert.equal(m.getItem("aleaciones-progreso-v1"), "copia de estudio"); assert.notEqual(E.KEY, "aleaciones-progreso-v1");
});
test("respuestas desconocidas y valoraciones antes de entregar se rechazan", () => {
  const s = E.start(demo); answer(s, "desconocida", true); assert.throws(() => E.validateSession(s)); delete s.answers.desconocida; evaluate(s); assert.throws(() => E.validateSession(s));
});
console.log(`\n${passed} pruebas de simulacro superadas.`);
