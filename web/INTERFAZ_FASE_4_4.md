# Fase 4.4 — Interfaz de una sola asignatura

Publicación: 15 de octubre de 2026, rama `main`.

- Eliminado el selector «Asignatura», su población y su manejador de eventos. La asignatura existente queda fijada internamente; se conserva el selector de los diez temas y no se repite el nombre de la cabecera.
- Eliminado el bloque permanente de revisión académica situado debajo de «Cómo se programan los repasos». Las fuentes de las actividades, condiciones científicas, advertencias específicas y documentación académica siguen intactas.
- Ajustada la cuadrícula del selector de tema en pantallas intermedias y actualizada la caché de `app.js` y `estilos.css` a `20261015-f44`. El contenido mantiene su versión anterior porque no cambia.

No se han modificado los JSON de temas o simulacros, contenido compilado, imágenes, mapas, casos, claves de almacenamiento, filtros ni módulos de progreso y repaso. No hay migraciones ni reinicios. El árbol de trabajo estaba limpio al comenzar y `origin/main` no presentaba divergencias.

## Verificación

Las diez suites existentes finalizaron correctamente: **113 pruebas individuales** (28 de progreso, 23 del motor, 15 del Piloto 01, 14 del Piloto 02, 17 de fase 4, nueve de visuales y siete de casos visuales), más las comprobaciones de contenido, presentación y paquete público.

En navegador se comprobaron los tres niveles y filtros de concepto de los diez temas, fuentes desplegables, cuatro valoraciones, casos, mapas y catálogo con ambos pilotos. Se revisaron vistas de ordenador y móvil, sin desbordamiento horizontal ni errores de consola. No se valoraron tarjetas ni se escribieron respuestas durante esta fase.

Se confirmó por Git que no existen diferencias en contenido, progreso, motores, filtros o recursos visuales respecto a la versión anterior. El paquete mantiene sus 25 archivos autorizados; no incluye PDF originales, borradores, copias, credenciales o temporales.

## Publicación

Se verificó de nuevo la configuración remota del Worker existente `broad-hill-ce92`: alojamiento estático, mismo dominio y sin bindings, código dinámico, secretos o rutas nuevas. Dry-run satisfactorio con `npx.cmd` y Wrangler 4.150.0.

Despliegue real completado en https://broad-hill-ce92.cjferper.workers.dev, versión `33e3c009-09c5-4710-aa4d-801beef8c11e`. Se subieron únicamente `index.html`, `app.js` y `estilos.css`.

Después de la propagación se compararon los 25 archivos públicos por SHA-256 con los locales y se abrió la dirección habitual en navegador: no aparecen el selector ni el aviso eliminado; siguen disponibles los diez temas y no hay errores de JavaScript. La fase se guarda en un commit de `main` y se publica mediante push sin forzar.
