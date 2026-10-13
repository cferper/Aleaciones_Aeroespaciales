# Integración del Piloto 02 — 13/10/2026

Piloto 02 disponible junto a la demostración técnica y el Piloto 01. Se importan literalmente las fichas de `borradores/fase3a_piloto02/FICHAS_ACADEMICAS_02.json`; no se generan preguntas, cambian claves o reescriben soluciones. Se mantienen referencias a los PDF y su numeración de páginas, condiciones, dificultades, objetivos, relación con Piloto 01, explicaciones y rúbricas. Las referencias identifican los materiales locales; los PDF no se distribuyen dentro de la web.

## Funcionalidad y puntuación

| Bloque | Preguntas | Peso |
|---|---:|---:|
| V/F | 30 | 30 % |
| V/F justificadas | 5 | 10 % |
| Visuales | 2 | 20 % |
| Desarrollo | 5 | 40 % |

100 puntos nominales: Al 45, Ti 25 y resto 30. D05 conserva 5 puntos T9 y 3 T10. V/F: +1, −0,33 y blanco 0; subtotal negativo conservado y mínimo cero únicamente global, según el borrador. Las abiertas conservan máximos de 2/10/8 puntos por pregunta y todos sus parciales. El motor existente normaliza cada bloque y aplica sus pesos, sin una segunda ponderación temática. Cambiar cantidades/pesos modifica la distribución de contenidos; se advierte en la preparación.

Estado visible: revisado documentalmente, no validado oficialmente por el profesor. La configuración, política de nota y dificultad son orientativas. Las imágenes se abren a tamaño original desde sus enlaces; mantienen los bytes, ejes, unidades, leyendas y aumentos de los recursos aprobados. No se retocan microestructuras. Se respetan los límites académicos: diagrama Al–Cu cualitativo en K/°F, rutas de proceso en °C, fotos Ti 500× sin barra calibrada y curva de α primaria en %/°C.

Se conserva un único intento, congelado con su examen y rúbricas. Elegir otro simulacro no lo sustituye: iniciar pide confirmación indicando ambos títulos. Cancelar conserva intento/corrección. Estudio y simulacro mantienen claves de almacenamiento independientes. No se cambia el motor ni se migran claves o progreso.

## Archivos de esta integración

| Archivo | Acción y finalidad |
|---|---|
| `web/simulacros/piloto-02.json` | Nuevo examen adaptado al esquema del motor. |
| `web/dist/assets/piloto-02/P02_V01_diagrama.png` | Copia auténtica: diagrama Al–Cu. |
| `web/dist/assets/piloto-02/P02_V01_rutas.png` | Copia auténtica: rutas Al–Mg–Si. |
| `web/dist/assets/piloto-02/P02_V02_A.png` | Copia auténtica: panel Ti A. |
| `web/dist/assets/piloto-02/P02_V02_B.png` | Copia auténtica: panel Ti B. |
| `web/dist/assets/piloto-02/P02_V02_curva.png` | Copia auténtica: curva Ti64. |
| `web/preparar-piloto02.cjs` | Nuevo importador reproducible con comprobación de SHA-256 antes de escribir. No ejecuta el importador del Piloto 01. |
| `web/pruebas-piloto02.cjs` | 14 pruebas nuevas de integridad, referencias, recursos, puntuación y persistencia. |
| `web/dist/simulacros-contenido.js` | Catálogo recompilado con tres exámenes; demo/Piloto 01 idénticos a sus JSON anteriores. |
| `web/dist/index.html` | Aviso con las tres opciones y versión de caché para catálogo/interfaz. |
| `web/dist/simulacro-ui.js` | Encabezado plural; objetivos y relación con Piloto 01 en la corrección de las preguntas que contienen esos metadatos. |
| `web/vista-piloto02-integracion.png` | Captura del selector/configuración y aviso de intento guardado. |
| `web/INTEGRACION_PILOTO_02.md` | Este informe. |

Auxiliar de verificación: `tmp/integracion-piloto02-baseline.json`, hashes previos de 71 archivos. De esa selección únicamente cambia `index.html`, según lo previsto; los otros 70 permanecen idénticos. El catálogo y la interfaz se excluyeron de la comparación porque eran destinos de integración previstos. Se mantienen originales, borradores, datos/imágenes del Piloto 01, demo, `app.js`, `contenido.js`, `progreso.js`, estilos y temas de estudio.

## Pruebas automáticas

Todas las suites existentes y la nueva se ejecutaron con Node.js del entorno, sin instalar dependencias:

| Comando | Resultado |
|---|---|
| `node web/pruebas-contenido.cjs` | Correcto: 10 temas, 260 tarjetas, 40 casos; IDs, referencias, conceptos y huecos. |
| `node web/pruebas-progreso.cjs` | 28 pruebas superadas. |
| `node web/pruebas-simulacro.cjs` | 23 pruebas superadas. |
| `node web/pruebas-piloto.cjs` | 15 pruebas superadas, Piloto 01. |
| `node web/pruebas-piloto02.cjs` | 14 pruebas superadas, Piloto 02. |

80 pruebas nombradas más la validación de contenido. Piloto 02 comprueba igualdad literal de las 42 fichas, claves, rúbricas y metadatos; IDs únicos dentro del catálogo; fuentes y rangos de páginas; máximos y 45/25/30; 15 V/15 F y dificultad 6/12/12; cinco PNG, dimensiones y SHA-256; catálogo anterior intacto; notas negativas, blancos, parciales, pesos configurables y guardado/recuperación de los tres exámenes.

Ejemplos comprobados: todo correcto con abiertas completas = 10; 30 fallos y abiertas cero = nota global 0, conservando −9,90 netos V/F; 30 fallos y abiertas a mitad = 2,51; ejemplo académico 15 aciertos, 10 fallos, 5 blancos y J/V/D = 6/13/22 puntos = 5,27.

## Prueba en navegador

Se utilizó `http://127.0.0.1:8766/`, origen distinto del habitual, para no tocar datos guardados del usuario. El puerto 8765 no era accesible desde el navegador bajo el entorno restringido; se sirvió únicamente en localhost con el permiso de ejecución necesario en 8766. No se modificó la web por este problema del servidor de pruebas.

Comprobaciones realizadas por la interfaz:

- Selección de los tres exámenes y aviso documental/orientativo.
- Recorrido de las 42 posiciones del Piloto 02; cada enunciado distinto y presente.
- 30 V/F: 28 aciertos, 1 fallo y 1 blanco; 27,67 puntos netos.
- Cinco justificadas, dos visuales y cinco desarrollos; escritura y navegación anterior/siguiente/salto.
- Recarga durante el intento: conserva índice, elecciones y textos con saltos de párrafo.
- Cinco imágenes cargadas en navegador, dimensiones naturales correctas y enlaces de ampliación; inspección de ejes/unidades y apertura del diagrama a tamaño original.
- Entrega: cancelar conserva respuestas; confirmar entrega y muestra soluciones, fuentes y las 12 rúbricas.
- 57 criterios al 50 % y 12 razones explícitas: nota exacta esperada 6,267/10, mostrada 6,3 por el redondeo existente a un decimal; se recupera después de recargar. Respuestas y valoraciones de prueba, sin significado académico.
- Seleccionar Piloto 01/iniciar muestra confirmación de sustitución; cancelar conserva la corrección del Piloto 02. Sustituir deliberadamente el intento de prueba permite iniciar Piloto 01.
- Piloto 01: pregunta inicial, navegación a los dos visuales, siete imágenes cargadas, entrega y doce rúbricas disponibles; demo: inicio y seis posiciones disponibles con etiqueta técnica.
- Estudiar por temas: revelar/valorar tarjeta, consultar caso y solución, mostrar mapa completo, recargar y recuperar progreso (1 tarjeta, 1 caso); cambio de modo conserva la corrección del simulacro. Ver mapa completo no marca falsamente una finalización.
- Consola: sin errores registrados durante el recorrido.

Se deja el origen de prueba en preparación del Piloto 02; su último intento guardado es la demo creada por estas comprobaciones. Los datos del origen habitual permanecen separados. La copia de estudio no exporta intentos de examen, conforme al comportamiento existente.

## Incidencias y límites

No se detectaron diferencias científicas o de transcripción respecto al borrador aprobado. No se solicitó cambiar ninguna pregunta. Se conservan exclusiones y límites de la revisión académica de fase 3A; esta integración verifica fidelidad y funcionamiento, no añade validación docente ni calibración con alumnos.

Una prueba nueva asumía inicialmente que el ID de la demo coincidía con el nombre `demo.json`; el ID real es `demo-infraestructura`. Se corrigió la prueba para comparar el ID del archivo original y se repitió la suite: resuelto, sin cambiar demo ni motor. No hay incidencias técnicas pendientes detectadas en el alcance probado. No se ha publicado remotamente ni probado un hosting externo: se integra en la web local del proyecto.

## Cómo probarlo

1. Abre la web habitual y recarga. También puedes abrir `web/dist/index.html`, conservando el origen habitual si quieres recuperar tu progreso existente. La dirección/origen del navegador determina dónde están los datos guardados.
2. Pulsa **Simulacros de examen** y selecciona **Piloto 02 de Aleaciones Aeroespaciales · Metalurgia**.
3. Conserva 30/5/2/5 y pesos 30/10/20/40; comprueba penalización 0,33 y mínimo solo global.
4. Pulsa **Iniciar simulacro**. Si hay un intento guardado, confirma su sustitución solo si deseas reemplazarlo; cancelar lo conserva.
5. Responde, deja blancos y navega. Los ejercicios visuales son las preguntas 36 y 37; pulsa sus imágenes para ampliarlas.
6. Recarga para comprobar recuperación. Pulsa **Entregar simulacro** y confirma para ver corrección.
7. Puntúa cada criterio abierto y explica la valoración. Los campos vacíos dejan nota pendiente; cero explícito es válido. La nota final es orientativa.

Para reproducir la importación y el catálogo desde el proyecto:

```powershell
node web/preparar-piloto02.cjs
node web/compilar-simulacros.cjs
```

Para servirlo localmente, si no hay servidor habitual:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory web/dist
```

Después abre `http://127.0.0.1:8000/`. No es necesario recompilar el contenido de estudio ni ejecutar preparadores históricos.

## Git

Rama `main`, checkout original de `Aleaciones_Aeroespaciales`, sin worktree nuevo. Antes de modificar se informó del estado pendiente: cinco archivos de simulacros ya modificados, matriz/borradores y recursos/scripts del Piloto 01 sin seguimiento. Se preservaron esos cambios. El diff contra HEAD incluye trabajo de fases anteriores: los cambios del motor/CSS que aparecen ahí no proceden de esta integración. No commits, push, descartes o eliminación de archivos.

La integración queda terminada. No se crea otro simulacro ni se modifica todavía ninguna pregunta del modo por temas.
