# Piloto 01 integrado — fase 2C

Entrega: 13/10/2026. Proyecto `Aleaciones_Aeroespaciales`, rama `main`, checkout original. Sin commits ni push. Los documentos de fase 2B y PDF originales se conservan intactos.

## Funcionalidades y uso

En **Simulacros de examen** se puede elegir entre la demostración técnica de fase 1 (seis preguntas) y **Piloto 01 de Aleaciones Aeroespaciales** (42 preguntas). El piloto se identifica como material revisado documentalmente, **no validado oficialmente por el profesor**. No se ha cambiado ninguna pregunta, respuesta, explicación ni rúbrica aprobada.

Configuración inicial: 30 V/F, 5 justificadas, 2 visuales y 5 desarrollos; bloques 30/10/20/40 %; contenidos Al 45 %, Ti 26 %, resto 29 %. D05 atribuye 5 puntos a T9 y 3 a T10. Al–Li mantiene una única pregunta técnica, sin historia. Cambiar cantidades o pesos puede cambiar el reparto por contenidos: la pantalla advierte de ello.

La navegación permite avanzar, retroceder y saltar a cualquiera de las 42 preguntas. El estudiante puede dejar preguntas en blanco. Cada entrada guarda el intento, posición, configuración y copia del contenido. Entregar requiere confirmación; después las respuestas quedan bloqueadas y se consultan soluciones, explicaciones, fuentes y páginas, condiciones, estado de revisión, conceptos indispensables y errores de la rúbrica. Las abiertas admiten puntuaciones parciales y una explicación de la autoevaluación; campos vacíos quedan pendientes, mientras que un cero explícito es una puntuación válida.

Solo se conserva el último intento, igual que en fase 1. Elegir otra opción en el selector no sustituye el intento. Iniciar otra demo/piloto pide confirmación identificando el examen nuevo y el guardado; cancelar conserva el anterior. La pantalla identifica qué examen pertenece al intento recuperado. El estudio usa su propia clave de progreso y no se mezcla con las respuestas del simulacro.

Para estudiar, usa la dirección local habitual mientras su servidor esté activo, o abre `web/dist/index.html`. Todos los PNG y datos necesarios están dentro de `web/dist`; no dependen de rutas Windows absolutas ni requieren los PDF para mostrar el examen. Las referencias identifican el documento original y su página, pero los PDF no se han copiado a la web.

## Política de puntuación

Campo configurable `floorPolicy`:

| Valor | Comportamiento |
|---|---|
| `section` | Mínimo cero en la nota V/F; comportamiento anterior. Es el valor por defecto si el campo falta, incluyendo intentos de fase 1. |
| `global` | Conserva nota V/F negativa y aplica mínimo cero solo a la nota global completa. Configuración inicial del piloto. |
| `none` | Conserva notas negativas sin aplicar mínimo. Disponible para otras configuraciones. |

V/F: `netos = aciertos − penalización × fallos`, `nota bruta = netos / número de V/F × 10`. Abiertas: `nota = puntos autoasignados / máximos de rúbrica × 10`. Pesos efectivos: `peso / suma de pesos`; la ponderación se calcula antes del mínimo global y sin redondeos intermedios. Las notas visibles se redondean a un decimal, pero los puntos netos preservan precisión suficiente para mostrar −0,33. El resultado final sigue pendiente hasta completar la autoevaluación de los bloques con peso positivo.

Ejemplo verificado: 30 V/F incorrectas dan −9,9 puntos y −3,3/10 en esa sección. Con abiertas a cero, la contribución ponderada es −0,99 y la nota global del piloto es 0. Con todas las rúbricas al 50 %, la nota global es **2,51/10**, mostrada como 2,5. La demo sin `floorPolicy` conserva su truncamiento de sección anterior. Esta política es orientativa para el piloto; no se atribuye al profesor.

## Integridad y recursos visuales

`web/preparar-piloto.cjs` adapta las fichas aprobadas a la estructura del motor. Los IDs técnicos se prefijan `piloto-01-` para separarlos de la demo; `originalId` conserva VF01…D05 y `matrixId` la fila de matriz. Esta adaptación de identificadores y campos no altera contenido académico. Una respuesta escrita única por pregunta permite contestar todos los apartados de su enunciado; cada criterio y puntuación parcial se conserva por separado.

Los siete PNG se copiaron byte a byte a `web/dist/assets/piloto-01/`; se compararon SHA-256 con el manifiesto de fase 2B. El estímulo admite varias imágenes por ejercicio y valida todas sus rutas locales. Las etiquetas y textos alternativos son neutrales; no nombran las soluciones microestructurales. El estudiante puede abrir cada imagen en otra pestaña y ampliar con los controles del navegador.

Se comprobó en navegador la carga de los siete archivos (dimensiones originales y `naturalWidth > 0`), la ampliación de la tabla V01 y curva C de V02, y la legibilidad cualitativa de figuras y ejes. No se han retocado microestructuras ni números. Se mantienen las condiciones experimentales en el enunciado: V01 distingue fotos al 12 % Si de tabla al 13 %; V02 distingue IMI 834 a 600 °C/210 MPa y Ti–6Al–4V a 480 °C/200 MPa, ambas 100 h, más maduración final de la segunda. Las fotos sin escala no se usan para medir μm. La calidad permite interpretación de morfología y tendencia, no medición calibrada ni ajuste cuantitativo fino; el cotejo no es validación experimental.

## Carga de trabajo de los desarrollos

Se conservan los cinco originales. Las soluciones completas de fase 2B caben en dos o tres párrafos, y las rúbricas permiten una respuesta causal compacta: no exigen reproducir palabra por palabra todo el modelo. No se han añadido catálogos, cálculos o parámetros externos.

| Pregunta | Organización suficiente de la respuesta | Valoración |
|---|---|---|
| D01 | Solución/temple y sección; alivio de tensiones/maduración y compromisos. | Dos párrafos técnicamente completos son suficientes. |
| D02 | Requisitos y candidato inferior; superior/unión con T6–T7; selección multivariable. | Tres párrafos. Evitar convertir ejemplos comerciales en lista obligatoria. |
| D03 | Casi α caliente y compromiso fluencia–LCF; familia estructural y endurecimiento; riesgo de fabricación. | Tres párrafos. Las alternativas justificadas siguen siendo admisibles. |
| D04 | Cr–Mo–V; maraging; controles de sección/calidad/tensiones y H. | Es la más densa, pero tres párrafos pueden cubrir los cuatro criterios sin recetas. Mantener la rúbrica flexible indicada en 2B. |
| D05 | H/tensión/grieta; riesgo galvánico y dos medidas; selección y límites del diagnóstico. | Tres párrafos. No se requiere demostrar una causa ni cuantificar vida. |

No se detectó una pregunta que obligue a un desarrollo desproporcionado respecto a su rúbrica. La duración del examen completo y la dificultad real siguen pendientes de un pilotaje con estudiantes; el encargo no fija duración. No se recomienda recortar contenido sin ese resultado y autorización.

## Pruebas y recorrido en navegador

Ejecutadas las tres suites anteriores: contenido (10 temas, 260 tarjetas, 40 casos), progreso (28 pruebas) y simulacro (23 pruebas). Añadida `web/pruebas-piloto.cjs`: 15 pruebas específicas. Se comprobaron:

- 42 IDs únicos, 30/5/2/5 formatos, 15 V/15 F y dificultad 6/12/12.
- Igualdad de enunciados, claves, modelos, explicaciones, condiciones, metadatos y rúbricas con las 42 fichas aprobadas.
- Sumas de rúbricas, total 100 y distribución 45/26/29, con D05 sin duplicación.
- Referencias existentes y páginas dentro del inventario; siete PNG idénticos por hash y rutas relativas seguras.
- Demo compilada idéntica a su JSON original y piloto compilado idéntico a sus datos.
- Negativos, ceros, blancos, pleno, parciales, pesos normalizados y tres políticas de mínimo; rechazo de política inválida.
- Guardado/recuperación de intento, política, textos, corrección y rúbricas, y aislamiento del progreso de estudio.
- Distinción entre cotejo documental y publicación «validado»; validación de todas las imágenes de cada estímulo.

Recorrido real en navegador en puerto 8003, separado de los intentos personales de 8000: inicio de demo, respuesta, selección de piloto, confirmación de sustitución y cancelación preservando demo, inicio de piloto, 30 V/F, navegación de las justificadas, V01/V02, desarrollo, recarga recuperando texto y posición, entrega con cancelación/confirmación, consulta de soluciones y 54 criterios de las 12 preguntas abiertas. Se verificaron cero global, parciales y recarga de la corrección. Los valores autoasignados fueron datos de prueba del motor, no evaluación académica del estudiante.

También se recorrieron las 30 vistas antiguas (Tarjetas/Casos/Mapa de los diez temas) con contenido visible; la consola del recorrido no mostró errores ni avisos. No se ha valorado el progreso personal durante estas pruebas. La captura `web/vista-piloto-fase2c.png` muestra el selector y aviso del piloto.

Comandos de reproducción, desde el proyecto:

```powershell
node web/preparar-piloto.cjs
node web/compilar-simulacros.cjs
node web/pruebas-contenido.cjs
node web/pruebas-progreso.cjs
node web/pruebas-simulacro.cjs
node web/pruebas-piloto.cjs
node web/servir.cjs
```

El adaptador necesita las fichas y manifiesto de `borradores/fase2b` para regenerar; la web generada no depende de ellos durante el estudio. No se necesita instalar dependencias. Las suites de integridad comparan con la fase 2B y los originales locales; no sustituyen revisión científica del profesor.

## Incidencias y archivos

| Incidencia | Estado |
|---|---|
| Truncamiento V/F antiguo incompatible con piloto | Resuelto mediante política configurable; demo y sesiones antiguas conservan valor por defecto anterior. |
| Cabecera seguía diciendo que solo existía demo | Corregida en el contenedor de simulacro. |
| Un estímulo antiguo admitía una sola imagen | Añadida colección de imágenes; se mantiene el formato anterior de la demo. |
| Confusión entre examen seleccionado e intento guardado | Título del intento visible; confirmación nombra ambos; cancelación comprobada. |
| Puerto de prueba aislado sin acceso desde navegador en entorno restringido | Resuelto iniciando servidor local autorizado en 8003; no se cambió la red ni el servidor habitual. |
| Escalas/calidad y discrepancias documentales de fase 2B | Se conservan las exclusiones y limitaciones aprobadas; no incorporados contenidos dudosos nuevos. |
| D04 relativamente densa | Conservada, viable en tres párrafos con rúbrica flexible; verificar tiempo real en pilotaje. |

Modificados: `web/dist/index.html`, `simulacro-motor.js`, `simulacro-ui.js`, `simulacro.css` y `simulacros-contenido.js`. Añadidos: `web/simulacros/piloto-01.json`, siete PNG en `web/dist/assets/piloto-01/`, adaptador, suite de pruebas, captura y este informe. El resto del estudio (`web/temas`, `contenido.js`, `app.js`, `progreso.js`), la demo JSON, los PDF y los documentos de fase 2B no se han modificado. No se eliminó ningún archivo antiguo. No se ha actualizado ni sustituido el ZIP histórico; para estudiar el piloto se usa la carpeta `web/dist` actual.
