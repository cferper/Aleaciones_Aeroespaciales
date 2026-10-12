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
  }
];
