# Comprobaciones del paso 2

Registro del **2 de octubre de 2026**. Las pruebas del navegador se realizaron en `http://127.0.0.1:8001/`, un origen separado del enlace habitual `http://127.0.0.1:8000/`. Así el reinicio y la importación de prueba no afectaron al progreso del usuario en el puerto 8000.

El piloto integrado contiene **26 tarjetas, 5 casos y un mapa de 12 relaciones y 2 huecos**. La primera tabla conserva las pruebas de la muestra inicial; el apartado de integración registra las comprobaciones de la ampliación. El piloto todavía no cubre todo el tema.

## Pruebas automáticas

```powershell
node web/pruebas-progreso.cjs
node web/pruebas-contenido.cjs
```

El módulo de progreso superó **28 pruebas**: intervalos iniciales y sucesivos, límite de 365 días, repaso tardío, duración UTC durante un cambio de hora, persistencia, errores de almacenamiento, datos corruptos preservados, importación atómica, claves maliciosas, compatibilidad entre entornos e ida y vuelta de copias grandes con acentos.

Las comprobaciones estructurales del contenido verifican las 26 tarjetas, los 5 casos, las 12 relaciones, los identificadores conservados de la muestra, los campos de las actividades, las opciones de los huecos y las referencias a archivos y páginas. Se comprueba que las páginas impresas del capítulo 4 correspondan al pliego de la página PDF indicada y que cada actividad incluya resumen y libro. Estas pruebas no sustituyen la lectura y el contraste académico de los PDF. Los tres scripts de la web superan también la comprobación de sintaxis de Node.

## Flujos comprobados en el navegador

| Flujo | Resultado observado |
|---|---|
| Tarjeta inicial | Respuesta y botones de valoración ocultos antes de pulsar «Mostrar respuesta». |
| Primera valoración «Bien» | Siguiente repaso a 3 días. |
| Primera valoración «No lo sabía» | Siguiente repaso a 10 minutos. |
| Primera valoración «Muy fácil» | Siguiente repaso a 7 días. |
| Recarga | Se recuperan las valoraciones guardadas y las respuestas del caso ya consultado. |
| Comprobar mapa vacío | Se indica que faltan respuestas o hay errores; no se marca como completado. |
| Completar correctamente el mapa | Se guarda y el contador de mapas pasa a 1/1. |
| Cambiar una respuesta del mapa tras comprobar | Se retira el resultado anterior para evitar mostrar una corrección desactualizada. |
| Concepto «Recocido» en el mapa | Abre sus actividades relacionadas y permite llegar a la tarjeta filtrada de ese concepto. |
| Exportar | La ventana prepara un JSON con 3 tarjetas valoradas, 1 caso y 1 mapa en los datos de prueba. Se verificó el texto de la copia. |
| Cancelar reinicio | Mantiene el progreso existente. |
| Confirmar reinicio | Devuelve el progreso a su estado vacío. |
| Importar la misma copia exportada | El selector de archivos carga la copia y recupera los registros de 3 tarjetas, 1 caso y 1 mapa. |
| Vencimiento del repaso corto | Al cumplirse los 10 minutos, la tarjeta de plasticidad vuelve a estar pendiente: 1 de las 3 tarjetas de la muestra. |

Se probaron también las herramientas opcionales WebMCP de consulta de progreso y navegación entre actividades, con parámetros válidos e inválidos. La consulta devuelve estado y cantidades; no revela soluciones.

## Revisión visual y límites de la evidencia

Se revisaron tarjetas, casos y mapa a **390 y 1280 píxeles de ancho**. En móvil, el ancho del documento fue 375 píxeles para una ventana de 390; en ordenador, 1265 para 1280. Las vistas revisadas no presentan desbordamiento horizontal. Se inspeccionaron el formulario del caso y el bloque desplegable del mapa; el progreso pasa debajo de la actividad en móvil. La captura de la versión integrada está en `vista-piloto.png`.

El navegador interno agotó el tiempo de espera al intentar observar la descarga directa. **No queda confirmada esa descarga mediante la prueba automatizada.** Sí se comprobó la alternativa del texto en la ventana de exportación y la recuperación mediante importación del JSON correspondiente.

## Comprobaciones de integración

- Al cargar el contenido ampliado en el origen de pruebas se conservaron los registros anteriores: 3 tarjetas de 26, 1 caso de 5 y 1 mapa de 1.
- El selector ofrece los cinco casos y muestra uno cada vez. Un borrador del caso de acritud se recupera al volver a él; otro caso empieza con sus campos vacíos y solución oculta.
- El caso de sobremaduración permite elegir «Disminuye» y «No se puede determinar», escribir el razonamiento y consultar los criterios. El contador pasó a 2 casos de 5. Tras recargar, las respuestas y el razonamiento se conservaron, con la solución oculta.
- El caso de enfriamiento muestra sus opciones propias «Sí», «No» y «No se puede determinar».
- Los dos huecos del mapa siguen dando el resultado correcto. El bloque nuevo contiene seis relaciones con fuentes; «Ver mapa completo» lo abre y muestra la explicación.
- El concepto «Maduración natural» permite abrir las tres tarjetas y el caso asociados a maduración. La vista filtrada conserva oculta la respuesta de la tarjeta.
- No aparecieron errores ni advertencias en la consola del navegador durante estas comprobaciones finales.

La ampliación pasó estas comprobaciones y sus referencias se contrastaron con los originales. Eso valida las actividades incorporadas dentro de su alcance, no el tema completo ni posibles normas externas. Esta versión sigue siendo local.

## Revisión del nivel de las preguntas

Después del comentario del usuario se han reformulado 23 tarjetas, reforzado las justificaciones y criterios de los cinco casos y añadido opciones más próximas entre sí en el mapa. Se conservan las 26 tarjetas, los 5 casos, las 12 relaciones, los dos huecos, sus soluciones y los IDs y el orden de todas las actividades.

- `node --check web/dist/contenido.js` pasa y `node web/pruebas-contenido.cjs` confirma la estructura, las fuentes y su paginación tras los cambios.
- Se revisaron visualmente las páginas relevantes del resumen y del libro. Las referencias añadidas sustentan el alcance nuevo de las preguntas; no se extrajeron cifras aproximadas de gráficos.
- La vista del navegador carga los enunciados nuevos y recupera el progreso previo. La respuesta de la tarjeta sigue oculta antes de pulsar el botón y aparece correctamente después.
- Se inspeccionaron en móvil un enunciado largo con su respuesta y la justificación del caso de quemado. El documento ocupa 375 píxeles en una ventana de 390, sin desbordamiento horizontal.
- La navegación entre actividades y la consulta de una respuesta de tarjeta no alteraron los contadores de progreso; no se valoraron tarjetas ni se registraron casos o mapas durante esta comprobación. No hubo errores ni advertencias en la consola.
- Se restauró el tamaño normal y se guardó `vista-nivel-preguntas.png`, con una de las tarjetas reformuladas.

La interfaz y el módulo de progreso no han cambiado en esta revisión. Las pruebas de persistencia y copias del módulo siguen siendo las del apartado anterior; esta comprobación nueva se concentra en los datos y su presentación.

## Versión de diez temas — 5 de octubre de 2026

- Contenido: 260 tarjetas, 40 casos y 10 mapas, uno por tema. Todas las páginas referenciadas están dentro del inventario de originales; IDs originales del piloto conservados.
- `node web/pruebas-contenido.cjs`: correcto. Valida los diez temas, archivos locales, límites de página, conceptos, IDs y huecos, además de las opciones específicas por predicción.
- `node web/pruebas-progreso.cjs`: 28 pruebas correctas. Sin cambios en el formato de almacenamiento ni las reglas de repaso.
- Navegador: comprobadas las 30 combinaciones de tema y vista; sin errores de JavaScript en ese recorrido.
- Caso del tema 10: introducidas dos predicciones y justificación; la solución y criterios se muestran y se registra la consulta. Caso del tema 9: sin respuestas no se revela la solución; después de introducirlas se permite comparar.
- Mapa del tema 10: completados ambos huecos y mostrada la confirmación de respuestas correctas. Consultar mapa sin completarlo no acredita dominio.
- Índice: abrir «Corrosión bajo tensiones» selecciona tema 2 y filtra sus tarjetas. La guía HTML abre y permite volver al estudio.
- Vista móvil de 390 px: mapa legible y sin desbordamiento horizontal (ancho de documento 375 px, reservada barra de desplazamiento). Vista de escritorio: captura `web/vista-completa.jpg`.
- Se usó el origen de pruebas 8001 para registrar actividades. No se reinició ni escribió progreso de estudio del origen habitual 8000.
- La caché se evita con versión en los recursos del HTML; al actualizar código, cambiar esa versión evita servir una copia antigua.
- ZIP listo con seis archivos de la web y sin PDF originales. Publicación por enlace pendiente de proveedor y acceso a cuenta.

Límite académico: las comprobaciones automáticas validan estructura y referencias, no la corrección científica. Los temas 2–8 se basan principalmente en los resúmenes leídos visualmente; no se ha hecho un contraste exhaustivo de cada afirmación con cada página del libro. La versión cubre bloques principales y no transcribe todas las tablas, figuras ni el ejercicio escaneado de titanio.

