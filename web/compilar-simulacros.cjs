"use strict";
const fs = require("node:fs");
const path = require("node:path");
const engine = require("./dist/simulacro-motor.js");
const folder = path.join(__dirname, "simulacros");
const exams = fs.readdirSync(folder).filter((f) => f.endsWith(".json")).sort().map((f) => engine.validate(JSON.parse(fs.readFileSync(path.join(folder, f), "utf8"))));
if (new Set(exams.map((e) => e.id)).size !== exams.length) throw new Error("IDs de simulacro repetidos.");
fs.writeFileSync(path.join(__dirname, "dist", "simulacros-contenido.js"), "/* Generado por compilar-simulacros.cjs. Edita web/simulacros/*.json. */\nglobalThis.ExamContent = " + JSON.stringify(exams, null, 2) + ";\n");
console.log(`Compilados ${exams.length} simulacros; banco de estudio intacto.`);
