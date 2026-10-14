# Actualización preparada del Worker existente

> Registro histórico de preparación. La publicación posterior de las fases 4.1–4.3 y su verificación se documentan en `borradores/fase43_publicacion/INFORME_FASE_4_3.md`; los identificadores y cantidades siguientes corresponden a la inspección inicial.

Comprobación: 14 de octubre de 2026. Proyecto local: `C:\Proyectos\Web_estudio\Aleaciones_Aeroespaciales`, rama `main`.

La actualización está preparada y el dry-run ha terminado correctamente. **No se ha realizado el despliegue real ni se ha modificado la configuración remota.** Este informe sustituye las limitaciones de autenticación y comprobación remota del diagnóstico anterior `DIAGNOSTICO_Y_ACTUALIZACION.md`.

## 1. Identidad y configuración remota comprobadas

Se ha utilizado la sesión OAuth existente de Wrangler y consultas GET a la API de Cloudflare. El token se ha leído únicamente en memoria, sin imprimirlo ni incluirlo en los archivos de publicación.

| Propiedad | Valor observado |
| --- | --- |
| Cuenta propietaria | `5369e5abbdcae63755b38c78dc6eb47a` |
| Worker | `broad-hill-ce92` |
| Dirección pública real | https://broad-hill-ce92.cjferper.workers.dev |
| workers.dev | Activado |
| URLs de previsualización | Desactivadas |
| Rutas y dominios personalizados | Ninguno |
| Zonas de la cuenta | Ninguna; respuesta paginada completa con total cero |
| Fecha de compatibilidad | `2026-10-07` |
| Flags de compatibilidad | Ninguno |
| Bindings y secretos | Ninguno |
| Cron Triggers | Ninguno |
| Tail consumers, placement y logpush | Sin consumidores ni placement configurado; logpush desactivado |
| Observabilidad en script-settings | `null` |
| Static Assets | Servicio directo, base `/`, `auto-trailing-slash`, `not_found_handling: none`, `run_worker_first: false` |

**Corrección de la dirección de referencia:** la API devuelve el subdominio de cuenta `cjferper`, no `ciferper`. La dirección real respondió HTTP 200. No se ha cambiado el dominio: la configuración preparada mantiene el Worker y el subdominio actuales.

La versión activa es `f3298bba-273b-4b58-84a5-59b6b7497f05`, con el 100 % del tráfico. Despliegue activo: `c7eb8a5c-0fa3-402e-9521-fc4c67f20515`, creado el 7 de octubre de 2026 desde el panel. Una segunda consulta después del dry-run confirmó los mismos identificadores y porcentaje.

El endpoint de contenido del script devolvió cero bytes; los metadatos de versión indican `handlers: null` y recursos de Static Assets con servicio directo. No se ha encontrado código dinámico de usuario, bindings, secretos, tareas programadas, rutas o dominios personalizados que pudieran perderse con esta actualización. Los activos publicados anteriormente sí se sustituirán por el paquete local actual, que es el objetivo autorizado para un futuro despliegue.

Evidencias: `CONFIGURACION_REMOTA_VERIFICADA.json` y `COMPROBACION_FINAL_REMOTA.json`. Se mantienen fuera de `web/dist/`.

## 2. Configuración local preparada

Archivo: `wrangler.jsonc`, en la raíz de Aleaciones_Aeroespaciales.

```jsonc
{
  "name": "broad-hill-ce92",
  "account_id": "5369e5abbdcae63755b38c78dc6eb47a",
  "compatibility_date": "2026-10-07",
  "compatibility_flags": [],
  "workers_dev": true,
  "preview_urls": false,
  "routes": [],
  "assets": {
    "directory": "./web/dist",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "none",
    "run_worker_first": false
  }
}
```

No se añade un script `main`, un binding de assets, migraciones ni un backend. Se conservan explícitamente los valores relevantes de alojamiento estático observados. El archivo de ejemplo previo permanece disponible, pero el comando de actualización utiliza expresamente `wrangler.jsonc`.

## 3. Paquete público y exclusiones

El único directorio de publicación es `web/dist/`. La verificación con lista cerrada confirmó **23 archivos, 5.935.818 bytes (5,66 MiB)**:

- 2 HTML y 2 CSS.
- 7 JavaScript: aplicación, contenido, progreso, filtros y los tres componentes de simulacros.
- 12 PNG originales de los ejercicios: siete del Piloto 01 y cinco del Piloto 02.

Los compilados coinciden con los JSON actuales: 312 flashcards activas, nueve archivadas, 40 casos, diez mapas con 20 huecos, demostración técnica y dos pilotos de 42 preguntas. Se comprobaron las 13 referencias locales de los HTML y las rutas de las 12 imágenes.

La lista cerrada no contiene PDF originales, borradores, documentos académicos auxiliares, copias de seguridad, temporales, credenciales ni enlaces simbólicos. El escaneo de patrones de credenciales y rutas absolutas no encontró incidencias. Las menciones textuales a nombres y páginas de PDF son referencias bibliográficas; no incluyen los documentos originales. Las imágenes aprobadas sí forman parte del paquete público.

El archivo de configuración, los informes, los originales, las herramientas y los temporales de Wrangler quedan fuera del directorio de assets. `.gitignore` no se utiliza como filtro de publicación: la protección es el directorio exclusivo y la comprobación exacta de su contenido.

## 4. Progreso y compatibilidad

Se descargaron mediante GET los scripts de la web publicada y se compararon con la versión local. El módulo publicado `progreso.js` es idéntico al local (SHA-256 `3893d1cd20ee5be9f96892e922a048fcbfb78bba666ebfa93c5fb81796947c3d`). Se conservan los 260 identificadores de tarjetas anteriores, incluidos los que ahora están archivados.

El algoritmo de repaso y el esquema de almacenamiento no cambian. El estudio utiliza `aleaciones-progreso-v1`; los simulacros utilizan una clave independiente, `aleaciones-simulacro-v1`. Las pruebas comprueban la conservación de casos, mapas, tarjetas e intentos, así como la confirmación y protección frente a sobrescrituras.

Manteniendo **HTTPS, el mismo dominio real y el mismo navegador/perfil**, la actualización es compatible con el progreso existente. Desplegar archivos no borra localStorage. Las nuevas tarjetas comienzan sin historial transferido. El progreso de `localhost` o de otro dominio no se traslada automáticamente: para el estudio puede utilizarse la exportación e importación JSON existente. La copia de progreso de estudio no incluye el intento de simulacro.

Evidencia de comparación de la web anterior: `ARCHIVOS_PUBLICADOS_ANTES.json`. No se ha borrado ni migrado almacenamiento de ningún usuario.

## 5. Pruebas realizadas

Todas las comprobaciones terminaron con código de salida cero:

| Comprobación | Resultado |
| --- | --- |
| `web/verificar-publicacion.cjs` | Paquete, rutas, imágenes y exclusiones correctos |
| `web/pruebas-contenido.cjs` | Diez temas, contenido e identificadores correctos |
| `web/pruebas-progreso.cjs` | 28 pruebas |
| `web/pruebas-simulacro.cjs` | 23 pruebas |
| `web/pruebas-piloto.cjs` | 15 pruebas |
| `web/pruebas-piloto02.cjs` | 14 pruebas |
| `web/pruebas-fase4.cjs` | 17 pruebas |

Total: **97 pruebas específicas**, además de las dos comprobaciones de contenido y publicación. Incluyen penalización negativa, ponderaciones, rúbricas, persistencia, recuperación de los pilotos, claves independientes y conservación del algoritmo de repaso. Resultados completos: `PRUEBAS_PREVIAS_PUBLICACION.json`.

Se ejecutó con PowerShell, Node instalado y Wrangler **4.150.0**:

```powershell
npx.cmd --offline wrangler@4.150.0 deploy --config .\wrangler.jsonc --name broad-hill-ce92 --dry-run
```

Resultado: código cero, `No bindings found` y `--dry-run: exiting now`. Registro: `DRY_RUN.txt`. Se utilizó el ejecutable instalado `C:\Program Files\nodejs\npx.cmd` y se añadió temporalmente su directorio al PATH del proceso porque la sesión de herramientas no lo heredaba.

Wrangler muestra inicialmente «Read 26 files»: su lectura recursiva cuenta las tres carpetas junto a los 23 archivos. Se comprobó en el código instalado que después excluye los directorios del manifiesto. No hay tres archivos públicos adicionales. El «Total Upload: 0.37 KiB» corresponde al pequeño módulo generado por Wrangler, no al tamaño de todos los assets. El dry-run no ha publicado esos recursos.

Esta comprobación no es una prueba de la nueva versión en producción: seguirá sirviéndose la versión anterior hasta que se ejecute un despliegue real.

## 6. Comando exacto para publicar más adelante

**No se ha ejecutado el siguiente comando.** Es el paso que publicaría la actualización sobre el Worker existente:

```powershell
Set-Location -LiteralPath 'C:\Proyectos\Web_estudio\Aleaciones_Aeroespaciales'
npx.cmd wrangler@4.150.0 deploy --config .\wrangler.jsonc --name broad-hill-ce92
```

Si PowerShell no encuentra `npx.cmd`, tras situarse en el proyecto puede emplearse la ruta completa:

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
& 'C:\Program Files\nodejs\npx.cmd' wrangler@4.150.0 deploy --config .\wrangler.jsonc --name broad-hill-ce92
```

La selección de cuenta y nombre está fijada en la configuración. No se utiliza otro proyecto ni otra dirección. Antes de una publicación diferida debe comprobarse que nadie haya añadido código, bindings, rutas u otros recursos al Worker desde esta inspección; si aparecen cambios remotos, habrá que revisarlos antes de actualizar.

Como precaución práctica, puede exportarse el progreso de estudio antes de publicar y comprobar después el estudio, ambos pilotos y sus imágenes sin borrar los datos del navegador. La versión remota anterior queda identificada en este informe para una eventual recuperación; no se ha ejecutado ninguna operación de rollback.

## 7. Archivos y límites de esta preparación

Se añadió `wrangler.jsonc` y se guardaron evidencias e informe bajo `despliegue/cloudflare/`; las herramientas auxiliares de lectura y el resultado de empaquetado están en el directorio ignorado `tmp/cloudflare-lectura/`. Al empezar ya existían como no versionados `despliegue/`, `web/verificar-publicacion.cjs` y `wrangler.cloudflare.example.jsonc` de la preparación anterior. No se han descartado ni eliminado.

No se han modificado los archivos de la web, contenidos académicos, PDF, bancos ni algoritmo de repaso. `git diff --check` no detectó problemas. No se han realizado commits, push, despliegues reales, subidas de versiones ni modificaciones remotas.

No se ha identificado configuración remota importante pendiente de preservar. La autenticación es válida y no requiere iniciar sesión de nuevo mientras siga vigente. La única discrepancia detectada respecto a la información inicial es la grafía del dominio, corregida con evidencia de la API.
