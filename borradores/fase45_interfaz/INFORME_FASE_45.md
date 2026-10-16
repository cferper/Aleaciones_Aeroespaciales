# Fase 4.5 — Interfaz simplificada y ampliación opcional

Fecha: 16 de octubre de 2026. Proyecto Aleaciones_Aeroespaciales, rama main; sin worktree alternativo. El estado inicial de Git estaba limpio. No había cambios pendientes de fases anteriores.

## Resultado

312 tarjetas activas: **153 con ampliación útil y 159 sólo con respuesta principal**. Se reutilizan las explicaciones y referencias del banco; no se han creado nuevas preguntas ni ampliaciones metalúrgicas. La auditoría individual está en AUDITORIA_312.json (ID, tema, nivel, decisión, párrafos mostrados, fuentes y hash del registro). La ausencia de ampliación no significa que la tarjeta sea básica: en muchas tarjetas de comprensión la respuesta ya contiene el mecanismo solicitado.

| Tema | Con ampliación | Sólo respuesta | Activas |
|---|---:|---:|---:|
| 1 | 34 | 6 | 40 |
| 2 | 11 | 17 | 28 |
| 3 | 11 | 11 | 22 |
| 4 | 22 | 13 | 35 |
| 5 | 8 | 21 | 29 |
| 6 | 29 | 19 | 48 |
| 7 | 10 | 15 | 25 |
| 8 | 9 | 20 | 29 |
| 9 | 11 | 24 | 35 |
| 10 | 8 | 13 | 21 |
| Total | 153 | 159 | 312 |

Mostrar respuesta revela la solución principal. La ampliación permanece oculta y se abre/cierra mediante Ampliar explicación / Ocultar explicación, con aria-expanded y aria-controls. Se reinicia al avanzar o cambiar tarjeta, tema, nivel, concepto o sesión. Las fuentes quedan fuera del panel plegado y los cuatro botones de valoración siguen disponibles.

Se omiten únicamente explicaciones genéricas conocidas o ya incluidas en la respuesta. Las 82 condiciones específicas del banco completo siguen presentes en respuesta o ampliación. No se eliminan los metadatos editoriales ni las condiciones internas. Las condiciones del supuesto y el alcance científico se mantienen en los enunciados y respuestas; no se introduce una interpretación universal al plegar el detalle.

Se retira la casilla de archivadas y se excluyen de práctica, pendientes del tema, pendientes de diez temas, índice, accesos desde mapas, contadores y herramienta de consulta de progreso. También se actualiza guia.html para que no explique recorridos ya retirados. El texto de filtros es el solicitado y se elimina el recordatorio duplicado del panel Tu ritmo.

## Ajustes de suficiencia de la respuesta principal

RESPUESTAS_AJUSTADAS.json conserva antes/después íntegros y justificación de tres ajustes compatibles con el mismo objetivo e ID. Sólo cambia answer; preguntas, explicaciones, fuentes, condiciones y otros metadatos quedan intactos:

- t1-propiedades-fusion: la respuesta repetía que 660 °C no fija servicio, sin explicar por qué. Se reutiliza íntegramente su explicación existente en la respuesta principal. Ya no aparece un botón que repita ese texto. Originales: Tema 1 .pdf p. 2 y Tema 10.pdf p. 4; este último muestra el contexto de fluencia anterior a fusión. Las explicaciones sobre maduración y estabilidad constan también en la auditoría académica previa.
- t3-dispersoides: la respuesta ahora explicita el efecto antirrecristalizante pedido y el coste de retener soluto. Original Tema 3 .pdf p. 3, con beneficios y acciones desfavorables. La ampliación mantiene la distinción relativa Cr/Zr de 7000 ya documentada.
- t6-alfa: la respuesta conecta la familia α, ausencia de β a ambiente, interés criogénico y endurecimiento por solución sólida, sin exigir abrir la explicación. Original Tema 6 .pdf p. 30. Se mantiene el alcance de esa familia, sin generalizar a cualquier Ti.

Se utilizó la habilidad PDF en lectura/inspección de las páginas originales y se consultó INFORME_FASE_4.md como referencia de revisión previa. No se modificaron PDF ni se revalidó desde cero toda la ciencia del banco. Las exclusiones y discrepancias académicas existentes se conservan.

## Compatibilidad

Se conservan 321 registros (312 activos y 9 archivados), todos los IDs, los 40 casos y los 10 mapas/20 huecos. Las preguntas, claves, rúbricas y recursos de Piloto 01 y Piloto 02 permanecen intactos. progreso.js, estudio-filtros.js, motor y UI de simulacros permanecen sin cambios, verificados por hash. Ninguna migración ni cambio de claves de almacenamiento: aleaciones-progreso-v1 y la clave de intentos de examen original. No se escriben registros al revelar, ampliar, ocultar, filtrar o navegar. El próximo repaso se programa sólo al valorar.

Las pruebas cargan registros históricos de las nueve archivadas, ejecutan sesiones sobre las 312 activas y comprueban que esos registros sobreviven sin alteración al guardar y exportar/importar. No se reinicia progreso ni se reutilizan IDs.

## Verificación

**118 pruebas individuales superadas, más tres comprobaciones de integridad**: contenido, presentación de 321 tarjetas y paquete público. Resultado completo en PRUEBAS.txt.

- progreso: 28; motor simulacro: 23; Piloto 01: 15; Piloto 02: 14; fase 4: 17; visuales de estudio: 9; casos visuales: 7; interfaz fase 4.5: 5.
- La nueva suite ejecuta la interfaz real con DOM mínimo y almacén real: revela y recorre las 312 tarjetas, abre/cierra las ampliaciones disponibles, verifica fuentes separadas, cuatro botones, reinicio del estado, exclusión de archivadas, contadores y consulta WebMCP, historial de archivadas y ausencia de escrituras al consultar. Comprueba las cuatro valoraciones y sus intervalos, y los tres ajustes exactos de respuesta.
- Navegador local: tres niveles en Ti y tarjetas de Al; tarjeta de corrosión sólo con respuesta; apertura/cierre de ampliación y reinicio al cambiar de tema; las cuatro valoraciones y persistencia después de recargar; filtros y sesión global de 308 pendientes tras cuatro valoraciones, frente a 312 en origen limpio.
- Navegación de las 42 preguntas de cada piloto e imágenes cargadas: 7 de Piloto 01 y 5 de Piloto 02. Recarga conserva la posición del Piloto 02. La sustitución muestra confirmación, que se canceló; el segundo piloto se probó en un origen local distinto sin sobrescribir el primero.
- Se comprueban caso visual y mapa de tema 1 como regresión. Las suites validan integridad del resto de casos/mapas; no se repiten manualmente las 40 soluciones ni se entrega cada simulacro en este cambio de presentación.
- Capturas de escritorio y móvil revisadas. Sin desbordamiento horizontal: escritorio 1265/1265 px; móvil 375/375 y 390/390 px de contenido/ventana según barra de desplazamiento. Sin errores de JavaScript en las dos sesiones locales ni en la pública.

## Publicación y privacidad

Configuración remota reconsultada antes de publicar: Worker broad-hill-ce92, mismo subdominio cjferper, workers.dev habilitado, previews deshabilitados, sin rutas/dominios propios, bindings, secretos ni cron. Static Assets se sirve directamente, html auto-trailing-slash, not_found none, run_worker_first false. No hay handlers dinámicos. Coincide con el informe de configuración anterior.

El paquete público tiene **25 archivos**, 12 PNG de pilotos y 2 PNG de estudio; sólo web/dist/. Sin PDF originales, borradores, copias de seguridad, temporales ni credenciales. .gitignore protege originales, temporales, credenciales y estado de Wrangler. Los informes académicos de esta carpeta son documentación de elaboración propia fuera del paquete de Cloudflare.

Dry-run con npx.cmd y Wrangler 4.150.0: satisfactorio, sin bindings. Despliegue real: **8690e13b-2857-4b06-a042-4d473201437b**, cuatro assets actualizados (app.js, index.html, contenido.js, guia.html) y 21 ya presentes.

URL: https://broad-hill-ce92.cjferper.workers.dev/

VERIFICACION_PUBLICA.json confirma por SHA-256 los 25 archivos y HTTP 200 de la raíz, con app.js y contenido.js v=20261016-f45. Verificados en navegador público respuesta principal, ampliación cerrada inicialmente, apertura y cierre, ausencia de referencias a archivadas y consola sin errores. No se valoraron tarjetas ni se modificaron intentos en producción.

Git: comprobación previa de origin/main sin divergencia (0/0), rama main. Se incorporan únicamente código, JSON de tres respuestas, compilado, pruebas, README bilingüe y documentación de esta fase. No se realiza push forzado ni se descarta trabajo. El hash final y la confirmación de push se comunican tras ejecutar la publicación de GitHub.

No quedan incidencias funcionales pendientes detectadas. Las limitaciones de revisión académica anteriores continúan vigentes y sus documentos no se modifican.
