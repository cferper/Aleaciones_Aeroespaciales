# Fase 4.3 — Casos visuales y publicación

Fecha de cierre: 15 de octubre de 2026. Proyecto Aleaciones_Aeroespaciales, rama `main`.

## Resultado

Los dos casos pendientes incorporan sus gráficas originales antes de los campos de respuesta, con texto alternativo, procedencia y ampliación en otra pestaña. La versión de producción incluye también la presentación simplificada de fase 4.1 y las once correcciones de tarjetas de fase 4.2.

| Caso | Recurso | Procedencia y condiciones | Cambio académico |
|---|---|---|---|
| `t1-caso-aumentar-acritud` | `assets/estudio/t1-5052-acritud.png` | Tema 1 .pdf, página PDF 6, impresa 4-12; 5052, deformación en frío, reducción de sección (%) | Ninguno: conserva enunciados, predicciones, solución y criterios. Reutiliza la figura de fase 4.2. |
| `t1-caso-recocido` | `assets/estudio/t1-5052-recocido.png` | Tema 1 .pdf, página PDF 7, impresa 4-13; 5052, 33 % de reducción inicial, recocido de una hora, temperatura en °C | Ninguno: la figura permite comparar rigurosamente 100 y 400 °C sin reformular el caso. |

La nueva figura de recocido tiene **900 × 790 píxeles**. Se renderizó la página original a 2827 × 4000 píxeles y se recortó el rectángulo `[310,700,1210,1490]`. Se conservan el título, las curvas A/Rm/Rp0,2, ambos ejes verticales (% y MPa), el eje de temperatura y la indicación de una hora. No se ha redibujado, fabricado ni sustituido por la gráfica de acritud. Es adecuada para la comparación cualitativa solicitada, no para asignar cifras experimentales de precisión. El manifiesto registra hashes y extracción.

## Contenido y progreso

Se mantienen 312 tarjetas activas y nueve archivadas, 40 casos, diez mapas con 20 huecos y tres simulacros seleccionables (demostración y dos pilotos de 42 preguntas). No cambian IDs ni objetivos. Las dos modificaciones de casos son únicamente el campo `visual`; los datos anteriores se conservan en el manifiesto de cambios para verificar la compatibilidad.

Las claves siguen siendo `aleaciones-progreso-v1` y `aleaciones-simulacro-v1`. El módulo de progreso, algoritmo de repaso, filtros, motores de examen, bancos de ambos pilotos y PDF originales conservan sus hashes. No se ejecutan migraciones ni reinicios del almacenamiento. Mantener el mismo origen HTTPS conserva la compatibilidad del historial del navegador; no se afirma sincronización entre equipos.

## Pruebas automáticas

Las diez suites finalizaron con código cero:

| Suite | Resultado |
|---|---|
| Contenido | Diez temas, 321 tarjetas, IDs, referencias y huecos correctos |
| Progreso | 28 pruebas |
| Motor de simulacros | 23 pruebas |
| Piloto 01 | 15 pruebas |
| Piloto 02 | 14 pruebas |
| Fase 4 | 17 pruebas |
| Presentación de tarjetas | Verificadas las 321 tarjetas y 82 condiciones específicas |
| Visuales de estudio | 9 pruebas |
| Casos visuales | 7 pruebas |
| Paquete público | 25 archivos; 12 PNG de pilotos y dos PNG de estudio; sin archivos privados |

Total: **113 pruebas individuales**, además de las comprobaciones de contenido, presentación y publicación. Los resultados completos están en `RESULTADOS_PRUEBAS.json`.

Se mantienen las comprobaciones históricas de fase 4 y fase 4.2: sus excepciones admiten exclusivamente los cambios registrados y verifican los estados anterior y posterior; no se han desactivado para ocultar diferencias.

## Recorrido en navegador local

Se utilizó `http://127.0.0.1:8014/`, separado de la dirección pública y de otros orígenes de estudio.

- Se abrieron y respondieron los **40 casos**, comprobando predicciones, campos de razonamiento, soluciones y criterios. Las dos nuevas imágenes cargaron con dimensiones originales correctas.
- Se comprobaron los **diez mapas**, sus dos selectores, la comprobación de huecos y la vista completa.
- Se verificaron los contadores de **312 activas**, los tres niveles en los diez temas, los filtros de concepto y archivo y las cuatro valoraciones. Se revelaron tarjetas representativas de los 30 pares tema/nivel; la cobertura de las 321 presentaciones completas corresponde además a la suite automática, no a una sesión manual de todas ellas.
- Se recorrieron **las 42 preguntas de cada piloto**, verificando las siete y cinco imágenes. Se entregaron ambos con confirmación, se mostraron modelos y se puntuaron los 54 y 57 criterios de sus doce preguntas abiertas. Los casos de comprobación dieron las notas orientativas esperadas: 0,1/10 en Piloto 01 (un V/F correcto y abiertas a cero) y 0/10 en Piloto 02 completamente en blanco y con autoevaluación cero.
- Piloto 01 conservó su respuesta tras recargar. Iniciar Piloto 02 exigió confirmar la sustitución del intento anterior. Los cinco casos consultados del tema 1 seguían registrados tras recargar.
- El registro de errores JavaScript quedó vacío. Las comprobaciones se documentan en `PRUEBAS_NAVEGADOR.json` y las capturas locales de ambos casos.

Estas son verificaciones funcionales y de conservación documental; no constituyen una nueva validación académica oficial de los pilotos.

## Cloudflare

Se volvió a consultar mediante GET la configuración remota: mismo Worker, dominio `cjferper.workers.dev`, fecha de compatibilidad `2026-10-07`, sin flags, bindings, secretos, cron, dominios personalizados ni rutas. Static Assets mantiene servicio directo, `auto-trailing-slash`, `not_found_handling: none`, `run_worker_first: false` y base `/`. No hay código dinámico de usuario que sustituir. La versión previa era `278f7a1a-1796-4377-a529-5d4e1e94a1c8`.

El dry-run con `npx.cmd --offline wrangler@4.150.0 deploy --config .\wrangler.jsonc --name broad-hill-ce92 --dry-run` terminó correctamente. Wrangler contabiliza inicialmente 29 entradas porque incluye cuatro carpetas; el paquete contiene exactamente 25 archivos. El pequeño «Total Upload» del módulo de Wrangler no representa el tamaño conjunto de los assets.

Se ejecutó el despliegue real autorizado sobre el Worker existente. Se subieron seis archivos nuevos o modificados (`app.js`, `contenido.js`, `estilos.css`, `index.html` y los dos PNG de estudio); los otros 19 ya estaban almacenados.

| Propiedad | Valor |
|---|---|
| Worker | `broad-hill-ce92` |
| Dirección definitiva | https://broad-hill-ce92.cjferper.workers.dev |
| Versión publicada | `bb690629-ec3e-495b-8c26-c51906ddd623` |
| Despliegue activo | `9dacc35c-69ed-447d-a2e4-9c54ea6b9f72` |
| Tráfico | 100 % a la nueva versión |

La consulta posterior confirmó la configuración conservada. Una verificación HTTPS comparó **los 25 archivos públicos mediante SHA-256** con el paquete local, más la raíz del sitio: todos coinciden y responden correctamente. Evidencia: `VERIFICACION_PUBLICA.json`.

Se abrió también la dirección pública en navegador: ambos casos muestran el gráfico correcto antes de responder y sus tres campos; el script y contenido corresponden a la revisión `20261014-f43`. El registro de errores de consola está vacío. No se enviaron respuestas ni se valoraron actividades en la web pública durante esta comprobación. Evidencias: `NAVEGADOR_PUBLICO.json` y `CASO_RECOCIDO_PUBLICO.png`.

## GitHub y archivos incluidos

Repositorio: https://github.com/cferper/Aleaciones_Aeroespaciales, rama `main`. El fetch inicial confirmó que no había commits locales o remotos divergentes. El commit de cierre agrupa la implementación pendiente de fase 4.2, las dos figuras, los dos casos de fase 4.3, pruebas y documentación. El hash final del commit y la confirmación del push se comunican en la entrega; pueden comprobarse con `git log -1` y `git rev-list --left-right --count HEAD...origin/main`.

Archivos principales:

- `web/temas/t1.json`, `t4.json`, `t6.json` y `web/dist/contenido.js`: tarjetas de fase 4.2 y los dos recursos de casos.
- `web/dist/app.js`, `estilos.css`, `index.html`: imágenes antes de responder, ampliación, presentación simplificada y caché actualizada.
- `web/dist/assets/estudio/`: acritud y recocido de 5052.
- `web/pruebas-visuales-estudio.cjs`, `pruebas-casos-visuales.cjs`, `pruebas-fase4.cjs` y `verificar-publicacion.cjs`: conservación y paquete reproducible.
- `wrangler.jsonc`: configuración del Worker existente; la plantilla anterior permanece identificada como inactiva.
- `.gitignore`, `README.md` bilingüe, documentación de despliegue y carpetas de auditoría de fases 4.2 y 4.3.

`.gitignore` excluye los originales `Aleaciones/` y `materiales/`, temporales, dependencias, archivos de progreso, `.wrangler/`, `.env*`, `.dev.vars*`, claves PEM/KEY y las evidencias locales históricas de cuenta bajo `despliegue/cloudflare/*.json`. Se comprobó el comportamiento real de las exclusiones. Las credenciales de Wrangler permanecen fuera del repositorio y nunca se copian al paquete. Los respaldos históricos ya versionados de fases anteriores no se borran ni se añaden copias nuevas de ellos.

El directorio público contiene exclusivamente los 25 archivos permitidos por la lista cerrada del verificador. Los PDF, borradores, documentación, auditorías, capturas y credenciales no se despliegan en el Worker. Las evidencias académicas incluidas en GitHub son datos ya destinados al proyecto, hashes, comparaciones y capturas de prueba, no historiales de usuarios ni credenciales.

## Limitaciones e incidencias

Las gráficas proceden de escaneados y se usan de forma cualitativa. No se han inventado datos ni convertido la imagen en una medición precisa. Siguen vigentes las advertencias académicas anteriores sobre fuentes contradictorias o ilegibles; no afectan a las dos figuras corregidas. No hay incidencias técnicas pendientes que impidan publicar esta versión.
