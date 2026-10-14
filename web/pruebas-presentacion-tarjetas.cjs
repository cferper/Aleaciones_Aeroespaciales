"use strict";
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const app = fs.readFileSync(path.join(__dirname, 'dist/app.js'), 'utf8');
const functions = app.slice(app.indexOf('  function explanationParagraphs('), app.indexOf('  function stats()'));
const context = vm.createContext({esc: text => String(text).replace(/</g, '&lt;'), sources: () => '<details>Consultar fuentes</details>'});
vm.runInContext(functions, context);
const paragraphs = card => Array.from(context.explanationParagraphs(card));
const render = card => context.revealedDetails(card);
assert.deepEqual(paragraphs({answer:'FCC.', explanation:' FCC. '}), []);
assert.deepEqual(paragraphs({answer:'Respuesta más extensa.', explanation:'Respuesta'}), []);
assert.deepEqual(paragraphs({answer:'Respuesta.', explanation:'Explica la cadena causal y conserva las condiciones indicadas en la respuesta.'}), []);
assert.deepEqual(paragraphs({answer:'Respuesta.', conditions:'Aplicable al sistema, estado y comparación descritos; no extrapolar a composiciones o ciclos distintos.'}), []);
assert.deepEqual(paragraphs({answer:'Respuesta.', explanation:'Mecanismo.', conditions:'Sólo para Ti puro.'}), ['Mecanismo.', 'Sólo para Ti puro.']);
assert.deepEqual(paragraphs({answer:'Respuesta.', explanation:'Mecanismo. Sólo para Ti puro.', conditions:'Sólo para Ti puro.'}), ['Mecanismo. Sólo para Ti puro.']);
assert.ok(!render({answer:'FCC.', explanation:'FCC.'}).includes('<h3>'));
assert.ok(render({answer:'Respuesta.', explanation:'<script>'}).includes('&lt;script>'));
let specific = 0;
for (let n = 1; n <= 10; n++) {
  const topic = JSON.parse(fs.readFileSync(path.join(__dirname, `temas/t${n}.json`), 'utf8'));
  for (const card of topic.cards) {
    const snapshot = JSON.stringify(card);
    const html = render(card);
    assert.ok(!/Conceptos indispensables|<h3>Condiciones|Objetivo:|revalidada|cadena causal/.test(html), card.id);
    assert.ok(html.includes('Consultar fuentes'));
    if (card.conditions && !card.conditions.startsWith('Aplicable al sistema, estado y comparación descritos')) {
      assert.ok((card.answer + ' ' + paragraphs(card).join(' ')).includes(card.conditions), 'Condición perdida: ' + card.id);
      specific++;
    }
    assert.equal(JSON.stringify(card), snapshot, 'Metadatos modificados: ' + card.id);
  }
}
assert.ok(specific > 80);
assert.ok(!app.includes('Es tu autoevaluación, sin corrección automática.'));
assert.ok(!app.includes('revision-contenido'));
console.log(`Presentación verificada en 321 tarjetas; ${specific} condiciones específicas conservadas, metadatos intactos, explicaciones repetidas y genéricas ocultas.`);
