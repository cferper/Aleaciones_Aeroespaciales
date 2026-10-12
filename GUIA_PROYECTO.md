# Web de estudio de Aleaciones Aeroespaciales

## Versión local completa

La web tiene diez temas independientes, siguiendo la numeración de tus archivos. Cada tema dispone de sus propias tarjetas, casos y mapa. El selector cambia las tres actividades y el índice permite abrir directamente un concepto. Hay 260 tarjetas, 40 casos y 10 mapas; el progreso anterior del tema 1 conserva sus identificadores.

| Tema | Tarjetas | Casos | Capítulo del libro |
|---|---:|---:|---:|
| 1. Introducción al aluminio | 36 | 5 | 4 |
| 2. Corrosión en aluminio | 25 | 4 | 5 |
| 3. Aluminio de forja no tratable | 18 | 3 | 6 |
| 4. Aluminio de forja tratable | 28 | 4 | 7 |
| 5. Aluminio de moldeo | 26 | 4 | 8 |
| 6. Titanio | 33 | 5 | 9 |
| 7. Aceros de alta resistencia | 20 | 4 | 3 |
| 8. Magnesio | 24 | 4 | 10 |
| 9. Fractura | 30 | 4 | 1 |
| 10. Selección de materiales | 20 | 3 | 2 |

Los resúmenes de Juanmi organizan los temas 1–8. Los temas 9–10 se elaboran a partir del libro. Las referencias indican el documento y la página PDF; no confundir esta página con el número de diapositiva impreso. Se han leído visualmente los resúmenes y los capítulos de fractura y selección. El piloto y la ampliación del tema 1 tienen contraste con páginas concretas del libro; los temas 2–8 remiten principalmente al resumen. No se afirma haber verificado línea por línea todo el libro ni convertido todas sus figuras y tablas en actividades.

Las preguntas priorizan causas, comparaciones y predicciones razonadas. No hay exámenes anteriores y no se atribuye a los ejercicios un estilo de examen verificado. No se presentan precios históricos como actuales ni erratas evidentes de unidades como datos fiables. El ejercicio escaneado de titanio se revisó como apoyo, pero no se reproduce su lámina completa en la web.

## Cómo abrirla

Abre `web/dist/index.html` con doble clic. No necesitas instalar herramientas para estudiar. Se puede utilizar sin conexión, porque todos los recursos de estudio están incluidos en esa carpeta. El guardado de archivos locales depende del navegador: para uso continuado conviene una dirección HTTP estable.

La vista `http://127.0.0.1:8000/` funciona sólo en este ordenador mientras esté activo su servidor local. No es un enlace para tus compañeros ni para el móvil. Si el servidor deja de funcionar, puedes abrir el archivo directamente. Exporta antes tu progreso: cada navegador y dirección mantienen un almacenamiento distinto.

El ZIP `web/aleaciones-web.zip` contiene únicamente la web. Otra persona puede extraerlo y abrir su index.html. No incluye los PDF ni datos de progreso personales.

## Cómo está hecha y dónde se guarda

HTML define los controles y la estructura. CSS define apariencia y adaptación a móvil. JavaScript cambia las actividades, revela soluciones y guarda el progreso. Es una web estática sin framework, cuentas ni base de datos.

| Archivo | Función |
|---|---|
| web/dist/index.html | Pantalla de estudio |
| web/dist/guia.html | Guía para estudiar, acceder y aprender cómo está hecha |
| web/dist/estilos.css | Diseño |
| web/temas/t1.json … t10.json | Contenido editable por tema |
| web/compilar-contenido.cjs | Genera contenido.js desde los JSON |
| web/dist/contenido.js | Datos que carga el navegador |
| web/dist/app.js | Navegación, tarjetas, casos, mapas y copias |
| web/dist/progreso.js | Calendario, validación y almacenamiento |
| web/fuentes.json | Inventario de originales y páginas |

Para cambiar una pregunta, edita el JSON de su tema y ejecuta `node web/compilar-contenido.cjs` desde el proyecto. Para modificar el diseño, edita CSS y recarga. Los archivos pueden abrirse con un editor de texto. Node sólo es necesario para regenerar el contenido, no para usar la web. Mantén los IDs existentes al editar actividades: son las claves que relacionan contenido y progreso.

El progreso se guarda en localStorage del navegador. Cada persona, navegador y dirección tienen una copia independiente. No se sincroniza automáticamente ni se sube a un servidor. Exportar prepara un JSON; importar valida toda la copia y fusiona por fecha de cada actividad. Reiniciar pide confirmación. Si el navegador no permite guardar, la web muestra un aviso y permite exportar la sesión.

Los casos requieren dos predicciones y una justificación antes de mostrar la solución. La consulta se registra como consulta, sin corrección de IA ni nota automática. Los mapas sólo se completan al acertar los dos huecos, no por mostrar la solución. Las tarjetas usan las cuatro valoraciones y el calendario descrito en `web/REGLA_REPASO.md`.

## Compartir por enlace: única parte pendiente

No se ha contratado ni elegido alojamiento ni publicado la web. Como pediste, primero hay que revisar coste y acceso. El contenido publicable ya está preparado en el ZIP.

Una opción es Cloudflare Pages con plan gratuito para servir esta web estática: las peticiones a archivos estáticos son gratuitas y sin límite, según su documentación. Requiere una cuenta del propietario; los visitantes no necesitan cuenta para una web pública. No requiere comprar dominio: ofrece dirección pages.dev. La publicación se puede hacer subiendo la carpeta o ZIP mediante Direct Upload. No necesita servidor de Python ni dejar tu ordenador encendido. Los archivos se guardan en el alojamiento; el progreso sigue en cada navegador.

Documentación oficial consultada el 5 de octubre de 2026:
- Coste: https://developers.cloudflare.com/pages/functions/pricing/
- Subida directa: https://developers.cloudflare.com/pages/get-started/direct-upload/
- Límites del plan gratuito: https://developers.cloudflare.com/pages/platform/limits/

Esta opción se propone, no se ha contratado ni activado. Hace falta elegir proveedor y acceder a su cuenta para publicar. Si se elige acceso público, cualquier persona que conozca la dirección podrá ver las actividades. Los PDF originales permanecen fuera del paquete.

## Comprobaciones y continuidad

`node web/pruebas-contenido.cjs` valida los diez temas, referencias, páginas, IDs, conceptos y mapas. `node web/pruebas-progreso.cjs` supera 28 pruebas de calendario y copias. Se comprobó en navegador la navegación de las treinta vistas. Las evidencias adicionales están en `web/COMPROBACIONES.md`.

`web/PASO_1.md`, `web/PASO_2.md` y `PROPUESTA_PILOTO.md` describen versiones históricas; no son el inventario actual. Los scripts de `tmp` fueron herramientas de preparación de fuentes, no son necesarios para usar o editar la web. Para futuros cambios, editar los JSON oficiales y recompilar.

El usuario autoriza continuar sin pedir aprobación de pasos habituales. No volver a pedir aprobación del piloto. Para publicar, respetar la solicitud de explicar coste y condiciones antes de elegir alojamiento.
