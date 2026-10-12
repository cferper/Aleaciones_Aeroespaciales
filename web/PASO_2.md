# Paso 2: estudiar, valorar y conservar el progreso

La web tiene ahora tres formas de estudiar el mismo tema: **Tarjetas, Casos y Mapa**. El piloto parcial del tema 1 incluye **26 tarjetas, 5 casos y un mapa de 12 relaciones con 2 huecos**, contrastados con el resumen de Juanmi y el libro. Las tarjetas siguen el orden del resumen. Quedan otros apartados del tema 1 y los temas posteriores por incorporar.

El nivel se ha elevado siguiendo tu comentario: 23 tarjetas piden aplicar, comparar o justificar, y los cinco casos exigen explicar el razonamiento y sus límites. Se conservan tres preguntas básicas como apoyo. Puedes leer los ejemplos y el criterio para los próximos temas en `NIVEL_PREGUNTAS.md`.

## Qué hace cada actividad

- **Tarjetas:** piensa antes de pulsar «Mostrar respuesta». Después elige «No lo sabía», «Me costó», «Bien» o «Muy fácil». Se guarda tu valoración y se calcula cuándo volver a repasar. «Practicar todas» permite estudiar antes del plazo; sus valoraciones también cambian la siguiente fecha.
- **Casos:** el selector muestra uno de los cinco escenarios cada vez. Escribe tus predicciones y su explicación antes de comparar con la solución razonada. Al consultarla se conservan tus respuestas. Los criterios te ayudan a revisarlas; no hay una nota automática.
- **Mapa:** completa los dos huecos del bloque de acritud y recocido. El bloque desplegable de solución y maduración añade otras seis relaciones. Se guarda como completado cuando ambos huecos son correctos; ese contador indica que resolviste este ejercicio. «Ver mapa completo» permite consultar la explicación, pero no completa por sí solo el ejercicio. Los conceptos abren sus tarjetas o casos relacionados.

Las respuestas en curso de casos y mapas se mantienen mientras cambias de actividad en esta sesión. Los borradores aún no enviados no equivalen a progreso guardado: pueden perderse al recargar. Las respuestas del caso se guardan al comparar con la solución y las del mapa al completarlo correctamente.

## Los cinco archivos de la web

| Archivo en `dist` | Su trabajo |
|---|---|
| `index.html` | Organiza los selectores, las pestañas, el panel de estudio y los controles del progreso. |
| `estilos.css` | Define colores, tamaños, separación y adaptación a distintas pantallas. |
| `contenido.js` | Guarda preguntas, soluciones, conceptos y referencias a los PDF. |
| `progreso.js` | Valida datos, calcula repasos y prepara o fusiona copias de progreso. |
| `app.js` | Une las piezas: muestra una actividad y responde a tus clics y respuestas. |

Antes, la pregunta estaba escrita directamente en el HTML. Ahora `app.js` toma una actividad de `contenido.js` y la coloca en el panel. Así podemos añadir preguntas y conservar la misma interfaz. Cada actividad tiene un identificador estable, por ejemplo `t1-acritud-proceso`: el progreso se asocia a ese identificador, aunque mejoremos el texto de la pregunta.

El HTML carga los scripts en ese orden: contenido, progreso e interfaz. `defer` hace que se ejecuten después de leer la estructura de la página. No necesitamos instalar un framework ni una base de datos para esta versión.

## Cómo se programa el repaso

La primera valoración da estos plazos:

| Botón que ves | Siguiente repaso |
|---|---|
| No lo sabía | Dentro de 10 minutos |
| Me costó | Dentro de 2 días |
| Bien | Dentro de 3 días |
| Muy fácil | Dentro de 7 días |

En valoraciones posteriores, «Me costó» amplía el intervalo por 1,2, «Bien» por 2 y «Muy fácil» por 3. Se redondea hacia arriba y se limita a 365 días. «No lo sabía» vuelve a 10 minutos y deja el intervalo de días en cero; después vuelven a aplicarse los plazos iniciales. La regla completa y sus ejemplos están en `REGLA_REPASO.md`.

Es una regla sencilla de autoevaluación. Se calcula desde el momento de la valoración: si repasas tarde, el nuevo plazo empieza entonces. Un día significa 24 horas transcurridas. Las fechas se guardan en UTC y se muestran con la hora de tu navegador.

## Dónde están el contenido y tu progreso

El contenido académico y el código están en los archivos de `web/dist`. Los PDF originales siguen en `Aleaciones` como fuentes de trabajo. El servidor local entrega únicamente los archivos de `web/dist`.

Tu progreso se guarda en `localStorage`, un pequeño almacén del navegador. Al volver a la misma dirección con el mismo navegador y perfil, la web puede recuperarlo sin una cuenta. No se sincroniza entre dispositivos ni entre navegadores.

Ese almacén pertenece a un **origen**, es decir, una combinación de protocolo, dirección y puerto. Por ejemplo, `http://127.0.0.1:8000` y `http://127.0.0.1:8001` tienen almacenes separados. También cambia el origen al usar `localhost` en lugar de `127.0.0.1`, o al publicar la web en otra dirección. Exportar e importar permite llevarte el progreso entre ellos.

La dirección local `http://127.0.0.1:8000/` funciona cuando el servidor está activo en tu ordenador. Tus compañeros necesitarán una dirección publicada para acceder desde sus equipos. La web continúa siendo local; todavía no se ha elegido ni contratado alojamiento. Para volver a arrancar el servidor, consulta `PASO_1.md`.

## Conservar una copia y recuperarla

En «Guardar una copia», pulsa **Exportar progreso**. La ventana ofrece «Descargar copia JSON». Si el navegador no permite descargar, despliega «Si la descarga no está disponible», copia todo el texto y guárdalo sin modificar en un archivo con extensión `.json`.

Después puedes usar **Importar una copia** para seleccionar ese archivo. Primero se comprueba entero; si contiene un error, no se importa ninguna parte. Si es válido, se fusiona con tu progreso actual: para cada actividad gana el registro más reciente y, en un empate, se mantiene el actual. La copia incluye tarjetas, casos y mapas, no los PDF ni el contenido académico.

Si el navegador bloquea el guardado o no tiene espacio, la pantalla lo indica. Los cambios pueden seguir en memoria durante la sesión: exporta una copia antes de cerrar. Si encuentra datos guardados ilegibles, los conserva y evita sobrescribirlos hasta que importes una copia válida o confirmes un reinicio.

**Reiniciar progreso** abre una confirmación. «Cancelar» mantiene los datos; «Borrar progreso» vacía el progreso de ese navegador y origen. Si quieres conservarlo, exporta antes. No elimina los archivos de la web ni los materiales de la asignatura.

## Para entender el código después

Sigue una sola tarjeta: busca `t1-acritud-proceso` en `contenido.js`, después `reveal-card` y `data-rating` en `app.js`, y finalmente `schedule` y `save` en `progreso.js`. Verás la cadena completa: contenido → mostrar respuesta → valorar → calcular fecha → guardar.

Las pruebas y sus límites están registrados en `COMPROBACIONES.md`. Se pueden ejecutar los dos archivos de pruebas con Node.js ya disponible en este entorno; no necesitan paquetes adicionales.
