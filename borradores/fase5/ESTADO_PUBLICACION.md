# Fase 5: versión funcional publicada

Publicación prioritaria solicitada por el usuario. Despliegue realizado el 20 de octubre de 2026.

- Worker: `broad-hill-ce92`.
- URL: https://broad-hill-ce92.cjferper.workers.dev/
- Versión Cloudflare: `974dbcc9-3316-4107-b332-9d78df1875f7`.
- Directorio publicado: exclusivamente `web/dist/` (29 archivos).
- Configuración remota comprobada y dry-run superado antes del despliegue.

## Contenido y funcionamiento

180 fichas: aluminio 75, titanio 35, aceros 20, magnesio 20, fractura 15 y selección 15. Dificultad editorial prevista: 27 básicas, 81 intermedias y 72 avanzadas. Claves: 94 verdaderas y 86 falsas. No hay preguntas dependientes de imágenes ausentes ni preguntas históricas de Al-Li.

Práctica con bloques, tandas de 10/15/30 o la cantidad disponible, selección aleatoria sin duplicados, reparto equilibrado entre bloques en Todos, corrección inmediata, bloqueo de respuesta, omisión sin penalización, resumen y repetición de errores. El almacenamiento `aleaciones-vf-v1` es independiente del progreso y de los intentos de simulacro. Conserva errores pendientes e históricos, orden de preguntas, respuestas y correcciones al recargar. Acertar un error previo lo resuelve sin borrar el historial.

Las 312 tarjetas activas, las nueve archivadas, los 40 casos, los diez mapas, los pilotos, sus imágenes y los motores anteriores permanecen sin modificación. Solo se añade la entrada de navegación en el HTML.

## Verificación realizada

- 41 pruebas nuevas de V/F superadas.
- Todas las suites de regresión existentes superadas: progreso, simulacros, pilotos, fase 4, interfaz 4.5, contenido y recursos visuales.
- Control de publicación de lista cerrada superado: sin PDF, credenciales, backups ni materiales privados en `web/dist`.
- Recorrido real en navegador local: inicio mixto, fallo con corrección inmediata, botones bloqueados, recarga conservada, blanco, tanda completa y resumen (3 aciertos, 6 fallos, 1 blanco: 1,02/10), repetición limitada a las seis falladas.
- Procedencia de OCR: 95 páginas utilizadas regeneradas desde los PDF actuales; 95 coincidencias de píxeles con las imágenes que originaron el OCR.
- Cotejo documental individual de las 180 fichas registrado con fuentes y anclajes. El OCR es auxiliar y esta revisión no constituye validación oficial del profesor ni calibración empírica de dificultad.
- Se respeta la diferencia entre tema académico y nombre físico del PDF: aceros (tema académico 7) está en `Tema 8 .pdf`; magnesio (tema académico 8), en `Tema 7.pdf`.
- Una afirmación próxima a un piloto se sustituyó; otra se reformuló tras revisión conceptual. El análisis léxico no garantiza ausencia de toda semejanza conceptual.

Los pasajes OCR completos se conservan localmente en `tmp/`, excluido de Git y Cloudflare. El registro versionado conserva referencias, hashes y razonamiento propio, sin transcribir esos pasajes.

## Pendiente tras la publicación prioritaria

Actualización del 20 de octubre: los ajustes de móvil, seis pruebas adicionales de interfaz, el recorrido completo de una tanda y la comprobación pública están documentados en [CIERRE_MOVIL.md](CIERRE_MOVIL.md). La versión vigente del Worker es `a1f08d6e-0b3b-40c2-9d33-d3c88ed39b7b`.

La segunda revisión editorial ampliada de novedad y dificultad del banco completo sigue fuera de este cierre de interfaz; tampoco se afirma haber probado todos los flujos públicos ni teléfonos físicos.
