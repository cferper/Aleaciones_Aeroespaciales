/* Reglas puras: sin DOM ni acceso implícito al almacenamiento del navegador. */
(function (root) {
  "use strict";
  const KEY = "aleaciones-simulacro-v1";
  const TYPES = ["vf", "justificada", "visual", "desarrollo"];
  const copy = (x) => JSON.parse(JSON.stringify(x));
  const finite = (x) => typeof x === "number" && Number.isFinite(x);
  const safeId = (x) => typeof x === "string" && /^[a-z0-9][a-z0-9_-]*$/.test(x) && !["constructor", "prototype", "__proto__"].includes(x);
  function check(ok, message) { if (!ok) throw new Error(message); }
  function validate(exam) {
    check(exam && safeId(exam.id) && exam.version === 1, "Identificador o versión de simulacro inválidos.");
    check(["demo", "validado"].includes(exam.status) && typeof exam.title === "string", "Estado de publicación inválido.");
    check(finite(exam.penalty) && exam.penalty >= 0, "Penalización V/F inválida.");
    check(Array.isArray(exam.questions) && Array.isArray(exam.blocks) && exam.blocks.length === 4, "Se necesitan los cuatro bloques.");
    const ids = new Set();
    exam.questions.forEach((q) => {
      check(q && safeId(q.id) && !ids.has(q.id), "ID de pregunta inválido o repetido."); ids.add(q.id);
      check(TYPES.includes(q.type) && ["prompt", "topic", "subtopic", "difficulty", "cognitiveLevel", "model", "explanation"].every((k) => typeof q[k] === "string" && q[k].trim()), "Metadatos de pregunta incompletos.");
      check(["demostracion", "pendiente", "verificada"].includes(q.reviewStatus) && Array.isArray(q.sources), "Revisión o referencias inválidas.");
      check(q.sources.every((s) => typeof s.document === "string" && Number.isInteger(s.pdfPage) && s.pdfPage > 0), "Referencia PDF inválida.");
      if (exam.status === "validado") check(q.reviewStatus === "verificada" && q.sources.length > 0 && !q.stimulus?.synthetic, "Un examen validado exige revisión, fuentes y estímulos no sintéticos.");
      if (q.type === "vf" || q.type === "justificada") check(typeof q.correct === "boolean", "Falta la solución V/F.");
      if (q.type !== "vf") {
        check(Array.isArray(q.parts) && q.parts.length > 0, "Faltan apartados escritos.");
        const parts = new Set();
        q.parts.forEach((p) => { check(safeId(p.id) && !parts.has(p.id) && typeof p.prompt === "string", "Apartado inválido."); parts.add(p.id); });
        check(Array.isArray(q.rubric) && q.rubric.length > 0, "Falta la rúbrica.");
        const criteria = new Set();
        q.rubric.forEach((r) => { check(safeId(r.id) && !criteria.has(r.id) && typeof r.label === "string" && finite(r.max) && r.max > 0, "Criterio inválido."); criteria.add(r.id); });
        check(finite(q.rubric.reduce((n, r) => n + r.max, 0)), "Máximo de rúbrica fuera de rango.");
      }
      if (q.type === "visual") {
        const s = q.stimulus;
        check(s && ["table", "image", "diagram", "curve"].includes(s.kind) && typeof s.context === "string" && typeof s.source === "string" && s.source.trim(), "Estímulo sin contexto o procedencia.");
        if (s.kind === "table") check(Array.isArray(s.headers) && s.headers.length > 0 && Array.isArray(s.rows) && s.rows.length > 0 && s.rows.every((row) => Array.isArray(row) && row.length === s.headers.length), "Tabla inválida.");
        else check(typeof s.src === "string" && /^(assets\/)[a-zA-Z0-9_./-]+$/.test(s.src) && !s.src.includes("..") && typeof s.alt === "string" && s.alt.trim() && !s.synthetic, "La imagen debe ser local, real y tener texto alternativo y procedencia.");
      }
    });
    const types = new Set(); let total = 0; let weight = 0;
    exam.blocks.forEach((b) => {
      check(TYPES.includes(b.type) && !types.has(b.type), "Bloque repetido o desconocido."); types.add(b.type);
      check(typeof b.title === "string" && Number.isInteger(b.count) && b.count >= 0 && finite(b.weight) && b.weight >= 0, "Cantidad o peso inválidos.");
      check(b.count <= exam.questions.filter((q) => q.type === b.type).length, "No hay preguntas suficientes para la configuración.");
      check(b.count > 0 || b.weight === 0, "Un bloque vacío debe tener peso cero.");
      total += b.count; weight += b.weight;
    });
    check(total > 0 && finite(weight) && weight > 0, "El examen necesita preguntas y un peso total positivo finito.");
    return exam;
  }
  function selected(exam) { return exam.blocks.flatMap((b) => exam.questions.filter((q) => q.type === b.type).slice(0, b.count)); }
  function start(exam) { validate(exam); return {version: 1, exam: copy(exam), status: "running", index: 0, answers: {}, assessments: {}, startedAt: new Date().toISOString(), submittedAt: null}; }
  function validateSession(s) {
    check(s && s.version === 1 && ["running", "submitted"].includes(s.status), "Sesión inválida."); validate(s.exam);
    const qs = selected(s.exam);
    check(Number.isInteger(s.index) && s.index >= 0 && s.index < qs.length, "Posición de examen inválida.");
    check(typeof s.startedAt === "string" && Number.isFinite(Date.parse(s.startedAt)) && (s.status === "running" ? s.submittedAt === null : typeof s.submittedAt === "string" && Number.isFinite(Date.parse(s.submittedAt))), "Fechas de sesión inválidas.");
    check(s.answers && typeof s.answers === "object" && !Array.isArray(s.answers) && s.assessments && typeof s.assessments === "object" && !Array.isArray(s.assessments), "Respuestas inválidas.");
    Object.entries(s.answers).forEach(([id, a]) => {
      const q = qs.find((q) => q.id === id); check(q && a && typeof a === "object", "Respuesta desconocida.");
      check(a.choice === null || typeof a.choice === "boolean", "Elección inválida.");
      check(a.texts && typeof a.texts === "object" && !Array.isArray(a.texts), "Textos inválidos.");
      Object.entries(a.texts).forEach(([key, value]) => check(q.parts?.some((p) => p.id === key) && typeof value === "string" && value.length <= 20000, "Texto de apartado inválido."));
    });
    Object.entries(s.assessments).forEach(([id, a]) => {
      const q = qs.find((q) => q.id === id); check(s.status === "submitted" && q && q.type !== "vf" && a && typeof a.reason === "string" && a.reason.length <= 20000 && a.scores && typeof a.scores === "object" && !Array.isArray(a.scores), "Autoevaluación inválida.");
      Object.entries(a.scores).forEach(([key, value]) => { const r = q.rubric.find((r) => r.id === key); check(r && (value === null || finite(value) && value >= 0 && value <= r.max), "Puntuación fuera de la rúbrica."); });
    });
    return s;
  }
  function submit(s) { check(s.status === "running", "El examen ya está entregado."); validateSession(s); s.status = "submitted"; s.submittedAt = new Date().toISOString(); return s; }
  function answered(q, a) { return !!a && ((q.type === "vf" || q.type === "justificada") && typeof a.choice === "boolean" || Object.values(a.texts || {}).some((v) => v.trim())); }
  function result(s) {
    validateSession(s); check(s.status === "submitted", "Entrega el simulacro para ver la corrección.");
    const qs = selected(s.exam); const sumWeight = s.exam.blocks.reduce((n, b) => n + b.weight, 0);
    const blocks = s.exam.blocks.map((b) => {
      const items = qs.filter((q) => q.type === b.type); let grade = null; let counts = null; let pending = 0;
      if (b.type === "vf") {
        counts = {correct: 0, wrong: 0, blank: 0};
        items.forEach((q) => { const a = s.answers[q.id]?.choice; counts[a == null ? "blank" : a === q.correct ? "correct" : "wrong"]++; });
        counts.net = counts.correct - s.exam.penalty * counts.wrong;
        grade = items.length ? Math.max(0, counts.net / items.length * 10) : 0;
      } else {
        let earned = 0; let max = 0;
        items.forEach((q) => {
          const a = s.assessments[q.id]; const complete = a?.reason.trim() && q.rubric.every((r) => finite(a.scores[r.id]));
          if (!complete) pending++;
          q.rubric.forEach((r) => { max += r.max; if (complete) earned += a.scores[r.id]; });
        });
        if (!pending) grade = max ? earned / max * 10 : 0;
      }
      return {...b, weight: b.weight / sumWeight, grade, counts, pending};
    });
    const complete = blocks.every((b) => b.weight === 0 || b.grade !== null);
    const subtotal = blocks.reduce((n, b) => n + (b.grade ?? 0) * b.weight, 0);
    return {blocks, complete, grade: complete ? subtotal : null, subtotal, weightTotal: sumWeight};
  }
  function save(storage, s) {
    try { validateSession(s); check(storage, "Almacenamiento no disponible."); storage.setItem(KEY, JSON.stringify(s)); return {ok: true}; }
    catch (e) { return {ok: false, error: e.message}; }
  }
  function load(storage) {
    try { check(storage, "Almacenamiento no disponible."); const raw = storage.getItem(KEY); return {session: raw ? validateSession(JSON.parse(raw)) : null, error: null}; }
    catch (e) { return {session: null, error: e.message}; }
  }
  const api = {KEY, TYPES, validate, validateSession, selected, start, submit, answered, result, save, load};
  root.ExamEngine = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
