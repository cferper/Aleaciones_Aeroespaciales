# Paso 1: una tarjeta que revela su respuesta

Este documento conserva el primer paso del desarrollo. La versión actual y sus cinco archivos se explican en `PASO_2.md`; las valoraciones y el guardado que aquí aparecen como siguientes pasos ya están implementados.

## Qué hemos construido

Una tarjeta del tema 1 con pregunta, respuesta inicialmente oculta y referencias. «Mostrar respuesta» revela la solución; «Volver a pensar» la oculta otra vez. Todavía no hay valoración ni guardado de progreso.

## Los tres archivos

- `dist/index.html`: estructura y contenido. `h1` es el título principal, `h2` la pregunta, `button` un botón y `section` una sección. Los `id` permiten que JavaScript encuentre elementos concretos.
- `dist/estilos.css`: colores, tamaños, separación y adaptación a pantalla pequeña. `:root` agrupa los colores. La regla para pantallas de hasta 480 píxeles hace que los botones ocupen el ancho disponible.
- `dist/app.js`: reacciona a los clics. `getElementById` encuentra un elemento y `addEventListener` añade una acción. Cambiar `respuesta.hidden` modifica su visibilidad. Las líneas de foco y `aria-expanded` ayudan a usar la tarjeta con teclado y lectores de pantalla.

En este primer ejemplo, la pregunta y respuesta se escriben directamente en HTML para ver la relación entre estructura y comportamiento. Cuando añadamos varias tarjetas, separaremos el contenido en un archivo de datos. El identificador estable `t1-acritud-proceso` ya está en el HTML.

## Abrirla sin instalar nada

Desde el Explorador de archivos, entra en `web/dist` y abre `index.html` con tu navegador. Los tres archivos deben permanecer juntos. Esta versión funciona también al abrir el archivo directamente porque no carga datos mediante peticiones de red.

También puede verse mediante un servidor local. Es un programa que entrega los archivos al navegador en tu ordenador. En esta sesión se usa Python ya disponible, sin instalarlo:

```powershell
& 'C:\Users\cjfer\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 8000 --bind 127.0.0.1 --directory web/dist
```

Ejecutar desde la carpeta raíz del proyecto WEB. `http.server` sirve los archivos; `8000` es el puerto; `127.0.0.1` limita el acceso al propio ordenador; `--directory` sirve únicamente los archivos de la web, no los PDF del proyecto. Abrir `http://127.0.0.1:8000`. Mantener la terminal abierta; Ctrl+C detiene el servidor. Esta ruta de Python pertenece al entorno actual y podría cambiar en otra instalación.

El enlace local no es un enlace para tus compañeros. La publicación se hará después de revisar la primera versión y explicar alojamiento y condiciones.

## Un cambio pequeño que puedes probar

En `estilos.css`, cambia el valor de `--azul` de `#174eae` a `#00677a`, guarda y recarga el navegador. Verás qué partes usan esa variable. El archivo se guarda en disco; la página abierta se actualiza al recargar.

## Próximo paso

Añadir los cuatro botones de autoevaluación tras revelar la respuesta, explicar una regla de repaso y guardar la valoración y la siguiente fecha en el navegador.
