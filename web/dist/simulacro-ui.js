/* Interfaz independiente del repaso: nunca escribe aleaciones-progreso-v1. */
(() => {
  "use strict";
  const E = globalThis.ExamEngine;
  const exams = globalThis.ExamContent;
  const $ = (id) => document.getElementById(id);
  const panel = $("examen-panel");
  const esc = (x) => String(x ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
  const num = (x) => x.toLocaleString("es-ES", {maximumFractionDigits: 1});
  let storage; try { storage = window.localStorage; } catch { storage = null; }
  const loaded = E.load(storage);
  let session = loaded.session;
  let selectedId = exams.some((e) => e.id === session?.exam.id) ? session.exam.id : exams[0]?.id;
  let recovery = !!loaded.error;
  let conflict = false;
  let confirmedAction = null;
  let studyHeading = $("estado-contenido").textContent;
  function confirmAction(text, action) {
    confirmedAction = action;
    $("texto-confirmar-simulacro").textContent = text;
    $("confirmar-simulacro").showModal();
  }
  $("cancelar-simulacro").addEventListener("click", () => $("confirmar-simulacro").close());
  $("aceptar-simulacro").addEventListener("click", () => {
    const action = confirmedAction;
    $("confirmar-simulacro").close();
    if (!conflict) action?.();
  });
  $("confirmar-simulacro").addEventListener("close", () => { confirmedAction = null; });
  let screen = session ? (session.status === "running" ? "exam" : "results") : "start";
  function warn(text) { $("aviso-simulacro").hidden = !text; $("aviso-simulacro").textContent = text || ""; }
  if (loaded.error) warn("No se pudo recuperar el simulacro: " + loaded.error + ". El dato guardado se conserva. Al iniciar uno nuevo se pedirá confirmación para sustituirlo.");
  function persist() {
    if (conflict) { warn("El simulacro cambió en otra pestaña. Recarga esta página antes de continuar para evitar sobrescribirlo."); return; }
    const result = E.save(storage, session);
    warn(result.ok ? "" : "No se ha podido guardar: " + result.error + ". Las respuestas siguen en esta sesión; no cierres ni recargues la página.");
  }
  function mode(examMode) {
    if (examMode && !$("modo-temas").hidden) studyHeading = $("estado-contenido").textContent;
    $("estado-contenido").textContent = examMode ? "Simulacros de examen · Demostración y pilotos de estudio" : studyHeading;
    $("modo-temas").hidden = examMode; $("modo-simulacro").hidden = !examMode;
    $("modo-estudio").setAttribute("aria-pressed", String(!examMode)); $("modo-examen").setAttribute("aria-pressed", String(examMode));
    document.querySelector(".saltar").href = examMode ? "#examen-panel" : "#panel";
    if (examMode) render();
  }
  $("modo-estudio").addEventListener("click", () => mode(false));
  $("modo-examen").addEventListener("click", () => mode(true));
  function badge(exam) { return `<p class="etiqueta">${esc(exam.title)} · ${exam.status === "demo" ? "DEMOSTRACIÓN · Sin revisión académica" : exam.status === "piloto" ? "PILOTO DE ESTUDIO · Revisado documentalmente, no validado oficialmente por el profesor" : "Banco con revisión académica declarada"}</p>`; }
  const floorText = (policy) => policy === "global" ? "V/F admite nota negativa; mínimo cero únicamente en la nota global." : policy === "none" ? "Sin mínimo: se conservan las notas negativas de sección y global." : "Nota V/F con mínimo cero; conserva sus puntos netos negativos.";
  function renderStart() {
    const exam = exams.find((e) => e.id === selectedId);
    if (!exam) { panel.textContent = "No hay simulacros disponibles."; return; }
    const total = exam.blocks.reduce((n, b) => n + b.count, 0);
    panel.innerHTML = `<article class="tarjeta"><h2>Preparar un simulacro</h2>
      <label class="examen-campo">Simulacro disponible<select id="elegir-simulacro">${exams.map((e) => `<option value="${esc(e.id)}" ${e.id === selectedId ? "selected" : ""}>${esc(e.title)} · ${e.status === "demo" ? "DEMO" : "Revisado"}</option>`).join("")}</select></label>
      ${badge(exam)}<p>${esc(exam.referenceDistribution || "Configuración orientativa; confirma la distribución con el profesor.")}</p>
      <p>Esta configuración contiene <strong>${total} preguntas</strong>. Cada ejercicio visual cuenta como una pregunta aunque incluya varios apartados. Puedes reducir las cantidades disponibles o cambiar los pesos.</p>
      <form id="configurar-examen"><div class="tabla-scroll"><table class="examen-tabla examen-config"><caption>Configuración orientativa del simulacro seleccionado</caption><thead><tr><th>Bloque</th><th>Preguntas</th><th>Peso (%)</th></tr></thead><tbody>${exam.blocks.map((b) => `<tr><th scope="row">${esc(b.title)}</th><td><input aria-label="Número de preguntas de ${esc(b.title)}" name="count-${b.type}" type="number" min="0" max="${exam.questions.filter((q) => q.type === b.type).length}" step="1" required value="${b.count}"></td><td><input aria-label="Peso de ${esc(b.title)}" name="weight-${b.type}" type="number" min="0" step="any" required value="${b.weight}"></td></tr>`).join("")}</tbody></table></div>
      <label class="examen-campo">Penalización por fallo (solo V/F)<input name="penalty" type="number" min="0" step="0.01" required value="${exam.penalty}"></label>
      <label class="examen-campo">Política de mínimo de nota<select name="floorPolicy">${[["section","Mínimo cero en V/F (demostración)"],["global","Mínimo cero solo global (piloto)"],["none","Conservar notas negativas sin mínimo"]].map(([v,label]) => `<option value="${v}" ${v === (exam.floorPolicy ?? "section") ? "selected" : ""}>${label}</option>`).join("")}</select></label>
      <p id="config-resumen" role="status"></p><p>Acierto V/F: +1; en blanco: 0. Si los pesos no suman 100 %, se normalizan explícitamente. Un bloque sin preguntas debe tener peso 0.</p>
      <p>Los tres bloques abiertos se autoevalúan con rúbrica después de entregar. No tienen penalización automática. La política de mínimo es configurable y orientativa; no está confirmada oficialmente por el profesor.</p>
      <p>Las respuestas se guardan al escribir, en este navegador. Solo se conserva el último intento. La copia de progreso de estudio no incluye simulacros.</p>
      <button type="submit">${exam.status === "demo" ? "Iniciar DEMOSTRACIÓN" : "Iniciar simulacro"}</button></form>
      ${session ? `<p>Intento guardado: <strong>${esc(session.exam.title)}</strong>. Elegir otro examen no lo sustituye hasta iniciar y confirmar.</p><div class="acciones"><button data-exam-action="resume" class="boton-secundario">${session.status === "running" ? "Reanudar intento guardado" : "Ver corrección guardada"}</button></div>` : ""}</article>`;
    configSummary();
  }
  function configured() {
    const exam = JSON.parse(JSON.stringify(exams.find((e) => e.id === selectedId)));
    const f = $("configurar-examen");
    exam.blocks.forEach((b) => { b.count = Number(f.elements[`count-${b.type}`].value); b.weight = Number(f.elements[`weight-${b.type}`].value); });
    exam.penalty = Number(f.elements.penalty.value);
    exam.floorPolicy = f.elements.floorPolicy.value;
    return E.validate(exam);
  }
  function configSummary() {
    try {
      const exam = configured(); const sum = exam.blocks.reduce((n, b) => n + b.weight, 0);
      $("config-resumen").textContent = `Total: ${exam.blocks.reduce((n, b) => n + b.count, 0)} preguntas. Pesos introducidos: ${num(sum)} %. Pesos aplicados: ${exam.blocks.map((b) => `${b.title}: ${num(b.weight / sum * 100)} %`).join(" · ")}. Penalización V/F: −${numPenalty(exam.penalty)} por fallo. ${floorText(exam.floorPolicy)}`;
    } catch (e) { $("config-resumen").textContent = e.message; }
  }
  const numPenalty = (n) => n.toLocaleString("es-ES", {maximumFractionDigits: 4});
  function stimulus(q) {
    const s = q.stimulus; if (!s) return "";
    if (s.images) return `<div class="examen-visuales">${s.images.map((im) => `<figure><figcaption>${esc(im.label)}</figcaption><a href="${esc(im.src)}" target="_blank" rel="noopener" aria-label="Ampliar ${esc(im.label)}"><img class="examen-imagen" src="${esc(im.src)}" alt="${esc(im.alt)}"></a></figure>`).join("")}</div><p class="nota">Selecciona cada imagen para abrirla a tamaño original y ampliar en el navegador. ${esc(s.context)} Procedencia: ${esc(s.source)}</p>`;
    return `<figure><figcaption>${esc(s.context)}</figcaption>${s.kind === "table" ? `<div class="tabla-scroll"><table class="examen-tabla"><thead><tr>${s.headers.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.rows.map((row) => `<tr>${row.map((v) => `<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : `<a href="${esc(s.src)}" target="_blank" rel="noopener"><img class="examen-imagen" src="${esc(s.src)}" alt="${esc(s.alt)}"></a><p class="nota">Selecciona la imagen para ampliarla.</p>`}<p class="nota">Procedencia: ${esc(s.source)}</p></figure>`;
  }
  function renderExam() {
    const qs = E.selected(session.exam); const q = qs[session.index]; const a = session.answers[q.id];
    const block = session.exam.blocks.find((b) => b.type === q.type);
    const done = qs.filter((q) => E.answered(q, session.answers[q.id])).length;
    panel.innerHTML = `<article class="tarjeta">${badge(session.exam)}<p class="meta">${esc(block.title)} · Pregunta ${session.index + 1} de ${qs.length}</p>
      <label for="examen-progreso">Preguntas con alguna respuesta: ${done} / ${qs.length} (puede faltar algún apartado)</label><progress id="examen-progreso" value="${done}" max="${qs.length}"></progress>
      <p class="meta">${esc(q.originalId || q.id)} · ${esc(q.topic)} · ${esc(q.subtopic)}</p><h2 class="examen-enunciado" tabindex="-1" id="examen-pregunta">${esc(q.prompt)}</h2>${stimulus(q)}
      ${["vf", "justificada"].includes(q.type) ? `<fieldset class="examen-opciones"><legend>Tu elección</legend>${[["true", "Verdadero"], ["false", "Falso"], ["blank", "En blanco"]].map(([v, label]) => `<label><input type="radio" name="examen-eleccion" data-choice="${v}" ${a?.choice === (v === "blank" ? null : v === "true") || v === "blank" && a?.choice == null ? "checked" : ""}>${label}</label>`).join("")}</fieldset>` : ""}
      ${(q.parts || []).map((p) => `<label class="examen-campo">${esc(p.prompt)}<textarea data-part="${esc(p.id)}" maxlength="20000">${esc(a?.texts[p.id] || "")}</textarea></label>`).join("")}
      <div class="examen-navegacion"><button data-exam-action="previous" ${session.index === 0 ? "disabled" : ""}>Anterior</button><select id="examen-salto" aria-label="Ir a una pregunta">${qs.map((x, i) => `<option value="${i}" ${session.index === i ? "selected" : ""}>${i + 1} · ${esc(session.exam.blocks.find((b) => b.type === x.type).title)}${E.answered(x, session.answers[x.id]) ? " · Con respuesta" : " · En blanco"}</option>`).join("")}</select><button data-exam-action="next" ${session.index === qs.length - 1 ? "disabled" : ""}>Siguiente</button></div>
      <div class="acciones"><button data-exam-action="finish">Entregar simulacro</button><button data-exam-action="home" class="boton-secundario">Volver al inicio</button></div><p class="nota">Puedes dejar preguntas en blanco. Las soluciones aparecen después de entregar.</p></article>`;
  }
  function choiceText(a) { return a?.choice == null ? "En blanco" : a.choice ? "Verdadero" : "Falso"; }
  function summary() {
    const r = E.result(session);
    $("resumen-nota").innerHTML = `<h2>${r.complete ? `Nota final orientativa: ${num(r.grade)} / 10` : "Nota final pendiente de autoevaluación"}</h2><p>Pesos introducidos: ${num(r.weightTotal)} %; se aplican normalizados a 100 %. La nota mezcla V/F autocorregido y tu valoración de los bloques abiertos; se muestra con un decimal.</p>
      <p>${floorText(r.floorPolicy)} Política orientativa, no oficial.</p><ul>${r.blocks.map((b) => `<li><strong>${esc(b.title)}</strong> · Peso ${num(b.weight * 100)} % · ${b.grade === null ? `Pendiente: ${b.pending} pregunta(s) sin valoración completa` : `${num(b.grade)} / 10`} · ${b.type === "vf" ? "Autocorregido" : "Autoevaluación del estudiante"}${b.counts ? `<br>Aciertos: ${b.counts.correct}; fallos: ${b.counts.wrong}; en blanco: ${b.counts.blank}. Puntos netos: ${numPenalty(b.counts.net)}. Penalización por fallo: −${numPenalty(session.exam.penalty)}.` : ""}</li>`).join("")}</ul>${!r.complete ? `<p>Contribución de los bloques ya corregidos: ${num(r.subtotal)} / 10. No es la nota final; los bloques pendientes todavía no aportan puntuación.</p>` : ""}`;
  }
  function renderResults() {
    panel.innerHTML = `<article class="tarjeta">${badge(session.exam)}<h2>Corrección del simulacro</h2><div id="resumen-nota" role="status" aria-live="polite"></div><p>Puntúa cada criterio con valores parciales entre 0 y su máximo. Compara tu respuesta con la solución y explica tu valoración. Para asignar cero, escríbelo explícitamente; un campo vacío queda pendiente.</p><button data-exam-action="home" class="boton-secundario">Preparar otro intento</button></article>` + E.selected(session.exam).map((q, i) => {
      const a = session.answers[q.id]; const assessment = session.assessments[q.id];
      return `<article class="tarjeta"><p class="etiqueta">Pregunta ${i + 1} · ${esc(q.originalId || q.id)} · ${esc(session.exam.blocks.find((b) => b.type === q.type).title)}</p><h2 class="examen-enunciado">${esc(q.prompt)}</h2>${stimulus(q)}
      <h3>Tu respuesta entregada</h3>${["vf", "justificada"].includes(q.type) ? `<p>${choiceText(a)} · Solución: ${q.correct ? "Verdadero" : "Falso"}${q.type === "vf" ? ` · ${a?.choice == null ? "En blanco" : a.choice === q.correct ? "Acierto" : "Fallo"}` : ""}</p>` : ""}
      ${(q.parts || []).map((p) => `<p><strong>${esc(p.prompt)}</strong></p><div class="examen-respuesta">${esc(a?.texts[p.id]?.trim() || "En blanco")}</div>`).join("")}
      <h3>Respuesta modelo</h3><p class="examen-respuesta">${esc(q.model)}</p><p class="examen-respuesta">${esc(q.explanation)}</p>
      ${q.conditions ? `<p><strong>Condiciones:</strong> ${esc(q.conditions)}</p><p><strong>Matriz:</strong> ${esc(q.matrixId)} · ${esc(q.topic)} / ${esc(q.subtopic)}. Dificultad prevista: ${esc(q.difficulty)}; ${esc(q.difficultyReason)}. Nivel: ${esc(q.cognitiveLevel)}.</p>` : ""}
      ${q.learningObjective ? `<p><strong>Objetivo evaluado:</strong> ${esc(q.learningObjective)}</p><p><strong>Relación con Piloto 01:</strong> ${esc(q.pilot01Relationship)}</p>` : ""}
      ${q.essential ? `<p><strong>Indispensable:</strong> ${esc(q.essential)}</p><p><strong>Errores graves:</strong> ${esc(q.majorErrors)}</p><p><strong>Omisiones secundarias:</strong> ${esc(q.minorOmissions)}</p>` : ""}
      ${q.type !== "vf" ? `<fieldset class="rubrica"><legend>Autoevaluación con puntuación parcial</legend>${q.rubric.map((c) => `<label>${esc(c.label)} (máx. ${c.max})<input aria-label="Puntos: ${esc(c.label)}" type="number" min="0" max="${c.max}" step="any" data-assess="${esc(q.id)}" data-criterion="${esc(c.id)}" value="${assessment?.scores[c.id] ?? ""}"></label>`).join("")}<label class="examen-campo">Explica qué has cubierto y qué te falta<textarea data-reason="${esc(q.id)}" maxlength="20000">${esc(assessment?.reason || "")}</textarea></label></fieldset>` : ""}
      <p class="nota">Estado: ${esc(q.verification || q.reviewStatus)}. ${q.sources.length ? q.sources.map((s) => `${esc(s.document)}, página ${s.pdfPage} del PDF${s.section ? `, ${esc(s.section)}` : ""}`).join("; ") : "Demostración sin referencia PDF ni revisión académica."}</p></article>`;
    }).join(""); summary();
  }
  function render() { if (screen === "start") renderStart(); else if (screen === "exam") renderExam(); else renderResults(); }
  function navigate(index) { session.index = index; persist(); renderExam(); $("examen-pregunta").focus(); }
  panel.addEventListener("submit", (event) => {
    if (event.target.id !== "configurar-examen") return; event.preventDefault();
    if (conflict) return;
    try {
      const exam = configured();
      const begin = () => { session = E.start(exam); recovery = false; screen = "exam"; persist(); render(); };
      if (session || recovery) confirmAction(`Iniciar «${exam.title}» sustituirá ${session ? `el intento guardado «${session.exam.title}»` : "el simulacro guardado"} y su corrección. ¿Continuar?`, begin);
      else begin();
    } catch (e) { warn(e.message); }
  });
  panel.addEventListener("click", (event) => {
    const action = event.target.closest("[data-exam-action]")?.dataset.examAction;
    if (!action || conflict) return;
    if (action === "home") { screen = "start"; render(); }
    if (action === "resume") { screen = session.status === "running" ? "exam" : "results"; render(); }
    if (action === "previous") navigate(Math.max(0, session.index - 1));
    if (action === "next") navigate(Math.min(E.selected(session.exam).length - 1, session.index + 1));
    if (action === "finish") {
      const qs = E.selected(session.exam); const blank = qs.filter((q) => !E.answered(q, session.answers[q.id])).length;
      confirmAction(`¿Entregar el simulacro? ${blank} pregunta(s) completamente en blanco. Puede haber apartados incompletos. Después no podrás cambiar las respuestas.`, () => {
        E.submit(session); screen = "results"; persist(); render();
      });
    }
  });
  panel.addEventListener("change", (event) => {
    if (conflict) return;
    if (event.target.id === "elegir-simulacro") { selectedId = event.target.value; renderStart(); }
    if (event.target.id === "examen-salto") navigate(Number(event.target.value));
  });
  panel.addEventListener("input", (event) => {
    const t = event.target; if (conflict) { t.disabled = true; return; }
    if (screen === "start") { if (t.closest("#configurar-examen")) configSummary(); return; }
    if (screen === "exam") {
      const q = E.selected(session.exam)[session.index];
      const a = session.answers[q.id] ||= {choice: null, texts: {}};
      if (t.dataset.choice) a.choice = t.dataset.choice === "blank" ? null : t.dataset.choice === "true";
      if (t.dataset.part) a.texts[t.dataset.part] = t.value;
      persist();
      const done = E.selected(session.exam).filter((q) => E.answered(q, session.answers[q.id])).length;
      $("examen-progreso").value = done;
      document.querySelector('label[for="examen-progreso"]').textContent = `Preguntas con alguna respuesta: ${done} / ${E.selected(session.exam).length} (puede faltar algún apartado)`;
      Array.from($("examen-salto").options).forEach((o, i) => { const x = E.selected(session.exam)[i]; o.textContent = `${i + 1} · ${session.exam.blocks.find((b) => b.type === x.type).title} · ${E.answered(x, session.answers[x.id]) ? "Con respuesta" : "En blanco"}`; });
    } else {
      const id = t.dataset.assess || t.dataset.reason; if (!id) return;
      const a = session.assessments[id] ||= {scores: {}, reason: ""};
      let invalidScore = false;
      if (t.dataset.criterion) {
        if (!t.validity.valid) { a.scores[t.dataset.criterion] = null; invalidScore = true; }
        else a.scores[t.dataset.criterion] = t.value === "" ? null : Number(t.value);
      } else a.reason = t.value;
      persist(); summary();
      if (invalidScore) warn("Puntuación fuera de rango: usa un valor entre 0 y el máximo del criterio. Este criterio queda pendiente hasta introducir un valor válido.");
    }
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== E.KEY && event.key !== null) return;
    conflict = true;
    warn("El simulacro cambió en otra pestaña. Recarga esta página antes de continuar para evitar sobrescribir respuestas.");
    panel.querySelectorAll("input, textarea, select, button").forEach((el) => el.disabled = true);
  });
})();
