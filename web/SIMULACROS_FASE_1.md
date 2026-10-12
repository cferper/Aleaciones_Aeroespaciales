# Simulacros de examen — Fase 1

Implementado el 12 de octubre de 2026 en el checkout original de `Aleaciones_Aeroespaciales`. Sin commits, push ni cambios de rama. No se han modificado los PDF, el banco de temas, el compilador de estudio ni su lógica de repaso.

## Uso y ejecución en VS Code

1. Abre la carpeta `C:\Proyectos\Web_estudio\Aleaciones_Aeroespaciales` en VS Code: Archivo → Abrir carpeta.
2. Abre Terminal → Nuevo terminal. Comprueba que estás en esa carpeta.
3. Ejecuta `node web/servir.cjs` y abre http://127.0.0.1:8000/ en el navegador. Detén el servidor con Ctrl+C. Si el puerto está ocupado, usa `node web/servir.cjs 8001` y abre el puerto 8001; los datos locales se guardan por dirección y puerto.
4. También sigue funcionando abrir `web/dist/index.html` directamente, sin servidor. Mantén juntos todos los archivos de `dist`. El almacenamiento de archivos locales depende del navegador; para el uso habitual se recomienda HTTP local.
5. Selecciona **Simulacros de examen**. Ajusta cantidades, pesos y penalización si lo necesitas. Los pesos efectivos y el total se actualizan antes de iniciar.
6. Responde y avanza, retrocede o salta a una pregunta. Puedes volver al estudio o recargar; al abrir Simulacros se recupera el intento local y la posición guardada.
7. **Entregar simulacro** abre una confirmación con las preguntas completamente en blanco. Cancelar conserva el examen. Confirmar bloquea las respuestas y muestra la corrección.
8. Para los bloques abiertos, introduce puntos en cada criterio y una explicación de tu valoración. Se permiten decimales. Un vacío significa pendiente; un cero escrito significa cero puntos. La nota final aparece cuando están completos los bloques que tienen peso positivo.

No se necesita `npm install`. Node.js ya estaba disponible en el equipo; Python no está disponible actualmente. Se ha añadido el servidor de Node como alternativa al comando Python documentado previamente.

## Datos de demostración

El único simulacro es `demo-infraestructura`, con **3 V/F + 1 justificada + 1 tabla con dos apartados + 1 desarrollo = 6 preguntas**. Todos los IDs empiezan por `demo-`, la publicación es `demo`, la revisión de cada pregunta es `demostracion`, y no tienen referencias PDF. Las soluciones sirven para comprobar la infraestructura y **no se presentan como académicamente verificadas**.

La tabla utiliza materiales ficticios A/B y datos sintéticos identificados en pantalla. No se ha generado ni incorporado ninguna micrografía ficticia. No se han creado las 30 + 5 + 2 + 4–5 preguntas definitivas. La distribución prevista de 41–42 preguntas aparece como referencia orientativa, diferenciada de la demostración real.

## Archivos

Modificados:

- `web/dist/index.html`: selector de modalidad, contenedor independiente y diálogo de confirmación. Conserva todos los controles y scripts del repaso.
- `README.md`: enlace e instrucciones del nuevo modo.

Creados:

- `web/simulacros/demo.json`: datos, configuración y metadatos de la demostración.
- `web/compilar-simulacros.cjs`: valida los JSON y genera el archivo local para el navegador.
- `web/dist/simulacros-contenido.js`: contenido generado, incluido para abrir sin servidor.
- `web/dist/simulacro-motor.js`: validación, selección, puntuación y persistencia; reutilizable en navegador y Node.
- `web/dist/simulacro-ui.js`: inicio, navegación, edición, entrega, corrección y autoevaluación.
- `web/dist/simulacro.css`: estilos del nuevo modo, con las variables visuales existentes.
- `web/pruebas-simulacro.cjs`: pruebas del nuevo motor.
- `web/servir.cjs`: servidor opcional limitado a `web/dist` y a `127.0.0.1`.
- `web/SIMULACROS_FASE_1.md`: esta guía.
- `web/vista-simulacro-fase1.png`: captura de la interfaz comprobada en el navegador.

## Decisiones de programación

**Separar datos, reglas e interfaz.** El JSON dice qué preguntar; el motor calcula; la interfaz muestra controles y recoge respuestas. Así se puede ampliar el banco sin reescribir la pantalla, y comprobar matemáticamente la corrección sin abrir un navegador. El repaso sigue usando `StudyContent` y `StudyProgress`; el simulacro usa `ExamContent` y `ExamEngine`.

**Integración pequeña.** El selector muestra u oculta dos contenedores. No reemplaza el panel de estudio ni sus pestañas, por lo que cambiar de modalidad conserva la actividad de estudio en memoria. El enlace de salto accesible apunta al panel correspondiente.

**Guardar cada entrada.** `localStorage` conserva un objeto con versión, configuración y preguntas del intento, estado (`running` o `submitted`), posición, respuestas, valoraciones y fechas. El intento guarda una copia del examen: editar el JSON después no cambia su corrección. La clave `aleaciones-simulacro-v1` es independiente de `aleaciones-progreso-v1`. El reinicio, exportación e importación del progreso de estudio no afectan al examen.

**Tratar los fallos de guardado.** Se muestra un aviso si falta almacenamiento, se agota la cuota o la sesión es ilegible. El dato corrupto se conserva hasta confirmar un nuevo intento. Una segunda pestaña que cambie el examen bloquea la edición de la primera y pide recargar para evitar sobrescrituras. No existe sincronización entre dispositivos.

**Corrección honesta.** Solo V/F se autocorrige. No hay búsqueda de palabras clave ni corrección automática de la justificación. Incluso la elección del V/F justificado forma parte de su rúbrica manual. Cada criterio admite puntuación parcial, y una explicación de la valoración es necesaria para completar la autoevaluación.

**Fórmulas.** V/F: `netos = aciertos − penalización × fallos`; `nota = max(0, netos / cantidad × 10)`. La interfaz conserva los puntos netos negativos. Para cada bloque abierto: `nota = suma de puntos autoasignados / suma de máximos de rúbrica × 10`. Dentro de un bloque, una pregunta con más puntos máximos pesa más. Configura las rúbricas con el mismo máximo si deseas igual peso por pregunta. Los pesos de bloques se normalizan con `peso / suma de pesos`. Un bloque con cero preguntas exige peso cero. Un bloque con preguntas y peso cero puede practicarse, pero no retrasa la nota final. Las notas se muestran con un decimal; se calcula sin redondear los valores intermedios.

**Estados pendientes.** No se confunde una sección sin evaluar con una sección de nota cero. Antes de completar los bloques con peso positivo se muestra una contribución provisional, identificada como incompleta. Los resultados nunca se insertan en el DOM antes de entregar, aunque el contenido es inspeccionable como en cualquier web estática local: no es una plataforma antitrampas.

## Estructura extensible del JSON

Un simulacro contiene `version`, `id`, `title`, `status`, `penalty`, `blocks` y `questions`. Cada bloque especifica `type`, `title`, `count` y `weight`. Los tipos son `vf`, `justificada`, `visual` y `desarrollo`. Para aumentar cantidades, incorpora preguntas autorizadas al JSON y ajusta `count`; la validación impide pedir más preguntas de las disponibles. Se eligen las primeras N de cada tipo, en orden, sin sorteo.

Cada pregunta contiene:

| Campo | Función |
| --- | --- |
| `id` | ID estable y único en el examen |
| `topic`, `subtopic` | Tema y subtema |
| `type`, `prompt` | Formato y enunciado |
| `difficulty`, `cognitiveLevel` | Dificultad prevista y nivel cognitivo |
| `correct` | Booleano, necesario en V/F y justificada |
| `model`, `explanation` | Solución modelo y explicación |
| `parts` | Apartados con ID y enunciado, para respuestas escritas |
| `rubric` | Criterios con ID, descripción (`label`) y puntuación máxima (`max`) |
| `sources` | Referencias con `document`, `pdfPage` y `section` opcional |
| `reviewStatus` | `demostracion`, `pendiente` o `verificada` |
| `stimulus` | Estímulo de una pregunta visual |

Las tablas tienen `kind: "table"`, `headers`, `rows`, `context`, `source` y un indicador `synthetic` cuando corresponda. Para micrografías utiliza `kind: "image"`, un archivo **real** dentro de `web/dist/assets/`, su ruta `src: "assets/archivo.jpg"`, descripción `alt`, contexto y procedencia identificable. La imagen puede abrirse ampliada. Los tipos `diagram` y `curve` usan la misma infraestructura de imagen, sin generar gráficos ficticios. La procedencia debe identificar documento/página o autor/origen; hay que comprobar los derechos de uso y la correspondencia académica antes de incorporar archivos reales.

El estado de publicación `validado` exige que todas las preguntas estén marcadas `verificada`, tengan referencias PDF y no utilicen estímulos sintéticos. Es una barrera estructural: **el programa no certifica la revisión científica**. La revisión y las fuentes deben aportarse y comprobarse antes de marcar un banco como validado. No cambies la demo a validado.

Después de editar un JSON de simulacros:

```powershell
node web/compilar-simulacros.cjs
node web/pruebas-simulacro.cjs
```

El compilador solo escribe `simulacros-contenido.js`; no modifica `contenido.js` ni `web/temas`. Los archivos generados se cargan con `<script>` en lugar de `fetch`, manteniendo la apertura directa desde disco.

## Validación

Antes de editar: contenido existente correcto (10 temas, 260 tarjetas y 40 casos); 28 pruebas de progreso aprobadas.

Pruebas del simulacro: 23 casos aprobados. Cubren blancos, puntuación negativa, acierto/fallo/blanco, máximos, autoevaluación razonada y parcial, cero explícito, ausencia de penalización en bloques abiertos, normalización de pesos, bloques desactivados, configuración inválida, restricciones de publicación y estímulos, persistencia del texto y la posición, copia del contenido del intento, fallos/corrupción de almacenamiento e independencia del estudio.

Comprobación en navegador HTTP local: apertura de ambas modalidades, selección V/F, salto entre preguntas, justificación escrita, tabla con dos apartados, desarrollo con varios párrafos, recuperación tras recarga, corrección con blancos, rúbricas y actualización de nota a 4,5/10 en un intento de prueba con V/F 3,3/10 y tres bloques autoevaluados a 5/10. Comprobados los diálogos HTML de sustitución/entrega, cancelar y entregar con seis preguntas en blanco, y regreso a Casos y Mapa conservando los contadores de progreso de estudio.

Para repetir todas las comprobaciones automáticas:

```powershell
node web/pruebas-contenido.cjs
node web/pruebas-progreso.cjs
node web/pruebas-simulacro.cjs
git diff --check
git status --short
```

Las pruebas de contenido requieren los PDF locales originales. `git status` muestra archivos modificados (`M`) y nuevos (`??`); todavía no están confirmados en un commit. `git diff` permite revisar los cambios de archivos ya existentes. Para revisar los nuevos, ábrelos en VS Code. No se han ejecutado `git commit` ni `git push`.

## Pendiente y límites

- Banco definitivo y revisión académica, pendientes de autorización.
- Micrografías reales con fuentes y permisos: el renderizado está preparado, pero la demostración visual utiliza únicamente una tabla sintética.
- Se guarda un único intento; iniciar otro sustituye el anterior con confirmación. No hay historial, exportación de simulacros, sincronización, cronómetro ni generación aleatoria en esta fase.
- Las autoevaluaciones dependen del criterio del estudiante. La nota es orientativa y la configuración debe contrastarse con el profesor.
- Verificado el recorrido de navegador en escritorio por HTTP; no se ha realizado una matriz de navegadores, dispositivos móviles ni apertura `file://`. La compatibilidad con apertura directa se mantiene por la arquitectura de scripts locales.
