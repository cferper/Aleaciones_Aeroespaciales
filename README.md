# Aerospace Alloys Study Web

A study website for **Aleaciones Aeroespaciales**, a fourth-year Aerospace Engineering course. It combines progressive learning by topic with complete exam simulations. The interface, questions and solutions are in **Spanish**; this README describes the project in English.

The current version includes:

- **10 topics, 312 active flashcards and 9 archived cards**: 321 stored cards in total.
- **Three learning levels** and filters that combine topic, concept and level.
- **40 reasoning cases** and **10 interactive concept maps with 20 blanks**.
- **Three selectable simulations**: a technical demonstration, Piloto 01 and Piloto 02.
- Spaced repetition, browser persistence and JSON backups for study progress.
- Exam answer recovery, submission confirmation, worked solutions, partial-credit rubrics and weighted grades.

The website uses HTML, CSS and plain JavaScript. The complete runnable version is in [`web/dist/`](web/dist/). There is no account, backend database or dependency installation required to study.

## Open the website

### Local HTTP server — recommended for regular use

From the project root, run either command:

```powershell
node web/servir.cjs
```

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory web/dist
```

If the Windows `py` launcher is unavailable, use `python` or `python3`. Open **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)** and keep the terminal running. Press `Ctrl+C` to stop it. The Node server also accepts a port, for example `node web/servir.cjs 8001`.

Both options serve only the website folder on this computer. They do not expose the original PDFs or create a public address. If your usual server is already running, simply reload that address.

### Open directly or share an offline copy

Download and extract the repository, or clone it:

```sh
git clone https://github.com/cferper/Aleaciones_Aeroespaciales.git
cd Aleaciones_Aeroespaciales
```

Open [`web/dist/index.html`](web/dist/index.html) in a modern browser with JavaScript enabled. Keep the entire `web/dist/` folder together, including scripts, styles and `assets/`. The compiled content loads as ordinary scripts, so studying does not require a server or fetching JSON files.

Browser storage for directly opened files can vary between browsers. For regular use, keep the same browser and HTTP address. Changing hostname, port, protocol or device creates a different storage location; `localhost` and `127.0.0.1` are different origins. Export your study progress before changing addresses.

## Estudiar por temas

Choose a topic and switch between **Tarjetas**, **Casos** and **Mapa**. The course index opens topics or related concepts directly. Clickable map concepts provide access to their cards and cases.

The academic focus is composition and alloying elements, heat treatment, phase transformations, microstructure and mechanical/environmental properties. Comparisons and applications use defined material and service conditions. Aluminium and titanium receive particular attention; Al–Li retains relevant technical mechanisms with reduced emphasis on history.

### Flashcards and learning levels

| Level in the interface | Learning task |
|---|---|
| **Fundamentos** | Identify families, alloying elements, phases, treatments and basic properties. |
| **Comprensión** | Explain mechanisms and relationships between composition, processing, microstructure and properties. |
| **Avanzado** | Compare alloys and routes, reconstruct transformations, analyse assumptions and justify tradeoffs. |

**Todos** includes all levels. Combine the selected level with a topic and concept. Level and archive filters apply to flashcards; the concept filter also applies to cases. Maps retain their complete relationships and exercises.

Try to answer before pressing **Mostrar respuesta**. The revealed card includes its short answer, explanation, relevant conditions, indispensable concepts and sources. Objectives, difficulty reasoning and verification status appear where recorded. Conserved older cards retain their original content; fallback text is used when separate condition or essential-concept fields are absent.

Rate your recall with **No lo sabía**, **Me costó**, **Bien** or **Muy fácil**. A rating saves the review and advances the session. Unreviewed cards and cards whose review date has arrived are considered pending.

- **Practicar todas** includes the cards allowed by the current filters, even if their next review is in the future.
- **Practicar contenido ampliado** opens a voluntary session for marked, expanded cards within the current filters.
- **Todos los pendientes del tema** removes level/concept restrictions and includes archived cards for that topic.
- **Pendientes de los diez temas** opens a combined pending session without those restrictions, including archived cards. Each card identifies its topic.
- **Incluir tarjetas archivadas** restores access to older activities kept outside normal study sessions.

Cards with substantially expanded reasoning show **Contenido ampliado: se recomienda volver a practicar**. Reading, revealing or filtering does not reset previous ratings or dates. Rating during extra practice does update the schedule.

The phase 4 update preserved all 260 original IDs: 178 cards retained their question, answer and explanation, 73 were improved and 9 were archived. There are **61 new advanced cards**: 27 aluminium, 16 titanium and 18 from other topics. This comprises the planned 60-card expansion plus one new titanium version whose objective differs from its predecessor. A new ID starts without transferred mastery; archived records remain available.

### Reasoning cases

Each case provides an initial situation, a controlled change and conditions that remain constant. Select two predictions and write a technical justification before pressing **Comparar con la solución**.

The worked solution and a checklist of correction criteria help assess mechanisms and limits. Prediction alternatives fit the case: some ask for a trend, others for a yes/no judgement. **Intentarlo otra vez** hides the solution for another attempt.

Consulting the solution saves the case answers and consultation date. This is a consultation record, not an automatic grade or proof of mastery. Unsubmitted case drafts stay in memory during the page session; they are not continuously saved like exam answers. Fourteen cases received compatible improvements without changing their prediction fields or transferring completion to a different objective.

### Interactive concept maps

Each topic has a map with **two selectable blanks**, optional hints and links between processes, structures and properties. **Comprobar huecos** reports whether both choices are correct; only a fully correct pair records completion.

**Ver mapa completo** reveals the relationships and explanation without marking the exercise completed. **Volver a completar** starts another attempt. Completed answers and dates are saved; unfinished map choices are session drafts. The updated maps retain their IDs, edges and 20 answer keys, with improved explanations and 14 sets of more homogeneous alternatives.

### Content by topic

The learning-level counts below refer to **active** cards. Each topic also has one map with two blanks.

| Topic | Foundations | Understanding | Advanced | Active cards | Archived | Cases |
|---|---:|---:|---:|---:|---:|---:|
| 1. Introduction to aluminium | 8 | 24 | 8 | 40 | 3 | 5 |
| 2. Corrosion in aluminium | 1 | 23 | 4 | 28 | 1 | 4 |
| 3. Non-heat-treatable wrought aluminium alloys | 2 | 14 | 6 | 22 | 0 | 3 |
| 4. Heat-treatable wrought aluminium alloys | 3 | 20 | 12 | 35 | 2 | 4 |
| 5. Cast aluminium alloys | 4 | 21 | 4 | 29 | 0 | 4 |
| 6. Titanium alloys | 5 | 25 | 18 | 48 | 1 | 5 |
| 7. High-strength steels | 1 | 19 | 5 | 25 | 0 | 4 |
| 8. Magnesium alloys | 2 | 22 | 5 | 29 | 0 | 4 |
| 9. Fracture of metallic materials | 3 | 27 | 5 | 35 | 0 | 4 |
| 10. Material selection | 5 | 11 | 5 | 21 | 2 | 3 |
| **Total** | **34** | **206** | **72** | **312** | **9** | **40** |

The advanced subset contains 34 aluminium, 18 titanium and 20 other-topic cards: approximately **47/25/28 %**. Card counts are not exam-point weights and do not introduce a weighted review algorithm.

### Spaced repetition and counters

The schedule uses a fixed rule based on your recall rating:

| Rating | First rating or previous day interval of zero | Subsequent day interval |
|---|---|---|
| **No lo sabía** | 10 minutes | 10 minutes; day interval becomes zero |
| **Me costó** | 2 days | Round up `max(previous interval, 1) × 1.2`, minimum 1 day |
| **Bien** | 3 days | Round up previous interval × 2 |
| **Muy fácil** | 7 days | Round up previous interval × 3 |

Day intervals are capped at 365 days. Dates are calculated from the rating time; a day is 24 elapsed hours. This is a fixed scheduling rule, not an adaptive model of study habits. See [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md).

The sidebar distinguishes filtered pending cards, pending cards across all topics, total pending cards in the selected topic including archive, rated cards, consulted cases and completed maps. Filtering does not hide the total counters.

## Simulacros de examen

Switch to **Simulacros de examen** and choose a simulation:

| Simulation | Questions | Purpose and status |
|---|---:|---|
| **Demostración técnica** | 6: 3 V/F, 1 justified, 1 visual, 1 written | Demonstrates the engine. Includes a synthetic teaching table; it is not a reviewed academic exam. |
| **Piloto 01** | 42 | Documentarily reviewed study pilot, with real PDF resources and references. |
| **Piloto 02 · Metalurgia** | 42 | Documentarily reviewed pilot focused on alloying, treatments, transformations and microstructure–property relationships. |

Neither pilot is officially validated by the professor. Their configuration, scoring policies and anticipated difficulty are study settings, not a prediction of the real exam.

### Configuration and exam structure

Both pilots initially use:

| Block | Questions | Grade weight |
|---|---:|---:|
| V/F | 30 | 30 % |
| V/F with justification | 5 | 10 % |
| Visual interpretation | 2 | 20 % |
| Written development | 5 | 40 % |
| **Total** | **42** | **100 %** |

Default thematic point distributions are **45/26/29 %** for aluminium/titanium/other topics in Piloto 01 and **45/25/30 %** in Piloto 02. These are distributions within the supplied questions, not a second weighting applied by the engine.

Before starting, you can reduce question counts within the available block sizes, change weights, change the V/F penalty and select the minimum-grade policy. Weights are explicitly normalized if their sum differs from 100 %. A block with zero questions must have zero weight. Changing counts or weights also changes the thematic distribution.

The pilots are fixed question sets. Reducing a count selects the first questions of that block; the website does not generate or randomly sample a new paper.

### Answer, navigate and recover

Use **Anterior**, **Siguiente** or **Ir a una pregunta** to navigate. You can leave V/F choices or written parts blank. A progress indicator counts questions with some answer; it does not certify that every part is complete.

Exam choices, text, navigation position and later rubric assessments are saved in this browser. Reloading recovers the stored attempt. The attempt contains a snapshot of its exam, configuration, solutions and rubrics.

There is **one stored exam attempt across the catalogue**, not one per pilot. Selecting a different paper does not replace it. Starting another attempt requires confirmation before replacing the saved attempt and correction; you can resume the existing attempt from the preparation screen. Switching between study and examination modes does not erase either record.

**Entregar simulacro** requires confirmation and reports completely blank questions. After submission, answers are locked and solutions become available. Exam changes in another browser tab trigger a warning and require reloading before continuing to avoid overwriting answers.

### Real visual resources

Piloto 01 includes **seven PNGs** and Piloto 02 includes **five PNGs** extracted from the original PDFs. Piloto 02 uses an Al–Cu diagram, aluminium treatment routes, Ti micrographs and a primary-α curve. They are local assets in `web/dist/assets/` and do not depend on absolute Windows paths.

Click an image to open it at its original size in another tab and use browser zoom. Labels, units, scales or magnifications and experimental/interpretation conditions are retained as documented. Some Ti micrographs have a magnification label but no calibrated scale bar; the questions delimit what can be inferred. Diagrams, process schematics and micrographs are identified according to their actual nature.

### Solutions, rubrics and scoring

After submission, the correction shows submitted answers, correct V/F keys, worked models, explanations, source pages and the academic metadata available for each question. Pilot metadata includes conditions, difficulty and essential concepts; where supplied, it also distinguishes serious errors and minor omissions. Piloto 02 records objectives and its relationship to Piloto 01.

For plain V/F, the default score is **+1 correct, −0.33 incorrect and 0 blank**. Its block grade is `10 × (correct − penalty × incorrect) / selected V/F count`, subject to the chosen minimum policy.

The other three blocks use **student self-assessment with rubrics**, including partial credit. Enter a score for every criterion and explain what your answer covered or missed. Zero is an explicit valid score; an empty field remains pending. The website does not grade prose by keywords or use AI correction. V/F with justification is assessed by its rubric, without the automatic plain-V/F penalty.

Each block is normalized to a grade out of 10 and contributes according to its normalized weight. The final grade remains pending until all positively weighted blocks have complete assessments. A partial contribution is labelled as such; the displayed final grade uses one decimal.

The minimum policies are configurable:

- **Minimum zero in V/F:** the demonstration default; net V/F points remain visible even when its block grade is floored.
- **Minimum zero only globally:** the pilot default; a negative V/F block contributes to the weighted sum, and only the final total is floored at zero.
- **No minimum:** negative grades are retained.

These policies are orientative and are not confirmed official examination rules.

## Save and transfer data

Study and exam records use separate browser `localStorage` keys:

| Record | Key | What is saved |
|---|---|---|
| Study progress | `aleaciones-progreso-v1` | Last card rating, review count, interval, last/next review dates, consulted case answers and completed map answers. |
| Exam attempt | `aleaciones-simulacro-v1` | One running or submitted attempt, its snapshot, answers, position and rubric assessments. |

Open **Guardar una copia** in the study sidebar:

- **Exportar progreso** prepares a downloadable JSON and a text-copy fallback.
- **Importar una copia** validates the whole file before merging. The newest record wins per activity; a tie keeps the current record.
- **Reiniciar progreso** resets study progress after confirmation.

**The study JSON backup does not include exam attempts.** The interface currently has no exam export/import or archive of multiple attempts. Card progress stores the latest scheduling record and cumulative review count, not a timeline of every past review. Study filters and unfinished study-session position are not restored as a saved examination would be.

Stable IDs preserve existing progress through compatible content updates. New objectives use new IDs without automatic mastery transfer; archived IDs remain compatible with study exports and imports. Resetting study progress does not reset the separate examination record.

There is no automatic synchronization between devices. Browser data deletion can remove both records. Storage failures produce warnings; study changes may remain in memory and can be exported, while failed exam saves cannot be assumed to survive reloading. Unreadable stored data is preserved until an explicit recovery/replacement action.

## Sources and academic scope

The activities adapt the local teaching PDFs. Juanmi's summaries organize topics 1–8; the original books support technical verification and topics 9–10. Sources identify document, PDF page and section; printed numbering is included when known and can differ from the PDF page index. [`web/fuentes.json`](web/fuentes.json) inventories the materials. The book filenames and website topic order differ for steels and magnesium.

Source references help locate the originals; they do not distribute or open those PDFs from the website. The static package includes the approved visual extracts and activity data, while the original materials remain separately in `Aleaciones/`.

New/expanded study content and pilots document their review status. Conserved older cards are not represented as newly reverified in phase 4. Known exclusions and discrepancies remain visible, including illegible Ti-equivalent formulas, problematic beta-stabilizer classifications, the NiAl label in the Ti section and contradictory units/dosages. These unresolved details are not introduced as newly validated rules.

The material supplements the course readings. It is not a collection of verified past examination questions, an official teacher-approved bank or an automatic measure of academic mastery. Structural tests establish data and software integrity; they do not replace academic source review.

## Project structure

| Path | Role |
|---|---|
| [`web/dist/index.html`](web/dist/index.html), [`estilos.css`](web/dist/estilos.css), [`guia.html`](web/dist/guia.html) | Main page, responsive styling and in-app guide. |
| [`web/dist/app.js`](web/dist/app.js), [`estudio-filtros.js`](web/dist/estudio-filtros.js) | Study activities, navigation, filters and pending sessions. |
| [`web/dist/progreso.js`](web/dist/progreso.js) | Study scheduling, storage validation and backups. |
| [`web/temas/`](web/temas/), [`web/dist/contenido.js`](web/dist/contenido.js) | Ten editable topic JSON files and compiled browser study data. |
| [`web/simulacros/`](web/simulacros/), [`web/dist/simulacros-contenido.js`](web/dist/simulacros-contenido.js) | Three separate exam JSONs and compiled catalogue. |
| [`web/dist/simulacro-motor.js`](web/dist/simulacro-motor.js), [`simulacro-ui.js`](web/dist/simulacro-ui.js), [`simulacro.css`](web/dist/simulacro.css) | Examination validation/scoring/persistence, interface and styles. |
| [`web/dist/assets/`](web/dist/assets/) | Original pilot visual extracts: seven PNGs for Piloto 01 and five for Piloto 02. |
| [`web/compilar-contenido.cjs`](web/compilar-contenido.cjs), [`compilar-simulacros.cjs`](web/compilar-simulacros.cjs) | Independent study and examination compilers. |
| [`web/servir.cjs`](web/servir.cjs) | Optional local static server. |
| [`web/fuentes.json`](web/fuentes.json) | Local PDF inventory. |
| [`borradores/`](borradores/) | Academic matrices, diagnostics, pilot documents, reviews and implementation records. |

Content, display and persistence are separate modules. Compilation uses Node.js built-ins; the browser version is already compiled. Where browser WebMCP is supported, optional tools can read study counters or navigate between study activity types. The normal interface also works without that capability.

## Edit and check the project

For study content, edit the appropriate `web/temas/tN.json` and compile:

```sh
node web/compilar-contenido.cjs
```

For examination content, edit the separate JSON in `web/simulacros/` and compile:

```sh
node web/compilar-simulacros.cjs
```

Preserve an ID only when the learning objective remains substantially the same. For a different objective, create a new ID and retain the older record/version. Do not edit the generated content files as the primary source: compilation overwrites them. Preserve visual provenance, source references and rubrics when updating examination data.

Run the applicable checks from the project root:

```sh
node web/pruebas-contenido.cjs
node web/pruebas-progreso.cjs
node web/pruebas-simulacro.cjs
node web/pruebas-piloto.cjs
node web/pruebas-piloto02.cjs
node web/pruebas-fase4.cjs
```

They check study IDs, references, concepts and map keys; scheduling, storage and import/export; examination configuration, blanks, penalties, negative scores, partial rubrics and recovery; both pilots' source transcription, point totals and visual integrity; and phase 4 preservation, metadata and filtering.

Source-dependent checks require the original local PDFs. Pilot transcription checks also use their academic auxiliary files; phase 4 checks use the audit, initial backup and recorded hashes. These files are not needed merely to run the compiled website. The phase 4 validation record reports **97 named tests plus the content integrity checks**; see its report for the executed browser checks and limits.

Reload after changing HTML/CSS/JavaScript or regenerating content. For browser tests, use a separate origin to protect existing progress and saved attempts. Preparation/import scripts and historical tools are not the normal content-editing workflow and may overwrite their target data.

## Share or host

Copy or zip the complete `web/dist/` folder for offline use. For a hosted version, serve that folder as the static site root. Each visitor retains separate browser data; hosting does not add account-based synchronization or shared notes. A local development URL is only accessible on the computer running its server. Original local PDFs and temporary preparation files are not required for the runnable package.

## Academic and implementation documentation

- [`web/INTEGRACION_PILOTO_02.md`](web/INTEGRACION_PILOTO_02.md): Piloto 02 integration, resources, scoring and verification.
- [`web/SIMULACROS_FASE_2C.md`](web/SIMULACROS_FASE_2C.md): Piloto 01 integration and compatible minimum-grade policies.
- [`borradores/fase4_implementacion/INFORME_FASE_4.md`](borradores/fase4_implementacion/INFORME_FASE_4.md): final counts, changes, progress preservation, incidents and executed checks.
- [`borradores/fase4_implementacion/FICHAS_NUEVAS_61.md`](borradores/fase4_implementacion/FICHAS_NUEVAS_61.md): the new advanced study cards and their references.
- [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md): exact scheduling and study-backup rules.
- [`web/COMPROBACIONES.md`](web/COMPROBACIONES.md), [`web/SIMULACROS_FASE_1.md`](web/SIMULACROS_FASE_1.md), [`web/PASO_1.md`](web/PASO_1.md), [`web/PASO_2.md`](web/PASO_2.md): earlier implementation and verification records.

The supporting documents are in Spanish and some describe historical versions. The feature descriptions and counts in this README describe the current website.
