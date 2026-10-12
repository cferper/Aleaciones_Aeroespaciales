# Piloto del tema 1: Introducción al aluminio

Estado: enfoque aceptado y piloto parcial implementado en `web/dist`. Contiene **26 tarjetas, 5 casos y un mapa con 12 relaciones y 2 huecos**. El usuario ha autorizado continuar por incrementos sin volver a aprobar la muestra. El tema completo sigue pendiente de incorporar y revisar.

Este documento conserva debajo la muestra histórica que permitió acordar el enfoque. La explicación de la implementación actual está en `web/PASO_2.md` y las comprobaciones, en `web/COMPROBACIONES.md`.

Revisión posterior: el usuario pide subir el nivel. La versión actual reformula 23 tarjetas y refuerza los cinco casos; las preguntas de la muestra histórica de este documento ya no representan siempre su redacción actual. El criterio y los ejemplos nuevos están en `web/NIVEL_PREGUNTAS.md`.

## Alcance

Seguir el orden del resumen: propiedades y efecto de aleantes; métodos de endurecimiento; acritud y recocido; solución sólida y precipitación; tratamiento de solución y maduración; estados de tratamiento y tensiones residuales.

El piloto ha alcanzado las 26 tarjetas y los 5 casos previstos para este incremento. Las tarjetas siguen el orden del resumen; este recuento no significa que todos los apartados del tema estén ya cubiertos. La muestra histórica de este documento se concentra en acritud y recocido, que sirvieron para probar las tres actividades con conceptos conectados.

Los cinco casos incorporados trabajan el aumento de acritud, el recocido, el enfriamiento tras solución, la temperatura de solución y la maduración artificial prolongada. Sus situaciones, condiciones y fuentes están en `web/dist/contenido.js`; son escenarios didácticos cualitativos, sin atribuirles un estilo de examen contrastado.

## Pantalla implementada

Selector de asignatura y tema, seguido de tres pestañas: Tarjetas, Casos y Mapa. El tema se conserva al cambiar de actividad. Una zona secundaria muestra progreso, copia de seguridad e instrucciones. Los cinco casos se seleccionan y se muestran de uno en uno para centrar el razonamiento.

Los conceptos del mapa abren sus actividades relacionadas y las fuentes están accesibles en cada actividad. El mapa tiene un primer bloque de seis relaciones de acritud y recocido, con los dos huecos de práctica, y otro bloque desplegable de seis relaciones de solución y maduración. La adaptación visual de cada incremento se verifica por separado.

## Referencia histórica: fuentes de la muestra aceptada

- J1: `Aleaciones/RESUMENES JUANMI/Tema 1.pdf`, página 3 del PDF; apartados «Endurecimiento por acritud del aluminio» y «Recocido contra acritud».
- L1: `Aleaciones/Tema 1 .pdf`, página 6 del PDF, página impresa 4-12; «Endurecimiento por acritud del aluminio».
- L2: mismo PDF, página 7 del PDF, páginas impresas 4-13 y 4-14; «Recocido contra acritud» y sus posibles etapas.

## Referencia histórica: tres tarjetas de muestra

### t1-acritud-proceso

Pregunta: ¿Qué proceso produce el endurecimiento por acritud descrito en estos apuntes?

Respuesta que se revelará al pulsar: deformación plástica en frío.

Fuente: J1 y L1.

### t1-acritud-plasticidad

Pregunta: En el endurecimiento por acritud del aluminio mostrado en los apuntes, ¿qué ocurre con la plasticidad?

Respuesta: disminuye.

Explicación basada en la fuente: el aumento de dureza, límite elástico y resistencia a tracción se acompaña de una pérdida de plasticidad. El gráfico usa el alargamiento A para mostrar esa tendencia.

Fuente: J1 y L1. Tendencia cualitativa; no extrapolar una cifra o una ley universal a cualquier aleación.

### t1-recocido-etapas

Pregunta: ¿Qué posibles etapas distingue el temario en el recocido contra acritud?

Respuesta: restauración, recristalización y crecimiento de grano.

Matiz: son posibles etapas; el tratamiento aplicado determina qué evolución se alcanza. No afirmar que todo recocido completa siempre las tres.

Fuente: J1 y L2 (página impresa 4-14).

Tras revelar cada respuesta aparecen «No lo sabía», «Me costó», «Bien» y «Muy fácil». Es una autoevaluación. El calendario y el uso del historial ya están implementados y documentados en `web/REGLA_REPASO.md`. La práctica adicional está disponible aunque no haya tarjetas pendientes y también actualiza la siguiente fecha de repaso.

## Referencia histórica: caso de recocido

ID: t1-caso-recocido.

Tipo: escenario didáctico construido a partir de las tendencias de los apuntes; no es un ejercicio original del libro ni un cálculo cuantitativo.

Situación inicial: una aleación Al-Mg 2,5 (5052) con acritud del 33 % de reducción de sección, como la del gráfico del libro.

Cambio: comparar dos tratamientos de recocido de una hora, uno a 100 °C y otro a 400 °C.

Se mantiene: misma aleación, misma acritud inicial, mismo tiempo de recocido y mismas condiciones de comparación de las propiedades. Cambia la temperatura de recocido.

Antes de mostrar la solución:

1. ¿En cuál esperas un mayor límite elástico Rp0,2?
2. ¿En cuál esperas un mayor alargamiento A?
3. Justifica por qué aplicar calor después de la acritud puede cambiar las propiedades y qué variables del tratamiento debes conocer.

Solución inicialmente oculta: según las tendencias del gráfico, a 400 °C se observa menor Rp0,2 y mayor A que a 100 °C. El recocido modifica la microestructura y las propiedades; su evolución depende de temperatura y tiempo. El temario distingue restauración, recristalización y crecimiento de grano como posibles etapas. El gráfico no basta para determinar por sí solo qué fracción del material está recristalizada.

Criterios de comparación, sin corrección por IA: identificar las dos tendencias; relacionarlas con la evolución durante el recocido; distinguir temperatura de tiempo; no extrapolar los resultados a todas las aleaciones ni inventar valores numéricos.

Fuente: J1 y L2 (gráfico de la página impresa 4-13; etapas en 4-14). No se transcriben valores exactos de las curvas.

## Referencia histórica: mapa de muestra con huecos

ID: t1-mapa-acritud-recocido.

Las seis relaciones de la muestra inicial se conservan como primer bloque del mapa actual:

| Concepto inicial | Conexión | Concepto final | Fuente |
|---|---|---|---|
| Acritud | se obtiene mediante | Deformación plástica en frío | J1, L1 |
| Acritud | aumenta | Límite elástico | J1, L1 |
| Acritud | disminuye | Plasticidad | J1, L1 |
| Recocido tras acritud | modifica | Microestructura y propiedades | J1, L2 |
| Evolución durante el recocido | depende de | Temperatura y tiempo de permanencia | J1, L2 |
| Recocido contra acritud | puede incluir | Restauración, recristalización y crecimiento de grano | J1, L2 |

Ejercicio: ocultar «deformación plástica en frío» y la conexión «disminuye». Para el primer hueco ofrecer deformación plástica en frío, maduración natural y enfriamiento rápido; para el segundo, aumenta y disminuye. Comprobar solo tras pulsar el botón.

Pista opcional: recuerda qué proceso mecánico define la acritud y qué propiedad pierde el material al endurecerse.

Solución: «deformación plástica en frío» y «disminuye». Mostrar las relaciones completas, la explicación de la tarjeta asociada y sus fuentes. El caso de recocido se abrirá desde el concepto Recocido.

## Límites y próximo incremento

- La muestra histórica está contrastada en los apartados indicados. Las actividades ampliadas tienen sus propias referencias en `contenido.js`; el piloto continúa siendo parcial y el resto del tema requiere contraste al incorporarlo.
- Las letras pequeñas y cifras de ciertos gráficos requieren ampliación antes de usarlas en preguntas cuantitativas.
- Mantener condiciones y alcance de cada ejemplo. Evitar convertir simplificaciones del resumen en afirmaciones universales.
- El próximo incremento debe cubrir otros apartados del tema 1 y, después, los temas 2 y siguientes siguiendo los nombres de archivo. Se mantendrán las explicaciones por pasos para que el usuario pueda revisarlas cuando tenga tiempo.
- Ajustar la longitud de las respuestas y el nivel de razonamiento con los comentarios que aporte el usuario. La muestra ya fue aceptada: no hace falta volver a solicitar esa aprobación para continuar.
