'use strict';
// Compilación determinista del banco revisado; no genera preguntas ni consulta IA.
const fs=require('node:fs'),path=require('node:path');
const E=require('./dist/vf-motor.js');
const bank=E.bankCheck(JSON.parse(fs.readFileSync(path.join(__dirname,'vf/banco.json'),'utf8')));
fs.writeFileSync(path.join(__dirname,'dist/vf-contenido.js'),'// Generado desde web/vf/banco.json.\nglobalThis.VFBank = '+JSON.stringify(bank,null,2)+';\n');
console.log(`Banco V/F compilado: ${bank.questions.length} fichas.`);
