# Ajustes finales de interfaz y versión móvil

20 de octubre de 2026. Publicada en https://broad-hill-ce92.cjferper.workers.dev/

Versión Cloudflare: `a1f08d6e-0b3b-40c2-9d33-d3c88ed39b7b`. Recursos de interfaz V/F: `20261020-f5-movil`.

## Cambios

- Ancho de lectura limitado en escritorio; en móvil, enunciados de 20 px, controles táctiles de al menos 48 px, selectores en una columna y acciones principales a ancho completo.
- En pantallas de hasta 680 px de ancho y al menos 500 px de alto, Verdadero/Falso/Blanco permanecen en la parte inferior. Al responder se sustituyen por Siguiente pregunta o Ver resumen. Se reserva espacio y se contemplan las áreas seguras del dispositivo.
- En ventanas bajas y horizontal, los controles vuelven al flujo normal para conservar espacio de lectura. Los controles quedan ocultos al pasar a estudio o simulacros.
- Foco en el enunciado al empezar o continuar; en la corrección al responder y en el resumen al terminar. Mejora el recorrido con teclado y el desplazamiento a contenido relevante en móvil.
- Fuentes e historial admiten saltos de línea. Guía actualizada con V/F, acceso público y límites de las copias de progreso.

Se mantienen las 180 preguntas, sus identificadores y respuestas, las tandas existentes y el formato del almacenamiento. No se ha aumentado el banco en este ajuste de interfaz. El contenido ampliado de estudio ya disponible sigue accesible desde móvil.

## Comprobaciones

Las 12 suites `web/pruebas-*.cjs` pasan: 165 pruebas contadas por sus suites, además de los controles globales de contenido y presentación. Se añaden seis pruebas ejecutando la interfaz V/F y el motor reales con un DOM mínimo: foco, resumen, recarga, recuperación desde configuración, conflicto entre pestañas y aislamiento de almacenamiento. Este DOM mínimo no sustituye las pruebas visuales.

Revisión en navegador con tamaños simulados: 320×568, 360×740, 390×844, 768×1024, 1280×900 y 844×390. Sin desbordamiento horizontal en la pregunta probada; respuestas de al menos 48 px. Corrección con fuentes desplegadas revisada en 320, 390 y horizontal. No se han probado teléfonos físicos ni todos los navegadores móviles.

Recorrido local de diez preguntas mixtas: recarga después de la primera respuesta conservando corrección y bloqueo; una omisión; resumen de cuatro aciertos, cinco fallos y un blanco, nota 2,35/10; repetición limitada a las cinco falladas; fuentes desplegables; navegación a estudio y simulacros sin controles superpuestos. Sin errores de consola registrados durante el recorrido.

Publicación: configuración remota estática comprobada, dry-run superado y 29 archivos públicos cotejados por SHA-256 contra `web/dist`. Comprobación visual pública a 390×844 con botones de 48 px y controles inferiores activos. Los registros están en `VERIFICACION_MOVIL.json` y `VERIFICACION_PUBLICA.json`.

## Alcance académico

Este cierre completa los ajustes de interfaz y la revisión móvil solicitados. Mantiene la revisión documental de las 180 fichas descrita en `ESTADO_PUBLICACION.md`; no añade una segunda validación científica independiente ni una calibración empírica de dificultad. La revisión editorial ampliada de todo el banco, indicada como pendiente en la publicación inicial, no se presenta como realizada en este ajuste móvil.
