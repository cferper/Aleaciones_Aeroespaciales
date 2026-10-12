# Aerospace Alloys Study Web

A browser-based study tool for the **Aleaciones Aeroespaciales** course. It brings together **10 topics, 260 flashcards, 40 reasoning cases, and 10 concept maps** to help students recall facts, explain material behaviour, and connect processing, properties, and material selection.

The interface and study activities are in **Spanish**. This README explains the project in English.

The website uses HTML, CSS, and plain JavaScript. The ready-to-use version is included in `web/dist/` and works offline when opened locally. Studying requires a modern browser with JavaScript enabled; no account or dependency installation is needed.

## Access the website

### Open it directly

1. Download and extract the repository, or clone it:

   ```sh
   git clone https://github.com/cferper/Aleaciones_Aeroespaciales.git
   cd Aleaciones_Aeroespaciales
   ```

2. Open [`web/dist/index.html`](web/dist/index.html) in your browser using your file explorer.
3. Select a topic and start studying.

All required website files are already included. Keep the files in `web/dist/` together when copying the website to another folder or computer.

### Run a local server

For regular use, a local HTTP address gives browser storage a more predictable location than opening a file directly. With Python installed, run this command from the project root, including in the VS Code terminal:

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory web/dist
```

On systems without the Windows `py` launcher, use `python` or `python3` instead.

Open **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**. Keep the terminal running while you study; press `Ctrl+C` to stop the server. This command serves only the website folder, excluding the original course PDFs.

The address works on the computer running the server. It is not a public link for classmates or another device. No public website URL is documented in this repository.

Export your progress before switching between direct file access and HTTP access, or changing browser, hostname, or port: each can use a different storage location.

## What you can do

### Flashcards — Tarjetas

Think about the question before selecting **Mostrar respuesta**, then compare your answer with the solution and explanation. Choose one of four recall ratings to schedule the next review. Unreviewed and due cards appear in the review session.

**Practicar todas** lets you study the available cards even when none are due. Ratings given during extra practice also update the review schedule.

### Reasoning cases — Casos

Each case describes an initial situation, a change, and the conditions that remain constant. Make two predictions and write a justification before revealing the worked solution. Use the accompanying criteria to assess your reasoning.

Consulting a solution is recorded in your progress. Written answers are self-assessed; the website does not assign an automatic grade or use AI to correct them.

### Concept maps — Mapa

Explore relationships between concepts and complete two missing elements using the available options and hints. A map is recorded as completed only when both answers are correct. Revealing the full explanation alone does not complete it.

Clickable concepts open related activities. The course index also provides direct access to a topic or a concept's flashcards.

### Progress overview

The sidebar shows due cards, rated cards, consulted cases, and completed maps for the selected topic. Changing topics updates all three study modes and their progress counters.

## Topics covered

| Topic | Flashcards | Cases | Maps |
| --- | ---: | ---: | ---: |
| 1. Introduction to aluminium | 36 | 5 | 1 |
| 2. Corrosion in aluminium | 25 | 4 | 1 |
| 3. Non-heat-treatable wrought aluminium alloys | 18 | 3 | 1 |
| 4. Heat-treatable wrought aluminium alloys | 28 | 4 | 1 |
| 5. Cast aluminium alloys | 26 | 4 | 1 |
| 6. Titanium | 33 | 5 | 1 |
| 7. High-strength steels | 20 | 4 | 1 |
| 8. Magnesium | 24 | 4 | 1 |
| 9. Fracture | 30 | 4 | 1 |
| 10. Material selection | 20 | 3 | 1 |
| **Total** | **260** | **40** | **10** |

## Review scheduling

The flashcards use a simple rule based on your own recall rating:

| Rating in the interface | Initial interval, or after “No lo sabía” | Subsequent interval |
| --- | --- | --- |
| **No lo sabía** — Again | 10 minutes | 10 minutes |
| **Me costó** — Hard | 2 days | Previous interval × 1.2, rounded up |
| **Bien** — Good | 3 days | Previous interval × 2, rounded up |
| **Muy fácil** — Easy | 7 days | Previous interval × 3, rounded up |

Day intervals are capped at 365 days. “Again” resets the day interval, and the next rating uses the initial values. Review times are calculated from the moment you submit a rating; a day means 24 elapsed hours.

This is a fixed scheduling rule, rather than a model that learns your study habits. See [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md) for the full specification in Spanish.

## Save and transfer your progress

Progress is stored in your browser's **localStorage**, under `aleaciones-progreso-v1`. It includes flashcard ratings and review dates, case answers, and completed map answers. There is no backend database or automatic device synchronization.

Open **Guardar una copia** in the sidebar to:

- **Exportar progreso:** download a JSON backup. A text-copy fallback is available if downloading is unavailable.
- **Importar una copia:** restore or transfer a backup. The entire file is validated before merging; the most recent record wins for each activity, and ties retain the current record.
- **Reiniciar progreso:** clear this browser's progress after confirmation.

Clearing browser data can remove your progress. If saving is blocked or browser storage is full, the website displays a warning and lets you export the current session. Keep a backup before moving to another device or address.

## How the website was created

The project turns course materials into activities for active recall and reasoning. The topic sequence follows the local course files: Juanmi's summaries organize topics 1–8, while the textbook provides the basis for fracture and material selection in topics 9–10.

Questions focus on causes, comparisons, predictions, and tradeoffs. Flashcards and cases include source document names, PDF page numbers, and sections so students can return to the original material. PDF page numbers can differ from printed page or slide numbers. The source inventory is kept in [`web/fuentes.json`](web/fuentes.json).

The implementation separates content, presentation, and progress:

1. **Content:** each topic is maintained as a JSON file with stable activity IDs, concepts, questions, answers, and references.
2. **Compilation:** a small Node.js script combines the ten topic files into `contenido.js`.
3. **Presentation:** HTML defines the controls, CSS handles styling and responsive layouts, and JavaScript renders the selected activities.
4. **Persistence:** a separate JavaScript module schedules reviews, validates records, and handles browser storage and backups.

The compiled data loads as a regular local script, so the website can run directly from disk without fetching JSON files from a server. There is no framework, package manager setup, or build service required to use it.

The activities are study adaptations of the materials. They supplement the course readings and are not presented as verified past-exam questions. Structural checks do not establish that every statement in the source documents has been academically verified.

## Project structure

| Path | Purpose |
| --- | --- |
| [`web/dist/index.html`](web/dist/index.html) | Main study page |
| [`web/dist/guia.html`](web/dist/guia.html) | In-app usage and technical guide in Spanish |
| [`web/dist/estilos.css`](web/dist/estilos.css) | Styling and responsive layout |
| [`web/dist/app.js`](web/dist/app.js) | Navigation, study activities, and backup controls |
| [`web/dist/progreso.js`](web/dist/progreso.js) | Review scheduling, validation, and storage |
| [`web/dist/contenido.js`](web/dist/contenido.js) | Generated study data used by the browser |
| [`web/temas/`](web/temas/) | Editable topic files, `t1.json` through `t10.json` |
| [`web/compilar-contenido.cjs`](web/compilar-contenido.cjs) | Content compiler |
| [`web/pruebas-contenido.cjs`](web/pruebas-contenido.cjs) | Content and source-reference checks |
| [`web/pruebas-progreso.cjs`](web/pruebas-progreso.cjs) | Scheduling, persistence, and backup tests |
| [`GUIA_PROYECTO.md`](GUIA_PROYECTO.md) | Detailed project notes in Spanish |

`web/dist/` is the complete website folder. Local reference PDFs, temporary preparation tools, and ZIP archives are excluded from Git by `.gitignore` and are not required to run the website. Source references identify the PDFs; the website does not distribute them.

## Edit and validate the project

**Requirements:** a text editor and Node.js for content compilation and checks. The scripts use Node.js built-in modules, so there is no `package.json` or `npm install` step.

To change a question or explanation:

1. Edit the relevant file in `web/temas/`.
2. Preserve existing activity IDs so saved progress remains associated with the same activities.
3. From the project root, regenerate the browser data:

   ```sh
   node web/compilar-contenido.cjs
   ```

4. Run the relevant checks:

   ```sh
   node web/pruebas-contenido.cjs
   node web/pruebas-progreso.cjs
   ```

5. Reload the website and inspect the changed activity. Include both the edited JSON and regenerated `contenido.js` when committing content changes.

The content checks validate IDs, concepts, references, and map structure. They also check that referenced PDFs exist locally, so this suite requires the original `Aleaciones/` materials, which are excluded from Git. The progress tests can run without those PDFs and cover scheduling, storage failures, and backup validation and merging.

For visual or interaction changes, edit `estilos.css`, `index.html`, or `app.js` and reload the browser. Editing `contenido.js` directly is temporary: the compiler overwrites it. Historical preparation scripts in `tmp/` may overwrite data and are not part of the current editing workflow.

## Share or host the website

For offline sharing, copy or zip the entire `web/dist/` folder. Recipients can extract it and open `index.html`; personal progress stays in each user's browser unless transferred with a JSON backup.

For online access, the same folder can be deployed to a static website host. Serve `web/dist/` as the site root so `index.html` is the entry point. The hosting server only needs to deliver static files; Python is used here solely as an optional local development server.

Hosting does not add progress synchronization. Users still save their progress locally and should export a backup before moving from a local copy to a hosted address.

## Further documentation

- [`web/COMPROBACIONES.md`](web/COMPROBACIONES.md): recorded validation and browser checks.
- [`web/REGLA_REPASO.md`](web/REGLA_REPASO.md): scheduling and backup rules.
- [`web/PASO_1.md`](web/PASO_1.md), [`web/PASO_2.md`](web/PASO_2.md), and [`PROPUESTA_PILOTO.md`](PROPUESTA_PILOTO.md): development history and the initial pilot.

These supporting documents are in Spanish and may describe earlier project stages. Use this README for the current access and editing instructions.
