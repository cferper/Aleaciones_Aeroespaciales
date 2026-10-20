"use strict";
// Auditoría local, sin red, compilación, escritura de progreso ni despliegue.
// Lista cerrada del paquete público actual: falla ante archivos inesperados.
const fs = require("node:fs"), path = require("node:path"), vm = require("node:vm"), assert = require("node:assert/strict");
const root = path.resolve(__dirname, "dist");
const allowed = [
  "index.html", "guia.html", "estilos.css", "simulacro.css", "app.js", "contenido.js",
  "progreso.js", "estudio-filtros.js", "simulacro-motor.js", "simulacro-ui.js", "simulacros-contenido.js",
  "vf-motor.js", "vf-ui.js", "vf-contenido.js", "vf.css",
  ...["V01_A", "V01_B", "V01_tabla", "V02_A", "V02_B", "V02_C", "V02_D"].map(n => `assets/piloto-01/${n}.png`),
  ...["P02_V01_diagrama", "P02_V01_rutas", "P02_V02_A", "P02_V02_B", "P02_V02_curva"].map(n => `assets/piloto-02/${n}.png`),
  "assets/estudio/t1-5052-acritud.png", "assets/estudio/t1-5052-recocido.png"
].sort();
assert.ok(!fs.lstatSync(root).isSymbolicLink(), "La carpeta pública no puede ser un enlace simbólico.");
const found = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const absolute = path.join(dir, name), stat = fs.lstatSync(absolute);
    assert.ok(!stat.isSymbolicLink(), "No se admiten enlaces simbólicos dentro de web/dist.");
    if (stat.isDirectory()) walk(absolute);
    else { assert.ok(stat.isFile(), "Entrada pública no regular."); found.push(path.relative(root, absolute).replaceAll("\\", "/")); }
  }
}
walk(root);
assert.deepEqual(found.sort(), allowed, "El paquete tiene archivos ausentes o inesperados. Revisar antes de publicar; .gitignore no limita los assets de Wrangler.");
let bytes = 0, references = 0;
for (const name of found) {
  const absolute = path.join(root, name), raw = fs.readFileSync(absolute); bytes += raw.length;
  if (!/\.(html|js|css)$/.test(name)) continue;
  const text = raw.toString("utf8");
  for (const [label, regex] of [
    ["ruta absoluta de Windows", /[A-Za-z]:[\\/]\w/], ["URL file", /file:\/\//],
    ["clave privada", /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
    ["variable de credencial Cloudflare", /(?:CLOUDFLARE_API_TOKEN|CF_API_KEY)\s*[:=]/]
  ]) assert.ok(!regex.test(text), `${name}: patrón no permitido (${label}).`);
  if (!name.endsWith(".html")) continue;
  for (const match of text.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const ref = match[1]; if (/^(#|data:|https?:|blob:)/.test(ref)) continue;
    const target = path.resolve(root, path.dirname(name), ref.split(/[?#]/)[0]);
    assert.ok(target.startsWith(root + path.sep) && fs.existsSync(target), `${name}: referencia local inválida.`); references++;
  }
}
const ctx = vm.createContext({});
for (const name of ["contenido.js", "simulacros-contenido.js"]) vm.runInContext(fs.readFileSync(path.join(root, name), "utf8"), ctx);
const clone = value => JSON.parse(JSON.stringify(value));
const topics = clone(ctx.StudyContent.subjects[0].topics);
const sourceTopics = Array.from({length:10}, (_, i) => JSON.parse(fs.readFileSync(path.join(__dirname, "temas", `t${i+1}.json`), "utf8").replace(/^\uFEFF/, "")));
assert.deepEqual(topics, sourceTopics, "El compilado no corresponde a los JSON actuales.");
assert.equal(topics.flatMap(t => t.cards).filter(c => !c.archived).length, 312);
assert.equal(topics.flatMap(t => t.cards).length, 321);
assert.equal(topics.flatMap(t => t.cases).length, 40);
assert.equal(topics.length, 10);
assert.equal(topics.reduce((n,t) => n + Object.keys(t.map.blanks).length, 0), 20);
const exams = clone(ctx.ExamContent);
assert.deepEqual(exams.map(e => e.id).sort(), ["demo-infraestructura", "piloto-01", "piloto-02"]);
let images = 0;
for (const exam of exams) {
  const filename = exam.id === "demo-infraestructura" ? "demo" : exam.id;
  assert.deepEqual(exam, JSON.parse(fs.readFileSync(path.join(__dirname, "simulacros", `${filename}.json`), "utf8")), "Catálogo no actualizado.");
  assert.equal(exam.questions.length, filename === "demo" ? 6 : 42);
  for (const q of exam.questions) for (const image of q.stimulus?.images || []) {
    assert.ok(allowed.includes(image.src) && fs.existsSync(path.join(root, image.src)), "Imagen no incluida en el paquete."); images++;
  }
}
assert.equal(images, 12);
let studyVisuals=0;
for(const topic of topics) for(const activity of [...topic.cards,...topic.cases]) if(activity.visual){
  const visual=activity.visual;
  assert.ok(/^assets\/estudio\/[a-z0-9-]+\.png$/.test(visual.src)&&allowed.includes(visual.src), 'Recurso de estudio fuera de la lista pública.');
  assert.ok(fs.existsSync(path.join(root,visual.src))&&visual.alt&&visual.caption, 'Imagen o contexto de estudio ausentes.');
  assert.ok(activity.sources.some(s=>s.document===visual.document&&s.pdfPage===visual.pdfPage), 'Procedencia visual sin referencia en la actividad.');
  studyVisuals++;
}
assert.equal(studyVisuals,3);
console.log(`Publicación comprobada: ${found.length} archivos; ${bytes} bytes (${(bytes/1024/1024).toFixed(2)} MiB); ${references} rutas HTML; ${images} PNG de pilotos y 2 PNG de estudio para ${studyVisuals} actividades.`);
console.log("312 tarjetas activas, 9 archivadas, 40 casos, 10 mapas/20 huecos; demo y dos pilotos; compilados idénticos a sus JSON.");
console.log("Sin PDF, borradores, backups ni archivos inesperados en el paquete. Escaneo de patrones de credenciales/rutas absolutas sin hallazgos.");
console.log("Esta comprobación no autentica, crea, sube versiones ni despliega ningún Worker.");
