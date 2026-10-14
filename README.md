# Web de estudio de Aleaciones Aeroespaciales

**[Español](#versión-en-español) · [English](#aerospace-alloys-study-web)**

## Versión en español

Web de estudio de **Aleaciones Aeroespaciales**, asignatura de cuarto curso de Ingeniería Aeroespacial. Combina el aprendizaje progresivo por temas con simulacros completos de examen. La interfaz, las preguntas y las soluciones están en **español**. Este README incluye primero la versión en español y, a continuación, la versión en inglés.

La versión actual incluye:

- **10 temas, 312 flashcards activas y 9 archivadas**: 321 tarjetas almacenadas en total.
- **Tres niveles de aprendizaje** y filtros combinables por tema, concepto y nivel.
- **40 casos de razonamiento** y **10 mapas conceptuales interactivos con 20 huecos**.
- **Tres simulacros seleccionables**: demostración técnica, Piloto 01 y Piloto 02.
- Repaso espaciado, almacenamiento en el navegador y copias JSON del progreso de estudio.
- Recuperación de respuestas de examen, confirmación de entrega, soluciones desarrolladas, rúbricas con puntuaciones parciales y calificaciones ponderadas.

La web utiliza HTML, CSS y JavaScript sin frameworks. La versión completa lista para usar está en [`web/dist/`](web/dist/). Para estudiar no hace falta una cuenta, una base de datos en servidor ni instalar dependencias.

## Abrir la web

### Servidor HTTP local: recomendado para el uso habitual

Desde la raíz del proyecto, ejecuta uno de estos comandos:

```powershell
node web/servir.cjs
```

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory web/dist
```

Si el lanzador `py` de Windows no está disponible, utiliza `python` o `python3`. Abre **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)** y mantén abierta la terminal. Pulsa `Ctrl+C` para detener el servidor. El servidor Node también admite un puerto, por ejemplo: `node web/servir.cjs 8001`.

Ambas opciones sirven únicamente la carpeta de la web en este equipo. No exponen los PDF originales ni crean una dirección pública. Si tu servidor habitual ya está en marcha, basta con recargar esa dirección.

### Abrir directamente o compartir una copia sin conexión

Descarga y descomprime el repositorio, o clónalo:

```sh
git clone https://github.com/cferper/Aleaciones_Aeroespaciales.git
cd Aleaciones_Aeroespaciales
```

Abre [`web/dist/index.html`](web/dist/index.html) en un navegador moderno con JavaScript activado. Conserva junta toda la carpeta `web/dist/`, incluidos scripts, estilos y `assets/`. El contenido compilado se carga como scripts normales, por lo que estudiar no requiere un servidor ni descargar archivos JSON.

El almacenamiento de los archivos abiertos directamente puede variar entre navegadores. Para el uso habitual, utiliza el mismo navegador y la misma dirección HTTP. Cambiar el nombre de host, el puerto, el protocolo o el dispositivo crea una ubicación de almacenamiento diferente; `localhost` y `127.0.0.1` son orígenes distintos. Exporta tu progreso de estudio antes de cambiar de dirección.

## Estudiar por temas: funcionamiento

Elige un tema y cambia entre **Tarjetas**, **Casos** y **Mapa**. El índice de la asignatura permite abrir directamente temas o conceptos relacionados. Los conceptos del mapa en los que puedes hacer clic dan acceso a sus tarjetas y casos.

El enfoque académico se centra en composición y elementos aleantes, tratamientos térmicos, transformaciones de fase, microestructura y propiedades mecánicas y ambientales. Las comparaciones y aplicaciones utilizan condiciones definidas del material y de servicio. El aluminio y el titanio reciben especial atención; Al–Li conserva sus mecanismos técnicos relevantes con menor peso de la historia.

### Flashcards y niveles de aprendizaje

| Nivel en la interfaz | Tarea de aprendizaje |
|---|---|
| **Fundamentos** | Identificar familias, elementos aleantes, fases, tratamientos y propiedades básicas. |
| **Comprensión** | Explicar mecanismos y relaciones entre composición, procesado, microestructura y propiedades. |
| **Avanzado** | Comparar aleaciones y rutas de procesado, reconstruir transformaciones, analizar hipótesis y justificar compromisos entre propiedades. |

**Todos** incluye todos los niveles. Combina el nivel seleccionado con un tema y un concepto. Los filtros de nivel y archivo se aplican a las flashcards; el filtro de concepto también se aplica a los casos. Los mapas conservan todas sus relaciones y ejercicios.

Intenta responder antes de pulsar **Mostrar respuesta**. La tarjeta muestra la respuesta y, cuando aporta información adicional, una explicación técnica. Las condiciones científicas necesarias se integran en esa explicación; no se muestran apartados redundantes ni estados editoriales. Las fuentes se consultan mediante un desplegable. Los metadatos de objetivos, conceptos indispensables, dificultad y trazabilidad se conservan en los archivos internos.

Valora lo que recuerdas con **No lo sabía**, **Me costó**, **Bien** o **Muy fácil**. La valoración guarda el repaso y avanza la sesión. Se consideran pendientes las tarjetas sin repasar y aquellas cuya fecha de repaso ya ha llegado.

- **Practicar todas** incluye las tarjetas permitidas por los filtros actuales, aunque su próximo repaso sea en el futuro.
- **Practicar contenido ampliado** abre una sesión voluntaria con las tarjetas marcadas como ampliadas dentro de los filtros actuales.
- **Todos los pendientes del tema** elimina las restricciones de nivel y concepto e incluye las tarjetas archivadas de ese tema.
- **Pendientes de los diez temas** abre una sesión conjunta de pendientes sin esas restricciones, incluidas las archivadas. Cada tarjeta indica su tema.
- **Incluir tarjetas archivadas** permite volver a acceder a actividades antiguas que se mantienen fuera de las sesiones normales de estudio.

Las tarjetas ampliadas conservan su marca interna y pueden practicarse con el botón correspondiente, sin avisos editoriales dentro de cada tarjeta. Leer, revelar o filtrar no reinicia las valoraciones ni las fechas anteriores. Valorar durante una práctica adicional sí actualiza la programación del repaso.

La actualización de la fase 4 conservó los 260 identificadores originales: 178 tarjetas mantuvieron su pregunta, respuesta y explicación, 73 se mejoraron y 9 se archivaron. Hay **61 tarjetas avanzadas nuevas**: 27 de aluminio, 16 de titanio y 18 del resto de temas. Esto incluye la ampliación prevista de 60 tarjetas y una nueva versión de titanio cuyo objetivo difiere del anterior. Un identificador nuevo empieza sin transferir el dominio previo; los registros archivados siguen disponibles.

### Casos de razonamiento

La tarjeta de interpretación de acritud y el caso **Aumentar la acritud** comparten una gráfica original de 5052. El caso **Recocer una aleación con acritud** utiliza otra gráfica auténtica: 33 % de reducción inicial y recocido de una hora. Las figuras se muestran antes de responder y se amplían en otra pestaña. Diez tarjetas con referencias visuales innecesarias se han reescrito como preguntas autónomas, conservando sus IDs y objetivos.

Cada caso presenta una situación inicial, un cambio controlado y unas condiciones que permanecen constantes. Selecciona dos predicciones y escribe una justificación técnica antes de pulsar **Comparar con la solución**.

La solución desarrollada y una lista de criterios de corrección ayudan a evaluar los mecanismos y sus límites. Las alternativas de predicción se adaptan al caso: algunas piden una tendencia y otras un juicio de sí o no. **Intentarlo otra vez** oculta la solución para realizar otro intento.

Consultar la solución guarda las respuestas del caso y la fecha de consulta. Es un registro de consulta, no una calificación automática ni una prueba de dominio. Los borradores de casos sin enviar permanecen en memoria durante la sesión de la página; no se guardan continuamente como las respuestas de examen. Catorce casos recibieron mejoras compatibles sin cambiar sus campos de predicción ni transferir su realización a un objetivo diferente.

### Mapas conceptuales interactivos

Cada tema tiene un mapa con **dos huecos seleccionables**, pistas opcionales y relaciones entre procesos, estructuras y propiedades. **Comprobar huecos** indica si ambas elecciones son correctas; solo una pareja completamente correcta registra el ejercicio como completado.

**Ver mapa completo** revela las relaciones y la explicación sin marcar el ejercicio como completado. **Volver a completar** inicia otro intento. Las respuestas completadas y sus fechas se guardan; las selecciones incompletas son borradores de la sesión. Los mapas actualizados conservan sus identificadores, conexiones y 20 claves de respuesta, con explicaciones mejoradas y 14 conjuntos de alternativas más homogéneas.

### Contenido por tema

Las cantidades por nivel de aprendizaje se refieren a las tarjetas **activas**. Cada tema también tiene un mapa con dos huecos.

| Tema | Fundamentos | Comprensión | Avanzado | Tarjetas activas | Archivadas | Casos |
|---|---:|---:|---:|---:|---:|---:|
| 1. Introducción al aluminio | 8 | 24 | 8 | 40 | 3 | 5 |
| 2. Corrosión en aluminio | 1 | 23 | 4 | 28 | 1 | 4 |
| 3. Aleaciones de aluminio de forja no tratables térmicamente | 2 | 14 | 6 | 22 | 0 | 3 |
| 4. Aleaciones de aluminio de forja tratables térmicamente | 3 | 20 | 12 | 35 | 2 | 4 |
| 5. Aleaciones de aluminio de moldeo | 4 | 21 | 4 | 29 | 0 | 4 |
| 6. Aleaciones de titanio | 5 | 25 | 18 | 48 | 1 | 5 |
| 7. Aceros de alta resistencia | 1 | 19 | 5 | 25 | 0 | 4 |
| 8. Aleaciones de magnesio | 2 | 22 | 5 | 29 | 0 | 4 |
| 9. Fractura de materiales metálicos | 3 | 27 | 5 | 35 | 0 | 4 |
| 10. Selección de materiales | 5 | 11 | 5 | 21 | 2 | 3 |
| **Total** | **34** | **206** | **72** | **312** | **9** | **40** |

El conjunto avanzado contiene 34 tarjetas de aluminio, 18 de titanio y 20 de otros temas: aproximadamente **47/25/28 %**. Las cantidades de tarjetas no son ponderaciones de puntos de examen ni introducen un algoritmo de repaso ponderado.

### Repaso espaciado y contadores

La programación utiliza una regla fija basada en la valoración de lo que recuerdas:

| Valoración | Primera valoración o intervalo previo en días igual a cero | Intervalo posterior en días |
|---|---|---|
| **No lo sabía** | 10 minutos | 10 minutos; el intervalo en días pasa a cero |
| **Me costó** | 2 días | Redondear hacia arriba `max(intervalo anterior, 1) × 1,2`, mínimo 1 día |
| **Bien** | 3 días | Redondear hacia arriba el intervalo anterior × 2 |
| **Muy fácil** | 7 días | Redondear hacia arriba el intervalo anterior × 3 |

Los intervalos en días tienen un máximo de 365 días. Las fechas se calculan desde el momento de la valoración; un día equivale a 24 horas transcurridas. Es una regla fija de programación, no un modelo adaptativo de hábitos de estudio. Consulta [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md).

La barra lateral distingue entre las tarjetas pendientes filtradas, las pendientes de todos los temas, el total de pendientes del tema seleccionado incluidas las archivadas, las tarjetas valoradas, los casos consultados y los mapas completados. Los filtros no ocultan los contadores totales.

## Simulacros de examen: funcionamiento

Cambia a **Simulacros de examen** y elige uno:

| Simulacro | Preguntas | Finalidad y estado |
|---|---:|---|
| **Demostración técnica** | 6: 3 V/F, 1 justificada, 1 visual y 1 de desarrollo | Demuestra el motor. Incluye una tabla didáctica sintética; no es un examen académico revisado. |
| **Piloto 01** | 42 | Piloto de estudio revisado documentalmente, con recursos reales de los PDF y referencias. |
| **Piloto 02 · Metalurgia** | 42 | Piloto revisado documentalmente, centrado en aleantes, tratamientos, transformaciones y relaciones entre microestructura y propiedades. |

Ningún piloto está validado oficialmente por el profesor. Su configuración, sus políticas de puntuación y su dificultad prevista son ajustes de estudio, no una predicción del examen real.

### Configuración y estructura del examen

Ambos pilotos utilizan inicialmente:

| Bloque | Preguntas | Peso en la nota |
|---|---:|---:|
| V/F | 30 | 30 % |
| V/F con justificación | 5 | 10 % |
| Interpretación visual | 2 | 20 % |
| Desarrollo | 5 | 40 % |
| **Total** | **42** | **100 %** |

Los repartos temáticos iniciales por puntos son **45/26/29 %** para aluminio, titanio y resto en el Piloto 01, y **45/25/30 %** en el Piloto 02. Son distribuciones de las preguntas incluidas, no una segunda ponderación aplicada por el motor.

Antes de empezar puedes reducir la cantidad de preguntas dentro de las disponibles en cada bloque, cambiar los pesos, modificar la penalización V/F y seleccionar la política de nota mínima. Los pesos se normalizan explícitamente si su suma difiere del 100 %. Un bloque sin preguntas debe tener peso cero. Cambiar las cantidades o los pesos también cambia el reparto temático.

Los pilotos son conjuntos fijos de preguntas. Al reducir una cantidad se seleccionan las primeras preguntas de ese bloque; la web no genera ni selecciona aleatoriamente un examen nuevo.

### Responder, navegar y recuperar

Utiliza **Anterior**, **Siguiente** o **Ir a una pregunta** para navegar. Puedes dejar en blanco las opciones V/F o los apartados escritos. Un indicador de progreso cuenta las preguntas con alguna respuesta; no certifica que estén completos todos sus apartados.

Las opciones, los textos, la posición de navegación y las autoevaluaciones posteriores mediante rúbricas se guardan en este navegador. Al recargar se recupera el intento almacenado. El intento contiene una copia de su examen, configuración, soluciones y rúbricas.

Hay **un único intento de examen almacenado para todo el catálogo**, no uno por piloto. Seleccionar otro examen no lo sustituye. Iniciar otro intento exige confirmación antes de reemplazar el intento guardado y su corrección; puedes retomar el existente desde la pantalla de preparación. Cambiar entre estudio y examen no borra ninguno de los registros.

**Entregar simulacro** exige confirmación e informa de las preguntas completamente en blanco. Tras la entrega, las respuestas quedan bloqueadas y se muestran las soluciones. Los cambios del examen desde otra pestaña del navegador provocan un aviso y obligan a recargar antes de continuar para evitar sobrescribir respuestas.

### Recursos visuales reales

El Piloto 01 incluye **siete PNG** y el Piloto 02 incluye **cinco PNG** extraídos de los PDF originales. El Piloto 02 utiliza un diagrama Al–Cu, rutas de tratamiento del aluminio, micrografías de Ti y una curva de α primaria. Son recursos locales de `web/dist/assets/` y no dependen de rutas absolutas de Windows.

Haz clic en una imagen para abrirla a tamaño original en otra pestaña y utiliza el zoom del navegador. Se conservan las etiquetas, unidades, escalas o aumentos y las condiciones experimentales y de interpretación según lo documentado. Algunas micrografías de Ti tienen una indicación de aumentos, pero no una barra de escala calibrada; las preguntas delimitan lo que puede inferirse. Los diagramas, esquemas de proceso y micrografías se identifican según su naturaleza real.

### Soluciones, rúbricas y puntuación

Tras la entrega, la corrección muestra las respuestas enviadas, las claves V/F correctas, los modelos desarrollados, las explicaciones, las páginas de las fuentes y los metadatos académicos disponibles de cada pregunta. Los metadatos de los pilotos incluyen condiciones, dificultad y conceptos indispensables; cuando se han proporcionado, también distinguen errores graves y omisiones secundarias. El Piloto 02 registra los objetivos y su relación con el Piloto 01.

En las V/F simples, la puntuación inicial es **+1 por acierto, −0,33 por fallo y 0 por respuesta en blanco**. La nota del bloque es `10 × (aciertos − penalización × fallos) / cantidad de V/F seleccionadas`, sujeta a la política de mínimo elegida.

Los otros tres bloques utilizan **autoevaluación del estudiante con rúbricas**, incluida la puntuación parcial. Introduce una puntuación para cada criterio y explica qué cubre tu respuesta y qué le falta. Cero es una puntuación explícita válida; un campo vacío queda pendiente. La web no corrige el texto por palabras clave ni utiliza corrección con IA. Las V/F justificadas se evalúan mediante su rúbrica, sin la penalización automática de las V/F simples.

Cada bloque se normaliza a una nota sobre 10 y contribuye según su peso normalizado. La nota final permanece pendiente hasta que todos los bloques con peso positivo tengan su evaluación completa. Las contribuciones parciales se identifican como tales; la nota final se muestra con un decimal.

Las políticas de mínimo son configurables:

- **Mínimo cero en V/F:** opción inicial de la demostración; los puntos netos V/F siguen visibles aunque la nota del bloque se limite a cero.
- **Mínimo cero solo en la nota global:** opción inicial de los pilotos; un bloque V/F negativo contribuye a la suma ponderada y solo el total final se limita a cero.
- **Sin mínimo:** se conservan las notas negativas.

Estas políticas son orientativas y no son reglas oficiales confirmadas del examen.

## Guardar y transferir datos

El estudio y los exámenes utilizan claves separadas de `localStorage` en el navegador:

| Registro | Clave | Qué se guarda |
|---|---|---|
| Progreso de estudio | `aleaciones-progreso-v1` | Última valoración de cada tarjeta, número de repasos, intervalo, fechas del último y próximo repaso, respuestas de casos consultados y respuestas de mapas completados. |
| Intento de examen | `aleaciones-simulacro-v1` | Un intento en curso o entregado, su copia del examen, respuestas, posición y evaluaciones de las rúbricas. |

Abre **Guardar una copia** en la barra lateral de estudio:

- **Exportar progreso** prepara un JSON descargable y una alternativa para copiarlo como texto.
- **Importar una copia** valida el archivo completo antes de combinarlo. Para cada actividad prevalece el registro más reciente; en caso de empate se conserva el actual.
- **Reiniciar progreso** borra el progreso de estudio tras una confirmación.

**La copia JSON de estudio no incluye los intentos de examen.** La interfaz no dispone actualmente de exportación o importación de exámenes ni de un archivo de múltiples intentos. El progreso de las tarjetas almacena el último registro de programación y el número acumulado de repasos, no una cronología de cada repaso anterior. Los filtros y la posición de una sesión de estudio sin terminar no se recuperan como un examen guardado.

Los identificadores estables conservan el progreso existente en las actualizaciones de contenido compatibles. Los objetivos nuevos utilizan identificadores nuevos sin transferencia automática de dominio; los identificadores archivados siguen siendo compatibles con la exportación e importación del estudio. Reiniciar el progreso de estudio no reinicia el registro separado del examen.

No hay sincronización automática entre dispositivos. Borrar los datos del navegador puede eliminar ambos registros. Los fallos de almacenamiento generan avisos; los cambios de estudio pueden permanecer en memoria y exportarse, mientras que no puede suponerse que un examen cuyo guardado haya fallado sobreviva a una recarga. Los datos almacenados ilegibles se conservan hasta una acción explícita de recuperación o sustitución.

## Fuentes y alcance académico

Las actividades adaptan los PDF docentes locales. Los resúmenes de Juanmi organizan los temas 1–8; los libros originales respaldan la verificación técnica y los temas 9–10. Las fuentes identifican documento, página del PDF y sección; se incluye la numeración impresa cuando se conoce, que puede diferir del índice de páginas del PDF. [`web/fuentes.json`](web/fuentes.json) contiene el inventario de materiales. Los nombres de archivo de los libros y el orden de los temas de la web difieren para aceros y magnesio.

Las referencias ayudan a localizar los originales; no distribuyen ni abren esos PDF desde la web. El paquete estático incluye los extractos visuales aprobados y los datos de las actividades, mientras que los materiales originales permanecen por separado en `Aleaciones/`.

El contenido de estudio nuevo o ampliado y los pilotos documentan su estado de revisión. Las tarjetas antiguas conservadas no se presentan como verificadas de nuevo en la fase 4. Se mantienen visibles las exclusiones y discrepancias conocidas, incluidas las fórmulas ilegibles de equivalentes de Ti, las clasificaciones problemáticas de betágenos, la etiqueta NiAl en el apartado de Ti y las unidades o dosificaciones contradictorias. Estos detalles sin resolver no se incorporan como reglas recién validadas.

El material complementa las lecturas de la asignatura. No es una colección de preguntas verificadas de exámenes anteriores, un banco oficial aprobado por el profesor ni una medida automática del dominio académico. Las pruebas estructurales comprueban la integridad de los datos y del software; no sustituyen la revisión académica de las fuentes.

## Estructura del proyecto

| Ruta | Función |
|---|---|
| [`web/dist/index.html`](web/dist/index.html), [`estilos.css`](web/dist/estilos.css), [`guia.html`](web/dist/guia.html) | Página principal, estilos adaptables y guía integrada. |
| [`web/dist/app.js`](web/dist/app.js), [`estudio-filtros.js`](web/dist/estudio-filtros.js) | Actividades de estudio, navegación, filtros y sesiones de pendientes. |
| [`web/dist/progreso.js`](web/dist/progreso.js) | Programación del repaso, validación del almacenamiento y copias del estudio. |
| [`web/temas/`](web/temas/), [`web/dist/contenido.js`](web/dist/contenido.js) | Diez JSON editables de temas y datos compilados para el navegador. |
| [`web/simulacros/`](web/simulacros/), [`web/dist/simulacros-contenido.js`](web/dist/simulacros-contenido.js) | Tres JSON de examen separados y catálogo compilado. |
| [`web/dist/simulacro-motor.js`](web/dist/simulacro-motor.js), [`simulacro-ui.js`](web/dist/simulacro-ui.js), [`simulacro.css`](web/dist/simulacro.css) | Validación, puntuación y persistencia de exámenes, interfaz y estilos. |
| [`web/dist/assets/`](web/dist/assets/) | Extractos visuales originales de los pilotos: siete PNG del Piloto 01 y cinco del Piloto 02. |
| [`web/compilar-contenido.cjs`](web/compilar-contenido.cjs), [`compilar-simulacros.cjs`](web/compilar-simulacros.cjs) | Compiladores independientes de estudio y exámenes. |
| [`web/servir.cjs`](web/servir.cjs) | Servidor estático local opcional. |
| [`web/fuentes.json`](web/fuentes.json) | Inventario de PDF locales. |
| [`borradores/`](borradores/) | Matrices académicas, diagnósticos, documentos de los pilotos, revisiones y registros de implementación. |

El contenido, la presentación y la persistencia son módulos separados. La compilación utiliza funciones integradas de Node.js; la versión para navegador ya está compilada. En navegadores compatibles con WebMCP, unas herramientas opcionales permiten leer los contadores de estudio o navegar entre tipos de actividad. La interfaz normal también funciona sin esa capacidad.

## Editar y comprobar el proyecto

Para el contenido de estudio, edita el archivo `web/temas/tN.json` correspondiente y compila:

```sh
node web/compilar-contenido.cjs
```

Para el contenido de examen, edita el JSON separado de `web/simulacros/` y compila:

```sh
node web/compilar-simulacros.cjs
```

Conserva un identificador solo cuando el objetivo de aprendizaje siga siendo sustancialmente el mismo. Para un objetivo diferente, crea un identificador nuevo y conserva el registro o la versión anterior. No utilices los archivos de contenido generados como fuente principal de edición: la compilación los sobrescribe. Conserva la procedencia visual, las referencias y las rúbricas al actualizar los datos de examen.

Ejecuta las comprobaciones correspondientes desde la raíz del proyecto:

```sh
node web/pruebas-contenido.cjs
node web/pruebas-progreso.cjs
node web/pruebas-simulacro.cjs
node web/pruebas-piloto.cjs
node web/pruebas-piloto02.cjs
node web/pruebas-fase4.cjs
node web/pruebas-presentacion-tarjetas.cjs
node web/pruebas-visuales-estudio.cjs
node web/pruebas-casos-visuales.cjs
node web/verificar-publicacion.cjs
```

Comprueban los identificadores, referencias, conceptos y claves de los mapas de estudio; la programación del repaso, el almacenamiento y la importación y exportación; la configuración de exámenes, blancos, penalizaciones, puntuaciones negativas, rúbricas parciales y recuperación; la transcripción de las fuentes, los totales de puntos y la integridad visual de ambos pilotos; y la conservación, los metadatos y el filtrado de la fase 4.

Las comprobaciones dependientes de las fuentes requieren los PDF originales locales. Las pruebas de transcripción de los pilotos también utilizan sus archivos académicos auxiliares; las de la fase 4 utilizan la auditoría, la copia inicial y los hashes registrados. Estos archivos no son necesarios para ejecutar la web compilada. El registro de validación de la fase 4 informa de **97 pruebas individuales más las comprobaciones de integridad del contenido**; consulta su informe para conocer las comprobaciones realizadas en navegador y sus límites.

Recarga después de cambiar HTML, CSS o JavaScript o de regenerar contenido. Para las pruebas en navegador, utiliza un origen separado para proteger el progreso y los intentos guardados. Los scripts de preparación o importación y las herramientas históricas no forman parte del procedimiento habitual de edición y pueden sobrescribir sus datos de destino.

## Compartir o alojar

La web pública está en **[broad-hill-ce92.cjferper.workers.dev](https://broad-hill-ce92.cjferper.workers.dev)**. El archivo [`wrangler.jsonc`](wrangler.jsonc) configura exclusivamente `web/dist/` para el Worker existente `broad-hill-ce92`. El paquete contiene 25 archivos, incluidos 12 PNG de los pilotos y dos gráficos de estudio; no incluye los PDF originales ni esta documentación. Mantener la misma dirección conserva la compatibilidad del progreso guardado en ese navegador.

Para reproducir una publicación desde PowerShell, con Wrangler autenticado en la cuenta propietaria, ejecuta primero `node web/verificar-publicacion.cjs`, después `npx.cmd wrangler@4.150.0 deploy --config .\wrangler.jsonc --dry-run` y finalmente `npx.cmd wrangler@4.150.0 deploy --config .\wrangler.jsonc`. Comprueba antes que la configuración remota no haya adquirido código dinámico, bindings o dominios nuevos. La fecha de compatibilidad permanece en `2026-10-07`.

Copia o comprime la carpeta completa `web/dist/` para utilizarla sin conexión. Para una versión alojada, sirve esa carpeta como raíz del sitio estático. Cada visitante mantiene sus propios datos en el navegador; el alojamiento no añade sincronización mediante cuentas ni notas compartidas. Una dirección de desarrollo local solo es accesible desde el equipo que ejecuta su servidor. Los PDF originales locales y los archivos temporales de preparación no son necesarios para el paquete ejecutable.

## Documentación académica y de implementación

- [`web/INTEGRACION_PILOTO_02.md`](web/INTEGRACION_PILOTO_02.md): integración del Piloto 02, recursos, puntuación y verificación.
- [`web/SIMULACROS_FASE_2C.md`](web/SIMULACROS_FASE_2C.md): integración del Piloto 01 y políticas compatibles de nota mínima.
- [`borradores/fase4_implementacion/INFORME_FASE_4.md`](borradores/fase4_implementacion/INFORME_FASE_4.md): cantidades finales, cambios, conservación del progreso, incidencias y comprobaciones realizadas.
- [`borradores/fase4_implementacion/FICHAS_NUEVAS_61.md`](borradores/fase4_implementacion/FICHAS_NUEVAS_61.md): nuevas tarjetas avanzadas y sus referencias.
- [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md): reglas exactas de programación del repaso y copias de estudio.
- [`web/COMPROBACIONES.md`](web/COMPROBACIONES.md), [`web/SIMULACROS_FASE_1.md`](web/SIMULACROS_FASE_1.md), [`web/PASO_1.md`](web/PASO_1.md), [`web/PASO_2.md`](web/PASO_2.md): registros anteriores de implementación y verificación.

Los documentos de apoyo están en español y algunos describen versiones históricas. Las funciones y cantidades de este README describen la web actual.

---

# Aerospace Alloys Study Web

A study website for **Aleaciones Aeroespaciales**, a fourth-year Aerospace Engineering course. It combines progressive learning by topic with complete exam simulations. The interface, questions and solutions are in **Spanish**; this README describes the project in English.

The current version includes:

- **10 topics, 312 active flashcards and 9 archived cards**: 321 stored cards in total.
- **Three learning levels** and filters that combine topic, concept and level.
- **40 reasoning cases** and **10 interactive concept maps with 20 blanks**.
- **Three selectable simulations**: a technical demonstration, Piloto 01 and Piloto 02.
- Spaced repetition, browser persistence and JSON backups for study progress.
- Exam answer recovery, submission confirmation, worked solutions, partial-credit rubrics and weighted grades.

The website uses HTML, CSS and plain JavaScript. The complete runnable version is in [`web/dist/`](web/dist/). There is no account, backend database or dependency installation required to study.

## Open the website

### Local HTTP server — recommended for regular use

From the project root, run either command:

```powershell
node web/servir.cjs
```

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory web/dist
```

If the Windows `py` launcher is unavailable, use `python` or `python3`. Open **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)** and keep the terminal running. Press `Ctrl+C` to stop it. The Node server also accepts a port, for example `node web/servir.cjs 8001`.

Both options serve only the website folder on this computer. They do not expose the original PDFs or create a public address. If your usual server is already running, simply reload that address.

### Open directly or share an offline copy

Download and extract the repository, or clone it:

```sh
git clone https://github.com/cferper/Aleaciones_Aeroespaciales.git
cd Aleaciones_Aeroespaciales
```

Open [`web/dist/index.html`](web/dist/index.html) in a modern browser with JavaScript enabled. Keep the entire `web/dist/` folder together, including scripts, styles and `assets/`. The compiled content loads as ordinary scripts, so studying does not require a server or fetching JSON files.

Browser storage for directly opened files can vary between browsers. For regular use, keep the same browser and HTTP address. Changing hostname, port, protocol or device creates a different storage location; `localhost` and `127.0.0.1` are different origins. Export your study progress before changing addresses.

## Estudiar por temas

Choose a topic and switch between **Tarjetas**, **Casos** and **Mapa**. The course index opens topics or related concepts directly. Clickable map concepts provide access to their cards and cases.

The academic focus is composition and alloying elements, heat treatment, phase transformations, microstructure and mechanical/environmental properties. Comparisons and applications use defined material and service conditions. Aluminium and titanium receive particular attention; Al–Li retains relevant technical mechanisms with reduced emphasis on history.

### Flashcards and learning levels

| Level in the interface | Learning task |
|---|---|
| **Fundamentos** | Identify families, alloying elements, phases, treatments and basic properties. |
| **Comprensión** | Explain mechanisms and relationships between composition, processing, microstructure and properties. |
| **Avanzado** | Compare alloys and routes, reconstruct transformations, analyse assumptions and justify tradeoffs. |

**Todos** includes all levels. Combine the selected level with a topic and concept. Level and archive filters apply to flashcards; the concept filter also applies to cases. Maps retain their complete relationships and exercises.

Try to answer before pressing **Mostrar respuesta**. A card shows its answer and a technical explanation when it adds information. Necessary scientific conditions are integrated into that explanation; redundant sections and editorial status messages are hidden. Sources remain available in a disclosure panel. Objectives, essential concepts, difficulty and provenance metadata remain in the internal files.

Rate your recall with **No lo sabía**, **Me costó**, **Bien** or **Muy fácil**. A rating saves the review and advances the session. Unreviewed cards and cards whose review date has arrived are considered pending.

- **Practicar todas** includes the cards allowed by the current filters, even if their next review is in the future.
- **Practicar contenido ampliado** opens a voluntary session for marked, expanded cards within the current filters.
- **Todos los pendientes del tema** removes level/concept restrictions and includes archived cards for that topic.
- **Pendientes de los diez temas** opens a combined pending session without those restrictions, including archived cards. Each card identifies its topic.
- **Incluir tarjetas archivadas** restores access to older activities kept outside normal study sessions.

Expanded cards retain their internal marker and remain accessible through the expanded-content practice button, without editorial notices inside each card. Reading, revealing or filtering does not reset previous ratings or dates. Rating during extra practice does update the schedule.

The phase 4 update preserved all 260 original IDs: 178 cards retained their question, answer and explanation, 73 were improved and 9 were archived. There are **61 new advanced cards**: 27 aluminium, 16 titanium and 18 from other topics. This comprises the planned 60-card expansion plus one new titanium version whose objective differs from its predecessor. A new ID starts without transferred mastery; archived records remain available.

### Reasoning cases

The work-hardening interpretation card and **Aumentar la acritud** case share an original 5052 graph. **Recocer una aleación con acritud** uses a separate authentic graph for 33 % initial reduction and one-hour annealing. Figures appear before answering and open in another tab for enlargement. Ten cards with unnecessary visual references were rewritten as self-contained questions while preserving their IDs and objectives.

Each case provides an initial situation, a controlled change and conditions that remain constant. Select two predictions and write a technical justification before pressing **Comparar con la solución**.

The worked solution and a checklist of correction criteria help assess mechanisms and limits. Prediction alternatives fit the case: some ask for a trend, others for a yes/no judgement. **Intentarlo otra vez** hides the solution for another attempt.

Consulting the solution saves the case answers and consultation date. This is a consultation record, not an automatic grade or proof of mastery. Unsubmitted case drafts stay in memory during the page session; they are not continuously saved like exam answers. Fourteen cases received compatible improvements without changing their prediction fields or transferring completion to a different objective.

### Interactive concept maps

Each topic has a map with **two selectable blanks**, optional hints and links between processes, structures and properties. **Comprobar huecos** reports whether both choices are correct; only a fully correct pair records completion.

**Ver mapa completo** reveals the relationships and explanation without marking the exercise completed. **Volver a completar** starts another attempt. Completed answers and dates are saved; unfinished map choices are session drafts. The updated maps retain their IDs, edges and 20 answer keys, with improved explanations and 14 sets of more homogeneous alternatives.

### Content by topic

The learning-level counts below refer to **active** cards. Each topic also has one map with two blanks.

| Topic | Foundations | Understanding | Advanced | Active cards | Archived | Cases |
|---|---:|---:|---:|---:|---:|---:|
| 1. Introduction to aluminium | 8 | 24 | 8 | 40 | 3 | 5 |
| 2. Corrosion in aluminium | 1 | 23 | 4 | 28 | 1 | 4 |
| 3. Non-heat-treatable wrought aluminium alloys | 2 | 14 | 6 | 22 | 0 | 3 |
| 4. Heat-treatable wrought aluminium alloys | 3 | 20 | 12 | 35 | 2 | 4 |
| 5. Cast aluminium alloys | 4 | 21 | 4 | 29 | 0 | 4 |
| 6. Titanium alloys | 5 | 25 | 18 | 48 | 1 | 5 |
| 7. High-strength steels | 1 | 19 | 5 | 25 | 0 | 4 |
| 8. Magnesium alloys | 2 | 22 | 5 | 29 | 0 | 4 |
| 9. Fracture of metallic materials | 3 | 27 | 5 | 35 | 0 | 4 |
| 10. Material selection | 5 | 11 | 5 | 21 | 2 | 3 |
| **Total** | **34** | **206** | **72** | **312** | **9** | **40** |

The advanced subset contains 34 aluminium, 18 titanium and 20 other-topic cards: approximately **47/25/28 %**. Card counts are not exam-point weights and do not introduce a weighted review algorithm.

### Spaced repetition and counters

The schedule uses a fixed rule based on your recall rating:

| Rating | First rating or previous day interval of zero | Subsequent day interval |
|---|---|---|
| **No lo sabía** | 10 minutes | 10 minutes; day interval becomes zero |
| **Me costó** | 2 days | Round up `max(previous interval, 1) × 1.2`, minimum 1 day |
| **Bien** | 3 days | Round up previous interval × 2 |
| **Muy fácil** | 7 days | Round up previous interval × 3 |

Day intervals are capped at 365 days. Dates are calculated from the rating time; a day is 24 elapsed hours. This is a fixed scheduling rule, not an adaptive model of study habits. See [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md).

The sidebar distinguishes filtered pending cards, pending cards across all topics, total pending cards in the selected topic including archive, rated cards, consulted cases and completed maps. Filtering does not hide the total counters.

## Simulacros de examen

Switch to **Simulacros de examen** and choose a simulation:

| Simulation | Questions | Purpose and status |
|---|---:|---|
| **Demostración técnica** | 6: 3 V/F, 1 justified, 1 visual, 1 written | Demonstrates the engine. Includes a synthetic teaching table; it is not a reviewed academic exam. |
| **Piloto 01** | 42 | Documentarily reviewed study pilot, with real PDF resources and references. |
| **Piloto 02 · Metalurgia** | 42 | Documentarily reviewed pilot focused on alloying, treatments, transformations and microstructure–property relationships. |

Neither pilot is officially validated by the professor. Their configuration, scoring policies and anticipated difficulty are study settings, not a prediction of the real exam.

### Configuration and exam structure

Both pilots initially use:

| Block | Questions | Grade weight |
|---|---:|---:|
| V/F | 30 | 30 % |
| V/F with justification | 5 | 10 % |
| Visual interpretation | 2 | 20 % |
| Written development | 5 | 40 % |
| **Total** | **42** | **100 %** |

Default thematic point distributions are **45/26/29 %** for aluminium/titanium/other topics in Piloto 01 and **45/25/30 %** in Piloto 02. These are distributions within the supplied questions, not a second weighting applied by the engine.

Before starting, you can reduce question counts within the available block sizes, change weights, change the V/F penalty and select the minimum-grade policy. Weights are explicitly normalized if their sum differs from 100 %. A block with zero questions must have zero weight. Changing counts or weights also changes the thematic distribution.

The pilots are fixed question sets. Reducing a count selects the first questions of that block; the website does not generate or randomly sample a new paper.

### Answer, navigate and recover

Use **Anterior**, **Siguiente** or **Ir a una pregunta** to navigate. You can leave V/F choices or written parts blank. A progress indicator counts questions with some answer; it does not certify that every part is complete.

Exam choices, text, navigation position and later rubric assessments are saved in this browser. Reloading recovers the stored attempt. The attempt contains a snapshot of its exam, configuration, solutions and rubrics.

There is **one stored exam attempt across the catalogue**, not one per pilot. Selecting a different paper does not replace it. Starting another attempt requires confirmation before replacing the saved attempt and correction; you can resume the existing attempt from the preparation screen. Switching between study and examination modes does not erase either record.

**Entregar simulacro** requires confirmation and reports completely blank questions. After submission, answers are locked and solutions become available. Exam changes in another browser tab trigger a warning and require reloading before continuing to avoid overwriting answers.

### Real visual resources

Piloto 01 includes **seven PNGs** and Piloto 02 includes **five PNGs** extracted from the original PDFs. Piloto 02 uses an Al–Cu diagram, aluminium treatment routes, Ti micrographs and a primary-α curve. They are local assets in `web/dist/assets/` and do not depend on absolute Windows paths.

Click an image to open it at its original size in another tab and use browser zoom. Labels, units, scales or magnifications and experimental/interpretation conditions are retained as documented. Some Ti micrographs have a magnification label but no calibrated scale bar; the questions delimit what can be inferred. Diagrams, process schematics and micrographs are identified according to their actual nature.

### Solutions, rubrics and scoring

After submission, the correction shows submitted answers, correct V/F keys, worked models, explanations, source pages and the academic metadata available for each question. Pilot metadata includes conditions, difficulty and essential concepts; where supplied, it also distinguishes serious errors and minor omissions. Piloto 02 records objectives and its relationship to Piloto 01.

For plain V/F, the default score is **+1 correct, −0.33 incorrect and 0 blank**. Its block grade is `10 × (correct − penalty × incorrect) / selected V/F count`, subject to the chosen minimum policy.

The other three blocks use **student self-assessment with rubrics**, including partial credit. Enter a score for every criterion and explain what your answer covered or missed. Zero is an explicit valid score; an empty field remains pending. The website does not grade prose by keywords or use AI correction. V/F with justification is assessed by its rubric, without the automatic plain-V/F penalty.

Each block is normalized to a grade out of 10 and contributes according to its normalized weight. The final grade remains pending until all positively weighted blocks have complete assessments. A partial contribution is labelled as such; the displayed final grade uses one decimal.

The minimum policies are configurable:

- **Minimum zero in V/F:** the demonstration default; net V/F points remain visible even when its block grade is floored.
- **Minimum zero only globally:** the pilot default; a negative V/F block contributes to the weighted sum, and only the final total is floored at zero.
- **No minimum:** negative grades are retained.

These policies are orientative and are not confirmed official examination rules.

## Save and transfer data

Study and exam records use separate browser `localStorage` keys:

| Record | Key | What is saved |
|---|---|---|
| Study progress | `aleaciones-progreso-v1` | Last card rating, review count, interval, last/next review dates, consulted case answers and completed map answers. |
| Exam attempt | `aleaciones-simulacro-v1` | One running or submitted attempt, its snapshot, answers, position and rubric assessments. |

Open **Guardar una copia** in the study sidebar:

- **Exportar progreso** prepares a downloadable JSON and a text-copy fallback.
- **Importar una copia** validates the whole file before merging. The newest record wins per activity; a tie keeps the current record.
- **Reiniciar progreso** resets study progress after confirmation.

**The study JSON backup does not include exam attempts.** The interface currently has no exam export/import or archive of multiple attempts. Card progress stores the latest scheduling record and cumulative review count, not a timeline of every past review. Study filters and unfinished study-session position are not restored as a saved examination would be.

Stable IDs preserve existing progress through compatible content updates. New objectives use new IDs without automatic mastery transfer; archived IDs remain compatible with study exports and imports. Resetting study progress does not reset the separate examination record.

There is no automatic synchronization between devices. Browser data deletion can remove both records. Storage failures produce warnings; study changes may remain in memory and can be exported, while failed exam saves cannot be assumed to survive reloading. Unreadable stored data is preserved until an explicit recovery/replacement action.

## Sources and academic scope

The activities adapt the local teaching PDFs. Juanmi's summaries organize topics 1–8; the original books support technical verification and topics 9–10. Sources identify document, PDF page and section; printed numbering is included when known and can differ from the PDF page index. [`web/fuentes.json`](web/fuentes.json) inventories the materials. The book filenames and website topic order differ for steels and magnesium.

Source references help locate the originals; they do not distribute or open those PDFs from the website. The static package includes the approved visual extracts and activity data, while the original materials remain separately in `Aleaciones/`.

New/expanded study content and pilots document their review status. Conserved older cards are not represented as newly reverified in phase 4. Known exclusions and discrepancies remain visible, including illegible Ti-equivalent formulas, problematic beta-stabilizer classifications, the NiAl label in the Ti section and contradictory units/dosages. These unresolved details are not introduced as newly validated rules.

The material supplements the course readings. It is not a collection of verified past examination questions, an official teacher-approved bank or an automatic measure of academic mastery. Structural tests establish data and software integrity; they do not replace academic source review.

## Project structure

| Path | Role |
|---|---|
| [`web/dist/index.html`](web/dist/index.html), [`estilos.css`](web/dist/estilos.css), [`guia.html`](web/dist/guia.html) | Main page, responsive styling and in-app guide. |
| [`web/dist/app.js`](web/dist/app.js), [`estudio-filtros.js`](web/dist/estudio-filtros.js) | Study activities, navigation, filters and pending sessions. |
| [`web/dist/progreso.js`](web/dist/progreso.js) | Study scheduling, storage validation and backups. |
| [`web/temas/`](web/temas/), [`web/dist/contenido.js`](web/dist/contenido.js) | Ten editable topic JSON files and compiled browser study data. |
| [`web/simulacros/`](web/simulacros/), [`web/dist/simulacros-contenido.js`](web/dist/simulacros-contenido.js) | Three separate exam JSONs and compiled catalogue. |
| [`web/dist/simulacro-motor.js`](web/dist/simulacro-motor.js), [`simulacro-ui.js`](web/dist/simulacro-ui.js), [`simulacro.css`](web/dist/simulacro.css) | Examination validation/scoring/persistence, interface and styles. |
| [`web/dist/assets/`](web/dist/assets/) | Original pilot visual extracts: seven PNGs for Piloto 01 and five for Piloto 02. |
| [`web/compilar-contenido.cjs`](web/compilar-contenido.cjs), [`compilar-simulacros.cjs`](web/compilar-simulacros.cjs) | Independent study and examination compilers. |
| [`web/servir.cjs`](web/servir.cjs) | Optional local static server. |
| [`web/fuentes.json`](web/fuentes.json) | Local PDF inventory. |
| [`borradores/`](borradores/) | Academic matrices, diagnostics, pilot documents, reviews and implementation records. |

Content, display and persistence are separate modules. Compilation uses Node.js built-ins; the browser version is already compiled. Where browser WebMCP is supported, optional tools can read study counters or navigate between study activity types. The normal interface also works without that capability.

## Edit and check the project

For study content, edit the appropriate `web/temas/tN.json` and compile:

```sh
node web/compilar-contenido.cjs
```

For examination content, edit the separate JSON in `web/simulacros/` and compile:

```sh
node web/compilar-simulacros.cjs
```

Preserve an ID only when the learning objective remains substantially the same. For a different objective, create a new ID and retain the older record/version. Do not edit the generated content files as the primary source: compilation overwrites them. Preserve visual provenance, source references and rubrics when updating examination data.

Run the applicable checks from the project root:

```sh
node web/pruebas-contenido.cjs
node web/pruebas-progreso.cjs
node web/pruebas-simulacro.cjs
node web/pruebas-piloto.cjs
node web/pruebas-piloto02.cjs
node web/pruebas-fase4.cjs
node web/pruebas-presentacion-tarjetas.cjs
node web/pruebas-visuales-estudio.cjs
node web/pruebas-casos-visuales.cjs
node web/verificar-publicacion.cjs
```

They check study IDs, references, concepts and map keys; scheduling, storage and import/export; examination configuration, blanks, penalties, negative scores, partial rubrics and recovery; both pilots' source transcription, point totals and visual integrity; and phase 4 preservation, metadata and filtering.

Source-dependent checks require the original local PDFs. Pilot transcription checks also use their academic auxiliary files; phase 4 checks use the audit, initial backup and recorded hashes. These files are not needed merely to run the compiled website. The phase 4 validation record reports **97 named tests plus the content integrity checks**; see its report for the executed browser checks and limits.

Reload after changing HTML/CSS/JavaScript or regenerating content. For browser tests, use a separate origin to protect existing progress and saved attempts. Preparation/import scripts and historical tools are not the normal content-editing workflow and may overwrite their target data.

## Share or host

The public website is **[broad-hill-ce92.cjferper.workers.dev](https://broad-hill-ce92.cjferper.workers.dev)**. [`wrangler.jsonc`](wrangler.jsonc) serves only `web/dist/` through the existing `broad-hill-ce92` Worker. The package contains 25 files, including 12 pilot PNGs and two study graphs; original PDFs and this documentation are excluded. Keeping the same address preserves browser progress compatibility.

To reproduce deployment from PowerShell with Wrangler authenticated in the owning account, first run `node web/verificar-publicacion.cjs`, then `npx.cmd wrangler@4.150.0 deploy --config .\wrangler.jsonc --dry-run`, and finally `npx.cmd wrangler@4.150.0 deploy --config .\wrangler.jsonc`. First check that the remote Worker has not acquired dynamic code, bindings or new domains. The compatibility date remains `2026-10-07`.

Copy or zip the complete `web/dist/` folder for offline use. For a hosted version, serve that folder as the static site root. Each visitor retains separate browser data; hosting does not add account-based synchronization or shared notes. A local development URL is only accessible on the computer running its server. Original local PDFs and temporary preparation files are not required for the runnable package.

## Academic and implementation documentation

- [`web/INTEGRACION_PILOTO_02.md`](web/INTEGRACION_PILOTO_02.md): Piloto 02 integration, resources, scoring and verification.
- [`web/SIMULACROS_FASE_2C.md`](web/SIMULACROS_FASE_2C.md): Piloto 01 integration and compatible minimum-grade policies.
- [`borradores/fase4_implementacion/INFORME_FASE_4.md`](borradores/fase4_implementacion/INFORME_FASE_4.md): final counts, changes, progress preservation, incidents and executed checks.
- [`borradores/fase4_implementacion/FICHAS_NUEVAS_61.md`](borradores/fase4_implementacion/FICHAS_NUEVAS_61.md): the new advanced study cards and their references.
- [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md): exact scheduling and study-backup rules.
- [`web/COMPROBACIONES.md`](web/COMPROBACIONES.md), [`web/SIMULACROS_FASE_1.md`](web/SIMULACROS_FASE_1.md), [`web/PASO_1.md`](web/PASO_1.md), [`web/PASO_2.md`](web/PASO_2.md): earlier implementation and verification records.

The supporting documents are in Spanish and some describe historical versions. The feature descriptions and counts in this README describe the current website.
