# Fase 4 — Banco de estudio implementado

Estado: implementación local terminada en `main`. Sin commits ni push. Estado inicial: sólo `borradores/mejora_estudio_fase1/` sin seguimiento, procedente de la auditoría anterior. Se conserva.

## Resultado

321 tarjetas almacenadas: **312 activas y 9 archivadas**. Del banco original: **178 conservadas sin cambiar pregunta/respuesta/explicación, 73 mejoradas, 9 archivadas**. Los 260 IDs antiguos siguen presentes; añadir nivel y metadatos no se cuenta como reescritura académica. **61 nuevas de nivel 3**: 27 Al, 16 Ti, 18 resto.

El objetivo inicial de 60 se cumple con 27/15/18. Se añade una versión de Ti porque transformar `t6-seleccion` en una comparación de tratamientos cambia su objetivo: la anterior se conserva archivada y `t6-av-comparar-fluencia` empieza sin historial. El reparto de las 61 adiciones es 44,3/26,2/29,5 %. No equivale al peso del banco heredado completo ni a puntuaciones de un examen.

| Tema | Fundamentos | Comprensión | Avanzado | Activas | Archivadas | Nuevas |
|---|---:|---:|---:|---:|---:|---:|
| 1. Introducción al aluminio | 8 | 24 | 8 | 40 | 3 | 7 |
| 2. Corrosión en aleaciones de aluminio | 1 | 23 | 4 | 28 | 1 | 4 |
| 3. Aluminio de forja no tratable térmicamente | 2 | 14 | 6 | 22 | 0 | 4 |
| 4. Aluminio de forja tratable térmicamente | 3 | 20 | 12 | 35 | 2 | 9 |
| 5. Aleaciones de aluminio de moldeo | 4 | 21 | 4 | 29 | 0 | 3 |
| 6. Aleaciones de titanio | 5 | 25 | 18 | 48 | 1 | 16 |
| 7. Aceros de alta resistencia | 1 | 19 | 5 | 25 | 0 | 5 |
| 8. Aleaciones de magnesio | 2 | 22 | 5 | 29 | 0 | 5 |
| 9. Fractura de materiales metálicos | 3 | 27 | 5 | 35 | 0 | 5 |
| 10. Selección de materiales metálicos | 5 | 11 | 5 | 21 | 2 | 3 |
| **Total** | **34** | **206** | **72** | **312** | **9** | **61** |

El subconjunto avanzado tiene 34 tarjetas de Al, 18 de Ti y 20 del resto: **47,2/25,0/27,8 %**, próximo a la prioridad académica indicada. En todo el banco activo heredado, las cantidades son 154/48/110 (**49,4/15,4/35,3 %**): conservar fundamentos impide confundir cantidad total con peso académico. No se introduce ponderación ni cambio del algoritmo de repaso.

Los niveles describen la tarea cognitiva: identificar, explicar mecanismos y razonar con condiciones/comparaciones. Las 15 fichas aprobadas mantienen sus textos exactos. Al–Li conserva mecanismos técnicos como contenido secundario; las adiciones no incluyen historia de Al–Li.

## Casos y mapas

Se conservan los **40 casos**. Se amplían de manera compatible 12 soluciones y se precisan dos enunciados: **14 casos** en total. Se conservan predicciones, alternativas y campos del progreso. Los nueve aumentos de dificultad y las tres rotaciones de casos que requieren objetivos distintos permanecen en su versión original: esta fase aplica sólo las mejoras compatibles solicitadas; no crea ni sobrescribe versiones con nuevos objetivos.

Los **10 mapas** conservan sus aristas, IDs y **20 claves**. Se desarrollan las explicaciones y se añaden fuentes originales para las nuevas aclaraciones. **14 huecos** reciben alternativas homogéneas; se delimitan condiciones cuando hacen falta. No se transfiere una marca de mapa completado a claves nuevas.

## Interfaz y progreso

Filtros de tema, concepto y nivel combinables. Nivel/archivo se aplican a flashcards; concepto también a casos. Respuestas, explicación, condiciones, indispensables y fuentes aparecen al revelar. Los contadores separan pendientes filtrados y total, incluido archivo. Hay acceso sin filtros a pendientes del tema y de los diez temas; en la sesión global cada tarjeta identifica su tema.

El contenido ampliado lleva aviso y práctica voluntaria. Consultar o filtrar no escribe valoraciones; valorar conserva el algoritmo habitual y programa otra fecha. `progreso.js` es idéntico por SHA256 al inicial: misma clave, esquema, cuatro valoraciones, fechas y reglas. Los IDs nuevos no se insertan en progreso hasta ser valorados y no heredan dominio de otro ID. Archivadas e IDs históricos siguen exportándose/importándose. La copia de estudio continúa separada de intentos de examen.

## Verificación ejecutada

- Compilación: 10 temas, 321 tarjetas, 40 casos, 10 mapas. Sintaxis de app y módulo comprobada con Node.
- Seis baterías aprobadas: contenido; progreso (28); motor de simulacro (23); Piloto 01 (15); Piloto 02 (14); fase 4 (17). **97 pruebas numeradas, además de las comprobaciones de contenido**.
- Fase 4 prueba IDs originales, archivo sin destrucción, textos aprobados, nuevos campos/referencias, ausencia de copias literales, filtros, vencidas, conservación de mapas/casos, exportación/importación y hashes de PDFs, motor, SRS y bancos de examen. Ausencia de copia literal no sustituye revisión semántica: ocho borradores demasiado solapados se sustituyeron por objetivos diferentes durante la revisión.
- Navegador, origen nuevo `127.0.0.1:8768`: tarjetas avanzadas/casos/dos huecos en los diez temas; tres niveles; concepto+nivel; ocultación de respuesta; detalles revelados; valoración, recarga, exportación e importación de la misma copia; caso y mapa completados y recuperados; práctica ampliada y pendientes globales.
- Piloto 01 iniciado con 42 preguntas; Piloto 02 en origen separado `localhost:8768`, cinco PNG cargados con dimensiones originales, navegación visual y recuperación en pregunta 37, entrega con confirmación y acceso a soluciones/rúbricas. La entrega de prueba se hizo en blanco: no se afirma haber contestado académicamente todo el examen en navegador. Puntuación y rúbricas se verifican con las pruebas del motor/pilotos.
- Consola: cero errores capturados en ambos orígenes. No se borra localStorage ni se sustituyen intentos existentes; el navegador habitual de puerto 8000 no se usa para pruebas.
- `git diff --check` sin errores de espacios. Advertencia informativa de finales de línea LF/CRLF en Windows.

## Incidencias y límites

| Incidencia | Gravedad | Estado |
|---|---|---|
| Inventario asociaba por número los libros 7/8, aunque contienen Mg/aceros y los temas de la web son aceros/Mg | Media, trazabilidad | Corregido `web/fuentes.json`; PDF intactos |
| Prueba antigua exigía 36 tarjetas y fuente exclusiva del tema 1 | Técnica | Ajustada para conservar las 36 antiguas y permitir nuevas/citas cruzadas justificadas |
| Ocho borradores solapaban excesivamente objetivos anteriores | Académica | Reescritos durante revisión; ver `REVISION_NOVEDAD.json` |
| `t6-seleccion` requiere un objetivo diferente | Historial | ID nuevo y archivo de antigua versión; sin transferencia de dominio |
| Páginas Mg–Li/ELI/premium y anclas de pico/tortuosidad necesitaban precisión | Media, trazabilidad | Corregidas antes de cierre |
| Fórmulas de equivalentes Ti, clasificación problemática de betágenos, NiAl bajo Ti, unidades/dosificaciones contradictorias anteriores | Académica | Siguen excluidas; no resueltas ni publicadas como nuevas reglas |
| Validación oficial del profesor y calibración empírica de dificultad | Límite conocido | No realizadas; etiquetas documentales y niveles previstos |

El cotejo de nuevas fichas emplea texto extraído/OCR de los originales y revisión visual de anclas sensibles; no sólo resúmenes. Se ha comprobado visualmente la fórmula legible de K en L9 p.13, el desmezcle/ω en L6 p.27 y Mg–Li en L7 p.18. Las fichas registran PDF, página y huellas de su texto de cotejo. Esas huellas documentan procedencia, no certifican científicamente una redacción. No se asignan valores experimentales a escenarios hipotéticos. Las 178 conservadas no se presentan como revalidadas exhaustivamente en esta implementación.

## Archivos

Modificados: `web/temas/t1.json` … `t10.json`, `web/dist/contenido.js`, `app.js`, `index.html`, `estilos.css`, `guia.html`, `web/fuentes.json`, `web/pruebas-contenido.cjs` y README. Nuevos: `web/dist/estudio-filtros.js`, `web/pruebas-fase4.cjs` y esta carpeta de entrega.

Se conservan backups iniciales de diez JSON y compilado en `respaldo_inicial/`; también interfaz inicial y guía. `HASHES_INICIALES.json` conserva huellas de archivos/PDF previos. `CAMBIOS_FINALES.json` muestra antes/después por ID; `FICHAS_NUEVAS_61.md/json` contiene la entrega académica final. Los registros por lotes son históricos; la fuente final es el JSON de cada tema y `CAMBIOS_FINALES.json`.

## Cómo probar

1. Recarga tu dirección habitual, manteniendo navegador, hostname y puerto para usar tu progreso existente. Si la web no está servida: desde el proyecto, `node web/servir.cjs`, y abre `http://127.0.0.1:8000/`.
2. En Estudiar por temas, selecciona Tema 4 o 6, Avanzado y un concepto. Revela una tarjeta y consulta mecanismo, condiciones, indispensables y fuentes.
3. Usa Practicar contenido ampliado sin valorar: la agenda no cambia. Si valoras, se programa el repaso normal.
4. Comprueba los botones de pendientes y la casilla de archivo; las fechas de tarjetas antiguas no se reinician.
5. Abre un caso/mapa y los dos pilotos. Exporta una copia propia cuando quieras; la copia de estudio no incluye intentos de examen.
6. Para repetir pruebas: `node web/compilar-contenido.cjs` y las seis baterías `web/pruebas-*.cjs`. Fase 4 necesita materiales, respaldo y auditoría locales. No ejecutar los scripts de preparación de `tmp/fase4` como comando de actualización: son herramientas de esta implementación.
