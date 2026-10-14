# Fase 4.2 — Auditoría de dependencias visuales en flashcards

> Registro de la fase 4.2. Los dos casos pendientes de este informe se corrigieron y publicaron después en la fase 4.3, documentada en `../fase43_publicacion/INFORME_FASE_4_3.md`.

Fecha: 14 de octubre de 2026. Aplicación local en la rama main. Sin commits, push ni despliegue. La web pública sigue con la versión anterior.

## Resultado

Se revisaron las **312 flashcards activas de los diez temas**. Se hizo una búsqueda amplia en enunciados, respuestas, explicaciones y condiciones, seguida de revisión de autonomía del enunciado, incluidos los que no empleaban una palabra visual explícita. La selección por palabras no se trató como un diagnóstico automático.

Se examinaron **42 candidatas** por referencia textual o revisión semántica: **11 afectadas**, **31 sin dependencia visual pendiente**. Las otras 270 tarjetas activas tampoco requieren una figura externa para contestar su enunciado. El registro individual de las 312 está en [AUDITORIA_COMPLETA.json](AUDITORIA_COMPLETA.json).

| Categoría | Cantidad | Resultado |
|---|---:|---|
| A — Requiere imagen | 1 | Gráfica auténtica añadida y ampliable |
| B — Puede reescribirse sin imagen | 10 | Redacciones y soluciones ajustadas cuando correspondía |
| C — Debe archivarse | 0 | No se ha archivado ni eliminado ninguna tarjeta |

Se mantienen **312 activas, 9 archivadas y 321 IDs**. No hay objetivos nuevos ni transferencia de dominio. Una corrección B puede resolver tanto una dependencia real como una formulación innecesariamente referida a una figura ausente. No se han cambiado por sistema todas las apariciones de «curva», «tabla» o «esquema»: algunas son conceptos o hipótesis completas en texto.

## A — Imagen necesaria

| ID | Tema | Nivel | Referencia | Acción implementada | Fuente |
|---|---|---:|---|---|---|
| t1-acritud-limite-elastico | 1 · Introducción al aluminio | 2 | Gráfica de Rp0,2 frente a reducción de sección | Añadir el recorte auténtico: el objetivo exige comparar incrementos sobre una curva no lineal. | Aleaciones/Tema 1 .pdf · PDF 6 (impresa 4-12) |

El objetivo de esta tarjeta es comparar ganancias de Rp0,2 a incrementos iguales de reducción, no sólo recordar que la acritud endurece. Por eso se conserva el ejercicio de lectura de tendencia y se incorpora su recurso.

Archivo añadido: [t1-5052-acritud.png](../../web/dist/assets/estudio/t1-5052-acritud.png), **940 × 900 píxeles**. Procede de la página 6 del PDF original del tema 1, diapositiva impresa 4-12. La página se renderizó con Poppler a 2827 × 4000 y se extrajo el rectángulo [460, 2740, 1400, 3640], sin reescalar el recorte ni redibujar datos.

Conserva el título Al-Mg 2,5 (5052), el eje horizontal de reducción de sección en %, el izquierdo en MPa, el derecho de A en %, y las curvas y etiquetas Rm, Rp0,2 y A. El texto contiguo de la diapositiva que anticipa las conclusiones queda fuera. No se han eliminado puntos, cambiado curvas ni añadido datos. El pie explicita deformación en frío, unidades, naturaleza cualitativa y procedencia. [MANIFIESTO_VISUAL.json](MANIFIESTO_VISUAL.json) registra coordenadas, dimensiones y hashes del PDF y el PNG.

Se muestra debajo del enunciado y antes de revelar la respuesta. Tiene texto alternativo, pie, enlace de ampliación y una ruta relativa del proyecto. La representación conserva su proporción y no recorta la imagen en pantalla.

## B — Reescritura sin imagen

| ID | Tema | Nivel | Referencia | Acción implementada | Fuente |
|---|---|---:|---|---|---|
| t1-aleantes-densidad | 1 · Introducción al aluminio | 2 | Gráfico de densidad frente a adición | Convertir la lectura de tendencia en una comparación cualitativa de aleantes. | Aleaciones/Tema 1 .pdf · PDF 3 (impresa 4-5) |
| t1-aleantes-modulo-litio | 1 · Introducción al aluminio | 2 | Gráfico de módulo elástico; referencia en respuesta | Eliminar la alusión a un gráfico ausente; conservar la comparación Li/Ni. | Aleaciones/Tema 1 .pdf · PDF 4 (impresa 4-7) |
| t1-acritud-plasticidad | 1 · Introducción al aluminio | 2 | Gráfica de acritud de 5052 | Preguntar por el compromiso resistencia-ductilidad, sin pedir leer una curva ausente. | Aleaciones/Tema 1 .pdf · PDF 6 (impresa 4-12) |
| t1-acritud-resistencia-traccion | 1 · Introducción al aluminio | 2 | Curva de 5052 mencionada en respuesta | Mantener el control de composición y reducción, eliminando una lectura visual que no es necesaria. | Aleaciones/Tema 1 .pdf · PDF 6 (impresa 4-12); Aleaciones/Tema 1 .pdf · PDF 8 (impresa 4-15) |
| t1-solucion-solubilidad-temperatura | 1 · Introducción al aluminio | 2 | Esquema de solubilidad | Dar el supuesto en el propio texto y retirar «del esquema». | Aleaciones/Tema 1 .pdf · PDF 10 (impresa 4-20) |
| t1-precipitacion-secuencia | 1 · Introducción al aluminio | 2 | Esquema general de precipitación | Formular como reconstrucción de memoria de la secuencia docente, no como lectura de una figura. | Aleaciones/Tema 1 .pdf · PDF 11 (impresa 4-22); Aleaciones/Tema 1 .pdf · PDF 12 (impresa 4-23) |
| t1-estados-t4-t6 | 1 · Introducción al aluminio | 1 | Tabla de estados T | Eliminar la remisión a la tabla en una pregunta de memoria. | Aleaciones/Tema 1 .pdf · PDF 18 (impresa 4-36); Aleaciones/Tema 1 .pdf · PDF 19; Aleaciones/Tema 1 .pdf · PDF 16; Aleaciones/Tema 1 .pdf · PDF 17 |
| t1-t3-t4 | 1 · Introducción al aluminio | 1 | Tabla de estados T | Preguntar directamente por el contraste de rutas. | Aleaciones/Tema 1 .pdf · PDF 19 (impresa 4-37) |
| t4-av-ratio-hueco-esquema | 4 · Aluminio de forja tratable térmicamente | 3 | Ramas escritas del esquema η/T | Transcribir en el enunciado los dos intervalos necesarios para analizar la laguna; conservar límites estrictos. | Aleaciones/Tema 4 .pdf · PDF 12; Aleaciones/Tema 4 .pdf · PDF 13 |
| t6-av-desmezcle-omega | 6 · Aleaciones de titanio | 3 | Dos esquemas de descomposición de β | Describir las dos rutas por escrito, sin simular que se muestran paneles. | Aleaciones/Tema 6 .pdf · PDF 27 |

No se han inventado datos de lectura: los intervalos Zn/Mg incorporados al enunciado son los escritos en el original, con desigualdades estrictas. Los demás cambios eliminan alusiones visuales que no forman parte del objetivo o expresan verbalmente los supuestos de la comparación. Las fuentes, los niveles, condiciones y conceptos internos se conservan.

## C — Archivo

Ninguna tarjeta afectada necesita archivarse. El único recurso imprescindible se ha recuperado con calidad suficiente para lectura cualitativa. No se crean IDs ni se suprimen registros.

## Candidatas que se conservan sin cambios

La presencia de una palabra visual no prueba que falte información. En estos casos el enunciado ya contiene los supuestos, pide recordar un concepto o pregunta por los límites de una inferencia. No se necesita leer datos de una figura ausente.

| ID | Tema | Nivel | Motivo |
|---|---:|---:|---|
| t1-maduracion-natural-artificial | 1 | 2 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t1-maduracion-tiempo-maximo | 1 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t1-tensiones-relajacion | 1 | 2 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t1-tx51-tx52 | 1 | 1 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t1-av-recocido-evidencia | 1 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t1-av-t8-t9-estado-inicial | 1 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t1-av-curva-pico-no-fase | 1 | 3 | El máximo de dureza se da como hipótesis; se pregunta por lo que ese dato no identifica. |
| t3-mg-mecanismos | 3 | 2 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t3-tabla-estado | 3 | 3 | La comparación 1100-O/3003-H18 ya está íntegra en el enunciado; no se pide leer cifras de una tabla. |
| t3-av-mn-6000-no-etiqueta | 3 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t4-6000-secuencia | 4 | 1 | Reconstrucción de una secuencia de memoria, no lectura de una figura concreta. |
| t4-6000-proporcion | 4 | 1 | La relación 1,73 en masa está dada; se pregunta por su significado químico. |
| t4-2000-secuencias | 4 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t4-7000-mg | 4 | 2 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t4-av-t5-temple-prensa | 4 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t6-cinetica | 6 | 2 | Pregunta conceptual sobre equilibrio/cinética; no requiere localizar puntos ni leer un diagrama. |
| t6-ma | 6 | 3 | Las dos morfologías se describen verbalmente; no se pide identificar partículas en fotos ausentes. |
| t6-av-neutro-no-betageno | 6 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t6-av-mill-recristalizacion | 6 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t6-av-creep-difusion-si | 6 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t7-ausbay | 7 | 2 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t7-av-dureza-templabilidad | 7 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t7-av-igual-dureza-precipitados | 7 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t8-av-mg-al-zinc-respuesta | 8 | 3 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t9-red | 9 | 2 | Pregunta de conocimiento sobre mecanismos de transición; no exige leer una curva particular. |
| t9-bcc | 9 | 2 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t9-mapas | 9 | 1 | Pregunta de memoria sobre los ejes normalizados; no pide situar condiciones en un mapa. |
| t9-av-precipitado-no-microvacio | 9 | 3 | Cuestiona una atribución causal sin evidencia; no pide analizar una micrografía omitida. |
| t9-av-grieta-escala | 9 | 3 | La fórmula y los factores de cambio están completos en el enunciado. |
| t10-densidad | 10 | 1 | Referencia conceptual o de apoyo en solución: el enunciado no requiere consultar una figura para resolverlo. |
| t10-av-tabla-estados-mezclados | 10 | 3 | El defecto de coherencia de datos está descrito por completo, sin valores que deban leerse. |

Ejemplos: la comparación 1100-O/3003-H18 ya proporciona las dos designaciones; la fórmula K = σ√(πa) y sus cambios se dan completos; el máximo de dureza es un supuesto verbal, no un punto que haya que localizar. Las preguntas sobre los mapas de rotura y las secuencias docentes son de memoria o comprensión conceptual, no de interpretación de un panel omitido.

## Antes y después de las once correcciones

### t1-aleantes-densidad — B

**Antes:** Para reducir la densidad del aluminio, ¿el gráfico apoya estudiar una adición de Mg o de Cu? Razona sin cifras.

**Después:** Al añadir Mg o Cu al aluminio, ¿cuál de los dos tiende a reducir la densidad y cuál a aumentarla, según la comparación del temario? Razona sin cifras.

**Objetivo conservado:** Convertir la lectura de tendencia en una comparación cualitativa de aleantes.

**Respuesta actualizada:** El Mg tiende a reducir la densidad del aluminio, mientras que el Cu tiende a aumentarla.

**Explicación actualizada:** La comparación es cualitativa y se limita a las adiciones y al intervalo de composición tratados en la fuente. El temario también señala Be y Li como elementos que disminuyen la densidad; este dato no basta para seleccionar una aleación para todos sus requisitos.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 3 (impresa 4-5).


### t1-aleantes-modulo-litio — B

**Antes:** Según la tendencia docente sobre el módulo del Al, ¿qué adición tiene mayor efecto sobre E por igual porcentaje en masa: Li o Ni?

**Después:** Compara el efecto de Li y Ni sobre el módulo elástico E del aluminio por igual porcentaje en masa, dentro del alcance del temario. ¿Cuál tiene mayor efecto?

**Objetivo conservado:** Eliminar la alusión a un gráfico ausente; conservar la comparación Li/Ni.

**Respuesta actualizada:** Li tiene mayor efecto sobre el módulo elástico en esa comparación docente.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 4 (impresa 4-7).


### t1-acritud-plasticidad — B

**Antes:** En la aleación 5052 del gráfico se aumenta la acritud para elevar la resistencia. Si también interesa conservar capacidad de deformación plástica, ¿qué compromiso muestra la evolución del alargamiento A?

**Después:** Al aumentar la acritud de una aleación 5052 mediante deformación en frío para elevar su resistencia, ¿qué compromiso aparece si también interesa conservar capacidad de deformación plástica?

**Objetivo conservado:** Preguntar por el compromiso resistencia-ductilidad, sin pedir leer una curva ausente.

**Explicación actualizada:** En la comparación del temario para 5052, al aumentar la deformación en frío aumentan Rm y Rp0,2 y disminuye el alargamiento A. Es un compromiso cualitativo entre resistencia y plasticidad; no fija el alargamiento necesario para una operación de conformado concreta ni una ley proporcional universal.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 6 (impresa 4-12).


### t1-acritud-limite-elastico — A

**Antes:** En la tendencia docente de 5052, ¿es constante la ganancia de Rp0,2 por incrementos iguales de reducción de sección?

**Después:** Observa la gráfica de la aleación 5052. ¿Es constante la ganancia de Rp0,2 por incrementos iguales de reducción de sección? Compara cualitativamente el comienzo y las reducciones mayores, sin estimar cifras exactas.

**Objetivo conservado:** Añadir el recorte auténtico: el objetivo exige comparar incrementos sobre una curva no lineal.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 6 (impresa 4-12).

**Recurso:** `web/dist/assets/estudio/t1-5052-acritud.png`, visible antes de revelar.


### t1-acritud-resistencia-traccion — B

**Antes:** Al comparar distintas aleaciones con la misma reducción de sección, ¿por qué no basta usar la Rm de la 5052? Identifica qué variable del material afecta al endurecimiento.

**Después:** Al comparar distintas aleaciones con la misma reducción de sección por deformación en frío, ¿por qué no puede asignarse a todas la Rm de una 5052? Identifica qué variable del material afecta al endurecimiento.

**Objetivo conservado:** Mantener el control de composición y reducción, eliminando una lectura visual que no es necesaria.

**Respuesta actualizada:** Los elementos aleantes, disueltos o precipitados, modifican la cantidad y la velocidad de endurecimiento por acritud. La Rm de una 5052 no proporciona la Rm de otra aleación sometida a la misma reducción.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 6 (impresa 4-12); Aleaciones/Tema 1 .pdf · PDF 8 (impresa 4-15).


### t1-solucion-solubilidad-temperatura — B

**Antes:** Un aleante del esquema tiene mayor solubilidad en aluminio a temperatura elevada. ¿Por qué calentarlo no basta para asegurar que esa misma cantidad siga disuelta en equilibrio a temperatura ambiente?

**Después:** Considera un aleante cuya solubilidad de equilibrio en aluminio es mayor a temperatura elevada que a temperatura ambiente. ¿Por qué calentarlo no basta para asegurar que esa misma cantidad siga disuelta en equilibrio a temperatura ambiente?

**Objetivo conservado:** Dar el supuesto en el propio texto y retirar «del esquema».

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 10 (impresa 4-20).


### t1-precipitacion-secuencia — B

**Antes:** Ordena las etapas del esquema de precipitación tras la solución sólida sobresaturada y explica por qué llegar a los precipitados estables no asegura la máxima dureza.

**Después:** Reconstruye de memoria la secuencia general de precipitación descrita en el temario después de una solución sólida sobresaturada. ¿Por qué llegar a precipitados estables no asegura la máxima dureza?

**Objetivo conservado:** Formular como reconstrucción de memoria de la secuencia docente, no como lectura de una figura.

**Explicación actualizada:** La secuencia general descrita distingue zonas GP coherentes, precipitados de transición semicoherentes y precipitados estables incoherentes. Su avance depende de temperatura y tiempo. La etapa final no equivale automáticamente al estado más resistente, ni se impone una secuencia completa idéntica a toda aleación.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 11 (impresa 4-22); Aleaciones/Tema 1 .pdf · PDF 12 (impresa 4-23).


### t1-estados-t4-t6 — B

**Antes:** Completa de memoria las dos rutas de la tabla: T4 = solución + ___; T6 = solución + ___. ¿Qué etapa comparten?

**Después:** Completa de memoria las rutas de tratamiento: T4 = solución + ___; T6 = solución + ___. ¿Qué etapa comparten?

**Objetivo conservado:** Eliminar la remisión a la tabla en una pregunta de memoria.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 18 (impresa 4-36); Aleaciones/Tema 1 .pdf · PDF 19; Aleaciones/Tema 1 .pdf · PDF 16; Aleaciones/Tema 1 .pdf · PDF 17.


### t1-t3-t4 — B

**Antes:** ¿Qué etapa distingue T3 de T4 en la tabla del tema?

**Después:** ¿Qué etapa de tratamiento distingue el estado T3 del T4 en una aleación de aluminio?

**Objetivo conservado:** Preguntar directamente por el contraste de rutas.

**Explicación actualizada:** La acritud añade deformación plástica en frío a la ruta de T3. Identificar la ruta no permite asignar una resistencia numérica sin conocer la aleación y las condiciones del producto.

**Fuentes:** Aleaciones/Tema 1 .pdf · PDF 19 (impresa 4-37).


### t4-av-ratio-hueco-esquema — B

**Antes:** El esquema asigna η/T para ciertos intervalos Zn/Mg. Una relación hipotética 2,8 queda entre los intervalos escritos. ¿Qué sí permite concluir y qué no permite decidir, aunque Zn+Mg sea conocido?

**Después:** El criterio docente asocia la rama η a 3 < Zn/Mg < 7 y la rama T a Zn/Mg < 2,5. Para una relación hipotética Zn/Mg = 2,8, ¿qué sí permite concluir ese criterio y qué no permite decidir, aunque Zn+Mg sea conocido?

**Objetivo conservado:** Transcribir en el enunciado los dos intervalos necesarios para analizar la laguna; conservar límites estrictos.

**Respuesta actualizada:** El cociente 2,8 no cae en ninguno de los intervalos explícitos; no puede asignarse una rama exclusiva con ese criterio. La suma Zn+Mg interesa a resistencia y sensibilidad al enfriamiento, pero no cubre la laguna de clasificación.

**Explicación actualizada:** Los límites dados dejan sin cubrir la relación 2,8. La ausencia de una rama aplicable no demuestra ausencia de precipitación ni autoriza a inventar una tercera rama o fases comerciales exclusivas. Para decidir hace falta información composicional y de fases más específica; la relación y la suma expresan datos distintos.

**Fuentes:** Aleaciones/Tema 4 .pdf · PDF 12; Aleaciones/Tema 4 .pdf · PDF 13.


### t6-av-desmezcle-omega — B

**Antes:** Dos esquemas de maduración a baja temperatura muestran, respectivamente, ω o β1 pobre/β2 rica en betágenos. ¿Por qué no debe describirse el segundo como formación de ω y qué evolución posterior recoge el tema?

**Después:** Compara dos rutas de maduración de β metaestable de Ti a baja temperatura: una forma ω y otra separa β en una región pobre y otra rica en betágenos. ¿Por qué no debe llamarse formación de ω a la segunda y qué evolución posterior describe el temario para la región pobre?

**Objetivo conservado:** Describir las dos rutas por escrito, sin simular que se muestran paneles.

**Respuesta actualizada:** La segunda es desmezcle de β según el contenido de betágenos, no formación de ω. Con tiempo, la región β1 pobre puede ser sustituida por α; ω corresponde a otra ruta descrita para menor contenido.

**Fuentes:** Aleaciones/Tema 6 .pdf · PDF 27.


## Comprobación de fuentes y legibilidad

Se inspeccionaron las páginas originales relevantes de los PDF: tema 1, páginas 3, 4, 6, 10, 11, 18 y 19; tema 4, página 12; y tema 6, página 27. Se usaron renderizados del original y se conservaron sus referencias, no sólo resúmenes o preguntas previas. Las referencias de apoyo adicionales de cada ficha no se presentan como una nueva verificación completa de todos los materiales del curso.

Los PDF son escaneados: la extracción de texto con pypdf devolvía principalmente «CamScanner», por lo que no se utilizó como evidencia del contenido científico. Poppler mostró avisos de fuentes Symbol/ArialUnicode, pero las imágenes escaneadas inspeccionadas se renderizaron con sus ejes, letras y datos visibles. No se ha identificado una contradicción científica nueva que impida estas correcciones.

La gráfica se considera suficiente para **comparación cualitativa**, no para interpolar cifras precisas o diseñar una ley experimental. En una pantalla pequeña se recomienda ampliar el PNG. No es una figura experimental nueva ni una validación oficial del profesor.

## Casos y mapas: incidencias aparte

No se han modificado casos ni mapas. La revisión complementaria localizó dos casos con el mismo problema de referencia externa:

| ID | Incidencia | Fuente | Propuesta pendiente |
|---|---|---|---|
| t1-caso-aumentar-acritud | Situación inicial y cambio remiten al gráfico y a su intervalo, sin mostrarlo. | Tema 1 .pdf, PDF 6, impresa 4-12 | Reutilizar el gráfico auténtico en el caso o hacer autónomo el supuesto cualitativo. |
| t1-caso-recocido | Compara 100 y 400 °C durante una hora para 5052 con reducción inicial del 33 %, remitiendo a curvas ausentes. | Tema 1 .pdf, PDF 7, impresa 4-13 | Revisar y mostrar la curva real de recocido; no asumir que una curva de acritud la sustituye. |

El caso de sobremaduración ya aporta el tramo y pide explícitamente reconocer que no se puede deducir A sin datos: no es la misma incidencia. El caso de comparación de designaciones aporta sus dos estados en texto. Los diez mapas se comprobaron como representaciones ya dibujadas por la web; no se detectó otro recurso externo omitido necesario para resolver sus huecos. Este complemento no constituye una nueva auditoría académica integral de los 40 casos y diez mapas.

## Pruebas e integridad

Pasaron las nueve suites ejecutadas, con salida cero; los registros completos están en [RESULTADOS_PRUEBAS.json](RESULTADOS_PRUEBAS.json):

- Contenido: diez temas, IDs, fuentes, claves y correspondencia de los compilados.
- Progreso: 28 pruebas.
- Motor de simulacros: 23 pruebas.
- Piloto 01: 15 pruebas.
- Piloto 02: 14 pruebas.
- Fase 4: 17 pruebas, conservando el registro histórico y exigiendo que las excepciones de fase 4.2 coincidan exactamente con el manifiesto.
- Presentación de fase 4.1: comprobación de 321 tarjetas y 82 condiciones específicas.
- Recursos visuales de estudio: nueve pruebas nuevas sobre cobertura, 11 correcciones, autonomía textual, imagen, metadatos e integridad.
- Paquete público: 24 archivos, con 12 PNG previos de pilotos y el nuevo PNG de estudio; sin PDF ni archivos privados en el paquete.

Son **106 pruebas individuales**, además de las comprobaciones de contenido, presentación y paquete. No se han relajado las pruebas para aceptar cambios arbitrarios: las redacciones históricas siguen comparándose con su versión anterior y cada excepción autorizada se verifica completa contra su versión final registrada.

La nueva suite compara por SHA-256 todos los PDF, los simulacros, sus imágenes anteriores, el algoritmo de progreso, los motores y filtros con el estado inicial. Compara también casos y mapas completos, la lista de IDs y todas las tarjetas activas no afectadas. Las once afectadas deben coincidir exactamente con su versión final, manteniendo los metadatos fuera de pregunta/respuesta/explicación/visual sin cambios. Evidencia inicial: [INTEGRIDAD_ANTES.json](INTEGRIDAD_ANTES.json).

En navegador se verificaron el ejemplo textual corregido, el paso a la tarjeta con imagen, la imagen visible antes de la solución, la procedencia, la apertura del PNG a tamaño original y el diseño normal y estrecho sin recorte de ejes. Se utilizó el origen de prueba http://127.0.0.1:8013/, independiente del sitio público y de otros puertos de estudio. Sólo se valoró una tarjeta de ese entorno desechable para avanzar; no se modificó el progreso habitual.

Evidencias: [vista normal](VERIFICACION_NAVEGADOR.png), [vista estrecha](VERIFICACION_ESTRECHA.png) y [ampliación](VERIFICACION_AMPLIACION.png). No se hizo una sesión manual de las 312 tarjetas: esa cobertura es del registro auditado y las comprobaciones automáticas, complementada por las pruebas manuales representativas descritas.

## Archivos e implementación

- Datos: web/temas/t1.json, t4.json y t6.json; compilado web/dist/contenido.js.
- Presentación: web/dist/app.js, estilos.css e index.html, con versión de caché fase 4.2 para datos, script y estilos.
- Recurso: web/dist/assets/estudio/t1-5052-acritud.png.
- Pruebas: web/pruebas-visuales-estudio.cjs y ajuste explícito de compatibilidad histórica en web/pruebas-fase4.cjs.
- Comprobación pública: se amplió la lista cerrada de web/verificar-publicacion.cjs para permitir exactamente el PNG nuevo. Esa herramienta ya era un archivo pendiente no versionado de la preparación anterior.
- Informe, auditoría individual, antes/después, hashes y capturas: esta carpeta.

No se ha modificado el algoritmo de repaso ni se han escrito migraciones, reinicios o cambios de fechas. Los IDs permanecen estables porque los objetivos se conservan. No se alteran Piloto 01, Piloto 02, casos, mapas ni PDF originales. Los archivos pendientes de preparación de Cloudflare se han dejado intactos. **No se han hecho commits, push ni despliegues en esta fase.**
