/* Generado por compilar-simulacros.cjs. Edita web/simulacros/*.json. */
globalThis.ExamContent = [
  {
    "version": 1,
    "id": "demo-infraestructura",
    "title": "Demostración de los cuatro bloques (6 preguntas)",
    "status": "demo",
    "penalty": 0.33,
    "referenceDistribution": "Examen previsto: 30 V/F, 5 justificadas, 2 visuales y 4–5 de desarrollo. Pesos orientativos: 30/10/20/40 %.",
    "blocks": [
      {
        "type": "vf",
        "title": "Verdadero/Falso",
        "count": 3,
        "weight": 30
      },
      {
        "type": "justificada",
        "title": "V/F con justificación",
        "count": 1,
        "weight": 10
      },
      {
        "type": "visual",
        "title": "Micrografías y tablas",
        "count": 1,
        "weight": 20
      },
      {
        "type": "desarrollo",
        "title": "Desarrollo escrito",
        "count": 1,
        "weight": 40
      }
    ],
    "questions": [
      {
        "id": "demo-vf-1",
        "type": "vf",
        "topic": "Fundamentos",
        "subtopic": "Densidad",
        "difficulty": "básica",
        "cognitiveLevel": "comprender",
        "prompt": "A igual volumen, el material con mayor densidad tiene mayor masa.",
        "correct": true,
        "model": "Verdadero.",
        "explanation": "La relación es m = ρ · V. Manteniendo V constante, una mayor densidad implica una mayor masa.",
        "sources": [],
        "reviewStatus": "demostracion"
      },
      {
        "id": "demo-vf-2",
        "type": "vf",
        "topic": "Selección",
        "subtopic": "Comparación",
        "difficulty": "básica",
        "cognitiveLevel": "comprender",
        "prompt": "La densidad, por sí sola, basta para seleccionar cualquier material aeroespacial.",
        "correct": false,
        "model": "Falso.",
        "explanation": "La selección también depende de las solicitaciones, la temperatura, el entorno, la fabricación y otros requisitos. La densidad aislada no determina la idoneidad.",
        "sources": [],
        "reviewStatus": "demostracion"
      },
      {
        "id": "demo-vf-3",
        "type": "vf",
        "topic": "Fundamentos",
        "subtopic": "Propiedades específicas",
        "difficulty": "básica",
        "cognitiveLevel": "comprender",
        "prompt": "El cociente entre resistencia y densidad permite comparar la resistencia específica.",
        "correct": true,
        "model": "Verdadero.",
        "explanation": "La resistencia específica relaciona una medida de resistencia con la densidad. La comparación requiere usar la misma medida de resistencia y condiciones compatibles.",
        "sources": [],
        "reviewStatus": "demostracion"
      },
      {
        "id": "demo-justificada",
        "type": "justificada",
        "topic": "Selección",
        "subtopic": "Rigidez",
        "difficulty": "básica",
        "cognitiveLevel": "analizar",
        "prompt": "Una resistencia mayor garantiza una rigidez elástica mayor. Indica V/F y justifica.",
        "correct": false,
        "parts": [
          {
            "id": "justificacion",
            "prompt": "Justificación técnica"
          }
        ],
        "model": "Falso. La rigidez elástica del material se describe mediante su módulo elástico, mientras que la resistencia caracteriza un límite frente a una solicitación. No se puede deducir un aumento del módulo solo a partir de un aumento de resistencia.",
        "explanation": "Distingue las propiedades del material y evita inferir una relación universal entre ellas.",
        "rubric": [
          {
            "id": "eleccion",
            "label": "Selecciona falso de forma coherente con la explicación",
            "max": 1
          },
          {
            "id": "distincion",
            "label": "Distingue módulo elástico y resistencia, sin establecer una relación universal",
            "max": 3
          }
        ],
        "sources": [],
        "reviewStatus": "demostracion"
      },
      {
        "id": "demo-tabla",
        "type": "visual",
        "topic": "Selección",
        "subtopic": "Comparación de datos",
        "difficulty": "básica",
        "cognitiveLevel": "analizar",
        "prompt": "Interpreta la tabla de materiales ficticios A y B. Responde a ambos apartados.",
        "stimulus": {
          "kind": "table",
          "synthetic": true,
          "context": "Valores inventados exclusivamente para probar la interfaz. Misma medida de resistencia y mismas condiciones de comparación. No corresponden a aleaciones reales.",
          "source": "Datos sintéticos de demostración creados en web/simulacros/demo.json; no proceden de un experimento ni de un PDF.",
          "headers": [
            "Material ficticio",
            "Densidad (kg/m³)",
            "Resistencia (MPa)"
          ],
          "rows": [
            [
              "A",
              "2000",
              "200"
            ],
            [
              "B",
              "4000",
              "300"
            ]
          ]
        },
        "parts": [
          {
            "id": "comparacion",
            "prompt": "¿Cuál tiene mayor resistencia específica? Muestra el cociente y sus unidades."
          },
          {
            "id": "limites",
            "prompt": "¿Permite esta tabla elegir por sí sola un material para un componente? Explica una limitación."
          }
        ],
        "model": "A: 200/2000 = 0,100 MPa·m³/kg; B: 300/4000 = 0,075 MPa·m³/kg. A tiene mayor resistencia específica. La tabla no basta para seleccionar un material: faltan los requisitos del componente y propiedades como el comportamiento a temperatura de servicio o la resistencia al entorno.",
        "explanation": "B tiene mayor resistencia absoluta, pero A obtiene un cociente mayor al dividir por su densidad.",
        "rubric": [
          {
            "id": "calculo",
            "label": "Calcula ambos cocientes con unidades compatibles y selecciona A",
            "max": 3
          },
          {
            "id": "limites",
            "label": "Explica una limitación relevante para la selección",
            "max": 2
          }
        ],
        "sources": [],
        "reviewStatus": "demostracion"
      },
      {
        "id": "demo-desarrollo",
        "type": "desarrollo",
        "topic": "Selección",
        "subtopic": "Requisitos",
        "difficulty": "básica",
        "cognitiveLevel": "evaluar",
        "prompt": "Explica en uno o varios párrafos cómo organizarías la selección preliminar de un material para un componente aeroespacial.",
        "parts": [
          {
            "id": "desarrollo",
            "prompt": "Respuesta desarrollada"
          }
        ],
        "model": "Primero definiría la función, las cargas, la temperatura y el entorno de servicio, junto con las restricciones de masa y geometría. Traduciría esas condiciones en requisitos de propiedades y descartaría los materiales que incumplieran requisitos esenciales. Compararía los candidatos bajo condiciones equivalentes, considerando propiedades específicas cuando fueran pertinentes. Finalmente revisaría la fabricación, la unión, la inspección, la disponibilidad y el coste. La decisión preliminar necesitaría datos contrastados y comprobaciones para el componente concreto.",
        "explanation": "La selección parte de requisitos y compromisos, no de maximizar una única propiedad.",
        "rubric": [
          {
            "id": "requisitos",
            "label": "Define función, cargas, temperatura y entorno",
            "max": 2
          },
          {
            "id": "comparacion",
            "label": "Compara propiedades y explica compromisos",
            "max": 2
          },
          {
            "id": "fabricacion",
            "label": "Considera fabricación y necesidad de verificar los datos",
            "max": 1
          }
        ],
        "sources": [],
        "reviewStatus": "demostracion"
      }
    ]
  },
  {
    "version": 1,
    "id": "piloto-01",
    "title": "Piloto 01 de Aleaciones Aeroespaciales",
    "status": "piloto",
    "penalty": 0.33,
    "floorPolicy": "global",
    "referenceDistribution": "Piloto de estudio revisado documentalmente; no validado oficialmente por el profesor. Configuración inicial: 42 preguntas, Al 45 %, Ti 26 %, resto 29 % de puntos. Estos pesos y el mínimo global cero son orientativos, no una regla oficial del examen. Al cambiar cantidades o pesos cambia también el reparto por contenidos.",
    "blocks": [
      {
        "type": "vf",
        "title": "Verdadero/falso",
        "count": 30,
        "weight": 30
      },
      {
        "type": "justificada",
        "title": "V/F con justificación",
        "count": 5,
        "weight": 10
      },
      {
        "type": "visual",
        "title": "Interpretación visual",
        "count": 2,
        "weight": 20
      },
      {
        "type": "desarrollo",
        "title": "Desarrollo",
        "count": 5,
        "weight": 40
      }
    ],
    "questions": [
      {
        "id": "piloto-01-vf01",
        "originalId": "VF01",
        "matrixId": "1.3",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "Acritud y recocido",
        "type": "vf",
        "prompt": "Para una misma aleación de aluminio, los grados H2 correspondientes a H1 mantienen su resistencia mínima a tracción con un alargamiento ligeramente superior, según la comparación de estados del temario.",
        "difficulty": "Básica",
        "difficultyReason": "Reconoce la función del recocido parcial y distingue resistencia de alargamiento.",
        "cognitiveLevel": "Comprender",
        "model": "V",
        "explanation": "H1 obtiene la resistencia mediante deformación en frío. H2 parte de una acritud mayor y aplica un recocido parcial hasta la resistencia buscada. La recuperación parcial permite aumentar el alargamiento respecto al H1 correspondiente sin exigir una resistencia mínima distinta. Igual resistencia no implica igual estado de dislocaciones ni ductilidad.",
        "conditions": "Misma aleación y producto comparable; comparación entre grados correspondientes, no entre cualquier H1 y cualquier H2.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "1": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 8
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf02",
        "originalId": "VF02",
        "matrixId": "1.7",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "Temple y espesor",
        "type": "vf",
        "prompt": "En una pieza gruesa de aluminio tratable, alcanzar la velocidad crítica de temple en la superficie permite concluir que el núcleo conservará la misma sobresaturación de soluto.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica el criterio de velocidad crítica a distintas posiciones de una pieza.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La velocidad relevante es la local durante el paso por el intervalo sensible a precipitación. La superficie puede enfriarse suficientemente y el núcleo hacerlo más despacio, precipitando durante el temple y reteniendo menos soluto para madurar. El libro ilustra el efecto de la distancia a la superficie en una barra 7075-T6. Una condición superficial no caracteriza toda la sección.",
        "conditions": "Aleación sensible al temple, sección gruesa, solución inicial comparable; no se afirma que toda pieza gruesa presente necesariamente ese gradiente.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "1": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 15
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf03",
        "originalId": "VF03",
        "matrixId": "2.1",
        "topic": "Tema 2",
        "topicNumber": 2,
        "subtopic": "Condiciones del par galvánico",
        "type": "vf",
        "prompt": "El contacto eléctrico entre aluminio y otro metal, en un entorno seco sin electrolito, basta para mantener una corriente de corrosión galvánica.",
        "difficulty": "Básica",
        "difficultyReason": "Identifica las condiciones fundamentales del mecanismo.",
        "cognitiveLevel": "Comprender",
        "model": "F",
        "explanation": "El contacto electrónico y una diferencia de comportamiento electroquímico no bastan: el circuito necesita un medio electrolítico que permita el transporte iónico. Sin electrolito no se mantiene la celda de corrosión galvánica considerada. La humedad o una película de líquido pueden actuar como electrolito en servicio real; aquí se excluyen expresamente.",
        "conditions": "Ausencia efectiva de electrolito, incluida condensación o película acuosa superficial; se pregunta por corrosión galvánica electroquímica.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "2": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf04",
        "originalId": "VF04",
        "matrixId": "2.3",
        "topic": "Tema 2",
        "topicNumber": 2,
        "subtopic": "SCC y tensiones residuales",
        "type": "vf",
        "prompt": "En una pieza de aluminio susceptible a SCC y expuesta al ambiente pertinente, las tensiones residuales de tracción suficientes satisfacen la condición mecánica del agrietamiento aunque no haya carga exterior.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue carga exterior, tensión local y umbral de daño ambiental.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La SCC exige material susceptible, ambiente adecuado y tracción; esta última puede proceder de tensiones internas de fabricación o temple. La ausencia de carga aplicada no elimina las tensiones locales ni el efecto de la orientación del producto. La suficiencia se refiere al umbral de agrietamiento correspondiente a la aleación, orientación y estado; no a cualquier tensión residual.",
        "conditions": "Tensiones residuales de tracción y condiciones que superan el umbral pertinente; no implica que cualquier pieza descargada falle.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "2": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 4
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 5
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 6
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf05",
        "originalId": "VF05",
        "matrixId": "2.7",
        "topic": "Tema 2",
        "topicNumber": 2,
        "subtopic": "Plaqueado sacrificial",
        "type": "vf",
        "prompt": "La protección de un plaqueado de Al elegido para actuar como ánodo respecto al material base incluye sacrificio electroquímico ante una pequeña exposición del núcleo, además de cobertura superficial.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica la polaridad del par al comportamiento de una discontinuidad superficial.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La laminación en caliente une el plaqueante al núcleo. Al elegir un material de recubrimiento más anódico en el medio considerado, el plaqueante se disuelve preferentemente y puede proteger una exposición localizada del material base. La función combina cobertura y sacrificio electroquímico; su eficacia depende de continuidad eléctrica, ambiente y geometría del daño.",
        "conditions": "Plaqueante anódico, conexión eléctrica y electrolito común; exposición pequeña compatible con la capacidad del recubrimiento.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "2": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 18
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf06",
        "originalId": "VF06",
        "matrixId": "3.2",
        "topic": "Tema 3",
        "topicNumber": 3,
        "subtopic": "Partículas y dispersoides",
        "type": "vf",
        "prompt": "Los dispersoides de Mn, Cr o Zr cumplen en el aluminio de forja la misma función principal que los precipitados finos de maduración: producir el gran incremento de resistencia del tratamiento de envejecimiento.",
        "difficulty": "Intermedia",
        "difficultyReason": "Compara origen y función de partículas que suelen confundirse.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "Los dispersoides se forman durante el calentamiento del lingote y destacan por controlar la recristalización y homogeneizar la deformación; endurecen modestamente y pueden aumentar la sensibilidad al temple. Los precipitados de maduración son responsables del incremento importante de dureza y resistencia tras el tratamiento térmico. Tampoco son equivalentes a los constituyentes gruesos de solidificación, normalmente perjudiciales para plasticidad y tenacidad.",
        "conditions": "Clasificación y funciones predominantes de las partículas descritas en el libro; no se niega toda contribución endurecedora de los dispersoides.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "3": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 3
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf07",
        "originalId": "VF07",
        "matrixId": "3.4",
        "topic": "Tema 3",
        "topicNumber": 3,
        "subtopic": "Serie 5000 y sensibilización",
        "type": "vf",
        "prompt": "En una aleación Al–Mg de la serie 5000 susceptible a sensibilización, un calentamiento que favorezca Mg2Al3 en bordes de grano puede empeorar la corrosión, aunque el Mg disuelto y la acritud hayan contribuido a su resistencia inicial.",
        "difficulty": "Avanzada",
        "difficultyReason": "Relaciona dos mecanismos de resistencia con un deterioro ambiental condicionado.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "El Mg en solución y la deformación en frío endurecen la matriz. La precipitación de Mg2Al3 en bordes bajo exposiciones térmicas adecuadas modifica la heterogeneidad electroquímica y puede sensibilizar el material. No es una ruta útil de maduración equiparable a la de 6000/7000. Debe distinguirse de la estabilización H3 y condicionarse por composición, temperatura y tiempo, sin imponer un límite universal a todas las aleaciones 5000.",
        "conditions": "Composición susceptible y exposición suficiente para precipitación en borde; no cualquier calentamiento ni toda serie 5000.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "3": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 8
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf08",
        "originalId": "VF08",
        "matrixId": "4.1",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Composición Al–Mg–Si",
        "type": "vf",
        "prompt": "En una aleación Al–Mg–Si, añadir Mg por encima de la proporción necesaria para Mg2Si es una vía eficaz para aumentar la resistencia porque ese exceso aumenta la solubilidad de Mg2Si.",
        "difficulty": "Intermedia",
        "difficultyReason": "Usa la composición efectiva y la solubilidad en lugar de una regla de cantidad total de aleante.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "El libro indica que el exceso de Mg aporta poca mejora y puede ser perjudicial al reducir la solubilidad de Mg2Si. Más aleante nominal no significa más soluto útil retenido ni una mayor fracción eficaz de precipitados endurecedores. El efecto debe diferenciarse del exceso de Si y de la ruta real de solución, temple y maduración.",
        "conditions": "Exceso de Mg respecto a la relación de Mg2Si, dentro de la discusión de la serie 6000; no comparación indiscriminada entre aleaciones comerciales.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf09",
        "originalId": "VF09",
        "matrixId": "4.3",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Mg y maduración natural de 2000",
        "type": "vf",
        "prompt": "En las aleaciones Al–Cu–Mg descritas en el temario, el Mg favorece la maduración natural al acelerar la descomposición de la solución sólida sobresaturada.",
        "difficulty": "Básica",
        "difficultyReason": "Reconoce el papel principal del Mg en esa familia.",
        "cognitiveLevel": "Comprender",
        "model": "V",
        "explanation": "El Mg participa en la formación de precipitados y acelera la descomposición de la solución sólida; el libro señala expresamente su efecto favorable sobre la maduración natural. Esto explica el interés de estados naturalmente madurados y no implica que Mg mejore todas las propiedades: también afecta desfavorablemente a forjabilidad y soldabilidad.",
        "conditions": "Aleaciones Al–Cu–Mg con solución y temple previos adecuados; no aluminio puro ni cualquier adición aislada de Mg.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 8
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf10",
        "originalId": "VF10",
        "matrixId": "4.5",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Cu: corrosión general y SCC",
        "type": "vf",
        "prompt": "En la serie Al–Zn–Mg(–Cu) descrita, el deterioro de la corrosión general causado por Cu implica también una mayor susceptibilidad a SCC atribuible a esa adición.",
        "difficulty": "Avanzada",
        "difficultyReason": "Reconoce efectos contrapuestos de un aleante según el mecanismo de degradación.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "En estas aleaciones el Cu deteriora la corrosión general y puede aumentar las picaduras, pero mejora el comportamiento frente a SCC según la comparación del libro. Las formas de corrosión tienen dependencias distintas de composición, microestructura, estado y tensión; no se deduce una de otra. La fuente advierte que ese efecto no debe trasladarse a la serie 2000.",
        "conditions": "Tendencia de la serie 7000 discutida en la fuente, comparaciones con las demás variables relevantes controladas; no inmunidad a SCC.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf11",
        "originalId": "VF11",
        "matrixId": "4.7",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Al–Li: propiedades y deslizamiento",
        "type": "vf",
        "prompt": "La reducción de densidad y el aumento de módulo asociados al Li no bastan para deducir una mejora de tenacidad: el cizallamiento de δ′ puede favorecer deslizamiento localizado.",
        "difficulty": "Avanzada",
        "difficultyReason": "Conecta propiedades específicas favorables con un compromiso micromecánico; corrige la errata de densidad de R4.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "El Li reduce la densidad y aumenta E, pero δ′ (Al3Li) es ordenado, coherente y cizallable. Su interacción con dislocaciones favorece bandas de deslizamiento y heterogeneidad de deformación, con posibles pérdidas de ductilidad y tenacidad. Propiedades elásticas y densidad no determinan por sí solas la resistencia a la propagación de grietas. Aleantes, dispersoides y procesado pueden mitigar el problema.",
        "conditions": "Aleaciones y estados donde δ′ contribuye al endurecimiento; no todas las generaciones o composiciones de Al–Li se comportan igual.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 20
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 21
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 22
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 27
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf12",
        "originalId": "VF12",
        "matrixId": "5.1",
        "topic": "Tema 5",
        "topicNumber": 5,
        "subtopic": "Porosidad de moldeo",
        "type": "vf",
        "prompt": "La desgasificación del aluminio líquido sustituye a una alimentación adecuada del molde para prevenir los rechupes de contracción.",
        "difficulty": "Básica",
        "difficultyReason": "Distingue dos causas fundamentales de porosidad.",
        "cognitiveLevel": "Comprender",
        "model": "F",
        "explanation": "La desgasificación reduce el H disuelto que puede originar poros gaseosos al disminuir su solubilidad durante la solidificación. Los rechupes obedecen a la contracción y a la falta de aporte de metal líquido; requieren una alimentación adecuada. Los defectos pueden coexistir e interaccionar, pero combatir el gas no elimina la necesidad de alimentar.",
        "conditions": "Moldeo con contracción de solidificación y posible H disuelto; se distingue el mecanismo, no se identifica un poro solo por su forma.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "5": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 5.pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 6
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 7
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf13",
        "originalId": "VF13",
        "matrixId": "5.5",
        "topic": "Tema 5",
        "topicNumber": 5,
        "subtopic": "Modificación y afino del Si",
        "type": "vf",
        "prompt": "El P empleado para afinar el Si primario de una aleación Al–Si hipereutéctica realiza la misma modificación del Si eutéctico que el Na, por lo que ambos tratamientos son intercambiables.",
        "difficulty": "Avanzada",
        "difficultyReason": "Separa fase afectada, etapa del proceso y compatibilidad química.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "El P actúa en el afino del Si primario mediante AlP como nucleante; Na y Sr modifican la morfología de la eutéctica, de placas a formas más fibrosas. La globulización del Si por tratamiento de solución es otro proceso, en estado sólido. La fuente indica además que el Na puede anular la acción del P, por lo que no cabe intercambiarlos ni sumar sus efectos sin considerar compatibilidad.",
        "conditions": "Comparación de tratamientos sobre las fases y composiciones especificadas; no se evalúan las dosificaciones discrepantes del resumen.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "5": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 5.pdf",
            "pdfPage": 22
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 23
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 24
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 25
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf14",
        "originalId": "VF14",
        "matrixId": "6.2",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Alfágenos y β-transus",
        "type": "vf",
        "prompt": "El Al es un estabilizador de α en titanio y, en la tendencia descrita en el temario, eleva el β-transus.",
        "difficulty": "Básica",
        "difficultyReason": "Identifica una relación fundamental entre aleante y estabilidad de fase.",
        "cognitiveLevel": "Comprender",
        "model": "V",
        "explanation": "Un alfágeno amplía la estabilidad de α hacia temperaturas mayores. El Al es el principal ejemplo sustitucional de la familia y desplaza hacia arriba la temperatura por encima de la cual la estructura de equilibrio es β. Los betágenos tienen el efecto contrario; Sn y Zr se clasifican como neutros en la exposición docente.",
        "conditions": "Tendencia composicional descrita; no se exige una fórmula universal del transus ni equivalentes numéricos.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 10
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 11
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 13
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf15",
        "originalId": "VF15",
        "matrixId": "6.3",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "β retenida y metaestabilidad",
        "type": "vf",
        "prompt": "La retención de β tras un enfriamiento rápido hasta ambiente demuestra que esa fase es la única fase de equilibrio a esa temperatura.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue observación de fase, cinética y equilibrio, sin inferirlos unos de otros.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La retención por temple es un resultado cinético. En aleaciones β metaestables, β puede conservar la composición de alta temperatura y posteriormente descomponerse durante la maduración; su presencia no demuestra equilibrio. La composición modifica Ms y Mf y la fracción retenida. Deben distinguirse β metaestable y β estable, así como la α primaria que puede sobrevivir a una solución subtransus.",
        "conditions": "Retención por enfriamiento rápido; no identificación de equilibrio mediante un análisis termodinámico independiente.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 16
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 25
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 26
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 37
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf16",
        "originalId": "VF16",
        "matrixId": "6.6",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Martensita y STA",
        "type": "vf",
        "prompt": "En el STA de titanio, la explicación del gran aumento de dureza del acero Fe–C puede trasladarse a Ti: la martensita del temple aporta el mismo tipo de endurecimiento intenso antes de madurar.",
        "difficulty": "Avanzada",
        "difficultyReason": "Evita transferir una explicación entre sistemas y distingue martensita de precipitación posterior.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La fuente señala que la martensita de Ti no genera el incremento de dureza tan espectacular de la martensita de los aceros. En Ti la respuesta depende de composición, retención de β y precipitación durante la maduración; en β retenida la formación de α puede ser muy endurecedora. En las α+β habituales, la descomposición de la martensita no suele cambiar sustancialmente las propiedades. Compartir una transformación martensítica no equivale a compartir su intensidad ni el mecanismo Fe–C.",
        "conditions": "Comparación de mecanismos de las familias explicadas; no se niega toda resistencia de martensita Ti ni toda respuesta de α+β a STA.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 25
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 26
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 27
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 28
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf17",
        "originalId": "VF17",
        "matrixId": "6.8",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Casi α: fluencia y fatiga",
        "type": "vf",
        "prompt": "En las comparaciones de IMI 834 del temario, reducir la fracción de α primaria favorece la fluencia pero perjudica la fatiga a bajos ciclos, lo que exige un compromiso microestructural.",
        "difficulty": "Avanzada",
        "difficultyReason": "Evalúa dos propiedades contrapuestas y distingue optimización parcial de selección global.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "El libro relaciona menos α primaria con mejor comportamiento a fluencia, mientras que la fatiga a bajos ciclos empeora al reducir esa fracción. La temperatura de recocido controla la proporción primaria y el enfriamiento controla el espesor de placas; la mejor fluencia se asocia a velocidades intermedias en las curvas. No se deduce que eliminar α primaria sea la elección óptima para cualquier requisito.",
        "conditions": "Tendencias y rutas de IMI 834 descritas, ensayos comparables dentro de cada propiedad; no comparación con otra aleación a otra temperatura.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 34
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 35
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf18",
        "originalId": "VF18",
        "matrixId": "6.10",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Capa α superficial",
        "type": "vf",
        "prompt": "La capa superficial rica en α creada en Ti por entrada de oxígeno a alta temperatura es dura y frágil, y favorece la iniciación de grietas de fatiga.",
        "difficulty": "Intermedia",
        "difficultyReason": "Relaciona contaminación, estabilidad de fase y fatiga superficial.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "El O es alfágeno y difunde hacia la superficie durante un calentamiento en ambiente contaminante. La capa α enriquecida se endurece y pierde plasticidad, favoreciendo grietas. Es distinta de la película pasivante de óxido: la protección por atmósfera adecuada o la retirada de la capa contaminada atienden a ese daño metalúrgico.",
        "conditions": "Exposición térmica que permita difusión de O; no se atribuye esa capa a toda oxidación a temperatura ambiente.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 41
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 42
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf19",
        "originalId": "VF19",
        "matrixId": "6.9",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Beta-fleck y transus local",
        "type": "vf",
        "prompt": "Una zona beta-fleck enriquecida en betágenos puede atravesar su β-transus durante una solución que permanece por debajo del transus nominal de la pieza, creando una microestructura local desfavorable a fatiga.",
        "difficulty": "Avanzada",
        "difficultyReason": "Combina composición local, temperatura de proceso y consecuencias microestructurales.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La segregación eleva localmente los betágenos y reduce el transus local. Una temperatura elegida según la composición nominal puede quedar por encima del transus de esa zona y cambiar su transformación y microestructura tras el enfriamiento. El libro señala Fe y Cr como problemáticos y el deterioro de servicio, especialmente fatiga. No es necesario que toda la pieza atraviese el transus para producir heterogeneidad.",
        "conditions": "Segregación suficiente para que transus local < temperatura de solución < transus nominal; aleaciones β metaestables de la fuente.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 37
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf20",
        "originalId": "VF20",
        "matrixId": "7.1",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Dureza y templabilidad",
        "type": "vf",
        "prompt": "En un acero, la templabilidad mide la dureza máxima de la martensita, mientras que el contenido de C solo determina la profundidad a la que se endurece la pieza.",
        "difficulty": "Básica",
        "difficultyReason": "Distingue dos definiciones esenciales y sus efectos.",
        "cognitiveLevel": "Comprender",
        "model": "F",
        "explanation": "La frase intercambia los conceptos. El C influye decisivamente en la dureza alcanzable de la martensita; la templabilidad expresa la facilidad para obtener endurecimiento por temple a través de la sección y depende de la cinética y los aleantes. Dos aceros pueden alcanzar durezas superficiales similares y diferir mucho en el endurecimiento del núcleo.",
        "conditions": "Comparación conceptual en aceros templables con austenización adecuada; no se reduce la templabilidad a un único aleante.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "7": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf21",
        "originalId": "VF21",
        "matrixId": "7.2",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Endurecimiento secundario",
        "type": "vf",
        "prompt": "En los aceros Cr–Mo–V de aleación media del temario, el revenido en la zona de dureza secundaria combina relajación de tensiones con endurecimiento por precipitación de carburos.",
        "difficulty": "Intermedia",
        "difficultyReason": "Reconoce una excepción fundamentada al ablandamiento habitual de revenido.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La precipitación de carburos de aleación permite un endurecimiento secundario en la zona de revenido descrita, aproximadamente 500 °C, junto a una relajación mayor de tensiones que con revenidos bajos. Se obtiene un compromiso de resistencia y estabilidad térmica. No significa que subir la temperatura de revenido aumente continuamente la dureza; la tabla H11 muestra el deterioro a temperaturas mayores.",
        "conditions": "Familias formadoras de carburos y ventana de revenido apropiada; no un comportamiento monótono ni de todos los aceros.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "7": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 7
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf22",
        "originalId": "VF22",
        "matrixId": "7.5",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Familias PH",
        "type": "vf",
        "prompt": "En un acero PH austenítico, la maduración endurecedora requiere convertir primero la matriz austenítica en martensita, como en la ruta de los PH semiausteníticos.",
        "difficulty": "Avanzada",
        "difficultyReason": "Compara tres rutas y localiza la condición que depende de la familia.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "Los PH austeníticos mantienen austenita y precipitan fases endurecedoras dentro de ella. Los semiausteníticos presentan austenita retenida que se transforma mediante frío o deformación antes del envejecimiento correspondiente. Los martensíticos forman la matriz tras temple y endurecen por precipitación. La familia PH indica endurecimiento por precipitación, no una matriz o secuencia única.",
        "conditions": "Familias PH clasificadas en el libro; no confundir la ruta semiaustenítica con la del PH austenítico A-286.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "7": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 12
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf23",
        "originalId": "VF23",
        "matrixId": "8.1",
        "topic": "Tema 8",
        "topicNumber": 8,
        "subtopic": "Textura y maclado",
        "type": "vf",
        "prompt": "En una chapa de Mg con la textura de laminación descrita, el maclado favorecido por compresión puede dar un límite elástico a compresión menor que a tracción en ensayos direccionalmente comparables.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica textura y mecanismos de deformación a una asimetría mecánica.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La orientación basal generada por laminación favorece maclas bajo la compresión considerada. Se explica así la asimetría de límites elásticos que muestran el texto y las curvas AZ31B. La textura, dirección y tamaño de grano importan; no basta con saber que Mg es HCP para asignar una diferencia fija a cualquier producto.",
        "conditions": "Textura y dirección de carga compatibles con el caso docente; comparación en condiciones de temperatura y dirección equivalentes.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "8": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 7.pdf",
            "pdfPage": 4
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 18
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf24",
        "originalId": "VF24",
        "matrixId": "8.2",
        "topic": "Tema 8",
        "topicNumber": 8,
        "subtopic": "Impurezas y corrosión",
        "type": "vf",
        "prompt": "En el mecanismo de corrosión del Mg expuesto a un electrolito, las impurezas de Fe, Ni o Cu favorecen zonas catódicas respecto de la matriz, aunque su cantidad nominal sea pequeña.",
        "difficulty": "Intermedia",
        "difficultyReason": "Relaciona pureza y heterogeneidad electroquímica con servicio.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La matriz Mg es muy anódica y esas impurezas favorecen pares locales. Una baja concentración nominal no implica un efecto ambiental pequeño; importa su naturaleza y distribución. El libro asocia las variantes de alta pureza y el papel del Mn frente a Fe con mejores resultados. La protección superficial y la relación de áreas también condicionan la corrosión.",
        "conditions": "Medio electrolítico y presencia de impurezas en formas electroquímicamente activas; no una tasa universal calculable solo con porcentaje.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "8": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 7.pdf",
            "pdfPage": 5
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 6
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 13
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf25",
        "originalId": "VF25",
        "matrixId": "8.3",
        "topic": "Tema 8",
        "topicNumber": 8,
        "subtopic": "Precipitación Mg–Al",
        "type": "vf",
        "prompt": "La gran variación de solubilidad del Al en Mg basta para esperar un endurecimiento por precipitación muy intenso, comparable al de una dispersión fina coherente, en las Mg–Al descritas.",
        "difficulty": "Intermedia",
        "difficultyReason": "Distingue condición termodinámica necesaria de eficacia microestructural.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La variación de solubilidad permite sobresaturación, pero no determina por sí sola la eficacia endurecedora. En Mg–Al la fase β precipita directamente gruesa e incoherente y la respuesta es escasa. Las propiedades ambientales o tras solución pueden mejorar, pero eso no convierte la precipitación en un mecanismo igualmente eficaz. Mg–Zn y familias con tierras raras presentan otras respuestas y estabilidad en caliente.",
        "conditions": "Familias Mg–Al discutidas; no se afirma ausencia total de mejora con tratamientos ni igualdad entre Mg–Al y Mg–Zn.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "8": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 7.pdf",
            "pdfPage": 12
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 15
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 16
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf26",
        "originalId": "VF26",
        "matrixId": "9.1",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Plasticidad y fractura frágil",
        "type": "vf",
        "prompt": "La clasificación de una rotura como macroscópicamente frágil es compatible con deformación plástica muy localizada junto a una grieta antes de la rotura final.",
        "difficulty": "Intermedia",
        "difficultyReason": "Relaciona escalas de deformación y evita una falsa equivalencia.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La deformación local necesaria para nucleación o avance de una microgrieta no exige una deformación global grande de la pieza. Los mecanismos del capítulo admiten plasticidad localizada seguida de propagación rápida y rotura aparentemente frágil. Debe separarse la escala de observación y el mecanismo de nucleación del aspecto macroscópico final.",
        "conditions": "Clasificación macroscópica y procesos locales; no se requiere que toda fractura frágil presente igual zona plástica.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "9": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 4
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 8
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf27",
        "originalId": "VF27",
        "matrixId": "9.4",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Transición dúctil–frágil",
        "type": "vf",
        "prompt": "Para una misma microestructura de acero, la temperatura de transición dúctil–frágil es independiente del ensayo y del criterio utilizados para definirla.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica el significado de una magnitud dependiente del ensayo.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La fuente indica que el valor de transición depende mucho del ensayo y del criterio de determinación. Además influyen red, grano, composición y microestructura. Una temperatura obtenida con un criterio de energía de impacto no debe tratarse como constante universal para otra geometría o evaluación de tenacidad.",
        "conditions": "Mismo material y microestructura; se compara la definición experimental, no un cambio composicional.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "9": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 12
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf28",
        "originalId": "VF28",
        "matrixId": "9.5",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Grano y fractura por fluencia",
        "type": "vf",
        "prompt": "En el mapa de rotura intergranular por fluencia de los apuntes, disminuir el tamaño de grano desplaza los casos de baja tensión fuera del régimen favorecido por cavitación de bordes.",
        "difficulty": "Avanzada",
        "difficultyReason": "Interpreta el régimen de mecanismo y evita extrapolar un beneficio de grano fino.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "El mapa y su texto asocian tensiones bajas y grano fino con cavitación en bordes; tensiones altas y grano grande favorecen grietas en cuña. No se puede extrapolar la mejora de límite elástico o resistencia a clivaje por afino de grano a una mejora universal en fluencia. El enunciado invierte la tendencia del régimen indicado, sin pedir extrapolar un mapa a cualquier aleación.",
        "conditions": "Mapa docente de mecanismos, temperatura de fluencia y régimen de baja tensión; no una predicción cuantitativa de vida para una composición no especificada.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "9": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 19
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-vf29",
        "originalId": "VF29",
        "matrixId": "10.1",
        "topic": "Tema 10",
        "topicNumber": 10,
        "subtopic": "Índices de selección",
        "type": "vf",
        "prompt": "Elegir material ligero por rigidez exige considerar las hipótesis de diseño: los apuntes presentan E/ρ y √E/ρ como criterios que no pueden intercambiarse sin atender al tipo de solicitación.",
        "difficulty": "Intermedia",
        "difficultyReason": "Distingue una propiedad del material de un criterio condicionado por el diseño.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "El índice depende de cómo rigidez, geometría y masa intervienen en la restricción estructural. El libro cita distintos criterios para tracción, compresión, flexión, torsión o pandeo, y añade resistencia específica, fatiga y tenacidad. No se exige aquí derivar un índice ni asignar √E/ρ a todos los tipos de flexión; se exige reconocer el carácter condicionado de la comparación.",
        "conditions": "ρ es densidad; comparación con hipótesis geométricas y de carga definidas para cada diseño, sin imponer un índice universal.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "10": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 10.pdf",
            "pdfPage": 1
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 2
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 8
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-01-vf30",
        "originalId": "VF30",
        "matrixId": "10.2",
        "topic": "Tema 10",
        "topicNumber": 10,
        "subtopic": "Compatibilidad térmica y galvánica",
        "type": "vf",
        "prompt": "En una unión Al–Ti conectada eléctricamente y mojada por un electrolito, la buena difusión de calor en el Al permite descartar corrosión galvánica del Al frente al Ti pasivado.",
        "difficulty": "Avanzada",
        "difficultyReason": "Combina selección térmica y electroquímica e identifica un criterio que no controla el otro.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La conductividad térmica distribuye el calor y condiciona gradientes y procesado; no rompe el circuito galvánico. El Ti pasivado se comporta como un material noble y puede perjudicar al Al conectado en un electrolito. Deben evaluarse película, polaridad real en el medio y geometría de la unión, independientemente de la aptitud térmica. La protección puede requerir aislamiento o control del ambiente y recubrimiento.",
        "conditions": "Ti pasivado, contacto eléctrico y electrolito común; no se emplea una tabla de potenciales de metales activos para sustituir ese estado superficial.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "10": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 10.pdf",
            "pdfPage": 6
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-01-j01",
        "originalId": "J01",
        "matrixId": "1.6",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "PFZ y borde de grano",
        "type": "justificada",
        "prompt": "V/F y justifica: «La formación de una PFZ junto al borde de grano se explica por déficit local de vacantes y/o de soluto; esa zona puede deformarse más fácilmente que el interior endurecido del grano». Explica los dos orígenes y una consecuencia para el comportamiento del material.",
        "difficulty": "Avanzada",
        "difficultyReason": "Exige dos mecanismos de formación y enlazarlos con una consecuencia, sin limitarse a definir PFZ.",
        "cognitiveLevel": "Analizar",
        "model": "V",
        "explanation": "El borde actúa como sumidero de vacantes retenidas tras el temple; su déficit dificulta la nucleación de precipitados próximos al borde. También puede migrar soluto hacia el borde y consumirse en precipitados gruesos e incoherentes, reduciendo la sobresaturación vecina. Por una o ambas vías aparece una PFZ relativamente menos endurecida y más deformable que el interior con precipitados finos. La heterogeneidad y la precipitación en borde pueden favorecer localización de deformación y deteriorar tenacidad o comportamiento intergranular/SCC, según tratamiento. No significa que toda PFZ tenga el mismo ancho o determine sola la corrosión.",
        "conditions": "Aluminio endurecido por precipitación; se compara la zona vecina al borde con el interior del mismo grano tras un tratamiento comparable.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "1": 2
        },
        "essential": "Déficit de vacantes, déficit de soluto, heterogeneidad de endurecimiento.",
        "majorErrors": "Atribuir la PFZ a exceso de precipitados finos; afirmar que el borde no intercambia soluto o vacantes; confundir PFZ con un poro.",
        "minorOmissions": "Omitir la sigla inglesa o el detalle de incoherencia del precipitado grueso si el mecanismo está bien explicado.",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 13
          }
        ],
        "correct": true,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto V."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Borde sumidero de vacantes y efecto sobre precipitación local."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Migración/consumo de soluto en borde y precipitados gruesos."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Zona menos endurecida/deformación localizada y consecuencia justificada en tenacidad o corrosión."
          }
        ]
      },
      {
        "id": "piloto-01-j02",
        "originalId": "J02",
        "matrixId": "2.5",
        "topic": "Tema 2",
        "topicNumber": 2,
        "subtopic": "Sellado y compromisos",
        "type": "justificada",
        "prompt": "V/F y justifica: «Sellar una capa anódica de Al para mejorar la corrosión permite conservar la ventaja de sus poros para adherencia y evita un coste adicional en fatiga». Relaciona el sellado con poros, adhesión y tensiones.",
        "difficulty": "Intermedia",
        "difficultyReason": "Integra tres efectos de un tratamiento mediante su mecanismo de hidratación.",
        "cognitiveLevel": "Analizar",
        "model": "F",
        "explanation": "El sellado hidrata la alúmina y aumenta su volumen, cerrando poros y mejorando la barrera frente a corrosión. Esos poros facilitaban penetración y anclaje de recubrimientos/adhesivos, de modo que su cierre puede reducir la adhesión. La expansión genera tensiones internas y la capa puede favorecer iniciación de grietas, perjudicando la fatiga. La intensidad depende de tipo, espesor de capa, sustrato y tratamiento; una mejora de corrosión no garantiza mantener adhesión ni fatiga.",
        "conditions": "Comparación de la misma capa antes/después del sellado descrito; no una regla numérica de vida para todo anodizado.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "2": 2
        },
        "essential": "Cierre de poros, función de los poros en adhesión, expansión/tensiones y fatiga.",
        "majorErrors": "Explicar el sellado como apertura de poros; inferir mejor fatiga solo de mejor corrosión.",
        "minorOmissions": "Omitir un baño o temperatura exactos; no se piden recetas ni un orden universal entre todos los procesos.",
        "sources": [
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 11
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 12
          }
        ],
        "correct": false,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto F."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Hidratación/expansión y cierre de poros: mejora de corrosión."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Pérdida del beneficio de poros para adhesivo/recubrimiento."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Tensiones y nucleación de grietas: coste de fatiga condicionado por la capa."
          }
        ]
      },
      {
        "id": "piloto-01-j03",
        "originalId": "J03",
        "matrixId": "4.6",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "7000: T6/T7 y sección",
        "type": "justificada",
        "prompt": "V/F y justifica: «Para una 7000 susceptible a SCC, T6 es la elección preferible frente a un T7 de sobremaduración si se busca a la vez la máxima resistencia y el mejor comportamiento a SCC; el espesor de la pieza no añade un criterio relevante». Explica el compromiso y el papel de la sección.",
        "difficulty": "Avanzada",
        "difficultyReason": "Combina dos propiedades contrapuestas con una limitación del proceso en piezas gruesas.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "T6 busca alta resistencia tras maduración artificial, mientras que la sobremaduración T7 considerada en las 7000 mejora SCC/exfoliación a costa de resistencia. No se maximizan ambas propiedades eligiendo T6. La sección importa por el enfriamiento local y la sensibilidad al temple: un núcleo lento pierde soluto antes de madurar y puede aumentar la heterogeneidad. Para piezas gruesas, 7050/7010 emplean Zr con menor penalización de sensibilidad que Cr, y bajos Fe/Si favorecen tenacidad. La selección real exige aleación, producto, dirección de carga, ambiente y propiedades requeridas.",
        "conditions": "Comparación de estados T6 y T7 sobremadurados de 7000 según el libro, no cualquier estado T7 de cualquier familia; se mantiene composición/producto comparables.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "4": 2
        },
        "essential": "Compromiso T6/T7 y velocidad efectiva a través de sección.",
        "majorErrors": "Equiparar T7 a inmunidad; decir que el núcleo se enfría como la superficie; invertir el efecto Fe/Si sobre tenacidad.",
        "minorOmissions": "Omitir designaciones concretas 7050/7010 si la selección condicionada se explica; no se exigen composiciones.",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 14
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 19
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 15
          }
        ],
        "correct": false,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto F."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "T6: alta resistencia; T7 sobremadurado: mejor SCC con coste de resistencia."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Espesor, enfriamiento del núcleo y precipitación durante el temple."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Selección condicionada; mención razonada de sensibilidad/aleación o dirección/ambiente."
          }
        ]
      },
      {
        "id": "piloto-01-j04",
        "originalId": "J04",
        "matrixId": "6.7",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Solución subtransus",
        "type": "justificada",
        "prompt": "V/F y justifica: «En una aleación Ti α+β sometida a solución en la región α+β, por debajo del β-transus, la α primaria presente al iniciar el enfriamiento puede permanecer; las transformaciones del enfriamiento afectan a la fracción que era β». Distingue fases heredadas y productos de transformación.",
        "difficulty": "Avanzada",
        "difficultyReason": "Separa historia de las fases, partición de aleantes y transformación posterior.",
        "cognitiveLevel": "Analizar",
        "model": "V",
        "explanation": "Bajo el transus existe α primaria que no se ha transformado completamente en β durante la solución. Esa α puede persistir tras el enfriamiento, mientras que la β de alta temperatura puede transformarse en martensita, α+β de morfología transformada o quedar retenida según composición y velocidad. La β subtransus resulta más enriquecida en betágenos; al subir la temperatura de solución dentro del campo α+β disminuye la fracción primaria. No se identifica toda α final como α primaria ni se asegura β retenida para cualquier enfriamiento.",
        "conditions": "Solución en el campo α+β con α primaria existente, temperatura y permanencia controladas; no tratamiento íntegramente en β.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "6": 2
        },
        "essential": "α primaria heredada; transformación del volumen β; dependencia del proceso.",
        "majorErrors": "Afirmar disolución total de α bajo transus; llamar primaria a toda α formada durante el enfriamiento.",
        "minorOmissions": "No enumerar todos los tipos de martensita; no se requieren Ms/Mf numéricos.",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 25
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 26
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 32
          }
        ],
        "correct": true,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto V."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Persistencia de α primaria porque no se cruzó el transus para toda la estructura."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Productos posibles de β según composición/enfriamiento; distinguirlos de α primaria."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Temperatura de solución controla fracción primaria y/o enriquecimiento betágeno de β."
          }
        ]
      },
      {
        "id": "piloto-01-j05",
        "originalId": "J05",
        "matrixId": "7.4",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Endurecimiento maraging",
        "type": "justificada",
        "prompt": "V/F y justifica: «En los maraging de muy bajo C, la alta resistencia final procede principalmente de intermetálicos precipitados durante la maduración, y no de una martensita inicialmente muy dura por alto C». Explica la ruta y un riesgo del exceso de maduración.",
        "difficulty": "Intermedia",
        "difficultyReason": "Relaciona matriz inicial, precipitados y pérdida de propiedades por un tratamiento excesivo.",
        "cognitiveLevel": "Analizar",
        "model": "V",
        "explanation": "El temple/enfriamiento forma una matriz martensítica de muy bajo C, relativamente blanda, con elevada templabilidad. La maduración genera una dispersión fina de intermetálicos Ni3Mo/Ni3Ti que frena dislocaciones y eleva dureza, límite elástico y resistencia. Un tiempo excesivo puede favorecer reversión de martensita a austenita y pérdida de propiedades. Muy bajo C no equivale a C exactamente cero: la tabla de composición limita el C a 0,03 % en los grados mostrados. No debe confundirse con el revenido de un acero cuyo endurecimiento se relaciona con carburos.",
        "conditions": "Familia maraging descrita y estado final madurado; no una generalización a todos los aceros martensíticos.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "7": 2
        },
        "essential": "Matriz de bajo C; maduración e intermetálicos.",
        "majorErrors": "Atribuir resistencia a alto C o a precipitación principal de carburos; confundir maduración con eliminación completa de martensita.",
        "minorOmissions": "Omitir el valor máximo de C o uno de los intermetálicos si identifica correctamente la familia de precipitados.",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 9
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 10
          }
        ],
        "correct": true,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto V."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Matriz martensítica de muy bajo C relativamente blanda tras enfriamiento."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Precipitación fina intermetálica Ni–Mo/Ti: incremento de resistencia."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Exceso de maduración: reversión a austenita y/o pérdida de propiedades coherente con la fuente."
          }
        ]
      },
      {
        "id": "piloto-01-v01",
        "originalId": "V01",
        "matrixId": "5.6; apoyo 5.5",
        "topic": "Tema 5",
        "topicNumber": 5,
        "subtopic": "Microestructura y datos Al–Si",
        "type": "visual",
        "prompt": "Se muestran dos micrografías de aleación binaria Al–12 % Si colada (A y B), ambas a aumento original ×400. No hay barra de escala calibrada en estos dos paneles. La tabla, independiente de esas probetas, corresponde a Al–13 % Si: A/B son series coladas en arena y C/D en coquilla; dentro de cada pareja una serie es normal y otra modificada. Las letras de la tabla no identifican las probetas de las fotografías.\n\n1. Describe dos diferencias morfológicas observables entre las fotografías A y B y razona cuál es compatible con eutéctica modificada. Separa observación e inferencia. (3 puntos)\n2. En la tabla, calcula el aumento absoluto de Rm y el factor de aumento del alargamiento entre A→B y C→D. Identifica la serie compatible con modificación en cada pareja, justificando qué variable se mantiene controlada. (3 puntos)\n3. Explica cómo Na/Sr pueden producir el cambio y por qué eso no equivale al afino del Si primario con P ni a la globulización durante solución. (2 puntos)\n4. ¿Permiten estos recursos demostrar que una fotografía concreta corresponde a una fila de la tabla o medir el espesor del Si en μm? Justifica, e indica un compromiso de moldeo asociado a modificar. (2 puntos)",
        "difficulty": "Avanzada",
        "difficultyReason": "Integra morfología, comparación cuantitativa controlada y límites de inferencia; no exige reconocer un precipitado invisible.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "Fotografía B compatible con modificación; tabla B y D modificadas. ΔRm: 70 y 25 MPa; factores de alargamiento: 6,5 y 8/3,5 ≈ 2,29.",
        "explanation": "Observación: A muestra trazos oscuros largos y gruesos, compatibles con secciones de placas de Si; en B el constituyente oscuro es mucho más fino, distribuido en trazos pequeños, y aparecen zonas claras. Inferencia contextual: con Al–12 % Si y la referencia del temario, B es compatible con eutéctica modificada y A con eutéctica normal. El corte bidimensional no demuestra por sí solo toda la geometría tridimensional ni identifica por análisis químico cada fase.\n\nEn arena, Rm pasa 125→195 MPa (+70), y alargamiento 2→13 % (factor 6,5; +11 puntos porcentuales). En coquilla, Rm pasa 195→220 MPa (+25), y alargamiento 3,5→8 % (factor 2,29; +4,5 puntos porcentuales). La comparación dentro del mismo molde permite atribuir razonablemente el cambio al tratamiento indicado por la fuente: B y D son modificadas. La dureza sube 50→58 y 63→72 HRB. Los aumentos son mayores en arena, coherentes con el mayor beneficio de modificar una solidificación más lenta y estructura normal más basta; no se infiere de la tabla una estadística universal.\n\nNa/Sr añadidos al líquido cambian la morfología del Si eutéctico de placas a formas más fibrosas y menos frágiles. P afina Si primario mediante nucleación AlP en hipereutécticas y no es intercambiable con esa modificación; la globulización durante solución es un cambio posterior en estado sólido. La modificación puede reducir fluidez y favorecer porosidad, por lo que la mejora de propiedades no sustituye el control del proceso.\n\nLas fotografías y tabla tienen composiciones diferentes (12 y 13 % Si) y no hay trazabilidad común de probetas: no se asigna una foto a una fila ni se usa su aspecto para extraer Rm. El aumento impreso ×400 no permite medir μm con imágenes digitales redimensionadas sin calibración. La barra de 20 μm del panel original (b), excluido del ejercicio, no pertenece a estos paneles.",
        "conditions": "Datos originales independientes; composiciones, aumento y tipo de molde suministrados. No se supone correspondencia entre fotografías y tabla ni se solicita metrología.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 10,
        "topicPoints": {
          "5": 10
        },
        "essential": "Morfología normal/modificada; ΔRm y cocientes correctos; separación de los tres mecanismos y límites.",
        "majorErrors": "Usar la barra de otro panel; igualar 12 y 13 % Si como probetas idénticas; atribuir a P la misma modificación que a Na; invertir elongación con su pérdida.",
        "minorOmissions": "Omitir la evolución de HRB, que no se solicita; no se requiere leer porcentajes de fase ni tamaños.",
        "sources": [
          {
            "document": "Tema 5.pdf",
            "pdfPage": 22
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 23
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 24
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 25
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 1.5,
            "label": "Observaciones comparativas correctas de ambas fotos: 0,75 por descripción diferenciada."
          },
          {
            "id": "criterio-2",
            "max": 1.5,
            "label": "B compatible con modificación y relación morfología-fragilidad, separando inferencia del aspecto observado."
          },
          {
            "id": "criterio-3",
            "max": 1.5,
            "label": "Cálculos: 0,375 por cada uno de los dos ΔRm y dos factores de alargamiento; aceptar 2,3."
          },
          {
            "id": "criterio-4",
            "max": 1.5,
            "label": "B/D modificadas (0,75) y comparación dentro del mismo molde / independencia de fotografías (0,75)."
          },
          {
            "id": "criterio-5",
            "max": 2,
            "label": "Mecanismos: Na/Sr eutéctica (1), P primario (0,5), globulización en sólido (0,5)."
          },
          {
            "id": "criterio-6",
            "max": 2,
            "label": "Límites: falta de trazabilidad (0,5), falta de escala calibrada (0,75), compromiso fluidez/porosidad (0,75)."
          }
        ],
        "stimulus": {
          "kind": "image",
          "context": "Recursos originales. Las condiciones, unidades y límites de interpretación se indican en el enunciado.",
          "synthetic": false,
          "source": "Tema 5.pdf, página PDF 22; Tema 5.pdf, página PDF 23",
          "images": [
            {
              "src": "assets/piloto-01/V01_A.png",
              "alt": "Fotografía A",
              "label": "Fotografía A"
            },
            {
              "src": "assets/piloto-01/V01_B.png",
              "alt": "Fotografía B",
              "label": "Fotografía B"
            },
            {
              "src": "assets/piloto-01/V01_tabla.png",
              "alt": "Tabla Al–13 % Si",
              "label": "Tabla Al–13 % Si"
            }
          ]
        }
      },
      {
        "id": "piloto-01-v02",
        "originalId": "V02",
        "matrixId": "6.5; apoyo 6.4",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Morfología y fluencia Ti",
        "type": "visual",
        "prompt": "Las fotografías A y B son micrografías reales de titanio del temario, sin barra de escala calibrada. La curva C es IMI 834: deformación por fluencia tras 100 h a 600 °C y 210 MPa, frente a velocidad de enfriamiento (°C/min, eje logarítmico); αp significa α primaria. La curva D es Ti–6Al–4V totalmente equiaxial, con maduración final de 24 h a 500 °C: deformación tras 100 h a 480 °C y 200 MPa frente a tamaño de grano α (μm).\n\n1. Describe las morfologías visibles de A y B y propón una ruta de recocido compatible con cada una. Distingue lo observado de lo inferido por el temario. (3 puntos)\n2. En C, ¿aumentar la velocidad de enfriamiento reduce de forma monótona la deformación? Describe la región de menor deformación y compara cualitativamente las series a una misma velocidad. No se exige un óptimo numérico preciso. (3 puntos)\n3. En D, describe la relación entre tamaño de grano y deformación. Explica por qué no basta con invocar el aumento de límite elástico por grano fino para seleccionar la mejor fluencia. (2 puntos)\n4. ¿Puedes concluir comparando C y D que IMI 834 presenta mejor fluencia que Ti–6Al–4V? Razona, e indica un dato que no pueda obtenerse de las fotografías. (2 puntos)",
        "difficulty": "Avanzada",
        "difficultyReason": "Requiere separar observación, ruta compatible, lectura de tendencia y alcance de la comparación experimental.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "A laminar, compatible con recocido β; B equiaxial, compatible con recristalización α+β y enfriamiento muy lento. C presenta un mínimo intermedio; D disminuye su deformación al crecer el grano. No cabe comparación directa C/D.",
        "explanation": "En A se observan conjuntos de trazos/placas con distintas orientaciones, organizados en colonias; B presenta granos de contorno aproximadamente poligonal y aspecto equiaxial. Esas son observaciones morfológicas. El contexto docente permite inferir que A es compatible con α en placas y β entre ellas tras recocido por encima del transus y enfriamiento controlado; B es compatible con recocido de recristalización en α+β, enfriamiento muy lento y crecimiento de α a costa de β. El ataque y contraste no demuestran por sí solos composición o identidad cristalográfica de cada trazo; no se exige identificar cuantitativamente β en bordes.\n\nC no es monótona: cada serie baja hasta una región intermedia de velocidades y luego sube al aumentar más la velocidad. El mínimo visible está en el orden de algunos cientos de °C/min, sin atribuir una cifra exacta a una curva escaneada. A una velocidad común, las fracciones menores de α primaria y la estructura laminar muestran menor deformación en los datos, con cercanía de las curvas de 4 % y laminar. Menor deformación tras el mismo tiempo, tensión y temperatura implica mejor fluencia para ese ensayo, no automáticamente mejor fatiga.\n\nEn D, al aumentar el tamaño de grano α de unos pocos a más de diez μm disminuye la deformación acumulada. El grano fino que favorece límite elástico o iniciación de fatiga a otras condiciones no optimiza necesariamente fluencia; en servicio caliente importan los mecanismos de borde y la microestructura. El gráfico permite afirmar esta tendencia en el Ti–6Al–4V equiaxial ensayado, no una ley universal de toda aleación Ti.\n\nComparar valores absolutos C/D para ordenar aleaciones no es válido: difieren composición, 600/480 °C, 210/200 MPa y microestructura/ruta. El tiempo es 100 h en ambos, pero eso no controla las demás variables. Las fotografías no permiten tamaño en μm, fracciones exactas, composición química o resistencia numérica sin datos adicionales; tampoco se emparejan con una curva como si fuesen probetas documentadas del ensayo.",
        "conditions": "Morfologías de referencia sin calibración; C y D son ensayos diferentes, no fotografías de probetas enlazadas a los puntos de las curvas.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 10,
        "topicPoints": {
          "6": 10
        },
        "essential": "Morfologías y rutas; mínimo de C; tendencia de D; condiciones de cada ensayo.",
        "majorErrors": "Inventar escala en las fotos; convertir 600 °C en 480 °C; identificar óptimo en el enfriamiento máximo; ordenar aleaciones por valores absolutos C/D.",
        "minorOmissions": "No dar un intervalo exacto del mínimo; no cuantificar fases invisibles; esos datos no se piden.",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 21
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 22
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 23
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 24
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 1.5,
            "label": "Observaciones de placas/colonias en A y granos equiaxiales en B: 0,75 por foto."
          },
          {
            "id": "criterio-2",
            "max": 1.5,
            "label": "Rutas compatibles β y recristalización α+β: 0,5 cada una; separar inferencia y observación: 0,5."
          },
          {
            "id": "criterio-3",
            "max": 1.5,
            "label": "C no monótona: descenso, mínimo intermedio y aumento posterior; 0,5 cada elemento."
          },
          {
            "id": "criterio-4",
            "max": 1.5,
            "label": "Comparación a igual velocidad: menor αp/laminar menor deformación (1); no extrapolar a óptimo de fatiga (0,5)."
          },
          {
            "id": "criterio-5",
            "max": 2,
            "label": "D: grano mayor menor deformación (1); distinguir fluencia de límite elástico/beneficio universal de grano fino (1)."
          },
          {
            "id": "criterio-6",
            "max": 2,
            "label": "No ordenar C/D por condiciones distintas: temperatura (0,5), tensión/composición o ruta (0,5); limitación concreta de fotografías (1)."
          }
        ],
        "stimulus": {
          "kind": "image",
          "context": "Recursos originales. Las condiciones, unidades y límites de interpretación se indican en el enunciado.",
          "synthetic": false,
          "source": "Tema 6 .pdf, página PDF 21; Tema 6 .pdf, página PDF 22; Tema 6 .pdf, página PDF 24",
          "images": [
            {
              "src": "assets/piloto-01/V02_A.png",
              "alt": "Fotografía A",
              "label": "Fotografía A"
            },
            {
              "src": "assets/piloto-01/V02_B.png",
              "alt": "Fotografía B",
              "label": "Fotografía B"
            },
            {
              "src": "assets/piloto-01/V02_C.png",
              "alt": "Curva C",
              "label": "Curva C"
            },
            {
              "src": "assets/piloto-01/V02_D.png",
              "alt": "Curva D",
              "label": "Curva D"
            }
          ]
        }
      },
      {
        "id": "piloto-01-d01",
        "originalId": "D01",
        "matrixId": "1.8; apoyos 1.4–1.7",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "Ruta térmica del aluminio",
        "type": "desarrollo",
        "prompt": "Una pieza gruesa de aluminio endurecible por precipitación necesita alta resistencia, uniformidad a través de la sección y poca distorsión al mecanizar. Propón y razona la secuencia solución–temple–maduración, identifica dos compromisos de proceso y explica el papel de un alivio de tensiones por deformación controlada tras el temple. No se piden temperaturas ni tiempos numéricos. Responde en 2–3 párrafos.",
        "difficulty": "Avanzada",
        "difficultyReason": "Integra secuencia causal y compromisos con un caso delimitado; extensión prevista compatible con varios párrafos.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "Solución adecuada sin quemado; temple local suficientemente rápido; control de tensiones/uniformidad; alivio mecánico controlado y maduración según el compromiso de propiedades.",
        "explanation": "La solución calienta y mantiene para disolver las fases solubles, sin llegar a fusión incipiente en bordes (quemado, que no se corrige con una maduración). El temple debe superar la velocidad crítica en las zonas relevantes de toda la sección, evitando precipitación durante enfriamiento y reteniendo soluto para madurar. En una pieza gruesa el núcleo se enfría más despacio: mayor extracción térmica puede mejorar retención, pero aumentar gradientes, tensiones residuales y distorsión; debe seleccionarse aleación/producto y proceso compatibles con la sección. Un temple insuficiente no se compensa simplemente prolongando la maduración.\n\nTras el temple, una deformación controlada, como estirado o compresión en estados de alivio de tensiones de los apuntes, reduce tensiones internas y el riesgo de distorsión al retirar material. No debe confundirse con recocer completamente y perder la sobresaturación o con obtener propiedades iguales por cualquier deformación. La posterior maduración forma la dispersión endurecedora; su temperatura/tiempo se eligen para el equilibrio requerido, no por máxima dureza como único criterio. Sub/pico/sobremaduración cambian resistencia y otras prestaciones, y el estado se debe verificar en superficie y núcleo. El compromiso resistencia–tensiones y el de resistencia máxima–otras propiedades deben explicarse con esa historia de soluto y precipitados.",
        "conditions": "Aleación tratable por precipitación y sección sensible al temple; ciclo propuesto conceptual, no receta industrial ni garantía de uniformidad.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "1": 8
        },
        "essential": "Soluto retenido; precipitación; sección y gradientes; tensiones y ruta de alivio.",
        "majorErrors": "Invertir solución y maduración; proponer fusión como solución; decir que madurar recupera todo el soluto perdido durante un temple lento; eliminar tensiones sin coste mediante un recocido completo.",
        "minorOmissions": "Omitir sufijos TX51/TX52 o parámetros numéricos, no solicitados; basta una ruta de alivio correctamente descrita.",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 14
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 15
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 16
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 17
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 20
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 21
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "Solución: disolución/difusión (1), temperatura/permanencia adecuadas sin quemado (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "Temple: retener soluto evitando precipitación (1), velocidad local/núcleo (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "Compromisos: enfriamiento-resistencia frente a tensiones/distorsión (1), maduración-resistencia frente a otras prestaciones (1)."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "Alivio controlado por estirado/compresión tras temple (1), maduración posterior y coherencia de secuencia (1)."
          }
        ]
      },
      {
        "id": "piloto-01-d02",
        "originalId": "D02",
        "matrixId": "4.10; apoyos 4.4–4.6",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Selección estructural Al",
        "type": "desarrollo",
        "prompt": "Compara dos necesidades: revestimiento inferior del ala dominado por tracción y tolerancia al daño, y zona superior dominada por compresión y rigidez, con una unión gruesa susceptible a SCC. Propón familias/estados de Al candidatos, justifica el compromiso y explica por qué escoger el mayor Rm de una tabla no resuelve la selección. No se requiere una decisión certificada ni composiciones. Responde en 2–3 párrafos.",
        "difficulty": "Avanzada",
        "difficultyReason": "Selección entre requisitos y propiedades distintas, con familias concretas y una sección crítica.",
        "cognitiveLevel": "Evaluar",
        "model": "2000/2024-T3 como candidato de tolerancia al daño; 7000 como candidato resistente a compresión, con temper y producto adecuados a SCC/sección; evaluación multivariable.",
        "explanation": "En el revestimiento inferior, además de resistencia a tracción se consideran fatiga, crecimiento de grieta y tenacidad/resistencia residual. 2024-T3 es un candidato respaldado por el temario para tolerancia al daño, y debe contemplarse su protección frente a corrosión. No se elige únicamente por Rm ni se asegura que supere a cualquier 7000 en todos los ensayos.\n\nEn la zona superior importan límite de compresión, E, fatiga y tenacidad, por lo que una 7000 de alta resistencia es un candidato. Para la unión gruesa susceptible a SCC, se razona un estado sobremadurado T7 de la familia apropiada y una aleación como 7050/7010 con baja sensibilidad al temple y bajos Fe/Si. La pérdida de resistencia respecto al pico puede compensarse con mejor SCC y tenacidad; el enfriamiento del núcleo, dirección corta transversal y ambiente deben comprobarse. El Cu en 7000 puede favorecer SCC aunque perjudique corrosión general; no se sustituyen ambos criterios por uno solo.\n\nLa elección necesita propiedades del producto y orientación reales, rigidez/diseño, fatiga de iniciación y propagación, tolerancia al daño y protección superficial, además de resistencia. Rm es resistencia última a tracción, no límite compresivo, módulo ni tenacidad. Se aceptan otros candidatos del temario si se identifica y justifica su compromiso y se reconoce que faltan datos para certificar la decisión.",
        "conditions": "Caso pedagógico basado en requisitos típicos; no cargas, tamaños o vida de diseño suficientes para dimensionar/certificar. Candidatos condicionados por producto y estado.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "4": 8
        },
        "essential": "Diferencia entre resistencia última, límite de compresión, E y tenacidad; estado/sección/SCC.",
        "majorErrors": "Afirmar que Rm mide E o tenacidad; recomendar T6 como máxima protección a SCC; invertir el efecto Fe/Si sobre tenacidad.",
        "minorOmissions": "No citar avión concreto, historia o tabla completa; no exigir 7050 si otra 7000 se razona y se reconoce la sección crítica.",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 8
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 10
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 14
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 19
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 39
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 40
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "Revestimiento inferior: fatiga/crecimiento/tenacidad (1), candidato 2000/2024-T3 y protección razonada (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "Zona superior: compresión y rigidez (1), candidato 7000 coherente sin equiparar Rm a esas propiedades (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "Unión: compromiso T6/T7 y SCC (1), sección/sensibilidad al temple y aleación/pureza o dirección (1)."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "Selección multivariable (1), límites de los datos/estado/orientación y alternativas justificadas (1)."
          }
        ]
      },
      {
        "id": "piloto-01-d03",
        "originalId": "D03",
        "matrixId": "6.11; apoyos 6.4, 6.6, 6.8–6.10",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Selección integrada Ti",
        "type": "desarrollo",
        "prompt": "Compara un componente de compresor a unos 500 °C con carga sostenida y fatiga a bajos ciclos, y un componente estructural a ambiente que necesita alta resistencia mediante tratamiento térmico. Propón una familia de Ti para cada uno y razona composición–tratamiento–microestructura–propiedades. Incluye un riesgo de fabricación relevante. No se piden recetas ni una certificación de vida. Responde en 2–3 párrafos.",
        "difficulty": "Avanzada",
        "difficultyReason": "Dos casos contrastados y un riesgo específico, sin solicitar catálogos exhaustivos de Ti.",
        "cognitiveLevel": "Evaluar",
        "model": "Casi α (por ejemplo IMI 834) y compromiso α primaria/enfriamiento para compresor; β metaestable tratable con precipitación de α para resistencia estructural; controlar capa α o segregación.",
        "explanation": "Para el componente caliente, una casi α/súper α como IMI 834 es un candidato del temario: elementos y precipitados estables, incluidos siliciuros en las composiciones apropiadas, contribuyen al servicio de fluencia. El recocido controla α primaria y placas de la región transformada. Reducir α primaria favorece fluencia pero perjudica fatiga a bajos ciclos; por ello se elige una fracción pequeña compatible con ambos requisitos y un enfriamiento controlado, no simplemente el más rápido. 500 °C se sitúa dentro del contexto de uso de casi α descrito; no se toma la fusión como límite de servicio ni se propone Ti indiscriminadamente por encima de las últimas etapas calientes del compresor.\n\nPara la estructura a ambiente puede proponerse β metaestable, por ejemplo la familia del Ti-10V-2Fe-3Al citada para componentes estructurales. Los betágenos permiten retener β tras solución/enfriamiento y su maduración precipita α, con fuerte incremento de resistencia; debe equilibrarse con tenacidad y ductilidad. La β estructural útil no se confunde con β estable de aplicación limitada ni se atribuye a una martensita tipo Fe–C todo el endurecimiento. Una alternativa α+β se admite si se justifica su respuesta y el límite de enfriamiento/espesor.\n\nDurante fabricación, el O puede crear una capa α dura y frágil perjudicial a fatiga, por lo que se controlan atmósfera y eliminación del daño superficial. También se acepta beta-fleck: segregación betágena reduce el transus local y puede cambiar la microestructura durante un tratamiento elegido según el transus nominal. La selección necesita datos de la sección, historia térmica, tensiones y ambiente; no garantiza una vida solo por familia.",
        "conditions": "500 °C aproximados, dentro del rango contextual del temario; no dimensionado. Datos de servicio insuficientes para selección final; candidato estructural a ambiente.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "6": 8
        },
        "essential": "Familia adecuada al servicio; origen del endurecimiento; compromiso microestructural y riesgo.",
        "majorErrors": "Elegir por Tm sin estabilidad en servicio; negar uso estructural de β metaestable; atribuir toda resistencia al temple martensítico; confundir capa α con óxido protector.",
        "minorOmissions": "No dar porcentajes exactos de α primaria ni nombres de todas las aleaciones; pueden admitirse alternativas justificadas del temario.",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 25
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 27
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 28
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 33
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 34
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 35
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 36
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 37
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 39
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 41
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "Familia casi α caliente (1), composición/estabilidad/fluencia razonada (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "Recocido y control microestructural (1), compromiso α primaria-fluencia-LCF/enfriamiento (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "Familia estructural tratable razonada (1), retención β/precipitación y compromiso resistencia-tenacidad (1)."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "Riesgo capa α o beta-fleck y mecanismo (1), control coherente y límite de la selección (1)."
          }
        ]
      },
      {
        "id": "piloto-01-d04",
        "originalId": "D04",
        "matrixId": "7.6; apoyos 7.1–7.4",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Selección y proceso del acero",
        "type": "desarrollo",
        "prompt": "Una pieza aeronáutica gruesa necesita alta resistencia y estabilidad dimensional; preocupa la tenacidad y el riesgo de H durante acabados superficiales. Compara una ruta Cr–Mo–V de aleación media con una maraging. Explica el mecanismo de endurecimiento de cada una y dos controles relevantes para fabricar/seleccionar la pieza. No se piden parámetros industriales numéricos. Responde en 2–3 párrafos.",
        "difficulty": "Avanzada",
        "difficultyReason": "Contrasta mecanismos y selecciona controles con efecto causal en dos rutas concretas.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "Cr–Mo–V: templabilidad y revenido con carburos secundarios/relajación; maraging: bajo C, martensita inicial y maduración intermetálica; controlar calidad, tensiones y H sin equiparar dureza a tenacidad.",
        "explanation": "Los Cr–Mo–V tienen mayor templabilidad que los de baja aleación, permitiendo secciones más gruesas y enfriamientos menos severos. Tras austenización/temple, el revenido en la ventana de endurecimiento secundario precipita carburos y relaja tensiones; puede mantener resistencia y mejorar estabilidad respecto a un revenido bajo. Esto no autoriza subir indefinidamente temperatura: sobremodificar el estado reduce resistencia. La dureza máxima no determina por sí sola tenacidad ni temple del núcleo.\n\nEn maraging, el muy bajo C da una matriz martensítica inicialmente relativamente blanda, obtenible con alta templabilidad, y la maduración precipita intermetálicos finos Ni–Mo/Ti. La alta resistencia procede de esa dispersión; el exceso de maduración puede favorecer reversión a austenita y pérdida de propiedades. Deben elegirse producto y estado con propiedades y tenacidad verificadas, no convertir HRC o una energía Charpy directamente en KIC.\n\nEntre controles relevantes están calidad metalúrgica (impurezas/inclusiones y obtención de calidad), tratamiento uniforme de la sección y tensiones residuales para limitar distorsión, y evitar entrada de H durante decapados/recubrimientos. Los aceros de muy alta resistencia necesitan menos H para un fallo diferido, incluso impulsado por tensiones internas. Puede ser necesario un tratamiento de deshidrogenación conforme al proceso aplicable, pero los valores docentes no se dan como receta universal. Se justifica la selección con resistencia, tenacidad y riesgo ambiental, no con resistencia máxima aislada.",
        "conditions": "Familias y rutas del temario, geometría gruesa sin dimensión exacta; acabados con posibilidad de entrada de H; no cualificación industrial.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "7": 8
        },
        "essential": "Templabilidad frente a dureza; carburos frente a intermetálicos; tensiones/tenacidad; H.",
        "majorErrors": "Identificar maraging con alto C; eliminar riesgo H por ser inoxidable o fuerte; afirmar que Charpy equivale a KIC.",
        "minorOmissions": "No citar todos los grados comerciales ni temperaturas exactas; los parámetros no se solicitan.",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 2
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 4
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 9
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 10
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 11
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 20
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 21
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "Cr–Mo–V: templabilidad/sección (1), carburos secundarios y revenido (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "Maraging: matriz muy bajo C (1), intermetálicos y maduración (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "Control de uniformidad/tensiones/calidad y relación con distorsión o tenacidad: dos controles razonados de 1 punto."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "H: entrada y fallo diferido en alta resistencia (1), prevención/deshidrogenación y selección condicionada sin receta universal (1)."
          }
        ]
      },
      {
        "id": "piloto-01-d05",
        "originalId": "D05",
        "matrixId": "9.7 + 10.3; apoyos 9.3, 9.6, 10.1–10.2",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Daño ambiental y selección transversal",
        "type": "desarrollo",
        "prompt": "Una unión ligera contiene una pieza de acero de muy alta resistencia, acabada mediante un proceso que puede introducir H, y una pieza de Al. Permanece húmeda; el acero conserva tensiones residuales y tiene una pequeña grieta. Explica un mecanismo plausible de fallo diferido del acero y un riesgo ambiental para el Al. Propón dos medidas coherentes y justifica por qué elegir solo el mayor Rp/ρ no resuelve el diseño. No se pide un diagnóstico concluyente. Responde en 2–3 párrafos.",
        "difficulty": "Avanzada",
        "difficultyReason": "Integra fisura, fallo progresivo y compatibilidad; el caso aporta las condiciones para evitar diagnósticos por adivinación.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "H + tensión/grieta: posible fallo diferido del acero; par galvánico puede atacar Al si la polaridad del medio lo hace anódico; prevención/control de H y unión, con selección multivariable.",
        "explanation": "Es plausible un fallo diferido por H en el acero de alta resistencia: el proceso superficial puede suministrar H, su transporte a la zona de grieta y las tensiones locales/residuales favorecen nucleación y crecimiento antes de la rotura final. Una grieta concentra tensión y aumenta la exigencia de tenacidad; una pequeña deformación macroscópica final no demuestra ausencia de crecimiento previo. La susceptibilidad aumenta con resistencia en los casos discutidos. No basta el enunciado para confirmar H como única causa: se necesitarían historial, fractografía y condiciones reales.\n\nEn la unión húmeda, el electrolito y contacto eléctrico posibilitan corrosión galvánica; si Al es el miembro anódico en el estado superficial/medio pertinente, se puede acelerar su ataque. Deben considerarse películas, relación de áreas y protección, sin deducir la velocidad de una tabla de potenciales elementales. Entre medidas coherentes: controlar entrada de H y deshidrogenar según proceso cualificado, reducir tensiones residuales o elegir un estado menos susceptible compatible con resistencia/tenacidad, y aislar eléctricamente/sellar o proteger la unión frente a humedad y contacto. Cada medida debe señalar el mecanismo que limita.\n\nRp/ρ combina límite elástico y masa, pero no mide rigidez, tenacidad, propagación de grietas, fatiga ni compatibilidad electroquímica. El diseño ligero necesita esos criterios, la sección/proceso real y el ambiente. Puede ser preferible perder resistencia específica para ganar tolerancia al daño o reducir susceptibilidad ambiental. Sin geometría, cargas y datos de vida/tenacidad no se certifica la selección. La propiedad Rp tampoco sustituye a resistencia última Rm o a KIC.",
        "conditions": "Supuesto pedagógico: humedad/contacto y potencial entrada de H; polaridad galvánica condicionada por el medio; mecanismo plausible, no causalidad probada.",
        "verification": "Cotejada con el PDF original; revisada críticamente. Verificación documental del borrador, pendiente de aprobación docente; no validación experimental de dificultad.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "9": 5,
          "10": 3
        },
        "essential": "Daño progresivo por H, tensión/grieta, riesgo de unión húmeda; dos medidas causales; selección multivariable.",
        "majorErrors": "Afirmar H confirmado sin evidencia; negar efecto de tensiones residuales; elegir solo Rp/ρ; afirmar que cubrir cualquier miembro rompe siempre el par.",
        "minorOmissions": "Omitir fórmulas de K o índices derivados; no se pide cuantificar vida, concentración de H ni corriente galvánica.",
        "sources": [
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 20
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 21
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 1
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 2
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 2
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 6
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "T9: mecanismo plausible H, entrada/transporte/susceptibilidad (1), tracción residual/concentración de tensión y fallo diferido (1)."
          },
          {
            "id": "criterio-2",
            "max": 1,
            "label": "T9: distinguir daño previo/rotura final y carácter no concluyente del diagnóstico."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "T9: dos medidas coherentes con mecanismo, 1 cada una; al menos una sobre H/tensión/grieta y otra sobre ambiente/unión."
          },
          {
            "id": "criterio-4",
            "max": 1,
            "label": "T10: riesgo galvánico razonado y condicionado por polaridad/contacto/electrolito."
          },
          {
            "id": "criterio-5",
            "max": 1,
            "label": "T10: Rp/ρ y al menos dos criterios faltantes correctamente diferenciados."
          },
          {
            "id": "criterio-6",
            "max": 1,
            "label": "T10: compromiso de selección y límites de datos de diseño."
          }
        ]
      }
    ]
  },
  {
    "version": 1,
    "id": "piloto-02",
    "title": "Piloto 02 de Aleaciones Aeroespaciales · Metalurgia",
    "status": "piloto",
    "penalty": 0.33,
    "floorPolicy": "global",
    "referenceDistribution": "Piloto de estudio revisado documentalmente; no validado oficialmente por el profesor. Metalurgia de aleaciones: 42 preguntas, Al 45 %, Ti 25 %, resto 30 % de puntos. Los pesos, dificultad y mínimo global cero son orientativos, no una predicción ni una regla oficial del examen. Cambiar cantidades o pesos cambia también el reparto por contenidos.",
    "blocks": [
      {
        "type": "vf",
        "title": "Verdadero/falso",
        "count": 30,
        "weight": 30
      },
      {
        "type": "justificada",
        "title": "V/F con justificación",
        "count": 5,
        "weight": 10
      },
      {
        "type": "visual",
        "title": "Interpretación visual",
        "count": 2,
        "weight": 20
      },
      {
        "type": "desarrollo",
        "title": "Desarrollo",
        "count": 5,
        "weight": 40
      }
    ],
    "questions": [
      {
        "id": "piloto-02-vf01",
        "originalId": "P02-VF01",
        "matrixId": "4.1",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Aleantes en 6000",
        "type": "vf",
        "prompt": "En las aleaciones de la serie 6000, Mg y Si intervienen conjuntamente en el sistema de precipitación asociado a Mg2Si.",
        "learningObjective": "Identificar cooperación Mg-Si y precipitación.",
        "pilot01Relationship": "Amplía P01-VF08: función principal, frente al exceso de Mg.",
        "difficulty": "Básica",
        "difficultyReason": "Identifica los aleantes y su cooperación, sin requerir una comparación de tratamientos.",
        "cognitiveLevel": "Comprender",
        "model": "V",
        "explanation": "Los aleantes fundamentales son Mg y Si; el esquema docente presenta el sistema Al–Mg2Si y la descomposición de la solución sobresaturada mediante precipitación. La fase de equilibrio Mg2Si no debe confundirse con toda la dispersión transitoria que produce el endurecimiento. No se exige aquí una secuencia exhaustiva de fases de las 6000 comerciales, ausente del esquema simplificado.",
        "conditions": "Serie 6000 y sistema de precipitación del libro; no se afirma que el máximo endurecimiento lo cause únicamente Mg2Si de equilibrio.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 1
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf02",
        "originalId": "P02-VF02",
        "matrixId": "4.8",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Zr en Al-Li",
        "type": "vf",
        "prompt": "En las Al–Li descritas, los dispersoides Al3Zr favorecen la recristalización durante el procesado.",
        "learningObjective": "Distinguir dispersoides antirrecristalizantes.",
        "pilot01Relationship": "Mismo grupo que P01-VF11, pero objetivo nuevo: Zr/control de recristalización, sin densidad ni cronología.",
        "difficulty": "Básica",
        "difficultyReason": "Reconoce la función directa de un dispersoide.",
        "cognitiveLevel": "Comprender",
        "model": "F",
        "explanation": "El libro atribuye a Al3Zr un efecto antirrecristalizante y una mejora de homogeneidad de deformación, que favorece tenacidad. No se trata de promover la recristalización ni de eliminar por completo el problema de deslizamiento localizado de δ′. Esta es la única plaza autónoma de Al–Li y evalúa un mecanismo técnico.",
        "conditions": "Dispersoides Al3Zr del sistema descrito; no cualquier precipitado que contenga Zr.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 22
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf03",
        "originalId": "P02-VF03",
        "matrixId": "4.3",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Fases Al-Cu y Al-Cu-Mg",
        "type": "vf",
        "prompt": "La fase θ del sistema Al–Cu requiere Mg en su composición, igual que la fase S del sistema Al–Cu–Mg.",
        "learningObjective": "Diferenciar química de θ y S.",
        "pilot01Relationship": "Nuevo objetivo frente a P01-VF09, que solo pedía Mg y maduración natural.",
        "difficulty": "Básica",
        "difficultyReason": "Discrimina composiciones fundamentales de dos sistemas.",
        "cognitiveLevel": "Comprender",
        "model": "F",
        "explanation": "En el esquema original θ es CuAl2 (Al2Cu), mientras que S es CuMgAl2 (Al2CuMg). Mg forma parte de S, no de θ. Se distinguen además fases de transición y equilibrio; conocer la composición de la fase no identifica por sí solo cuál domina un estado comercial concreto.",
        "conditions": "Fases θ y S designadas en esa página; no se exige una identificación por micrografía óptica.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 7
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf04",
        "originalId": "P02-VF04",
        "matrixId": "4.5–4.6",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Cr/Zr y temple",
        "type": "vf",
        "prompt": "En las 7000 comparadas en el temario, sustituir el control antirrecristalizante basado en Cr por Zr permite una menor sensibilidad al enfriamiento tras solución.",
        "learningObjective": "Comparar control de recristalización y sensibilidad al temple.",
        "pilot01Relationship": "La solución P01-J03/D02 mencionaba Zr; aquí su comparación con Cr es obligatoria.",
        "difficulty": "Intermedia",
        "difficultyReason": "Relaciona función común y diferencia de respuesta al proceso.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "Ambos elementos forman dispersoides y controlan recristalización, pero Zr penaliza menos la sensibilidad al enfriamiento que Cr según la comparación de la fuente. En 7050/7010 esa elección contribuye al tratamiento de secciones gruesas. No significa que cualquier adición de Zr o cualquier espesor garantice propiedades uniformes.",
        "conditions": "Comparación de sistemas Cr/Zr del libro, no una sustitución aislada con todas las demás propiedades garantizadas iguales.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 18
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf05",
        "originalId": "P02-VF05",
        "matrixId": "4.1",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Exceso de Si",
        "type": "vf",
        "prompt": "El exceso de Si en las Al–Mg–Si del temario eleva resistencia y límite elástico a la vez que mejora su tenacidad.",
        "learningObjective": "Reconocer un compromiso de aleación.",
        "pilot01Relationship": "Variante de la composición 6000: P01-VF08 trataba Mg, no este compromiso de Si.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica un efecto favorable y un coste a propiedades distintas.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La fuente indica mayor resistencia y límite elástico con exceso de Si, pero disminución de tenacidad y cierto deterioro de corrosión. El efecto beneficioso de un aleante en una propiedad no implica que todas sigan la misma tendencia. Se evita atribuir el efecto del exceso de Mg al exceso de Si: son comparaciones diferentes.",
        "conditions": "Exceso respecto a la proporción del sistema Mg2Si, en el contexto composicional tratado.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf06",
        "originalId": "P02-VF06",
        "matrixId": "4.3",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Coexistencia de precipitación en 2000",
        "type": "vf",
        "prompt": "En una aleación comercial Al–Cu–Mg, reconocer procesos de precipitación del sistema S no basta para excluir otros procesos de endurecimiento basados en Cu.",
        "learningObjective": "Separar familia comercial y mecanismo dominante.",
        "pilot01Relationship": "Nuevo: coexistencia y límites de inferencia, no el hecho aislado de P01-VF09.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue esquemas de referencia de una inferencia exclusiva sobre una aleación real.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "V",
        "explanation": "El esquema distingue Al–Cu y Al–Cu–Mg, pero advierte que en las aleaciones comerciales pueden coexistir varios procesos de precipitación con contribuciones variables. La presencia de Mg o de fases del sistema S no convierte el material en un sistema binario puro ni excluye toda contribución adicional de Cu. Es necesario composición y estado para afirmar un mecanismo dominante; el enunciado no afirma coexistencia en cualquier composición.",
        "conditions": "Aleación comercial y afirmación de no exclusión; no se asegura una fracción de θ/S ni una secuencia única.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 7
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf07",
        "originalId": "P02-VF07",
        "matrixId": "4.5",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Zn/Mg y rutas de precipitación",
        "type": "vf",
        "prompt": "En el esquema docente de 7000, mantener igual Zn+Mg basta para conservar la rama η′→η aunque Zn/Mg cambie de 5 a 1,8.",
        "learningObjective": "Aplicar condiciones de un esquema composicional.",
        "pilot01Relationship": "Nuevo: P01 no obligaba a relacionar Zn/Mg con η/T.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue contenido combinado de proporción y aplica dos condiciones de fase: igualdad de una variable no asegura igual mecanismo.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "Una misma suma de aleantes no fija su proporción. El esquema de la p. 12 sitúa 3<Zn/Mg<7 en la rama η′/η, con MgZn2, y Zn/Mg<2,5 en la rama T′/T. Las relaciones hipotéticas 5 y 1,8 caen en ramas diferentes aunque se conserve la suma. La suma tiene interés para resistencia y sensibilidad al temple (p. 13), pero no sustituye la relación composicional para esa clasificación. No se extrapola a todos los mecanismos de una aleación comercial ni a cocientes cercanos a límites no cubiertos.",
        "conditions": "Zn/Mg interpretada como en el esquema docente; 1,8 y 5 son casos hipotéticos de clasificación, no datos experimentales inventados.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 12
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf08",
        "originalId": "P02-VF08",
        "matrixId": "4.5",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Zn+Mg y respuesta al temple",
        "type": "vf",
        "prompt": "En la comparación de las Al–Zn–Mg del temario, aumentar Zn+Mg favorece características mecánicas elevadas, pero aumenta también la sensibilidad a la velocidad de enfriamiento tras solución.",
        "learningObjective": "Relacionar composición, resistencia y sensibilidad.",
        "pilot01Relationship": "Tema compartido con P01-VF02, pero aquí la variable es la composición Zn+Mg, no superficie/núcleo.",
        "difficulty": "Intermedia",
        "difficultyReason": "Combina capacidad de endurecimiento y un requisito de procesado.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "Zn y Mg forman el sistema de precipitados endurecedores; el libro vincula su mayor contenido combinado con mayor resistencia y sensibilidad al temple. El beneficio depende de retener soluto y madurar adecuadamente, por lo que una composición potencialmente resistente puede ser más difícil de tratar en sección gruesa. No se afirma una mejora monotónica para contenidos ilimitados.",
        "conditions": "Intervalos y comparación de composición de los apuntes, con tratamiento apropiado; no fuera de solubilidad o estabilidad.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "4": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf09",
        "originalId": "P02-VF09",
        "matrixId": "3.2",
        "topic": "Tema 3",
        "topicNumber": 3,
        "subtopic": "Dispersoides y soluto retenido",
        "type": "vf",
        "prompt": "Los dispersoides de Mn/Cr/Zr pueden homogeneizar la deformación y, simultáneamente, facilitar la descomposición de la solución sobresaturada durante el enfriamiento.",
        "learningObjective": "Evaluar dos efectos de las mismas partículas.",
        "pilot01Relationship": "Repetición ampliada de P01-VF06: ahora se exige el compromiso que aquella explicación solo mencionaba.",
        "difficulty": "Avanzada",
        "difficultyReason": "Requiere reconocer un beneficio y una penalización cinética sin tratarlos como contradictorios.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "V",
        "explanation": "La fuente atribuye beneficios antirrecristalizantes y de homogeneización de deformación a los dispersoides, pero también favorecimiento de la descomposición de la solución y necesidad de enfriar más deprisa para retener soluto. Los dos efectos actúan en etapas y mecanismos distintos. No se confunden estos dispersoides con la dispersión fina formada durante maduración ni se supone que toda fase particular de Mn/Cr/Zr tenga igual efecto cuantitativo.",
        "conditions": "Dispersoides y sistemas descritos; comparación cualitativa, no tasa crítica universal.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "3": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 3
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf10",
        "originalId": "P02-VF10",
        "matrixId": "1.7",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "Fusión incipiente y solución",
        "type": "vf",
        "prompt": "Si una pieza de Al ha sufrido fusión incipiente en bordes durante solución, prolongar la permanencia a esa temperatura convierte ese daño en una homogeneización útil.",
        "learningObjective": "Distinguir disolución incompleta y daño por quemado.",
        "pilot01Relationship": "P01-D01 lo citaba como precaución; nueva comparación directa de causas y recuperabilidad.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica el objetivo de solución a dos defectos de proceso distintos.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "El quemado es inicio de fusión, no falta de tiempo para difundir. Daña bordes y puede reducir tenacidad, favorecer corrosión y dejar grietas; una permanencia mayor no recupera ese estado como una solución correcta. Debe distinguirse de una permanencia insuficiente a temperatura apropiada, que sí puede limitar disolución y homogeneización.",
        "conditions": "Se ha producido fusión incipiente, no únicamente gradiente composicional reversible.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "1": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 14
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 16
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf11",
        "originalId": "P02-VF11",
        "matrixId": "1.4",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "Orden de deformación en T8/T9",
        "type": "vf",
        "prompt": "En T8 la deformación en frío se sitúa entre solución y maduración artificial; en T9, después de la maduración artificial.",
        "learningObjective": "Reconstruir secuencias de estado.",
        "pilot01Relationship": "Nuevo contraste obligatorio; P01-D01 era ruta general y alivio de tensiones, no T8/T9.",
        "difficulty": "Intermedia",
        "difficultyReason": "Interpreta dos historias de procesado con tres etapas.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La tabla de estados define T8 como solución, acritud y maduración artificial; T9 como solución, maduración artificial y acritud. La historia de dislocaciones durante precipitación es distinta de añadir acritud a un material ya madurado. La afirmación evalúa el orden documentado, sin suponer igualdad de propiedades ni exigir una fase no verificada.",
        "conditions": "Secuencias básicas T8/T9 de la tabla docente, sin variantes de sufijos industriales.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "1": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 19
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf12",
        "originalId": "P02-VF12",
        "matrixId": "2.2–2.3",
        "topic": "Tema 2",
        "topicNumber": 2,
        "subtopic": "Borde de grano y corrosión",
        "type": "vf",
        "prompt": "Eliminar las tensiones residuales de tracción elimina también la causa electroquímica de corrosión intergranular de una estructura con precipitación anómala en bordes.",
        "learningObjective": "Separar heterogeneidad electroquímica y condición mecánica de SCC.",
        "pilot01Relationship": "Amplía P01-VF04: no se repite «SCC sin carga exterior», se separan las causas de ataque y agrietamiento.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue condiciones de dos mecanismos que pueden interactuar, a partir del origen microestructural.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "Una diferencia de potencial entre borde y matriz debida a precipitación local no desaparece solo por relajar tracción. La SCC incorpora una condición mecánica, mientras que la corrosión intergranular puede originarse en la heterogeneidad electroquímica con ambiente adecuado. Relajar tensiones puede ayudar frente a SCC, pero no sustituye el control de precipitación, quemado o temple que condiciona el ataque intergranular.",
        "conditions": "Estructura anómala y ambiente que permite ataque; no se identifica todo ataque intergranular como SCC.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "2": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 4
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf13",
        "originalId": "P02-VF13",
        "matrixId": "5.7",
        "topic": "Tema 5",
        "topicNumber": 5,
        "subtopic": "Tratamiento de Al-Si-Mg",
        "type": "vf",
        "prompt": "En Al–Si–Mg de moldeo, mejorar resistencia mediante precipitación y mejorar ductilidad mediante globulización del Si son efectos microestructurales distintos del tratamiento.",
        "learningObjective": "Separar dos cambios microestructurales de una misma ruta.",
        "pilot01Relationship": "Extensión de P01-VF13/V01: se evalúa el papel de Mg y dos efectos de la ruta, no Na/P.",
        "difficulty": "Avanzada",
        "difficultyReason": "Relaciona fases distintas, etapas y propiedades distintas en un producto de moldeo.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "V",
        "explanation": "La adición de Mg permite endurecimiento por precipitación asociado a Mg2Si. La solución prolongada también modifica la morfología del Si, globulizando sus placas y favoreciendo ductilidad y mecanizado. Los dos efectos no son la misma transformación ni la modificación eutéctica por adición al líquido. Su coexistencia no permite deducir un valor de propiedad sin controlar aleación, calidad y estado.",
        "conditions": "Familias Al–Si–Mg tratables del libro, ruta adecuada y sin inferir mejoras cuantitativas universales.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "5": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 5.pdf",
            "pdfPage": 24
          },
          {
            "document": "Tema 5.pdf",
            "pdfPage": 25
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf14",
        "originalId": "P02-VF14",
        "matrixId": "6.2",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Sn/Zr y neutros",
        "type": "vf",
        "prompt": "Sn y Zr se presentan como elementos neutros en Ti: contribuyen al endurecimiento por solución sin desplazar de manera importante el β-transus en la clasificación docente.",
        "learningObjective": "Distinguir estabilización de fase y endurecimiento por solución.",
        "pilot01Relationship": "Nuevo objetivo frente a P01-VF14, centrado únicamente en Al alfágeno.",
        "difficulty": "Básica",
        "difficultyReason": "Identifica una función básica y el significado de «neutro».",
        "cognitiveLevel": "Comprender",
        "model": "V",
        "explanation": "La fuente clasifica Sn/Zr como neutros, disueltos en α y β, con pequeña influencia sobre el transus y contribución al endurecimiento por solución. Neutralidad respecto al equilibrio de fases no significa ausencia de efecto mecánico. Se evita la afirmación de transus exactamente invariable para cualquier composición comercial.",
        "conditions": "Clasificación y tendencia docente; no un transus numérico independiente de todos los demás aleantes.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 13
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf15",
        "originalId": "P02-VF15",
        "matrixId": "6.4",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Dúplex y α primaria",
        "type": "vf",
        "prompt": "En el recocido dúplex de Ti descrito, la α primaria y las placas de α del volumen β transformado se originan ambas durante el enfriamiento posterior.",
        "learningObjective": "Distinguir fase heredada y fase formada al enfriar.",
        "pilot01Relationship": "Repetición contextual de P01-J04; se identifica porque comparte α heredada, ahora aplicada al recocido dúplex.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica la historia de fases al origen de dos componentes de la estructura bimodal.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La α primaria ya existía en el campo α+β y no desapareció durante el primer calentamiento. Las placas de α aparecen al transformar la β durante el enfriamiento controlado. La microestructura bimodal reúne componentes con historias distintas; una morfología de fase no permite llamar primaria a toda α final.",
        "conditions": "Recocido dúplex en α+β con α primaria; no tratamiento íntegramente por encima del transus.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 22
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 33
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf16",
        "originalId": "P02-VF16",
        "matrixId": "6.4–6.5",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Dúplex frente a recocido β",
        "type": "vf",
        "prompt": "A igual velocidad de enfriamiento en la comparación docente, el recocido dúplex ofrece mejor iniciación de fatiga que el recocido β, pero peor tenacidad y resistencia al crecimiento de grietas.",
        "learningObjective": "Comparar iniciación, propagación y propiedades bajo condición común.",
        "pilot01Relationship": "Amplía el tema de P01-V02: nueva comparación dúplex/β, no laminar/equiaxial ni ranking entre curvas de fluencia distintas.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue etapas de fatiga y ductilidad/tenacidad al comparar morfologías y rutas.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "V",
        "explanation": "El libro compara a la misma velocidad y atribuye al dúplex mayor límite elástico, plasticidad e iniciación de fatiga, pero peor tenacidad, crecimiento de grieta y fluencia que al β recocido de placas grandes. La mayor plasticidad no implica mejor tenacidad. No se deduce esa diferencia para aleaciones o ensayos arbitrarios con condiciones no comparables.",
        "conditions": "Comparación de rutas y velocidad común especificada en los apuntes; mismo contexto material y ensayo para cada propiedad.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 23
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf17",
        "originalId": "P02-VF17",
        "matrixId": "6.3; 6.6",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Ms/Mf y productos de temple",
        "type": "vf",
        "prompt": "Si una aleación Ti se enfría rápidamente desde β y cumple Ms > Tambiente > Mf, el volumen β no puede formar martensita antes de llegar a ambiente.",
        "learningObjective": "Aplicar intervalo de transformación martensítica.",
        "pilot01Relationship": "Relacionado con P01-VF15/VF16, pero el razonamiento obligatorio es ahora la posición entre Ms y Mf.",
        "difficulty": "Avanzada",
        "difficultyReason": "Combina estado inicial, temperatura alcanzada y dos umbrales para inferir productos.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "Al atravesar Ms se inicia la transformación martensítica; al no alcanzar Mf no se completa por esa vía. Con el enfriamiento supuesto se espera martensita y β retenida, no ausencia de martensita. Se ha partido de β, de modo que no se agrega α primaria subtransus a este supuesto. Ms/Mf se dan como relaciones hipotéticas, no temperaturas experimentales nuevas.",
        "conditions": "Inicio en β, enfriamiento que evite transformación difusiva predominante y desigualdad indicada; no estructura de equilibrio.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 25
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 26
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf18",
        "originalId": "P02-VF18",
        "matrixId": "6.6",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "ω y compromiso dureza-tenacidad",
        "type": "vf",
        "prompt": "La aparición de ω coherente durante maduración de β metaestable de Ti se describe como una mejora simultánea de dureza y tenacidad.",
        "learningObjective": "Relacionar coherencia y efectos mecánicos de una fase.",
        "pilot01Relationship": "Nuevo objetivo obligatorio: P01-VF16 no exigía identificar ni evaluar ω.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica el compromiso de una fase concreta, sin una fórmula ilegible de equivalentes.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "La fase ω puede endurecer, pero la fuente le atribuye una importante pérdida de tenacidad y en general la considera indeseable. Su formación depende de composición y temperatura; el libro plantea madurar por encima de su solvus para favorecer la evolución hacia α en β. Coherencia no equivale a mejora simultánea de todas las propiedades.",
        "conditions": "Condiciones de maduración que permitan ω en β metaestable con cantidad baja/media de betágenos según la fuente; no toda aleación STA.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "6": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 27
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf19",
        "originalId": "P02-VF19",
        "matrixId": "7.3",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Ni/Co y Ms",
        "type": "vf",
        "prompt": "En los aceros Ni–Co de alta aleación del temario, Co compensa parte del descenso de Ms asociado al alto contenido de Ni.",
        "learningObjective": "Identificar efectos contrapuestos de aleantes de acero.",
        "pilot01Relationship": "Nuevo respecto a P01-VF20: se evalúan Ni/Co, no dureza frente a templabilidad.",
        "difficulty": "Básica",
        "difficultyReason": "Identifica funciones básicas de dos elementos.",
        "cognitiveLevel": "Comprender",
        "model": "V",
        "explanation": "La fuente señala que Ni favorece tenacidad pero baja Ms, y que Co la sube y compensa ese efecto. No se pretende obtener un Ms numérico por suma de porcentajes. El contenido de otros aleantes y el estado de austenización siguen siendo relevantes.",
        "conditions": "Familias Ni–Co descritas; relación cualitativa entre aleantes, no eliminación garantizada de austenita retenida.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "7": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 8
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf20",
        "originalId": "P02-VF20",
        "matrixId": "7.3–7.4",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Ni-Co frente a maraging",
        "type": "vf",
        "prompt": "Los aceros Ni–Co tipo Aermet del temario endurecen en revenido principalmente por los mismos intermetálicos Ni–Mo/Ti que los maraging, porque ambos contienen Ni y Co.",
        "learningObjective": "Diferenciar familias con aleantes nominales compartidos.",
        "pilot01Relationship": "Extensión comparativa de P01-J05/D04: el contraste nuevo es Ni–Co frente a maraging, no Cr–Mo–V frente a maraging.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica diferencias de composición a dos mecanismos de endurecimiento.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "En los Ni–Co de esa sección el revenido produce precipitación de carburos y dureza secundaria asociada a Cr/Mo, favorecida por Co. En maraging de muy bajo C domina maduración de intermetálicos. Compartir Ni/Co no identifica el mismo mecanismo; la composición completa, especialmente C y formadores de fases, y la ruta deben distinguirse.",
        "conditions": "Aceros de las dos secciones de la fuente; no se agrupan todos los materiales con Ni/Co bajo una sola familia.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "7": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 8
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 9
          },
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 10
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf21",
        "originalId": "P02-VF21",
        "matrixId": "7.3",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Si en 300M",
        "type": "vf",
        "prompt": "El aumento de Si descrito en ciertos aceros de baja aleación desplaza a mayor temperatura el intervalo de fragilidad de martensita revenida y permite un revenido con mayor relajación de tensiones.",
        "learningObjective": "Enlazar un aleante con ventana de revenido y tensiones.",
        "pilot01Relationship": "Nuevo: Si/ventana de revenido, frente a carburos secundarios Cr–Mo–V de P01-VF21.",
        "difficulty": "Avanzada",
        "difficultyReason": "Encadena composición, ventana de fragilidad y relajación/tenacidad, distinguiéndolo de otras familias.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "V",
        "explanation": "La fuente utiliza ese desplazamiento del intervalo frágil para justificar un revenido alrededor de 300 °C, con mejora de tenacidad y relajación respecto a la ruta baja considerada. El efecto no equivale a que toda temperatura superior mejore propiedades ni a endurecimiento secundario de cualquier acero con Si. Se evalúa la función metalúrgica y su consecuencia de proceso, no una receta industrial.",
        "conditions": "Composiciones de baja aleación con Si aumentado descritas, ventana de revenido correspondiente y proceso controlado.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "7": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 6
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf22",
        "originalId": "P02-VF22",
        "matrixId": "7.1",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "Temperatura final y martensita",
        "type": "vf",
        "prompt": "Si Ms de un acero está por debajo de ambiente, aumentar la velocidad de enfriamiento hasta ambiente permite completar su transformación martensítica sin enfriar más.",
        "learningObjective": "Separar velocidad de temple y umbrales de transformación.",
        "pilot01Relationship": "Nuevo contraste en acero; comparte Ms/Mf con P02-VF17 de Ti para comprobar transferencia con condiciones, no repetir una misma solución.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue condición cinética de evitar difusión y condición térmica de transformación.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "Un enfriamiento rápido puede evitar transformaciones difusivas, pero no sustituye atravesar Ms y alcanzar las temperaturas necesarias para la transformación martensítica. Si Ms está por debajo del final a ambiente, el razonamiento de martensita completa es inválido; para transformar austenita retenida puede ser preciso enfriar por debajo de ambiente según composición y Mf. La templabilidad y la velocidad no son un modo de cambiar el umbral dado.",
        "conditions": "Ms fijada por composición/estado y temperatura final ambiente, sin cambiar austenización o composición; no se exige martensita completa con cualquier enfriamiento subcero.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "7": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf23",
        "originalId": "P02-VF23",
        "matrixId": "8.4",
        "topic": "Tema 8",
        "topicNumber": 8,
        "subtopic": "Zr y afino Mg-Al",
        "type": "vf",
        "prompt": "El Zr empleado para afinar Mg sin Al mantiene esa función de forma equivalente al introducirlo en las Mg–Al, porque no reacciona con Al.",
        "learningObjective": "Identificar incompatibilidad entre aleantes de afino.",
        "pilot01Relationship": "Nuevo: P01-VF23 era textura; aquí nucleación y compatibilidad Zr/Al.",
        "difficulty": "Básica",
        "difficultyReason": "Reconoce una incompatibilidad composicional fundamental.",
        "cognitiveLevel": "Comprender",
        "model": "F",
        "explanation": "La fuente indica que Zr afina aleaciones sin Al, pero que Al y Zr reaccionan formando intermetálicos y por ello no se usa de la misma forma en aleaciones con Al. No se evalúa una dosis ni se propone un procedimiento de fundición. Es una condición composicional del mecanismo de afino.",
        "conditions": "Afino de grano del metal líquido y familias consideradas por el libro.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "8": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 7.pdf",
            "pdfPage": 3
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf24",
        "originalId": "P02-VF24",
        "matrixId": "8.3",
        "topic": "Tema 8",
        "topicNumber": 8,
        "subtopic": "Tierras raras en Mg-Zn",
        "type": "vf",
        "prompt": "En Mg–Zn, una adición suficiente de tierras raras puede favorecer la fluencia aunque deteriore algo la resistencia a temperatura ambiente en la comparación del libro.",
        "learningObjective": "Reconocer compromiso ambiente/caliente al cambiar composición.",
        "pilot01Relationship": "Nuevo objetivo obligatorio frente a P01-VF25, centrado en débil precipitación Mg–Al.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica un compromiso de aleación entre dos regímenes de servicio.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "La fuente atribuye a TR suficiente una mejora de fluencia, junto a un posible coste de resistencia a ambiente, y cambios de colabilidad/agrietabilidad. La estabilidad de fases para servicio caliente importa de forma distinta a la resistencia inicial. No se usa «suficiente» como un porcentaje inventado ni se asigna a cualquier adición esa mejora.",
        "conditions": "Composición y adición suficiente de la familia indicada; comparación cualitativa dentro del material docente.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "8": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 7.pdf",
            "pdfPage": 15
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf25",
        "originalId": "P02-VF25",
        "matrixId": "8.4",
        "topic": "Tema 8",
        "topicNumber": 8,
        "subtopic": "Solución de pieza Mg segregada",
        "type": "vf",
        "prompt": "En una Mg–Al–Zn colada con eutécticas de bajo punto de fusión, un temple más rápido no sustituye el calentamiento lento o escalonado que busca redisolverlas antes del quemado.",
        "learningObjective": "Separar peligros de calentamiento y velocidad de enfriamiento.",
        "pilot01Relationship": "Nuevo tratamiento de Mg; comparte el principio de quemado con P02-VF10 en Al, con origen por segregación y control de rampa explícitos.",
        "difficulty": "Avanzada",
        "difficultyReason": "Relaciona heterogeneidad de composición, disolución y daño en etapas distintas del ciclo.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "V",
        "explanation": "El control del calentamiento permite redisolver eutécticas locales antes de alcanzar su fusión; el riesgo procede de segregación y evolución durante subida de temperatura. La rapidez del enfriamiento posterior afecta otras transformaciones, pero no repara fusión incipiente ya ocurrida. La fuente prescribe cautela para ciertas Mg–Al–Zn y no una velocidad universal de horno.",
        "conditions": "Pieza colada susceptible, eutécticas presentes y ruta de solución indicada; no toda aleación Mg precisa el mismo escalonamiento.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "8": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 7.pdf",
            "pdfPage": 10
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf26",
        "originalId": "P02-VF26",
        "matrixId": "9.2",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Nucleación de microvacíos",
        "type": "vf",
        "prompt": "Un microvacío de fractura dúctil puede nuclear por descohesión de la entrecara matriz–partícula sin que se rompa la propia partícula.",
        "learningObjective": "Reconocer dos vías de nucleación en matriz-partícula.",
        "pilot01Relationship": "Nuevo: P01-VF26 preguntaba plasticidad local/fragilidad, sin partículas ni microvacíos.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica mecanismo local y distingue rotura de interfaz de rotura del constituyente.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "El apilamiento de dislocaciones y las tensiones alrededor de una partícula no deformable pueden producir rotura de la partícula o descohesión de su interfaz. Son dos vías alternativas de crear el microvacío. Después pueden crecer y coalescer con la deformación; una partícula intacta no excluye nucleación alrededor de ella.",
        "conditions": "Fractura dúctil por microvacíos y partícula no deformable de la descripción; no se asigna a toda fractura.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "9": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 9
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf27",
        "originalId": "P02-VF27",
        "matrixId": "9.4",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Grano y propagación frágil",
        "type": "vf",
        "prompt": "En el mecanismo frágil descrito, afinar el grano favorece microgrietas de mayor tamaño y reduce la tensión necesaria para propagarlas.",
        "learningObjective": "Relacionar grano, microgrieta y tensión de propagación.",
        "pilot01Relationship": "Nuevo régimen respecto a P01-VF28, que trataba grano y cavitación por fluencia; no simple inversión de esa respuesta.",
        "difficulty": "Intermedia",
        "difficultyReason": "Enlaza una escala microestructural con tamaño del defecto y propagación.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "F",
        "explanation": "El texto vincula grano menor con microgrietas menores y mayor tensión necesaria para su propagación, además de elevar el límite elástico en el contexto BCC considerado. La afirmación invierte ambas relaciones. No se extrapola esta ventaja a todos los mecanismos de fluencia ni se utilizan las etiquetas locales de modos I/II/III.",
        "conditions": "Mecanismo frágil y comparación de grano de esa sección, con composición/condiciones comparables.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "9": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 6
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf28",
        "originalId": "P02-VF28",
        "matrixId": "9.2",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Fracción de partículas y ductilidad",
        "type": "vf",
        "prompt": "Si aumenta la cantidad de segundas fases no deformables en el modelo de microvacíos del temario, la mayor nucleación de cavidades retrasa su coalescencia y aumenta la plasticidad a rotura.",
        "learningObjective": "Seguir nucleación-crecimiento-coalescencia al cambiar microestructura.",
        "pilot01Relationship": "Nuevo enunciado; complementa P02-VF26 con variable de cantidad y etapa de coalescencia.",
        "difficulty": "Avanzada",
        "difficultyReason": "Distingue partículas dañinas de precipitación útil y sigue la secuencia causal hasta rotura.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "La fuente indica más nucleación al aumentar la cantidad de segundas fases, con coalescencia más temprana y menor plasticidad. Un mayor tamaño de partículas también adelanta nucleación. Se trata de la tendencia del modelo con los demás factores comparables, no de deducir plasticidad solo de una fracción volumétrica en cualquier material endurecido.",
        "conditions": "Segundas fases no deformables y fractura por microvacíos; no nanos precipitados endurecedores como equivalentes automáticos.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "9": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 9
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-vf29",
        "originalId": "P02-VF29",
        "matrixId": "10.2",
        "topic": "Tema 10",
        "topicNumber": 10,
        "subtopic": "Conductividad y soldadura de Al",
        "type": "vf",
        "prompt": "La elevada conductividad térmica del Al dificulta mantener un calentamiento localizado para soldadura, porque difunde calor hacia el resto de la pieza.",
        "learningObjective": "Aplicar propiedad térmica a procesado real.",
        "pilot01Relationship": "Objetivo nuevo frente a P01-VF30: procesado térmico concreto, sin el distractor calor–corrosión.",
        "difficulty": "Intermedia",
        "difficultyReason": "Aplica una propiedad material a una etapa de fabricación, sin índices de selección generales.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "El libro presenta la difusión del calor en Al como ventaja para igualar temperaturas y como dificultad para calentar solo una zona en soldadura. En Ti, su menor conductividad favorece calentamiento localizado y gradientes en mecanizado/rozamiento. No se afirma que la conductividad sola determine la soldabilidad ni se usan datos mezclados de elementos y aleaciones.",
        "conditions": "Situación de calentamiento localizado y contraste cualitativo Al/Ti de la fuente.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "10": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 10.pdf",
            "pdfPage": 6
          }
        ],
        "correct": true
      },
      {
        "id": "piloto-02-vf30",
        "originalId": "P02-VF30",
        "matrixId": "10.2",
        "topic": "Tema 10",
        "topicNumber": 10,
        "subtopic": "Estado superficial de Ti y unión",
        "type": "vf",
        "prompt": "Para una unión húmeda Al–Ti con Ti pasivado, la reactividad del Ti activo basta para justificar tratarlo como ánodo de sacrificio del Al.",
        "learningObjective": "Distinguir metal activo y superficie pasivada en compatibilidad.",
        "pilot01Relationship": "Relacionado con el par de P01-VF30, pero aquí se evalúa pasivación frente a reactividad, no conductividad térmica.",
        "difficulty": "Avanzada",
        "difficultyReason": "Combina química superficial y condiciones de la unión, separando propiedades del metal activo de su respuesta en servicio.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "La película pasivante cambia el comportamiento electroquímico del Ti; el libro describe que el Ti recubierto de óxido puede acelerar corrosión de metales en contacto. No se puede asignar una función sacrificial a partir de la reactividad del elemento activo ignorando la superficie y el medio. Deben comprobarse polaridad efectiva, conexión eléctrica, electrolito y relación de áreas, no extrapolar una tabla de potenciales activos.",
        "conditions": "Ti pasivado, conexión eléctrica y electrolito común; no se asegura una corriente numérica ni el mismo estado superficial en todo medio.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 1,
        "topicPoints": {
          "10": 1
        },
        "essential": "",
        "majorErrors": "",
        "minorOmissions": "",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false
      },
      {
        "id": "piloto-02-j01",
        "originalId": "P02-J01",
        "matrixId": "3.4 + 4.1",
        "topic": "Tema 3",
        "topicNumber": 3,
        "subtopic": "5000 frente a 6000",
        "type": "justificada",
        "prompt": "V/F y justifica: «Como las series 5000 y 6000 contienen Mg, su resistencia se obtiene principalmente mediante una maduración artificial equivalente». Distingue soluto, precipitación útil y un riesgo térmico de 5000.",
        "learningObjective": "Comparar dos mecanismos de resistencia con Mg.",
        "pilot01Relationship": "Integra objetivos separados P01-VF07/VF08; nueva comparación exigida, no cambio de redacción de una sola pregunta.",
        "difficulty": "Avanzada",
        "difficultyReason": "Relaciona composición, mecanismo de resistencia y consecuencia ambiental en dos familias.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "En 5000 el Mg disuelto endurece por solución y la acritud aumenta resistencia; no se obtiene la respuesta útil a maduración de 6000. En 6000 Mg y Si participan en un sistema de precipitación endurecedor tras solución y enfriamiento apropiados. Compartir Mg no identifica la misma química de fases ni respuesta: Si es central. En una 5000 susceptible, Mg2Al3 en borde durante una exposición adecuada puede sensibilizar a corrosión, no equivaler a una dispersión útil. No se afirma que ningún calentamiento tenga efecto en 5000 ni que toda composición tenga igual susceptibilidad.",
        "conditions": "Familias y mecanismos predominantes; distinguir H3, sensibilización y maduración útil.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "3": 2
        },
        "essential": "Solución sólida, acritud, función del Si y precipitación útil/perjudicial.",
        "majorErrors": "Inferir igual respuesta por compartir Mg; atribuir mejor corrosión a Mg2Al3; afirmar imposibilidad de soluto Mg a ambiente.",
        "minorOmissions": "No dar umbrales exactos ni fases transitorias no verificadas de 6000.",
        "sources": [
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 6
          },
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 8
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 1
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 2
          }
        ],
        "correct": false,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto F."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "5000: Mg en solución y acritud como mecanismos principales."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "6000: Mg/Si y precipitación útil tras ruta adecuada."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Sensibilización condicionada de 5000 por precipitación en borde; distinguirla de endurecimiento 6000."
          }
        ]
      },
      {
        "id": "piloto-02-j02",
        "originalId": "P02-J02",
        "matrixId": "1.5 + 3.2",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "Escala de precipitados y observación",
        "type": "justificada",
        "prompt": "V/F y justifica: «Que una micrografía óptica de Al tratable apenas cambie tras maduración no demuestra que la resistencia permanezca igual». Explica qué partículas pueden seguir visibles y qué cambio endurecedor puede quedar fuera de esa observación.",
        "learningObjective": "Distinguir evidencia óptica y endurecimiento fino.",
        "pilot01Relationship": "Partículas compartidas con P01-VF06; nuevo objetivo obligatorio de observación/escala.",
        "difficulty": "Intermedia",
        "difficultyReason": "Relaciona escala, técnica y mecanismo, sin inferir resistencia de una imagen insuficiente.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "Los constituyentes gruesos de solidificación pueden seguir visibles ópticamente; esa observación no muestra necesariamente la dispersión fina responsable de maduración. Los apuntes distinguen precipitados mucho menores y zonas GP/fases de transición que interactúan con dislocaciones. Su formación y evolución pueden cambiar resistencia sin un cambio reconocible en la óptica utilizada. La imagen tampoco demuestra que el endurecimiento haya ocurrido: harían falta propiedades medidas y/o técnica de resolución apropiada. Se distingue ausencia de evidencia visible de ausencia de precipitación.",
        "conditions": "Técnica óptica y resolución limitadas; no afirmar que todo precipitado es invisible con toda técnica.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "1": 2
        },
        "essential": "Escala de partículas, precipitación y alcance de la técnica.",
        "majorErrors": "Identificar GP por óptica sin resolución; deducir una resistencia numérica de la imagen.",
        "minorOmissions": "No dar instrumento o tamaños exactos si explica la diferencia de escala.",
        "sources": [
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 4
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 11
          }
        ],
        "correct": true,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto V."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Constituyentes gruesos frente a partículas finas de tratamiento."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Dispersión fina/zona GP o transición y obstáculo a dislocaciones."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Límite de la inferencia óptica y evidencia adicional coherente."
          }
        ]
      },
      {
        "id": "piloto-02-j03",
        "originalId": "P02-J03",
        "matrixId": "1.8 + 4.6",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Pico y sobremaduración de 7000",
        "type": "justificada",
        "prompt": "V/F y justifica: «Si una 7000 pierde resistencia al pasar del pico a un estado sobremadurado, eso indica que su dispersión de precipitados ha desaparecido». Relaciona evolución microestructural, eficacia endurecedora y el compromiso frente a SCC del temario.",
        "learningObjective": "Explicar pérdida de resistencia sin desaparición de precipitados.",
        "pilot01Relationship": "Repetición deliberada del compromiso P01-J03, ahora con mecanismo de partículas obligatorio y sin apartado de espesor.",
        "difficulty": "Avanzada",
        "difficultyReason": "Conecta evolución y eficacia de partículas con el compromiso ambiental.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "La sobresaturación se descompone formando y evolucionando precipitados; el pico exige tipo, tamaño y distribución eficaces. Sobremadurar no equivale a una matriz sin partículas: su evolución hacia partículas más desarrolladas/estables puede reducir eficacia como obstáculos frente al pico. El esquema general conduce a precipitados estables e incoherentes, sin asignar a toda 7000 una fase por una curva de resistencia. En las 7000 discutidas T7 mejora SCC/exfoliación con coste de resistencia frente a T6. No se afirma que esa mejora requiera desaparición de precipitados ni una geometría exacta de borde no documentada.",
        "conditions": "Pico/sobremaduración de 7000 según el libro; no inmunidad ni cualquier T7 de toda familia.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "4": 2
        },
        "essential": "Precipitación que evoluciona, eficacia y compromiso de 7000.",
        "majorErrors": "Eliminar todos los precipitados como explicación; T7 como máxima resistencia e inmunidad.",
        "minorOmissions": "No secuencia completa η/T ni geometría exacta de borde o SCC cuantitativa.",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 11
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 16
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 17
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          }
        ],
        "correct": false,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto F."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Persistencia/evolución de tamaño, distribución o estabilidad de partículas."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Pico de eficacia de obstáculos y menor resistencia tras sobremaduración."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Mejor SCC y coste de resistencia en 7000; condición de estado."
          }
        ]
      },
      {
        "id": "piloto-02-j04",
        "originalId": "P02-J04",
        "matrixId": "6.2 + 6.8",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Aleantes de casi α",
        "type": "justificada",
        "prompt": "V/F y justifica: «En las casi α de servicio caliente descritas, la contribución del Si a fluencia se relaciona con precipitados estables». Explica esa función y por qué el temario prefiere Mo/Nb frente a V en algunas de esas composiciones.",
        "learningObjective": "Explicar funciones de Si y Mo/Nb en servicio caliente.",
        "pilot01Relationship": "Funciones mencionadas en P01-D03, ahora obligatorias y puntuables; no repite α primaria–LCF.",
        "difficulty": "Intermedia",
        "difficultyReason": "Relaciona precipitado y difusión con objetivos de composición.",
        "cognitiveLevel": "Aplicar / analizar",
        "model": "V",
        "explanation": "Si forma precipitados estables y el material muestra siliciuros entre placas α tras maduración. Mo/Nb sustituyen a V en las composiciones discutidas por su menor velocidad de difusión, mientras se reduce la cantidad de betágenos y se busca poca β estable a ambiente. Estabilidad de la dispersión y cinética en caliente no equivalen a maximizar resistencia inicial. No se trata Si solo como un agente para aumentar β ni se hace un ranking universal independiente de composición/temperatura.",
        "conditions": "Casi α y composiciones/servicio de la fuente; no cualquier Ti.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "6": 2
        },
        "essential": "Precipitados Si, Mo/Nb y estabilidad/difusión.",
        "majorErrors": "Si solo neutro sin precipitados; invertir el motivo del reemplazo por mayor difusión; dosis universal.",
        "minorOmissions": "No estequiometría exacta del siliciuro ni temperatura/porcentaje numérico.",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 32
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 33
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 35
          }
        ],
        "correct": true,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto V."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Si: siliciuros/precipitados estables y fluencia."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Mo/Nb frente a V: menor velocidad de difusión en esas composiciones."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Poca β/estabilidad y servicio caliente; distinguir máximo endurecimiento a ambiente."
          }
        ]
      },
      {
        "id": "piloto-02-j05",
        "originalId": "P02-J05",
        "matrixId": "7.5",
        "topic": "Tema 7",
        "topicNumber": 7,
        "subtopic": "PH semiaustenítico y austenita retenida",
        "type": "justificada",
        "prompt": "V/F y justifica: «En un PH semiaustenítico, elevar la austenización para disolver más aleantes sube Ms y reduce la austenita retenida tras el mismo enfriamiento». Explica la tendencia del libro y dos vías para transformar la austenita retenida antes de madurar.",
        "learningObjective": "Relacionar disolución en austenización, Ms y ruta posterior.",
        "pilot01Relationship": "Misma familia de P01-VF22, pero nuevo objetivo: austenización y transformación de la fracción retenida.",
        "difficulty": "Avanzada",
        "difficultyReason": "Encadena composición disuelta, umbral, fase retenida y dos vías de transformación.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "F",
        "explanation": "En el caso descrito, mayor disolución hace bajar Ms y puede aumentar mucho la austenita retenida. Esta puede transformarse mediante enfriamiento subambiente o deformación plástica; luego la precipitación endurece la matriz de esa ruta. No se impone este proceso a PH austeníticos, que endurecen dentro de austenita, ni se confunde Ms con templabilidad. No se necesitan parámetros industriales ni una fracción calculada sin datos.",
        "conditions": "PH semiaustenítico, mayor disolución y mismo final de enfriamiento; no resultado cuantitativo universal.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 2,
        "topicPoints": {
          "7": 2
        },
        "essential": "Disolución, Ms, austenita retenida y dos vías.",
        "majorErrors": "Invertir Ms; atribuir todo a velocidad sin bajar temperatura; imponer la ruta a PH austenítico.",
        "minorOmissions": "No grado comercial ni temperaturas de austenización o subcero.",
        "sources": [
          {
            "document": "Tema 8 .pdf",
            "pdfPage": 12
          }
        ],
        "correct": false,
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Justificación científica"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 0.5,
            "label": "Veredicto F."
          },
          {
            "id": "criterio-2",
            "max": 0.5,
            "label": "Mayor disolución → Ms menor y más austenita retenida en el caso."
          },
          {
            "id": "criterio-3",
            "max": 0.5,
            "label": "Enfriamiento subambiente como vía."
          },
          {
            "id": "criterio-4",
            "max": 0.5,
            "label": "Deformación como otra vía y maduración posterior coherente."
          }
        ]
      },
      {
        "id": "piloto-02-v01",
        "originalId": "P02-V01",
        "matrixId": "1.5; 4.1; 4.3",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "Diagramas y rutas de Al",
        "type": "visual",
        "prompt": "El panel A es el diagrama de equilibrio Al–Cu de los apuntes, con at.% arriba, wt.% abajo y escalas térmicas originales (K a la izquierda y °F a la derecha). No se exige leer temperaturas exactas. B muestra dos esquemas térmicos Al–Mg–Si/6000, con temperatura en °C y tiempo: son esquemas de proceso, no registros experimentales de propiedades. «Mise en solution» significa solución, «trempe» temple y «revenu» maduración en este contexto. A y B corresponden a sistemas diferentes.\n\n1. En la zona rica en Al de A, explica qué cambio de solubilidad permite solución y precipitación. Distingue solución sólida, Al + CuAl2 y el peligro de cruzar hacia líquido. (3 puntos)\n2. Compara las rutas superior e inferior de B: localiza enfriamiento rápido, solución separada si existe y calentamiento final. Indica cuál corresponde a T6 y cuál a T5, justificando el orden. (3 puntos)\n3. Explica qué debe retener el enfriamiento para permitir precipitación posterior en 6000 y por qué compartir maduración artificial no garantiza idéntica microestructura inicial o propiedades. (3 puntos)\n4. ¿Permite A identificar zonas GP o precipitados de transición de B? Justifica el alcance físico de esa inferencia. (1 punto)",
        "learningObjective": "Relacionar equilibrio, retención de soluto y dos historias térmicas.",
        "pilot01Relationship": "Nuevo recurso y objetivo frente a P01-V01 de Al–Si moldeado; comparte fundamentos de tratamiento, ahora mediante diagramas T5/T6.",
        "difficulty": "Avanzada",
        "difficultyReason": "Interpreta dos sistemas y rutas, distinguiendo equilibrio y cinética de precipitación.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "A: solubilidad creciente con T y solución sin fusión. B superior: solución posterior/temple/maduración (T6); inferior: temple en prensa/maduración (T5). Equilibrio no identifica GP/transiciones de otro sistema.",
        "explanation": "En A la región rica en Al admite más Cu disuelto a temperatura elevada. Se busca solución en un campo sólido adecuado para la composición; al bajar temperatura el equilibrio puede requerir Al + CuAl2. No se cruza a líquido para disolver: la fusión incipiente produce quemado. No se pide extrapolar una temperatura de horno sin composición/producto definidos.\n\nLa ruta superior B tiene conformado/extrusión y enfriamiento, luego un calentamiento separado de solución, temple y maduración: corresponde a T6. La inferior aprovecha la etapa caliente del conformado, enfría rápidamente a la salida de prensa y madura: T5. El primer máximo de la ruta superior no sustituye su solución posterior. Comparten maduración artificial, pero difieren en historia de soluto y tratamiento.\n\nEl enfriamiento debe limitar precipitación prematura para conservar soluto sobresaturado disponible para madurar. Composición Mg/Si, temperatura de conformado/solución y velocidad efectiva condicionan soluto y partículas, por lo que no se deduce igual resistencia/ductilidad. A es equilibrio binario Al–Cu, no identificación de precipitados transitorios fuera de equilibrio ni de fases de Al–Mg–Si. Se requiere información cinética/microestructural de cada sistema.",
        "conditions": "Lectura cualitativa; K/°F en A y °C en B. Sistemas distintos, sin probetas emparejadas ni recetas térmicas.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 10,
        "topicPoints": {
          "4": 10
        },
        "essential": "Solvus/campos; rutas completas; retención de soluto; límite del diagrama.",
        "majorErrors": "K tratados como °C; fundir como solución; identificar GP por equilibrio; invertir T5/T6.",
        "minorOmissions": "No números pequeños ni fracciones de fase; no secuencia exhaustiva de 6000.",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 1
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 11
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 14
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 1,
            "label": "A: solubilidad creciente con T y posibilidad de disolver Cu."
          },
          {
            "id": "criterio-2",
            "max": 1,
            "label": "A: solución sólida frente a Al + CuAl2 y cambio al enfriar."
          },
          {
            "id": "criterio-3",
            "max": 1,
            "label": "A: solución en sólido; fusión no es tratamiento correcto."
          },
          {
            "id": "criterio-4",
            "max": 1.5,
            "label": "B superior: solución separada, temple y maduración/T6; 0,5 por cada relación."
          },
          {
            "id": "criterio-5",
            "max": 1.5,
            "label": "B inferior: aprovechar conformado, temple en prensa y maduración/T5; 0,5 por cada relación."
          },
          {
            "id": "criterio-6",
            "max": 1.5,
            "label": "Retención de soluto sobresaturado y precipitación posterior."
          },
          {
            "id": "criterio-7",
            "max": 1.5,
            "label": "Diferentes historias iniciales; no inferir mismas partículas/propiedades de igual maduración."
          },
          {
            "id": "criterio-8",
            "max": 1,
            "label": "Equilibrio binario A no identifica GP/transiciones ni fases de 6000 de B."
          }
        ],
        "stimulus": {
          "kind": "image",
          "synthetic": false,
          "context": "Recursos auténticos. Se conservan ejes, unidades y aumentos originales. Las condiciones y límites de interpretación figuran en el enunciado.",
          "source": "Tema 4 .pdf, página PDF 7; Tema 4 .pdf, página PDF 3",
          "images": [
            {
              "src": "assets/piloto-02/P02_V01_diagrama.png",
              "alt": "Panel A — diagrama Al–Cu",
              "label": "Panel A — diagrama Al–Cu"
            },
            {
              "src": "assets/piloto-02/P02_V01_rutas.png",
              "alt": "Panel B — rutas térmicas Al–Mg–Si",
              "label": "Panel B — rutas térmicas Al–Mg–Si"
            }
          ]
        }
      },
      {
        "id": "piloto-02-v02",
        "originalId": "P02-V02",
        "matrixId": "6.4–6.7",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Mill annealing y fracción α primaria",
        "type": "visual",
        "prompt": "A y B son los dos paneles reales de Ti que ilustran variabilidad de mill annealing en los apuntes. Conservan 500×, sin barra calibrada; no se dan historias exactas de cada probeta. C es porcentaje de α primaria frente a temperatura de solución de Ti–6Al–4V, con los tres métodos de su leyenda. No se afirma que A/B sean probetas de C.\n\n1. Describe diferencias morfológicas entre A/B. Explica por qué pueden ilustrar distinto grado de recristalización dentro de mill annealing, distinguiendo observación e inferencia y sin identificar químicamente cada punto oscuro. (3 puntos)\n2. Compara α primaria de C cerca de 800 °C y 900 °C, aceptando intervalos aproximados. ¿Mide la ordenada α primaria o toda α después de enfriar? (3 puntos)\n3. Explica los orígenes de α primaria y β transformada en una estructura dúplex subtransus. Contrasta con el calentamiento sobre β-transus seguido de enfriamiento controlado que genera morfología laminar. (3 puntos)\n4. Justifica un compromiso entre iniciación de fatiga y tenacidad/crecimiento de grieta al comparar dúplex y recocido β a igual velocidad, según el temario. (1 punto)",
        "learningObjective": "Interpretar morfologías y curva; reconstruir rutas de recocido.",
        "pilot01Relationship": "Mismo gran objetivo Ti de P01-V02, pero todos los recursos nuevos: MA y α primaria/T, en vez de laminar/equiaxial y fluencia.",
        "difficulty": "Avanzada",
        "difficultyReason": "Une morfología, fracción heredada y origen de componentes de estructura.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "A alargada/orientada; B más equiaxial. C: ~80–90 % a 800 °C y ~45–60 % a 900 °C de α primaria, no α total final. Dúplex conserva primaria y transforma β; recocido β origina placas/colonias al enfriar.",
        "explanation": "A muestra bandas/formas alargadas y orientadas, B formas más equiaxiales y menos orientación. Son observaciones; el contexto del libro permite inferir distintos grados de recristalización según temperatura, deformación y enfriamiento de MA, con B compatible con mayor recristalización. El contraste no identifica químicamente todos los puntos oscuros ni permite medir μm a partir de 500× en un archivo redimensionado.\n\nC disminuye la fracción α primaria al subir la temperatura hacia transus: del orden de 80–90 % cerca de 800 °C, 45–60 % cerca de 900 °C, aceptando lectura y dispersión de métodos. No es toda α final: β de alta temperatura puede producir α nueva al enfriar. No se exige transus exacto ni se interpretan los tres métodos como tres aleaciones.\n\nDúplex conserva α primaria en α+β y transforma el volumen β en placas α con β entre ellas; combina componentes heredados y transformados. El recocido β calienta ligeramente sobre transus, limita crecimiento de grano y enfría controladamente para generar placas/colonias; un temple martensítico sería otra ruta. A la misma velocidad, la comparación docente favorece iniciación de fatiga/plasticidad en dúplex y tenacidad/crecimiento de grieta en recocido β. No se ordena «mejor Ti» universalmente ni se deduce tenacidad de ductilidad.",
        "conditions": "Observación cualitativa y 500× sin calibración. C: Ti64/α primaria; sin tiempos o velocidades experimentales inventados. Rutas con enfriamiento controlado.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 10,
        "topicPoints": {
          "6": 10
        },
        "essential": "Morfología/recristalización, primaria frente a total final y dos rutas.",
        "majorErrors": "Toda α final primaria; 500× como escala en μm; deducir K de alargamiento; emparejar A/B con puntos de C.",
        "minorOmissions": "No transus exacto, fracción β óptica ni composición de una partícula.",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 19
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 20
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 22
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 23
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 32
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 1.5,
            "label": "A/B: elongación/orientación y mayor equiaxialidad, 0,75 cada observación."
          },
          {
            "id": "criterio-2",
            "max": 1.5,
            "label": "Grado de recristalización/variables MA (1); separar observación e identificación química (0,5)."
          },
          {
            "id": "criterio-3",
            "max": 1.5,
            "label": "Lecturas de C a 800/900 °C: 0,75 cada intervalo razonable."
          },
          {
            "id": "criterio-4",
            "max": 1.5,
            "label": "Ordenada α primaria (0,5); nueva α desde β al enfriar (1)."
          },
          {
            "id": "criterio-5",
            "max": 1.5,
            "label": "Dúplex: componente heredado y transformado, 0,75 cada uno."
          },
          {
            "id": "criterio-6",
            "max": 1.5,
            "label": "Recocido β: región inicial β y enfriamiento que produce placas/colonias, 0,75 cada paso."
          },
          {
            "id": "criterio-7",
            "max": 1,
            "label": "Compromiso iniciación frente a tenacidad/propagación, a velocidad/contexto comparables; 0,5 cada relación."
          }
        ],
        "stimulus": {
          "kind": "image",
          "synthetic": false,
          "context": "Recursos auténticos. Se conservan ejes, unidades y aumentos originales. Las condiciones y límites de interpretación figuran en el enunciado.",
          "source": "Tema 6 .pdf, página PDF 20; Tema 6 .pdf, página PDF 32",
          "images": [
            {
              "src": "assets/piloto-02/P02_V02_A.png",
              "alt": "Panel A — micrografía, 500×",
              "label": "Panel A — micrografía, 500×"
            },
            {
              "src": "assets/piloto-02/P02_V02_B.png",
              "alt": "Panel B — micrografía, 500×",
              "label": "Panel B — micrografía, 500×"
            },
            {
              "src": "assets/piloto-02/P02_V02_curva.png",
              "alt": "Panel C — Ti–6Al–4V",
              "label": "Panel C — Ti–6Al–4V"
            }
          ]
        }
      },
      {
        "id": "piloto-02-d01",
        "originalId": "P02-D01",
        "matrixId": "1.5–1.8; 3.4; 4.1",
        "topic": "Tema 1",
        "topicNumber": 1,
        "subtopic": "5000/6000 y ciclo de precipitación",
        "type": "desarrollo",
        "prompt": "Compara una 5000 endurecida por solución/acritud con una 6000 tratable por precipitación. En 6000, explica cambios en solución, temple y maduración hasta pico y sobremaduración. Justifica por qué madurar la 5000 no reproduce ese mecanismo útil. Incluye un compromiso del temple. Responde en 2–3 párrafos, sin secuencia exhaustiva de fases de 6000 ni parámetros numéricos.",
        "learningObjective": "Explicar evolución de soluto/partículas y contrastar familias.",
        "pilot01Relationship": "Amplía P01-D01: familia 6000, soluto/partículas y contraste 5000 obligatorios; alivio de tensiones no domina.",
        "difficulty": "Avanzada",
        "difficultyReason": "Dos familias y evolución causal; tres párrafos centrados en mecanismos.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "6000: Mg/Si y fases solubles → soluto → sobresaturación → dispersión que evoluciona; 5000: solución/acritud, no respuesta útil equivalente; rapidez frente a tensiones.",
        "explanation": "En 6000 Mg/Si participan en el sistema de precipitación asociado a Mg2Si. Solución disuelve fases solubles en el campo apropiado y homogeneiza por difusión; no funde ni disuelve cualquier constituyente estable. El temple suficiente evita precipitación prematura y conserva soluto sobresaturado/vacantes. Debe ser adecuado en la sección, pero mayor extracción de calor aumenta el riesgo de gradientes/tensiones y distorsión.\n\nLa maduración desarrolla partículas que dificultan dislocaciones. En submaduración no se alcanza máxima eficacia; tipo, tamaño y distribución evolucionan hasta el pico y luego a un estado menos eficaz para máxima resistencia. Sobremaduración no elimina toda precipitación. Se utiliza el esquema general sin imponer nomenclatura exhaustiva ausente en la fuente.\n\nEn 5000 predominan Mg disuelto y acritud. Compartir Mg no aporta el sistema útil Mg/Si de 6000; Mg2Al3 en borde durante una exposición apropiada puede sensibilizar composiciones susceptibles. Recuperación/estabilización modifican propiedades, pero no equivalen al mecanismo de maduración de 6000. Se distingue composición, soluto y localización/función de partículas, sin responder solo «tratable/no tratable».",
        "conditions": "Familias/rutas del libro; no toda 5000 igual susceptibilidad ni fases añadidas al esquema.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "1": 8
        },
        "essential": "Ruta microestructural y diferencia de mecanismo con condición de proceso.",
        "majorErrors": "Temple como maduración completa Al; sobremaduración elimina partículas; igual mecanismo útil en 5000.",
        "minorOmissions": "No β″ o fases ausentes; no porcentajes, T/tiempo o sufijos.",
        "sources": [
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 11
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 14
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 15
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 16
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 17
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 6
          },
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 8
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 1
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 2
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "6000: Mg/Si y disolución/homogeneización (1); solución en sólido y límites (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "Temple: sobresaturación/vacantes evitando precipitación prematura (1); sección y tensiones (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "Maduración: obstáculo a dislocaciones (0,5); evolución sub/pico/sobremaduración por tamaño/distribución/eficacia (1,5)."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "5000: soluto/acritud frente a Mg/Si (1); no equivalencia y sensibilización condicionada (1)."
          }
        ]
      },
      {
        "id": "piloto-02-d02",
        "originalId": "P02-D02",
        "matrixId": "4.3–4.6",
        "topic": "Tema 4",
        "topicNumber": 4,
        "subtopic": "2000/7000: fases y aleantes",
        "type": "desarrollo",
        "prompt": "Compara Al–Cu–Mg y Al–Zn–Mg–Cu del temario: aleantes y fases representativas, diferencias del papel de Cu frente a corrosión, e interés de Cr/Zr y de sobremaduración para una 7000 gruesa susceptible a SCC. No se pide elegir un avión o maximizar Rm. Responde en 2–3 párrafos.",
        "learningObjective": "Comparar química, Cu y dispersoides en dos familias.",
        "pilot01Relationship": "De P01-D02 se conserva interés material; sustituye selección del ala por composición/fases/Cu/Cr-Zr. SCC repetida con otro argumento exigido.",
        "difficulty": "Avanzada",
        "difficultyReason": "Familias reales y compromisos composición/ruta, sin selección genérica.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "S y coexistencia en Al–Cu–Mg; Zn/Mg y η/T en 7000 según composición; Cu/SCC condicionado, Cr/Zr y sensibilidad, T7 compromiso.",
        "explanation": "En Al–Cu–Mg, Cu/Mg participan en la ruta con zonas GP y S′/S (Al2CuMg); pueden coexistir otras contribuciones de Cu. En 7000 Zn/Mg forman fases endurecedoras: η/MgZn2 y la rama T diferenciada según Zn/Mg por el esquema. Se conecta composición y respuesta a solución/temple/maduración sin asignar una fase exclusiva a toda aleación comercial.\n\nCu contribuye a resistencia y puede perjudicar corrosión general. En 7000 la fuente le atribuye mejor SCC y advierte no trasladarlo a 2000. «Cu mejora corrosión» no demuestra esa comparación: importan forma de ataque, estado y ambiente. T7 de 7000 mejora SCC/exfoliación frente al pico T6 sacrificando resistencia, no dando inmunidad.\n\nCr/Zr forman dispersoides antirrecristalizantes y penalizan retención de soluto durante enfriamiento, menos con Zr en la comparación. Esa diferencia favorece tratar piezas gruesas, con núcleo más lento, como en 7050/7010. Se relacionan partículas, historia térmica y propiedades; una composición potencialmente resistente no garantiza el estado del núcleo. No se necesita un ranking universal ni composiciones completas.",
        "conditions": "Fases representativas/ramas; Cu condicionado por familia y mecanismo; pieza sensible al temple.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "4": 8
        },
        "essential": "Composición/fases, mecanismo ambiental, dispersoides y estado.",
        "majorErrors": "θ exige Mg; η exclusiva de toda 7000; invertir Cr/Zr; hacer universal mejora de SCC por Cu.",
        "minorOmissions": "No límites Zn/Mg numéricos si explica ramas; no avión o grado comercial.",
        "sources": [
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 8
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 12
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 4 .pdf",
            "pdfPage": 18
          },
          {
            "document": "Tema 1 .pdf",
            "pdfPage": 15
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "Cu/Mg y S (1); Zn/Mg y fases 7000 con condición/ramas/coexistencia (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "Cu: resistencia/coste de corrosión general (1); SCC en 7000 no extrapolable a 2000 (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "Cr/Zr: dispersoides/control RX (1); sensibilidad relativa y núcleo grueso (1)."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "Pico frente a evolución sobremadurada (1); compromiso resistencia/SCC condicionado (1)."
          }
        ]
      },
      {
        "id": "piloto-02-d03",
        "originalId": "P02-D03",
        "matrixId": "6.2; 6.6–6.7",
        "topic": "Tema 6",
        "topicNumber": 6,
        "subtopic": "Evolución STA en Ti",
        "type": "desarrollo",
        "prompt": "Compara rutas de Ti: A, aleación α+β solucionada en α+β; B, β metaestable solucionada en β y enfriada suficientemente rápido para retenerla. Explica alfágenos/betágenos, componentes heredados/transformados al enfriar y cómo madurar B puede endurecerla. Incluye compromiso resistencia–tenacidad y riesgo de ω. Responde en 2–3 párrafos, sin equivalentes ni temperaturas calculadas.",
        "learningObjective": "Comparar composición e historia de fases en dos rutas.",
        "pilot01Relationship": "Comparte fundamentos con P01-VF16/J04/D03, pero reemplaza selección caliente/ambiente por dos rutas y productos de transformación obligatorios.",
        "difficulty": "Avanzada",
        "difficultyReason": "Reconstruye fases y función de aleantes; tres párrafos acotados.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "A conserva α primaria y transforma/retiene volumen β según condiciones; B retiene β y precipita α; aleantes y cinética importan, ω puede endurecer/fragilizar.",
        "explanation": "Al amplía α y los betágenos favorecen β/reducen transus; cantidad y partición modifican Ms/Mf y retención. A subtransus conserva α primaria y su β puede dar martensita, productos difusivos o retenerse según composición/velocidad. No toda α final es primaria. B parte de β y el enfriamiento supuesto retiene un estado metaestable, distinto del equilibrio a ambiente.\n\nMadurar β retenida puede generar α en matriz β y aumentar resistencia por obstáculos a dislocaciones. Martensita Ti no aporta por sí sola el endurecimiento espectacular del Fe–C; descomponer martensita de α+β habituales tampoco asegura el mismo incremento. β estable muy estabilizada no equivale a β metaestable estructural tratable. Deben explicarse estado inicial y precipitación, no solo «STA aumenta dureza».\n\nLa dispersión y su evolución determinan compromiso resistencia–plasticidad/tenacidad. En ciertas β metaestables, maduración baja puede formar ω coherente, endurecedora y perjudicial para tenacidad; se busca una ruta que evite ese estado y favorezca α según la fuente. No se deducen propiedades cuantitativas o ciclos de fábrica sin composición, sección y ensayos.",
        "conditions": "Rutas hipotéticas y retención de B dada; no producto único de A sin fijar cinética/composición.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "6": 8
        },
        "essential": "Composición, fases heredadas/transformadas, precipitación y compromiso.",
        "majorErrors": "Toda α de A disuelta bajo transus; β retenida = equilibrio; ω mejora K; dureza del acero transferida a Ti.",
        "minorOmissions": "No fórmula equivalente, tipo exacto de toda martensita ni valores de temperatura/fracción.",
        "sources": [
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 10
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 11
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 15
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 16
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 25
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 26
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 27
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 28
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 37
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 39
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "Alfágenos/betágenos/transus (1); cantidad/partición/cinética y retención/Ms-Mf (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "A: α primaria y destinos del volumen β (1); B: retención metaestable bajo supuesto (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "B: α en β y obstáculos a dislocaciones (1); distinguir de β estable o martensita Fe–C (1)."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "Compromiso resistencia/tenacidad (1); ω y control condicionado (1)."
          }
        ]
      },
      {
        "id": "piloto-02-d04",
        "originalId": "P02-D04",
        "matrixId": "8.3–8.4",
        "topic": "Tema 8",
        "topicNumber": 8,
        "subtopic": "Familias de Mg y precipitación",
        "type": "desarrollo",
        "prompt": "Compara Mg–Al, Mg–Zn y Mg con tierras raras del temario: por qué no responden igual a precipitación ni a fluencia, relacionando partículas/fases. Añade un riesgo microestructural al solucionar una pieza colada segregada. Responde en 2–3 párrafos, sin designaciones ni recetas.",
        "learningObjective": "Comparar eficacia/estabilidad de precipitación y riesgo de solución.",
        "pilot01Relationship": "Desarrollo nuevo de Mg: amplía P01-VF25 con fases, comparación y estabilidad obligatorias.",
        "difficulty": "Avanzada",
        "difficultyReason": "Tres familias mediante cuatro mecanismos; respuesta compacta, no catálogo.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "Mg–Al: β gruesa/incoherente y respuesta escasa; Mg–Zn: etapas finas/coherentes, respuesta útil; TR: estabilidad/fluencia; eutécticas y quemado al solucionar.",
        "explanation": "Mg–Al puede sobresaturarse por solubilidad variable, pero precipita directamente β/Mg17Al12 gruesa e incoherente y responde poco a endurecimiento. Solución puede homogeneizar/mejorar propiedades sin convertir la precipitación en dispersión igualmente eficaz. Mg–Zn incluye GP y MgZn2 coherente/semicoherente antes de Mg2Zn3, con respuesta útil a tratamiento y estados T5/T6 de la fuente.\n\nEn familias con TR, precipitados estables y fases intergranulares ayudan frente a fluencia. Resistencia inicial no determina estabilidad caliente: suficiente TR en Mg–Zn puede mejorar fluencia con algún coste a ambiente. Mg17Al12 en borde de Mg–Al no evita eficazmente deslizamiento intergranular en los casos descritos. No se asigna a toda composición el mismo rango de servicio.\n\nUna colada segregada puede conservar eutécticas de baja fusión local. Ciertas Mg–Al–Zn requieren calentamiento lento/escalonado para redisolverlas antes del quemado; una permanencia larga no autoriza superar fusión. También puede crecer el grano durante solución. Se indica un riesgo y control causal, sin procedimiento de taller ni mismo temple para todas las Mg.",
        "conditions": "Familias y pieza susceptible del libro; comparación cualitativa sin parámetros extrapolados.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "8": 8
        },
        "essential": "Naturaleza/estabilidad de dispersión y riesgo de proceso.",
        "majorErrors": "Solubilidad variable basta para igual respuesta; β gruesa Mg–Al coherente; ruta única para Mg; quemado útil.",
        "minorOmissions": "No AZ/WE/ZE, porcentajes ni fórmula de todo precipitado TR.",
        "sources": [
          {
            "document": "Tema 7.pdf",
            "pdfPage": 10
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 12
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 13
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 15
          },
          {
            "document": "Tema 7.pdf",
            "pdfPage": 16
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "Mg–Al: β gruesa/incoherente (1); solución vs maduración intensa (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "Mg–Zn: etapas finas/coherentes-semicoherentes (1); eficacia frente a Mg–Al (1)."
          },
          {
            "id": "criterio-3",
            "max": 2,
            "label": "TR: estabilidad/borde/fluencia (1); caliente frente a ambiente o límite Mg–Al (1)."
          },
          {
            "id": "criterio-4",
            "max": 2,
            "label": "Eutécticas/segregación/fusión local (1); control de rampa/redisolución o grano causal (1)."
          }
        ]
      },
      {
        "id": "piloto-02-d05",
        "originalId": "P02-D05",
        "matrixId": "9.2; 9.6 + 10.2",
        "topic": "Tema 9",
        "topicNumber": 9,
        "subtopic": "Partículas, hidruros y compatibilidad",
        "type": "desarrollo",
        "prompt": "Explica por qué constituyentes gruesos Fe/Si en Al de forja pueden perjudicar plasticidad/tenacidad mediante microvacíos y compáralo con fragilización por hidruros de Ti. Razona dos precauciones distintas para Ti: calentamiento localizado al mecanizar y contacto húmedo con Al si Ti está pasivado. No diagnostiques probetas ni elijas por densidad/coste. Responde en 2–3 párrafos.",
        "learningObjective": "Comparar mecanismos de daño y propiedades/estado de superficie.",
        "pilot01Relationship": "H compartido con P01-D05, pero cambia acero→hidruros Ti y compara con microvacíos; desaparece cierre Rp/ρ. Comparte fundamentos internos con VF26/VF28/VF29/VF30, aplicados en desarrollo.",
        "difficulty": "Avanzada",
        "difficultyReason": "Daño por partículas/fase y dos propiedades reales; sin puntos por selección genérica.",
        "cognitiveLevel": "Analizar / evaluar",
        "model": "Al: partículas/interfaz → vacíos y coalescencia; Ti: hidruro frágil y tensiones por volumen; baja conductividad y película/polaridad exigen controles distintos.",
        "explanation": "Constituyentes gruesos Fe/Si no son la dispersión fina útil de maduración. Partículas no deformables concentran tensión por deformación de la matriz; rotura de partícula/descohesión nuclea vacíos que crecen y coalescen. Mayor tamaño/cantidad adelanta daño y reduce plasticidad en el modelo. Confirmarlo en una probeta necesitaría evidencia de fractura; aquí se compara el fundamento.\n\nEn Ti, H puede formar hidruros frágiles cuyo cambio de volumen genera tensiones locales. Es contaminación y formación de fase, no la misma historia de un constituyente de solidificación y microvacíos. No todo Ti con H falla ni toda fractura Al tiene ese origen; la deformación global no sustituye información microestructural.\n\nLa baja conductividad del Ti favorece calor localizado en mecanizado/rozamiento: controlar aporte/extracción de calor y el proceso superficial aborda ese riesgo. En una unión húmeda Al–Ti, película pasivante, polaridad, conexión y electrolito condicionan ataque; aislamiento/sellado/protección aborda el par. Refrigerar no elimina el circuito galvánico ni aislar corrige por sí solo un gradiente: cada medida debe vincularse a su mecanismo. No se deduce tasa de corrosión o vida de una tabla elemental.",
        "conditions": "Comparación de mecanismos, no experimentos atribuidos a piezas inventadas; contaminación/ambiente condicionados y Ti pasivado.",
        "verification": "Cotejada documentalmente con originales y revisada críticamente bajo las condiciones indicadas. Borrador para aprobación; no validación oficial del profesor ni calibración empírica.",
        "reviewStatus": "documental",
        "maxPoints": 8,
        "topicPoints": {
          "9": 5,
          "10": 3
        },
        "essential": "Microvacíos, hidruros, calor local, pasivación y compatibilidad.",
        "majorErrors": "Fe/Si grueso = GP; hidruros = burbujas; ignorar película Ti; medida sin mecanismo.",
        "minorOmissions": "No K, concentración H, tasas de corrosión o receta de mecanizado.",
        "sources": [
          {
            "document": "Tema 3 .pdf",
            "pdfPage": 3
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 9
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 10
          },
          {
            "document": "Tema 9 .pdf",
            "pdfPage": 22
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 5
          },
          {
            "document": "Tema 6 .pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 6
          },
          {
            "document": "Tema 10.pdf",
            "pdfPage": 7
          },
          {
            "document": "Tema 2 .pdf",
            "pdfPage": 2
          }
        ],
        "parts": [
          {
            "id": "respuesta",
            "prompt": "Respuesta a los apartados del enunciado"
          }
        ],
        "rubric": [
          {
            "id": "criterio-1",
            "max": 2,
            "label": "T9: partículas/interfaz o rotura (1); crecimiento/coalescencia y propiedad (1)."
          },
          {
            "id": "criterio-2",
            "max": 2,
            "label": "T9: hidruros frágiles (1); volumen/tensiones y contraste con partículas Al (1)."
          },
          {
            "id": "criterio-3",
            "max": 1,
            "label": "T9: mecanismo plausible frente a identificación experimental."
          },
          {
            "id": "criterio-4",
            "max": 1,
            "label": "T10: baja conductividad/calor local y control coherente."
          },
          {
            "id": "criterio-5",
            "max": 1,
            "label": "T10: película/polaridad, contacto/electrolito y medida de unión."
          },
          {
            "id": "criterio-6",
            "max": 1,
            "label": "T10: separar qué corrige cada medida térmica/electroquímica."
          }
        ]
      }
    ]
  }
];
