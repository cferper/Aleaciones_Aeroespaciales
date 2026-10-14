# Actualización del Worker existente broad-hill-ce92

> Diagnóstico histórico anterior a la autenticación y a la publicación. La configuración verificada posteriormente consta en `INFORME_CONFIGURACION_VERIFICADA.md`; el cierre publicado está en `borradores/fase43_publicacion/INFORME_FASE_4_3.md`. Las limitaciones de acceso descritas aquí ya se resolvieron.

Revisión local: 14/10/2026. Rama `main`; estado inicial de Git limpio. No se ha autenticado con Cloudflare, instalado Wrangler, subido archivos/versiones, creado un Worker ni cambiado configuración remota. Tampoco hay commits ni push. El contenido académico, `web/dist/` y el algoritmo de repaso permanecen intactos.

## Conclusión

La web local es estática y puede servirse mediante **Cloudflare Workers Static Assets**, apuntando exclusivamente a `web/dist/`. El método recomendado es una actualización reproducible con Wrangler dirigida al **nombre existente `broad-hill-ce92` y al Account ID de su cuenta propietaria**, después de leer y conservar su configuración actual. No se necesita crear otro proyecto, conectar Git ni cambiar de dirección. La configuración de assets permite servir una web sin añadir un script de servidor propio. [Configuración oficial](https://developers.cloudflare.com/workers/static-assets/binding/).

**La preparación local está comprobada; el destino remoto todavía no está verificado.** La dirección proporcionada, `https://broad-hill-ce92.ciferper.workers.dev`, devolvió `ERR_NAME_NOT_RESOLVED` al abrirla en navegador desde este entorno; el lector web tampoco pudo recuperarla. Esto no demuestra por sí solo que el Worker no exista. Hay que confirmar en el panel su URL exacta y estado antes de publicar, sin inventar variantes ni crear un sustituto.

El rótulo «manual» del despliegue anterior es información aportada por el propietario. Por sí solo no determina si se utilizó subida de assets, editor, CLI u otro mecanismo. La web pública tampoco permite inferir Account ID, código de servidor, bindings o rutas, incluso cuando responde correctamente.

## Qué existe en el repositorio

- No se encontró `wrangler.toml`, `wrangler.json`, `wrangler.jsonc`, código de Worker, integración CI de Cloudflare, `package.json` ni procedimiento anterior para `broad-hill-ce92`.
- `GUIA_PROYECTO.md` menciona **Cloudflare Pages / Direct Upload** como posibilidad antigua; no documenta el Worker del usuario. `wrangler pages deploy` apunta a otro producto y no es el procedimiento para actualizar este Worker.
- `web/servir.cjs` y el comando Python de README son servidores locales, no código que deba subirse al Worker.
- Hay Node disponible en este entorno; no se encontraron `wrangler`, `npm` ni `npx` como comandos disponibles. La preparación no ha instalado herramientas ni examinado credenciales guardadas.

Para el procedimiento CLI posterior se necesita Node compatible con Wrangler y npm/npx. La documentación oficial recomienda instalación local para fijar versiones; en las instrucciones siguientes `npx wrangler@4` usa la rama 4, puede descargarla en caché y no exige añadir dependencias de ejecución a la web. Registrar la versión concreta que se utilice y mantenerla durante la actualización. [Requisitos de Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

## Paquete público comprobado

**23 archivos; 5.935.818 bytes (5,66 MiB).** El mayor es `assets/piloto-02/P02_V01_rutas.png`, de 1.148.674 bytes. El inventario de rutas, tamaños y SHA-256 queda en `AUDITORIA_PUBLICABLE.json`, fuera del directorio público.

| Grupo | Archivos |
|---|---|
| HTML | `index.html`, `guia.html` |
| Estilos | `estilos.css`, `simulacro.css` |
| Estudio | `contenido.js`, `app.js`, `progreso.js`, `estudio-filtros.js` |
| Simulacros | `simulacros-contenido.js`, `simulacro-motor.js`, `simulacro-ui.js` |
| Recursos | 7 PNG en `assets/piloto-01/` y 5 PNG en `assets/piloto-02/` |

Los compilados coinciden con sus JSON fuente: **321 tarjetas almacenadas, 312 activas y 9 archivadas; 40 casos; 10 mapas/20 huecos; demo de 6 preguntas y Piloto 01/Piloto 02 de 42 preguntas cada uno**. Se comprobaron 13 referencias locales HTML y las 12 rutas de imágenes de los pilotos. No se detectaron enlaces simbólicos, rutas absolutas Windows, URLs `file://` ni patrones examinados de credenciales en HTML/JS/CSS. El escaneo de patrones no pretende certificar la ausencia de cualquier dato sensible imaginable.

No hay PDF, borradores, copias de progreso, backups, `.git`, credenciales, herramientas o archivos de preparación dentro del paquete. Los nombres/páginas de PDF que aparecen en las citas son referencias de texto; no incluyen el PDF original. Sí se publican las preguntas, soluciones y extractos visuales previstos de la aplicación.

**No subir la raíz del repositorio, `web/`, `Aleaciones/`, `borradores/` ni `despliegue/`.** `.gitignore` no controla qué assets sube Wrangler: el límite efectivo es `assets.directory`. Por ello el nuevo comprobador `web/verificar-publicacion.cjs` usa una lista cerrada de estos 23 archivos y falla ante ausencias o añadidos. Si se amplía el paquete en el futuro, revisar expresamente esa lista. Un `.assetsignore` puede servir como defensa adicional, pero no hace falta para el paquete actual y no sustituye esta selección. [Assets e ignorados](https://developers.cloudflare.com/workers/static-assets/binding/).

## Configuración que conviene añadir después de verificar el destino

Se ha preparado en la raíz `wrangler.cloudflare.example.jsonc`, **no una configuración activa autodetectada**. Lleva nombre fijo y marcadores pendientes de Account ID/fecha. No contiene tokens. El archivo está fuera de `web/dist/`.

La plantilla sólo sirve si el Worker actual es de assets estáticos, sin lógica propia ni bindings que deban mantenerse. En ese caso se puede convertir en `wrangler.jsonc` en la misma raíz y completar los marcadores. No se necesita `main`, un backend nuevo, KV, D1 o R2 para esta aplicación.

Si el Worker actual tiene código, rutas especiales, bindings, variables, headers, redirecciones o controles de acceso, recuperar su configuración/código antes de preparar la configuración activa. **No sustituirlos por la plantilla mínima.** Conservar `compatibility_date`, flags, exposición `workers.dev`, dominios/rutas y los ajustes pertinentes ya existentes. El nombre de cuenta o el subdominio no son un Account ID.

La web navega mediante controles y fragmentos; no necesita fallback SPA para rutas desconocidas. `not_found_handling: "none"` evita servir HTML como respuesta a un script o archivo ausente. El manejo HTML automático de Cloudflare permite portada y guía, aunque puede canonicalizar `/guia.html` a `/guia`; sus rutas relativas siguen resolviendo desde la raíz. No se propone cambiar headers, CSP o caché remotamente en esta fase. [Manejo de HTML](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/).

## Procedimiento exacto posterior, con comprobación del Worker existente

**Los comandos de esta sección son instrucciones para el propietario; no se han ejecutado aquí.** La única herramienta nueva ejecutada es el comprobador local, junto con las pruebas existentes. Los marcadores pendientes requieren datos reales; no deben adivinarse.

### 1. Verificar el destino y conservar la versión actual

En la cuenta de Cloudflare propietaria, abrir **Workers & Pages → broad-hill-ce92**. Comprobar que es ese Worker ya existente, su Account ID y la dirección `workers.dev` exacta. Revisar configuración, código, bindings, rutas/dominios y versión/despliegue activos. Conservar el ID de la versión activa y la información necesaria para restaurarla. No usar «Create application» ni crear otro proyecto.

El problema de DNS debe aclararse aquí. Si no se encuentra el Worker en esa cuenta, detener el procedimiento: un comando `deploy` puede crear un Worker cuando el nombre no existe, y no debe usarse como prueba de existencia.

### 2. Preparar autenticación y configuración local

Desde PowerShell, con Node/npm/npx disponibles:

```powershell
Set-Location -LiteralPath 'C:\Proyectos\Web_estudio\Aleaciones_Aeroespaciales'
npx wrangler@4 --version
npx wrangler@4 whoami
```

Si no hay sesión válida, el propietario puede ejecutar `npx wrangler@4 login`, completar OAuth en su navegador y repetir `whoami`. No enviar tokens al chat, escribirlos en argumentos, copiarlos al repositorio ni ponerlos en assets. Es necesaria autenticación para consultar el Worker y autorización de despliegue en esa cuenta para actualizarlo. [Autenticación y consulta de identidad](https://developers.cloudflare.com/workers/wrangler/commands/general/).

Una vez confirmado que procede la plantilla estática y que no existe ya una configuración válida recuperada del Worker:

```powershell
if (Test-Path -LiteralPath './wrangler.jsonc') {
  throw 'Ya existe configuración: revisarla y conservarla; no sobrescribirla con la plantilla.'
}
Copy-Item -LiteralPath './wrangler.cloudflare.example.jsonc' -Destination './wrangler.jsonc'
```

Editar **localmente** `wrangler.jsonc`: sustituir Account ID y fecha por los valores confirmados, y preservar los ajustes remotos aplicables. La ruta de assets debe seguir siendo `./web/dist`, relativa a esa configuración en la raíz. No activar `--env` ni inventar un nombre alternativo, sufijo o dominio.

### 3. Consultar existencia y versión — sólo lectura remota

```powershell
npx wrangler@4 deployments list --config ./wrangler.jsonc --name broad-hill-ce92
npx wrangler@4 deployments status --config ./wrangler.jsonc --name broad-hill-ce92
```

Revisar que la cuenta y los resultados correspondan al Worker y despliegue manual ya existentes. Si hay error de permisos, Worker ausente o resultados incompatibles, detenerse; no continuar con `deploy` para solucionarlo. Puede consultarse la versión registrada con `npx wrangler@4 versions view ID_VERSION_ACTIVA --config ./wrangler.jsonc --name broad-hill-ce92`, reemplazando el marcador por su ID real.

### 4. Auditoría y ensayo local sin publicar

```powershell
node web/verificar-publicacion.cjs
node web/pruebas-contenido.cjs
node web/pruebas-progreso.cjs
node web/pruebas-simulacro.cjs
node web/pruebas-piloto.cjs
node web/pruebas-piloto02.cjs
node web/pruebas-fase4.cjs
npx wrangler@4 deploy --config ./wrangler.jsonc --name broad-hill-ce92 --dry-run
```

Los compilados ya están actualizados: no hace falta regenerarlos para este despliegue. Revisar en el ensayo el nombre, assets y cualquier cambio propuesto. El `dry-run` comprueba compilación/preparación sin desplegar; no demuestra que toda la configuración remota se conserve ni que la URL ya funcione. No usar `versions upload` como ensayo local: subiría una versión remota.

### 5. Publicación real — NO ejecutar todavía

Sólo tras resolver lo anterior y recibir autorización de publicación:

```powershell
npx wrangler@4 deploy --config ./wrangler.jsonc --name broad-hill-ce92
```

Se utiliza el mismo Worker de la cuenta confirmada. Un despliegue no exige commit ni push. Las variables remotas pueden ser sobrescritas por configuración local; si existen, hay que reconciliarlas antes. `--keep-vars` sólo aborda variables, no es una garantía de preservar bindings, rutas o todo el estado remoto. No se prescribe ciegamente como solución. [Comandos de despliegue, consulta y ensayo](https://developers.cloudflare.com/workers/wrangler/commands/workers/).

### 6. Validación tras una futura publicación

Abrir la URL exacta confirmada del mismo Worker y recargar sin borrar datos. Comprobar portada, guía, niveles/filtros, una tarjeta, casos/mapas, los dos pilotos y sus ejercicios 36/37, imágenes ampliables y consola. Confirmar respuestas HTTP correctas de scripts/CSS/PNG y que una ruta de PDF/borrador ausente no devuelve ese material. Evitar pruebas que sustituyan el intento o reinicien progreso de usuarios; usar otro navegador/perfil sin datos para acciones que creen resultados.

Contrastar los bytes/SHA-256 de los assets publicados con el manifiesto local y comprobar el despliegue activo. Si aparece contenido anterior, intentar recarga sin caché antes de tocar almacenamiento. Para volver atrás se usaría la versión previa registrada del **mismo** Worker; un rollback también cambia producción y no se ejecuta durante esta preparación.

## Almacenamiento local y actualización

El código local mantiene `aleaciones-progreso-v1` y `aleaciones-simulacro-v1`, los IDs históricos y el mismo algoritmo. Publicar archivos no copia datos personales del navegador a Cloudflare. En el **mismo origen HTTPS**, navegador y perfil, esos registros son compatibles con la nueva web si la publicación anterior usa las mismas claves/esquemas; no se ha podido contrastar su JavaScript público por el fallo de DNS.

El progreso de `http://127.0.0.1:8000` no aparece automáticamente en `https://…workers.dev`: es otro origen. Para estudio, exportar allí la copia JSON e importarla en la web pública; la importación fusiona por fecha. La copia de estudio **no incluye el intento de simulacro**, que no tiene exportación/importación de interfaz. Mantener hostname, HTTPS y claves ayuda a conservar registros de quienes ya estudiaban en la dirección pública. Un intento anterior recuperado conserva su examen y rúbricas congelados; no se sustituye silenciosamente por otro piloto.

## Comprobaciones realizadas y pendientes

| Comprobación | Estado |
|---|---|
| Inventario público y rutas relativas | Correcto: 23 archivos, 13 referencias HTML, 12 PNG |
| Compilados frente a JSON actuales | Coinciden; contenidos y cantidades esperados |
| Lista de archivos inesperados/privados y patrones examinados | Sin hallazgos en el paquete actual |
| Baterías de contenido, progreso, motor, Piloto 01, Piloto 02, fase 4 | Todas pasan: 97 pruebas numeradas más integridad de contenido; `PRUEBAS_LOCALES.json` |
| URL pública proporcionada | No resuelve desde este entorno; verificación pendiente |
| Account ID y configuración real del Worker | Pendientes de autenticación/lectura del panel |
| Wrangler `dry-run` y prueba bajo el runtime de Cloudflare | No ejecutados: herramientas/configuración confirmada pendientes |
| Despliegue y cambios remotos | No realizados |

Archivos creados en esta preparación: este diagnóstico, `AUDITORIA_PUBLICABLE.json`, `PRUEBAS_LOCALES.json`, la plantilla raíz `wrangler.cloudflare.example.jsonc` y `web/verificar-publicacion.cjs`. Ninguno pertenece al paquete público. No se ha creado `wrangler.jsonc` activo ni un flujo automático de publicación.
