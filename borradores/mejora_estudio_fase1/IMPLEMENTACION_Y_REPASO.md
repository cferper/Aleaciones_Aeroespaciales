# Implementación propuesta y efecto sobre el repaso

**Plan para aprobación, no ejecutado · 13/10/2026.** Esta entrega modifica sólo documentos nuevos. No recompila `contenido.js`, edita temas ni escribe almacenamiento del navegador.

## Datos y niveles

Los archivos autoritativos son `web/temas/t1.json`…`t10.json`. El compilador actual los incorpora a `web/dist/contenido.js`; la interfaz `app.js` recorre `cards`, `cases` y `map`, filtrando actualmente por concepto. Los simulacros tienen catálogo/motor/clave de almacenamiento separados y quedan fuera de esta fase.

Propuesta incremental de metadatos en **contenido**, sin alterar el esquema de progreso:

```json
{
  "id": "t6-ms-mf",
  "learningLevel": 3,
  "learningGoal": "Reconstruir fases heredadas y transformación incompleta",
  "prerequisites": ["t6-transus", "t6-metastable"],
  "contentRevision": 2,
  "revisionImpact": "expanded-objective"
}
```

Es un ejemplo de esquema futuro, no el banco final. No se sobrescribe `concepts`, ni se añade nivel a `progress.cards[id]`. `question`, `answer`, `explanation` y `sources` conservan sus funciones. Condiciones/indispensables/verificación pueden añadirse a contenido si se acuerda mostrarlas; los mismos símbolos/fórmulas deben renderizarse fielmente.

Clasificar nivel obliga a leer objetivo y solución. El compilador no infiere dificultad por longitud, verbos o número de campos. Una propiedad o código fundamental puede seguir en N1 con baja frecuencia. La revisión científica/estado docente es independiente del nivel.

## Interfaz y organización

1. Mostrar nivel y objetivo; filtro Todos/N1/N2/N3 compatible con tema y concepto.
2. Conservar Mostrar respuesta y las cuatro valoraciones. Respuesta breve primero; explicación y condiciones después, sin enseñar solución antes de la recuperación.
3. Añadir enlaces de prerrequisito/continuación por objetivo, sin bloquear N3 ni declarar dominio por número de repasos.
4. Conservar todos los repasos pendientes visibles mediante un acceso claro a Todos. Los contadores deben distinguir pendientes del filtro y pendientes totales.
5. Separar la ruta de aprendizaje por niveles de la agenda por vencimiento. Orden pedagógico de nuevas tarjetas; vencidas por su fecha dentro del conjunto que el usuario elija. No alterar fechas para cuadrar 45/25/30.
6. Si se incorpora práctica mixta orientativa, mostrar composición real y déficit de candidatos; no duplicar tarjetas ni ocultar vencidas para fingir cuotas. El reparto 45/25/30 se usa para atención/práctica voluntaria, no como peso secreto en el intervalo.

La práctica actual también reprograma al pulsar una valoración. Mantenerlo visible evita que una sesión avanzada se tome por ensayo sin efecto sobre fechas. Una modalidad sólo lectura, si se desea después, debería ser explícita y no valorar; no se presume implementada.

## Identificadores y conservación de historial

| Cambio futuro | ID y datos | Acción visible |
|---|---|---|
| Errata, claridad o explicación más completa con mismo objetivo | Mismo ID; conservar todas las fechas/valoraciones/intervalos. | Aviso de contenido revisado, cuando importe. |
| Ampliación cognitiva del mismo objetivo (F11–F15) | Mismo ID razonablemente compatible; conservar registro y marcar en contenido que se amplió el objetivo. | Ofrecer revisión voluntaria; el historial anterior no acredita el nuevo razonamiento. |
| Sustitución por objetivo distinto | ID nuevo, `supersedes` o enlace de archivo en contenido. Registro antiguo permanece; nuevo objetivo empieza sin valoración. | Mostrar que es nuevo, sin trasladar dominio. |
| Reordenar tarjetas/opciones, sin cambiar clave/objetivo | Mantener IDs y valores textuales guardados. | Nada que reinicie historial. |
| Opciones de mapa mejores con mismas claves y relaciones | Mismo ID de mapa y keys `process`/`relation`; comparar valores, no índices de opción. | Conservación legítima del completado; no acredita explicación N3. |
| Cambiar relaciones, claves o objetivo de mapa/caso | Usar ID de nueva versión si el antiguo completado dejaría de ser comparable. Guardar versión antigua como historial/archivo. | La nueva actividad necesita revisión/completado; no borrar el anterior. |

**F11–F15:** la propuesta conserva IDs porque el núcleo se mantiene, pero amplía lo exigido. La opción preferida es un aviso en el contenido y una acción Practicar versión revisada. No se llama a `schedule()` con `again` de forma automática. Como alternativa, si se decide que son objetivos diferentes tras revisión del usuario, deben ser IDs nuevos; no cambiar furtivamente el significado del registro viejo.

No se implementa un reinicio general de datos para actualizar preguntas. Para las ocho tarjetas y tres casos señalados para sustitución/archivo, no reutilizar su ID con una función de otro material. Mantener registros huérfanos es compatible con el importador actual, que admite identificadores válidos de temas no presentes.

Una primera implementación puede funcionar sólo con metadatos de contenido y avisos, sin nuevas claves. Si se quiere persistir la aceptación de versiones más adelante, hará falta diseñar otro registro/exportación o una migración v2 explícita y reversible. No añadir campos improvisados al objeto v1: los validadores rechazan campos desconocidos.

## Regla actual y su impacto

Lectura directa de `web/dist/progreso.js` y `web/REGLA_REPASO.md`:

| Valoración | Tras primer repaso o intervalo cero | Con intervalo anterior |
|---|---|---|
| No lo sabía | 10 minutos; intervalo 0 | Reinicia a 10 minutos |
| Me costó | 2 días | `ceil(max(anterior,1) × 1,2)` |
| Bien | 3 días | `ceil(anterior × 2)` |
| Muy fácil | 7 días | `ceil(anterior × 3)` |

Máximo 365 días; se cuentan 24 horas por día y el plazo parte de la valoración efectiva. `reviews` aumenta por cada valoración. Los registros de tarjeta tienen exactamente `rating`, `reviews`, `intervalDays`, `reviewedAt`, `dueAt`. No se almacena una lista íntegra de todos los repasos: preservar historial significa preservar esos registros existentes, no reconstruir eventos que la aplicación nunca guardó.

**Añadir nivel no cambia estos cálculos.** La agenda sólo se modifica al valorar una tarjeta como ahora. Si una tarjeta más exigente cuesta más, el alumno puede elegir Me costó/No lo sabía y la regla ya adapta su siguiente fecha; no se multiplica automáticamente por nivel. No es un algoritmo adaptativo que mida dificultad ni una calificación académica.

Puede haber un efecto indirecto: una explicación ampliada exige más lectura y una respuesta N3 requiere más razonamiento. Por eso los lotes y sesiones deben ser pequeños y alternar fundamentos/comprensión; no se promete el mismo tiempo de estudio. Para tarjetas multiapartado, los indispensables ayudan a valorar el objetivo: Bien requiere el núcleo, no repetir literalmente toda explicación.

Casos/mapas **no tienen esta agenda espaciada**: guardan `completedAt` y respuestas, no `dueAt`/`intervalDays`. Consultar un caso cuenta como consultado; completar las dos claves correctas de un mapa guarda su realización. Ver mapa completo no lo marca automáticamente. No presentar completado como dominio ni convertir casos/mapas en SRS sin una decisión de diseño separada.

## Copias y esquema de progreso

La clave de estudio es `aleaciones-progreso-v1`; la de simulacro es independiente. La exportación/importación comprueba claves exactas y fusiona por fecha: `reviewedAt` en tarjetas, `completedAt` en casos/mapas; los empates conservan el registro actual. Casos deben mantener `elastic`, `elongation`, `reason`; mapas, `process`, `relation`. Esas claves internas no requieren renombrarse para mostrar una predicción de corrosión o una fase.

Cambiar ID crea actividad nueva y no elimina el registro antiguo, pero éste deja de contribuir al contador del nuevo contenido. Eso debe explicarse en una nota de versión, no corregirse borrando datos. Si cambia el texto correcto de un hueco, una respuesta guardada antigua no debe volverse a presentar como correcta por coincidencia de índice: migrar/versionar con aviso.

Antes de aplicar el lote autorizado, exportar copia de progreso y mantener snapshot de los diez JSON y compilado. Es una medida del proceso de implementación, no una petición actual de borrar/reiniciar. Esta fase no ha leído ni escrito progreso del navegador.

## Secuencia de implementación tras aprobar

1. Aplicar únicamente las 15 fichas aprobadas, sin reordenar/renombrar IDs. Registrar diferencias y fuentes originales; conservar las preguntas no seleccionadas.
2. Añadir etiquetas de nivel/objetivo para ese lote y un aviso de ampliación. No fabricar niveles de las restantes por algoritmo; usar la clasificación revisada o dejarlas sin etiqueta hasta acordar el lote.
3. Compilar una vez y comparar IDs, tarjetas, casos, mapas, claves correctas y contenido ajeno al lote. Comprobar que el catálogo de simulacros es idéntico.
4. Probar recuperación y exportación/importación v1 con los mismos IDs/fechas y registros de actividades archivadas.
5. Recorrido de tarjeta N1/N2/N3 y filtro/repaso vencido. Después redactar y aprobar pequeños lotes de casos/mapas y objetivos faltantes, sin desplegar cambios masivos a la vez.

Las pruebas futuras deben cubrir igualdad del progreso antes/después de la migración menor, compatibilidad de copias antiguas, filtro sin pérdida de vencidas, regla de intervalos intacta, valores guardados de casos/mapas y ausencia de cambios en ambos pilotos. Las pruebas actuales de contenido verifican requisitos/IDs/páginas y huecos, pero no evalúan mecanismo científico ni calibran nivel; ampliar controles de metadatos no sustituirá esa revisión.

No se hace ahora ninguna de estas operaciones. El siguiente paso requiere aprobación del método y de las 15 fichas; no autorización de una reescritura automática de todo el banco.
