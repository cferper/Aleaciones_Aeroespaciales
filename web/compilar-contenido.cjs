// Ejecutar: node web/compilar-contenido.cjs. No instala dependencias.
const fs = require('node:fs');
const path = require('node:path');
const topics = Array.from({length:10}, (_,i) => JSON.parse(fs.readFileSync(path.join(__dirname,'temas',`t${i+1}.json`),'utf8').replace(/^\uFEFF/,'')));
const data = {subjects:[{id:'aleaciones',title:'Aleaciones Aeroespaciales',topics}]};
fs.writeFileSync(path.join(__dirname,'dist','contenido.js'),'// Generado desde web/temas: editar los JSON y ejecutar el compilador.\nglobalThis.StudyContent = '+JSON.stringify(data,null,2)+';\n');
console.log(`${topics.length} temas, ${topics.reduce((n,t)=>n+t.cards.length,0)} tarjetas, ${topics.reduce((n,t)=>n+t.cases.length,0)} casos y ${topics.length} mapas.`);
