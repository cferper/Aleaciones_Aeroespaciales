# Mejora del estudio por temas — diagnóstico y método propuesto

**13/10/2026 · Fase de revisión y aprobación.** El banco contiene muchas respuestas técnicamente útiles. El problema principal no es que haya fundamentos fáciles: falta organizar una progresión explícita, completar algunas explicaciones causales y reservar comparaciones con condiciones para un tercer nivel. Se propone mejorar por lotes, sin convertir las 260 tarjetas en preguntas de examen.

No se ha modificado la web, el banco de temas, sus IDs, el progreso ni los dos simulacros. Rama `main`, checkout original; Git estaba limpio al comenzar esta fase. Se crean únicamente estos documentos y auxiliares de auditoría. Se compararon por SHA-256 los 111 archivos previos de web, originales y borradores: permanecen idénticos.

## Alcance y cómo leer la entrega

Se leyeron individualmente las **260 tarjetas**, sus respuestas/explicaciones, los **40 casos** con sus situaciones, controles, predicciones, soluciones y criterios, y los **10 mapas**, incluidas todas sus aristas y **20 huecos**. Son 310 actividades y 20 subelementos; 330 filas de auditoría, sin doble contar los huecos como actividades de estudio.

- `CLASIFICACION_COMPLETA.md`: una decisión y motivo/acción por ID, niveles actuales/propuestos y citas del banco.
- `CLASIFICACION_COMPLETA.csv`: la misma clasificación filtrable; no se utiliza en la web.
- `CLASIFICACION_COMPLETA.json`: originales íntegros y juicio de cada actividad para trazabilidad.
- `PILOTO_15_FLASHCARDS.md`: originales literales frente a propuestas, respuestas completas, explicación, condiciones, PDF/página, razón de cambio y efecto sobre historial.
- `PROPUESTAS_CASOS_Y_MAPAS.md`: especificaciones para los 40 casos y cada mapa/hueco, con anclas originales y alternativas.
- `IMPLEMENTACION_Y_REPASO.md`: plan de implementación y conservación de datos; todavía no aplicado.

La auditoría pedagógica y de trazabilidad es exhaustiva. El **cotejo científico de la redacción definitiva se realiza aquí para las 15 propuestas del piloto** y para los mecanismos/anclas que fundamentan las especificaciones de casos y mapas. La futura ampliación literal de otras tarjetas necesitará cotejo final antes de publicarse; no se presenta una clasificación editorial como certificado científico de 300 soluciones. Los estados de revisión lo distinguen en las fichas.

Los originales escaneados se consultan mediante páginas renderizadas y OCR auxiliar; para símbolos/datos de las propuestas se contrastaron las páginas originales. Se reutilizan los materiales y advertencias de la matriz, del diagnóstico previo y de las revisiones de Pilotos 01/02. No se toma una pregunta existente ni una frase OCR como autoridad suficiente ante una contradicción.

## Clasificación global

Una clasificación principal por actividad; las notas especifican cambios secundarios. Conservar significa conservar enunciado/respuesta actuales, no que deba ocupar tanta frecuencia como cualquier otra tarjeta.

| Decisión | Tarjetas | Casos | Mapas | Huecos |
|---|---:|---:|---:|---:|
| Conservar sin cambios | 178 | 14 | 0 | 6 |
| Mejorar el enunciado | 21 | 2 | 2 | 14 |
| Mejorar respuesta o explicación | 42 | 12 | 8 | 0 |
| Aumentar dificultad | 11 | 9 | 0 | 0 |
| Sustituir por redundancia/escasa utilidad en ruta principal | 8 | 3 | 0 | 0 |
| Total | 260 | 40 | 10 | 20 |

No se propone borrar las 11 actividades señaladas para sustitución. Algunas deben salir de la ruta principal y quedar como consulta; otras se rotarían hacia un objetivo nuevo, con ID nuevo e historial antiguo conservado. Las repeticiones entre concepto, explicación y caso se mantienen cuando añaden nivel: Mg en solución, respuesta de 5000/6000 y aplicación de una ruta no son la misma tarea.

Se conservarían 178 tarjetas porque su respuesta ya satisface el objetivo. Una explicación plantilla que no añade información no vuelve incorrecta una respuesta completa. En cambio, cuando el enunciado exige causa y la respuesta sólo enumera efectos, se clasifica para mejora, aunque tenga palabras técnicas.

## Diagnóstico por tema

| Tema | Tarjetas / casos / mapa | Fortalezas | Problema prioritario y propuesta |
|---|---|---|---|
| 1 · Introducción Al | 36 / 5 / 1 | Primeras 26 tarjetas y cinco casos tienen condiciones y límites bien trabajados; solución/temple, quemado, tensiones y nomenclatura útiles. | Tres duplicados: solución-etapas/objetivo, conductividad y Li. Completar restauración/recristalización, solubilidad frente a cinética y evolución de precipitados. Mantener FCC, densidad y T4/T6 como base. Los sufijos de producto son consulta secundaria. |
| 2 · Corrosión Al | 25 / 4 / 1 | Cadenas película/resquicio/picadura, SCC, sellado/plaqueado y compromisos de superficie. | Explicar borde/potencial, exfoliación y difusión al plaqueante con condiciones; no cerrar con depende. T7 tiene repetición entre temas: rotar una plaza, sin eliminar el conocimiento. Ampliar soluciones de algunos casos. |
| 3 · Al no tratable | 18 / 3 / 1 | Clasificación, soluto Mg/acritud, H1/H3 y partículas; nomenclatura necesaria. | Comparación 5000/6000, papel Mn y dispersoides. Hay buena comparación de tabla con composición y estado, pero los casos deben añadir un control positivo para no pedir sólo dos imposibilidades de cuantificar. |
| 4 · Al tratable | 28 / 4 / 1 | 2000/6000/7000, exceso Mg/Si, Cu, Fe/Si, estados reales y Cr/Zr. | Fases θ/S, cooperación Zn/Mg y comparación de rutas requieren explicaciones más completas. Nueve tarjetas y dos de cuatro casos son Al–Li: cobertura técnica válida, pero frecuencia desproporcionada para la prioridad aprobada. Reducir repetición/industria, quitar marco de generaciones y mantener δ′/PFZ/Cu-Zr como secundarios. |
| 5 · Al moldeo | 26 / 4 / 1 | Amplia cadena composición/proceso/defectos, Al–Si y Na/Sr/P; buena nomenclatura de proceso. | Precisar contracción/alimentación, semisólido y premium; separar globulización Si de precipitación Mg2Si. No extender no tratable de forja a todo Al–Mg moldeado. Los casos de gas/desgaste son útiles. |
| 6 · Titanio | 33 / 5 / 1 | El banco ya contiene α/β, aleantes, neutros, MA/dúplex, STA, Ms/Mf, ω, casi α, beta-fleck y capa α. | Tiene sólo 12,7 % de tarjetas: no representa 25 % de énfasis si todas pesan igual. Mejorar explicación de productos de STA y condiciones iniciales; elevar tareas MA/Ms-Mf y comparar familias/aleantes. ELI/pasividad son fundamentos, no preguntas inútiles. |
| 7 · Aceros | 20 / 4 / 1 | Templabilidad, dureza secundaria, Ni/Co, maraging y PH. Selección del tren tiene requisito real de volumen. | Completar obstáculos de intermetálicos, no confundir dureza/templabilidad ni asumir todo PH sin carburos. Rotar caso PH de dos números imposibles hacia rutas semiaustenítica/austenítica. |
| 8 · Magnesio | 24 / 4 / 1 | Textura/maclas, impurezas, Zr/Al, rutas de colada y mecanismos de corrosión. | Delimitar Mg–Zn+TR frente a Mg–TR; comparar coherencia/eficacia/estabilidad de precipitados. El caso caliente debe exigir esa comparación, no sólo declarar imposible calcular vida y resistencia. |
| 9 · Fractura | 30 / 4 / 1 | Buen repertorio de mecanismos, microvacíos, H, triaxialidad y modelos simplificados; referencias originales presentes. | Mantener advertencia de modos locales; distinguir partículas gruesas de precipitados útiles, desarrollar respuesta BCC/Ti-Mg. No elevar a avanzado un cálculo de raíz con una sola variable. P8 sí respalda partículas/microvacíos; P9/P10 añaden tamaño/fracción: no hay que inventar un error de página. |
| 10 · Selección | 20 / 3 / 1 | Índices bajo hipótesis, daño, calor localizado y galvánica tienen utilidad real. El caso axial está bien condicionado. | Definir magnitudes eléctricas y sus unidades; concretar Al/Ti y película, no recitar más listas de requisitos. Aviso de precios fechados mejor en fuentes, fuera de la cola de repaso; calor Ti duplica T6. |

Las filas completas permiten localizar exactamente qué tarjeta/caso respalda cada diagnóstico. No se etiqueta un tema entero como malo ni se interpreta una selección aplicada como fallo por incluir densidad.

## Respuestas, trazabilidad y redundancias

**220 de 260 explicaciones** repiten literalmente «Explica la cadena causal y conserva las condiciones indicadas en la respuesta». Otras 10 usan la plantilla «Interpreta la tendencia o ruta…». Son instrucciones, no explicaciones adicionales. Se priorizan las 42 respuestas/explanaciones marcadas y las soluciones de 12 casos; no se reescriben automáticamente las 230 tarjetas con plantillas si su respuesta ya resuelve la tarea.

**174 tarjetas** (temas 2–8) y **28 casos** citan sólo resúmenes en el banco actual. Los temas 1, 9 y 10 ya incorporan originales en sus tarjetas; sus 12 casos también. Siete de diez mapas no citan originales en sus aristas. Esto es una laguna de trazabilidad, no evidencia de falsedad. Al enriquecer, se añadirá el original concreto y su página sin borrar la cita de resumen útil ni ocultar discrepancias. No basta la prueba automática de que un PDF existe.

La secuencia de respuesta propuesta es:

1. Respuesta directa que conteste cada parte del enunciado.
2. Explicación que conecte causa y efecto cuando se solicita; los enlaces entre composición, proceso, microestructura y propiedad deben estar justificados.
3. Condición que realmente controle la conclusión: familia, campo de fases, régimen de temperatura/tiempo, geometría/enfriamiento, medio/superficie o ensayo. No una lista de depende.
4. Límite de inferencia cuando corresponde, después de decir lo que sí sabemos.

En densidad, redes, designación o definición de estado no se obliga a recorrer toda esa cadena. Una tarjeta sencilla puede tener respuesta de una frase. Los casos que piden dos predicciones deben explicar ambas en la solución; los criterios de autoevaluación no sustituyen ese modelo.

Duplicados propuestos: `t1-solucion-etapas`, `t1-modulo-li`, `t1-conductividad-soluto`, `t2-t7`, `t4-li-especificas`, `t4-li-reciclaje`, `t10-conductividad`, `t10-historicos`. Casos para rotación: `t4-caso-li-calor`, `t7-caso-ph`, `t8-caso-caliente`. Los motivos específicos están en la clasificación, no se presume que todas las repeticiones sean redundantes.

## Tres niveles que reflejan lo requerido

| Nivel | Qué debe demostrar | Ejemplo de familia de tarea | Qué no basta |
|---|---|---|---|
| 1 · Fundamentos | Recuperar nombre, definición, fase/aleante, red o etapas básicas. | Mg/Si y Mg2Si; T4/T6; α/HCP, β/BCC; Sn/Zr neutros. | Confundir nombre con propiedad, o que una frase larga convierta recuerdo en razonamiento. |
| 2 · Comprensión | Explicar una causa con mecanismo y alcance. | Mg en solución/acritud, solubilidad/tiempo, α precipitada al madurar β retenida, coste de ω. | Nombrar mejor/peor sin explicar qué cambia, o decir depende sin condición. |
| 3 · Razonamiento avanzado | Comparar rutas/familias, reconstruir fases o discriminar inferencias bajo condiciones explícitas. | Cr/Zr y núcleo de 7000, θ/S/coexistencia comercial, MA y evidencia, subtransus con Ms/Mf. | Lista de aleantes, sólo un signo de propiedad o pedir datos que faltan sin usar lo dado. |

Con este criterio estricto del mínimo exigido, la clasificación de tarjetas actuales es **34 N1, 225 N2 y 1 N3**. No es una medición psicométrica: algunas preguntas de N2 pueden discutirse a N3 si se muestran gráficos y se exige una inferencia adicional, pero su respuesta actual no la exige. Los ocho casos actualmente clasificados N3 muestran que ya hay buenos ejercicios avanzados. No se presupone que el estudiante deba repetir una respuesta de desarrollo en cada flashcard.

Se propone organizar **rutas por objetivo**, conservando la navegación por tema y conceptos:

- 6000: aleantes/fase de referencia → solución/temple/maduración → comparación de rutas/estados y efectos.
- 5000: Mg/estado H → soluto/acritud/estabilidad → contraste con 6000 y sensibilización condicionada.
- 2000/7000: θ/S y Mg-Zn → funciones Cu/Mn/Cr/Zr → coexistencia, núcleo grueso, T6/T7 y ataque específico.
- Ti: α/β/transus y aleantes → recocidos/STA/primaria-transformada → Ms/Mf, evidencia morfológica, difusión/fluencia e iniciación/propagación de fatiga.
- Resto: vocabulario y fases → mecanismo de proceso/daño → contraste controlado entre familias o situaciones docentes.

Las rutas enlazan prerrequisitos sin bloquear el acceso al nivel 3 por una supuesta nota de dominio. La autoevaluación del repaso no certifica conocimiento. Un alumno puede estudiar N3 y regresar a N1 cuando lo necesite.

Como orientación de sesiones de aprendizaje: al iniciar un objetivo, 40/45/15 de atención a N1/N2/N3; al consolidarlo, 20/45/35. Son pautas de práctica, no porcentajes de preguntas ni una nueva regla de agenda. El usuario puede elegir nivel o todos; los repasos vencidos siguen visibles aunque tengan nivel distinto.

## Importancia 45/25/30 y contenidos prioritarios

Conteo actual: Al 133 tarjetas (51,2 %), Ti 33 (12,7 %), resto 94 (36,2 %). Los 40 casos son 20/5/15 (50/12,5/37,5 %). Contar preguntas o tiempo de lectura no equivale a importancia académica.

La propuesta **45 % Al, 25 % Ti, 30 % resto** se aplica inicialmente a la atención de una ruta mixta de aprendizaje, no borrando tarjetas para alcanzar una proporción de inventario. Ejemplo: 40 encuentros voluntarios de práctica = 18 Al, 10 Ti, 12 resto. Para ejercicios largos usar presupuesto de tiempo orientativo, no llamar iguales a una definición y un caso. Dentro de un tema elegido no se fuerza un porcentaje de otros materiales.

No se recomienda quitar 16 tarjetas Al y 16 resto para crear 32 Ti sólo por aritmética. Primero se mejoran los objetivos; las futuras incorporaciones o rotaciones requerirán aprobación y fuente. Si se filtran N3 o un concepto y faltan candidatos, se muestra la distribución posible, no se duplican preguntas para fingir cobertura.

Dentro del Al: Mg/Si/Cu/Zn/Mn/Cr/Zr, 2000/5000/6000/7000 y partículas/rutas/propiedades dominan la ruta principal. Grados como 2024, 2219, 7475 y 7050/7010 se mantienen como anclas docentes, sin catálogo de porcentajes completo. Al–Li conserva δ′/deslizamiento, PFZ, función Cu/Zr y proceso de T8; disminuyen su repetición y el marco histórico. En T4 representa 9/28 tarjetas, 2/4 casos y 3/8 aristas: es el foco de reducción de frecuencia. La tarjeta de generaciones ya tiene contenido técnico; se elimina el marco cronológico, no el mecanismo.

Lagunas a reforzar sin copiar los exámenes: comparar respuesta útil 5000/6000; distinguir soluto/constituyente/dispersoide/precipitado; etapas de partículas antes/después del pico; función específica Mn/Cr/Zr; θ/S y predominio comercial; Ti con campo inicial y productos finales; Sn/Zr, Si y Mo/Nb en servicio caliente; Mg–Al/Mg–Zn/TR y PH semiaustenítico/austenítico. No se pide ahora generar todas esas tarjetas nuevas.

## Fiabilidad y advertencias que permanecen

| Cuestión | Fuente original / auditoría | Decisión |
|---|---|---|
| Secuencia 6000 simplificada | L4 p. 1; matriz §7 | Presentarla como esquema docente; no completarla con nomenclatura externa ni exigir β″. |
| Fases comerciales θ/S y ramas η/T | L4 pp. 7/12/13 | Referencias composicionales, no secuencia única de toda serie ni predominio sin estado. |
| Cu y corrosión | L4 p. 13 | Distinguir efectos observados de un mecanismo electroquímico no desarrollado; no inventar geometría de borde/SCC. |
| Solución sólida Al a ambiente | L1 p. 10 frente a L3 pp. 6–8 | No repetir el absoluto ninguno; Mg en solución y sobresaturación con condiciones. |
| Al–Mg moldeado frente a 5000 de forja | L5 p. 17; matriz §7 | No extender escasa maduración de 5000 a toda familia de moldeo. |
| Fe/Si y tenacidad; Al–Li y densidad | L4 pp. 18/27 frente a resúmenes | Impurezas bajas y menor densidad en esos contextos; no evaluar errata como trampa. |
| Dosis de P y anodizado tartárico nm/µm | L5 p. 24; L2 p. 16; matriz §7 | No incorporar cifras discrepantes; mantener advertencia y funciones verificadas. |
| Ti aluminuros y equivalentes | L6 pp. 11/14/39/40 | Propósito/fragilidad pueden tratarse; nomenclatura NiAl y coeficientes ilegibles quedan excluidos. |
| Ms/Mf y β estable/metaestable | L6 pp. 25–27/37/39; L8 p. 2 | Campo inicial, rapidez, umbrales y retención explícitos; no transferir la gran dureza Fe–C al Ti. |
| PH y carburos | L8 p. 12 | Describir mecanismo dominante; el texto de A286 también menciona carburos. Precisión preventiva, no afirmar todo PH libre de ellos. |
| Maraging y ferrita | L8 pp. 1/2/10 | Muy bajo C, no exactamente cero; no solubilidad nula en ferrita ni A3 universal. |
| Modos I/II/III locales | L9 pp. 4–8/11 | Mantener convención del capítulo y mecanismo; no tratar etiqueta aislada como inequívoca. |
| Fotografías/curvas/cifras densas | Matriz §7 y revisiones 2B/3A | No fracciones químicas por contraste óptico, escala en μm a partir de 500× ni comparaciones cuantitativas de ensayos diferentes. |
| E6 cortado/vacío y L10 p. 9 ajena al temario | Matriz §7 | Excluidos como evidencia de una propuesta; no completar zonas faltantes. |
| Precio/estadísticas/normas | L10 pp. 3/8 y fuentes históricas | Sólo contexto fechado, no cotización ni receta/norma vigente. |

Las advertencias deben figurar junto a la actividad afectada, no sólo en un informe escondido. Cita original, condición y estado de cotejo son campos distintos. Las pruebas mecánicas de fuentes/páginas no sustituyen la revisión científica.

## Método que se somete a aprobación

Primero revisar el piloto de 15 y sus diferencias/historial. Tras aprobación, aplicar sólo ese lote con comprobación literal y de progreso. Después avanzar por objetivos de Al/Ti y casos/mapas señalados, en lotes pequeños, mostrando qué IDs conservan objetivo y cuáles necesitan una versión nueva. Cada lote debe incluir solución directa, mecanismo cuando procede, PDF/página, control de contradicciones y revisión crítica de alternativas.

No se inicia aún la implementación. La propuesta distingue lo que puede conservarse, lo que necesita explicar mejor y lo que debe exigir una inferencia nueva. No se crea un simulacro adicional ni se altera Piloto 01/02.
