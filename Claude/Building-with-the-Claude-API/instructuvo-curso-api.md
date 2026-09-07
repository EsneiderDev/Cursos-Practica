# Instructivo de estudio — Building with the Claude API

> Curso oficial de Anthropic (Skilljar). Este documento resume los temas tratados en cada lección para usarlo como material de repaso.
> Fuente del temario: https://anthropic.skilljar.com/claude-with-the-anthropic-api

---

## Módulo 1 — Introducción

> **Resumen del módulo:** Bienvenida al curso y encuadre general. Se establece qué esperar del recorrido (de fundamentos de la API hasta arquitecturas de agentes), a quién está dirigido y los conocimientos previos necesarios. Es el módulo más corto y sirve como orientación antes de entrar en materia técnica.

### Welcome to the course
Presentación de objetivos: aprender a construir aplicaciones sobre la API de Claude, dominando desde llamadas básicas hasta arquitecturas de agentes.

**Puntos clave:**
- El curso está pensado para desarrolladores que ya escriben código, no para principiantes absolutos.
- Se combina teoría con ejercicios prácticos y quizzes al final de cada módulo.
- Requisitos previos: Python intermedio (funciones, clases, manejo de dependencias con `pip`/`venv`) y manejo básico de JSON (parseo, estructura anidada).
- Recomendaciones: tener listo un editor (VS Code o similar), Python 3.10+ instalado y una cuenta en `console.anthropic.com` para poder practicar en paralelo mientras se ve el video.
- El aprendizaje es incremental: cada módulo asume lo aprendido en los anteriores, por lo que conviene seguir el orden y no saltar.

---

## Módulo 2 — Anthropic overview

> **Resumen del módulo:** Panorama de la familia de modelos Claude y de sus diferencias prácticas. Se aprende a decidir qué modelo usar según la tarea, entendiendo el trade-off entre capacidad, latencia y costo, además de conceptos base como ventana de contexto, tokens y la convención de nombres de modelos.

### Overview of Claude models
- **Familias de modelos disponibles:**
  - **Opus** — máxima capacidad de razonamiento, mejor para tareas complejas (análisis profundo, código difícil, matemáticas, planeación de agentes). Costo y latencia mayores.
  - **Sonnet** — balance óptimo capacidad/costo/velocidad. Es el "caballo de trabajo" recomendado por defecto para la mayoría de aplicaciones en producción.
  - **Haiku** — el más rápido y económico. Ideal para clasificación, extracción simple, moderación en tiempo real, prefiltrado en pipelines.

- **Cuándo elegir cada uno:**
  - Empezar siempre con Sonnet para prototipar.
  - Bajar a Haiku si la tarea es simple y necesitas alto throughput o menor costo.
  - Subir a Opus si Sonnet no logra la calidad requerida en tareas de razonamiento complejo.

- **Concepto de context window:** cantidad máxima de tokens (input + output) que el modelo puede procesar en una sola llamada. Modelos actuales manejan cientos de miles de tokens, lo que permite pasar documentos completos como contexto sin RAG en muchos casos.

- **Tokens:** unidad básica que procesa el modelo. Aproximadamente 1 token ≈ 4 caracteres en inglés (~3 en español). Se factura por tokens de input y de output por separado, con precios distintos.

- **Naming convention:** `claude-{familia}-{versión}` (ej. `claude-sonnet-4-5`, `claude-opus-4-6`, `claude-haiku-4-5`). Los alias como `claude-3-5-sonnet-latest` apuntan siempre al último snapshot; para producción se recomienda fijar la versión exacta.

- **Puntos clave:**
  - No siempre el modelo más grande es mejor: para clasificación binaria, Haiku suele empatar a Opus a una fracción del costo.
  - Al cambiar de modelo, siempre re-evaluar los prompts: pueden comportarse ligeramente distinto.

---

## Módulo 3 — Accessing Claude with the API

> **Resumen del módulo:** Bases operativas para trabajar con la API. Cubre desde generar la API key y hacer la primera llamada, hasta manejar conversaciones multi-turno, usar system prompts para dirigir el comportamiento del modelo, controlar la aleatoriedad con temperature, recibir respuestas en streaming y forzar salidas estructuradas en JSON. Al terminarlo se tienen los cimientos para construir cualquier integración con Claude.

### Accessing the API
- Endpoint principal: `POST https://api.anthropic.com/v1/messages`.
- Protocolo: REST sobre HTTPS, cuerpo y respuestas en JSON.
- Headers obligatorios:
  - `x-api-key: <tu API key>`
  - `anthropic-version: 2023-06-01` (fecha del contrato de API)
  - `content-type: application/json`
- SDKs oficiales disponibles: Python (`pip install anthropic`), TypeScript/Node (`npm install @anthropic-ai/sdk`), Java, Go.
- Uso directo vía `curl` posible, pero los SDKs manejan retries, streaming y tipos por ti.

### Getting an API key
- **Pasos:**
  1. Registrarse en `console.anthropic.com`.
  2. Ir a Settings → API Keys.
  3. Click en "Create Key", darle un nombre descriptivo (ej. `dev-local-esneider`).
  4. Copiar la key **inmediatamente** (solo se muestra una vez).
- **Buenas prácticas de seguridad:**
  - Nunca commitear la key al repositorio (agregar `.env` al `.gitignore`).
  - Usar variables de entorno (`export ANTHROPIC_API_KEY=sk-...`) o gestores de secretos (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault).
  - Rotar keys periódicamente y revocar las comprometidas desde la consola.
  - Crear keys separadas por ambiente (dev/staging/prod) y por desarrollador.
  - Configurar límites de gasto en la consola para evitar sorpresas por bugs o abuso.

### Making a request
Primera llamada básica con el SDK de Python:
```python
from anthropic import Anthropic

client = Anthropic()  # lee ANTHROPIC_API_KEY del entorno automáticamente

response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hola Claude"}]
)
print(response.content[0].text)
```

- **Parámetros obligatorios:**
  - `model`: identificador del modelo.
  - `max_tokens`: límite superior de tokens de la respuesta. Es un tope, no un target — Claude puede responder con menos.
  - `messages`: lista de mensajes de la conversación.

- **Estructura de la respuesta:**
  ```python
  Message(
      id="msg_...",
      content=[TextBlock(text="...", type="text")],
      model="claude-sonnet-4-5",
      role="assistant",
      stop_reason="end_turn",  # o "max_tokens", "tool_use", "stop_sequence"
      usage=Usage(input_tokens=10, output_tokens=42)
  )
  ```

- **Importante:** `content` siempre es una lista de bloques, no un string. Aunque tenga un solo bloque de texto, hay que acceder a `.content[0].text`. Esta estructura permite responder con múltiples bloques (texto + tool use + imagen).

### Multi-Turn conversations
- La API es **stateless**: el servidor de Anthropic no recuerda conversaciones previas. Tú eres responsable de mantener el historial y reenviarlo en cada request.
- Se alternan roles `user` y `assistant`:
```python
messages = [
    {"role": "user", "content": "Hola"},
    {"role": "assistant", "content": "¡Hola! ¿En qué te ayudo?"},
    {"role": "user", "content": "Explícame recursión"}
]
```
- **Reglas de formato:**
  - El primer mensaje debe ser `user`.
  - No pueden haber dos mensajes consecutivos del mismo rol (a menos que uses una técnica avanzada de "prefill").
  - El último mensaje debe ser `user` para que Claude genere respuesta.

- **Gestión del contexto en conversaciones largas:**
  - Cada turno agrega tokens, aumentando costo y latencia.
  - Estrategias: truncar mensajes antiguos, resumir con Claude cada N turnos, o mantener solo los últimos K mensajes + un resumen.

### Chat exercise
Ejercicio guiado: construir un chatbot funcional en terminal.
```python
messages = []
while True:
    user_input = input("Tú: ")
    if user_input.lower() in ("exit", "salir"):
        break
    messages.append({"role": "user", "content": user_input})

    response = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=1024,
        messages=messages
    )
    reply = response.content[0].text
    messages.append({"role": "assistant", "content": reply})
    print(f"Claude: {reply}\n")
```
- **Aprendizajes del ejercicio:**
  - Cómo acumular el historial correctamente.
  - Cómo salir del loop limpiamente.
  - Punto de partida para agregar system prompt, streaming, o persistencia en DB.

### System prompts
- Se envía en un parámetro `system` **separado** del array `messages`, no como un rol dentro de él.
- Sirve para: definir personalidad, rol experto, contexto de negocio, restricciones, formato de salida obligatorio.
```python
response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    system="Eres un experto en infraestructura AWS. Responde siempre en español, "
           "con ejemplos concretos y citando la documentación oficial cuando sea posible.",
    messages=[{"role": "user", "content": "¿Cómo configuro un RDS con failover?"}]
)
```
- **Patrones útiles en el system prompt:**
  - Definir rol: "Eres un abogado corporativo especializado en..."
  - Restringir alcance: "Solo respondes preguntas relacionadas con X. Si te preguntan otra cosa, responde 'Fuera de mi alcance'."
  - Fijar formato: "Siempre respondes en JSON con las claves `resumen` y `acciones`."
  - Establecer tono: "Habla como un colega técnico, sin adornos innecesarios."

- **Anti-patrones:**
  - Meter demasiadas reglas contradictorias.
  - Usar el system prompt para datos que cambian por request (esos van en `messages`).

### System prompts exercise
Práctica de escribir system prompts para distintos casos:
- **Asistente médico** con disclaimer obligatorio.
- **Tutor de matemáticas** que no da la respuesta directa sino que guía por preguntas socráticas.
- **Generador de código** que sigue un estilo específico (ej. PEP8, con type hints, docstrings).
- **Clasificador de tickets** que solo devuelve una etiqueta de un conjunto cerrado.

### Temperature
- Parámetro numérico entre `0.0` y `1.0` que controla la aleatoriedad del sampling.
- **`temperature=0.0`** → salidas casi deterministas. Ideal para:
  - Extracción de datos estructurados.
  - Clasificación.
  - Tool use / function calling.
  - Cualquier caso donde quieras reproducibilidad.
- **`temperature=1.0`** → máxima variabilidad. Ideal para:
  - Brainstorming.
  - Redacción creativa.
  - Generación de variantes (nombres, slogans, títulos).
- **Valores intermedios (0.3–0.7):** compromisos comunes en chat general.
- **Nota técnica:** no es exactamente "creatividad". Es la temperatura aplicada al softmax que decide el siguiente token. Con `0.0` se toma siempre el token más probable; con valores altos se permite muestrear tokens menos probables.
- **Consejo:** para evals reproducibles y comparación de prompts, usa siempre `temperature=0.0`.

### Course satisfaction survey
Punto intermedio del curso donde se pide feedback. No es contenido técnico.

### Response streaming
Se recibe la respuesta token por token en lugar de esperar toda la generación.
```python
with client.messages.stream(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Cuenta una historia corta"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

    final_message = stream.get_final_message()
    print(f"\n\nTokens usados: {final_message.usage}")
```
- **Cuándo usar streaming:**
  - Chatbots en UI (mejora percepción de velocidad).
  - Respuestas largas donde ver el progreso importa.
  - Cancelación temprana si detectas que la respuesta va mal encaminada.
- **Cuándo NO usar streaming:**
  - Extracción de JSON estructurado (necesitas la respuesta completa para parsear).
  - Batch processing en background.
  - Cuando necesitas post-procesar la respuesta antes de mostrarla.
- **Bajo el capó:** Server-Sent Events (SSE). Cada chunk es un evento tipificado (`message_start`, `content_block_delta`, `message_stop`, etc.).

### Structured data
- Cómo obtener JSON confiable como salida.
- **Técnicas combinables:**
  1. Pedirlo explícitamente en el prompt: "Responde SOLO con JSON válido, sin markdown ni texto adicional."
  2. Dar un ejemplo del esquema esperado en el prompt.
  3. Usar etiquetas XML para delimitar el schema deseado.
  4. **Prefill del assistant:** enviar un mensaje `assistant` con `{` al final del array `messages` para forzar que la generación empiece siendo JSON.
- Ejemplo con prefill:
```python
messages = [
    {"role": "user", "content": "Extrae nombre y edad del texto: 'Juan tiene 30 años'"},
    {"role": "assistant", "content": "{"}  # prefill
]
response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=200,
    messages=messages,
    stop_sequences=["}"]  # opcional, para parar en cuanto cierre el objeto
)
json_str = "{" + response.content[0].text + "}"
data = json.loads(json_str)
```
- **Parseo defensivo:** siempre envolver `json.loads` en try/except y tener un plan B (reintentar con prompt más estricto, log de errores, valor por defecto).

### Structured data exercise
Ejercicio: extraer entidades de texto libre (nombre, email, teléfono, empresa) y devolver JSON válido y schema-consistente. Se verifica que la salida sea parseable y complete todos los campos requeridos.

### Quiz on accessing Claude with the API
Preguntas sobre autenticación, formato de mensajes, parámetros obligatorios, streaming, y salidas estructuradas.

---

## Módulo 4 — Prompt evaluation

> **Resumen del módulo:** Introduce la disciplina de evaluar prompts de forma sistemática. Se aprende el flujo estándar de evals (definir criterios, generar dataset, correr el prompt, calificar), incluyendo cómo generar datasets con ayuda de Claude y las dos grandes estrategias de calificación: **model-based grading** (usar a Claude como juez para tareas subjetivas) y **code-based grading** (comparaciones deterministas). Sin evals no hay mejora medible de prompts.

### Prompt evaluation
- **Por qué evaluar:** los LLMs no son deterministas; cambios sutiles en el prompt pueden mejorar o empeorar drásticamente los resultados. La única forma de saber si un cambio ayuda es medir.
- **Analogía:** los evals son a los prompts lo que los tests unitarios al código.
- **Sin evals:** estás haciendo "vibe-based prompt engineering" — funciona para prototipos, no para producción.
- **Con evals:** puedes iterar con confianza, comparar modelos, detectar regresiones al actualizar prompts o cambiar de versión de modelo.

### A typical eval workflow
Ciclo estándar de 5 pasos:
1. **Definir la tarea y criterios de éxito.** Ejemplo: "Clasificar tickets de soporte en 5 categorías. Éxito = accuracy > 90%."
2. **Generar dataset de prueba.** Casos representativos con input y output esperado.
3. **Ejecutar el prompt** sobre todo el dataset.
4. **Calificar cada salida** (grading automatizado).
5. **Analizar resultados** y ajustar prompt, modelo o parámetros.

- **Importante:** el dataset debe fijarse antes de empezar a iterar el prompt, para evitar sesgo.
- **Split típico:** dev set (para iterar) + test set (evaluación final, no se toca durante iteración).

### Generating test datasets
- **Opciones:**
  - **Manual:** casos escritos a mano. Alta calidad pero costoso.
  - **Datos reales anonimizados:** logs de producción con outputs verificados.
  - **Sintético con Claude:** pedirle a Claude que genere casos variados dado el enunciado de la tarea.
- **Cobertura recomendada:**
  - Happy path (casos comunes).
  - Edge cases (entradas raras, ambiguas, muy largas o muy cortas).
  - Adversariales (intentos de romper el prompt, injections, off-topic).
- **Ejemplo de meta-prompt para generar dataset:**
  ```
  Genera 20 tickets de soporte variados que cubran las categorías: billing,
  technical, feature_request, complaint, other. Devuelve JSON con `text` y `category`.
  Incluye casos ambiguos y multilíngües.
  ```

### Running the eval
- Iterar sobre el dataset, llamar la API para cada entrada, guardar la salida.
- **Estructura mínima:**
  ```python
  results = []
  for case in dataset:
      output = run_prompt(case["input"])
      results.append({
          "input": case["input"],
          "expected": case["expected"],
          "actual": output
      })
  ```
- **Consideraciones:**
  - Usar `temperature=0.0` para reproducibilidad.
  - Paralelizar con `asyncio` o `concurrent.futures` para acelerar (respetando rate limits).
  - Guardar resultados a disco (CSV/JSONL) para análisis posterior.
  - Loggear tokens usados para estimar costo.

### Model based grading
- Se usa a Claude como "juez" para evaluar respuestas subjetivas: calidad de redacción, tono, cortesía, precisión semántica, cumplimiento de una rúbrica.
- **Estructura del prompt de grading:**
  ```
  Eres un evaluador experto. Dada esta respuesta a evaluar y esta rúbrica,
  asigna un score de 1-5 y justifica.

  <respuesta>{output}</respuesta>
  <rubrica>Claridad, precisión técnica, tono profesional</rubrica>

  Devuelve JSON: {"score": N, "justificacion": "..."}
  ```
- **Buenas prácticas:**
  - Usar un modelo igual o más capaz que el que generó la respuesta.
  - Dar rúbrica clara con criterios específicos y ejemplos.
  - Pedir justificación (mejora la calidad del juicio y facilita debug).
  - Correr el grading varias veces y promediar para reducir varianza.

### Code based grading
- Cuando la salida es determinística, se compara con código puro.
- **Métodos comunes:**
  - Comparación exacta: `output == expected`.
  - Regex: `re.match(pattern, output)`.
  - Parseo JSON + comparación de campos.
  - Métricas cuantitativas: F1, precision/recall, exact match.
  - Validación contra schema (Pydantic, JSON Schema).
- **Ventajas frente al model-based:**
  - Instantáneo y gratis.
  - 100% reproducible.
  - No requiere prompt de juez.
- **Cuándo usar cada uno:**
  - Code-based → clasificación, extracción, salidas estructuradas.
  - Model-based → redacción libre, resúmenes, respuestas conversacionales.

### Exercise on prompt evals
Práctica: construir un pipeline completo de eval sobre un prompt de clasificación. Se aplica todo lo aprendido: dataset generado, ejecución, grading code-based, análisis del accuracy y comparación entre dos versiones del prompt.

### Quiz on prompt evaluation
Preguntas sobre metodología, cuándo usar cada tipo de grading, y buenas prácticas.

---

## Módulo 5 — Prompt engineering techniques

> **Resumen del módulo:** Técnicas prácticas de prompt engineering que producen mejoras medibles: ser claro y directo, ser específico en formato/tono/longitud, estructurar el contexto con etiquetas XML para separar datos de instrucciones, y proveer ejemplos few-shot para guiar el estilo y precisión de la respuesta. Es un módulo eminentemente aplicado, con ejercicios para combinar las cuatro técnicas.

### Prompt engineering
- **Definición:** disciplina empírica de diseñar instrucciones para LLMs de forma que maximicen la calidad y confiabilidad de la respuesta.
- **Principio guía:** trata al modelo como si fuera un colega inteligente pero nuevo en el proyecto. Necesita contexto, instrucciones claras y ejemplos.
- **Iterativo:** ningún prompt sale perfecto a la primera. Se prueba, se mide (con evals), se ajusta.
- **Portable pero no idéntico:** un prompt que funciona en Sonnet puede requerir ajustes al pasarlo a Haiku u Opus.

### Being clear and direct
- Regla base: escribir instrucciones como se le darían a un becario nuevo en su primer día.
- **Evitar ambigüedades:**
  - ❌ "Ayúdame con esto"
  - ✅ "Analiza el siguiente log de error, identifica la causa raíz y sugiere una solución"
- **Explicitar lo obvio:** los humanos infieren; los LLMs a veces también, pero es más confiable ser explícito.
- **Estructura recomendada:**
  1. Rol / contexto.
  2. Tarea específica.
  3. Datos de entrada.
  4. Formato de salida.
  5. Restricciones.

### Being specific
- **Detallar:** longitud exacta, tono, audiencia, formato preciso.
- **Comparación:**
  - ❌ "Escribe un resumen"
  - ✅ "Escribe un resumen ejecutivo de máximo 3 bullets, cada uno de máximo 15 palabras, dirigido a un CFO no técnico, en español neutro"
- **Cuantos más criterios objetivos aportes**, menos margen de interpretación tiene el modelo.
- **Anti-patrón:** ser tan específico que las reglas entran en contradicción entre sí — el modelo tiene que "elegir cuál obedecer" y la salida se vuelve impredecible.

### Structure with XML tags
- Claude está especialmente entrenado para reconocer etiquetas XML como delimitadores semánticos.
- **Ejemplo:**
  ```xml
  <document>
  {{contenido del documento a analizar}}
  </document>

  <instructions>
  Resume el documento anterior en 5 puntos clave.
  Enfócate en decisiones accionables.
  </instructions>
  ```
- **Ventajas:**
  - Separación clara entre datos e instrucciones.
  - Facilita el parseo si pides salidas con la misma estructura.
  - Reduce riesgo de prompt injection (contenido malicioso dentro del documento no se confunde con instrucciones).
  - Mejora la respuesta cuando se combinan varios bloques de contexto.
- **Convenciones útiles:**
  - `<document>`, `<example>`, `<instructions>`, `<context>`, `<output_format>`.
  - Puedes anidar libremente.
  - No hay etiquetas "oficiales" — nombra lo que te haga sentido.

### Providing examples
- Técnica llamada **few-shot prompting**: incluir 2-5 ejemplos input/output en el prompt.
- **Efecto:** el modelo infiere el patrón y lo aplica al nuevo caso.
- **Estructura recomendada:**
  ```xml
  <examples>
    <example>
      <input>El café estaba frío</input>
      <output>{"sentimiento": "negativo", "tema": "temperatura"}</output>
    </example>
    <example>
      <input>El servicio fue impecable</input>
      <output>{"sentimiento": "positivo", "tema": "servicio"}</output>
    </example>
  </examples>

  <task>Clasifica el siguiente comentario:</task>
  <input>Me encantó el postre pero la espera fue eterna</input>
  ```
- **Buenas prácticas:**
  - Cubrir la variedad esperada (positivo, negativo, ambiguo).
  - Mantener el mismo formato exacto en todos los ejemplos.
  - No poner demasiados (más de ~10 puede ser contraproducente y caro).
  - Si los ejemplos son largos, considerar prompt caching (Módulo 8).

### Exercise on prompting
Práctica combinando las cuatro técnicas anteriores en un prompt de clasificación/extracción real. Se mide cómo mejora cada técnica sumada.

### Quiz on prompt engineering techniques
Preguntas conceptuales sobre cuándo y cómo aplicar cada técnica.

---

## Módulo 6 — Tool use with Claude

> **Resumen del módulo:** Cubre en profundidad el mecanismo de **function calling** de Claude. Se aprende a definir funciones y sus schemas JSON, manejar los bloques `tool_use` / `tool_result` en la conversación, implementar loops multi-turno donde Claude encadena varias tools, controlar de forma granular cuándo y cómo llama a cada una (`tool_choice`), y usar las tools nativas de Anthropic como **text edit** (edición de archivos) y **web search**. Es el módulo bisagra: habilita la mayoría de casos de uso reales donde Claude interactúa con sistemas externos.

### Introducing tool use
- **Concepto:** Claude no ejecuta código por sí mismo. Cuando decide que necesita usar una herramienta, devuelve un bloque especial diciendo qué tool quiere invocar y con qué argumentos. Tu código ejecuta la tool y le devuelve el resultado. Claude continúa desde ahí.
- **Flujo completo:**
  1. Tú declaras las tools disponibles en el request.
  2. Claude, si lo considera útil, responde con `stop_reason: "tool_use"` y un bloque `tool_use`.
  3. Tu código ejecuta la función correspondiente.
  4. Envías un nuevo mensaje `user` con un bloque `tool_result` referenciando el `tool_use_id`.
  5. Claude usa el resultado para producir su respuesta final (o pide otra tool).
- **Analogía:** Claude es el "cerebro" que planea; tú eres las "manos" que ejecutan.

### Project overview
- Proyecto guía del módulo: un agente que puede consultar información externa (base de datos simulada, cálculos matemáticos, APIs).
- Sirve de hilo conductor para las lecciones siguientes.

### Tool functions
- Son las funciones Python reales que ejecutarán la lógica cuando Claude pida la tool.
- Deben ser:
  - **Deterministas** (mismo input → mismo output, cuando sea posible).
  - **Tipadas** (para facilitar el schema).
  - **Con manejo de errores** (nunca dejar que exploten hacia arriba sin capturar).
  - **Idempotentes** cuando aplique (especialmente si Claude pudiera llamarlas varias veces).
- Ejemplo:
  ```python
  def get_weather(city: str) -> dict:
      try:
          # ... llamada a API real ...
          return {"city": city, "temp_c": 22, "conditions": "soleado"}
      except Exception as e:
          return {"error": str(e)}
  ```

### Tool schemas
Cada tool se describe con JSON Schema para que Claude sepa qué hace y qué argumentos acepta:
```python
tools = [{
    "name": "get_weather",
    "description": "Obtiene el clima actual de una ciudad dada. "
                   "Devuelve temperatura en Celsius y condiciones.",
    "input_schema": {
        "type": "object",
        "properties": {
            "city": {
                "type": "string",
                "description": "Nombre de la ciudad (ej. 'Manizales')"
            }
        },
        "required": ["city"]
    }
}]
```
- **Reglas clave:**
  - La `description` es lo que Claude lee para decidir cuándo usar la tool. **Escribirla como si fuera documentación para otro dev.**
  - Cada propiedad también debe tener `description`.
  - Los campos `required` deben ser exactos.
  - Nombres de tool en `snake_case`.

### Handling message blocks
- La respuesta viene como lista de bloques mezclados: `text`, `tool_use`, etc.
- Se debe iterar y decidir según el tipo:
  ```python
  for block in response.content:
      if block.type == "text":
          print("Claude dice:", block.text)
      elif block.type == "tool_use":
          print("Claude quiere usar tool:", block.name, block.input)
  ```
- El indicador principal es `response.stop_reason`:
  - `"end_turn"` → terminó normalmente.
  - `"tool_use"` → quiere que ejecutes una tool.
  - `"max_tokens"` → se topó con el límite (respuesta puede estar cortada).
  - `"stop_sequence"` → paró en una secuencia definida.

### Sending tool results
Se responde con un mensaje `role: "user"` que contiene un bloque `tool_result`:
```python
messages.append({
    "role": "assistant",
    "content": response.content  # incluye el tool_use original
})

messages.append({
    "role": "user",
    "content": [{
        "type": "tool_result",
        "tool_use_id": "toolu_01ABC...",
        "content": "El clima en Manizales es 22°C, soleado"
    }]
})
```
- **Reglas importantes:**
  - El `tool_use_id` debe coincidir exactamente con el del bloque `tool_use` original.
  - El `content` del tool_result puede ser string o lista de bloques (útil para incluir imágenes en resultados).
  - Debes reenviar todo el historial, incluyendo el mensaje del assistant con el `tool_use`.

### Multi-turn conversations with tools
- Combina tool use con conversación normal.
- El historial acumula bloques de todo tipo: `text` del usuario, mezclas de `text` + `tool_use` del assistant, `tool_result` del usuario, etc.
- Claude mantiene coherencia entre turnos usando todo ese contexto.

### Implementing multiple turns
Loop clásico de agente con tools:
```python
while True:
    response = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=1024,
        tools=tools,
        messages=messages
    )
    messages.append({"role": "assistant", "content": response.content})

    if response.stop_reason == "end_turn":
        break

    if response.stop_reason == "tool_use":
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = execute_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(result)
                })
        messages.append({"role": "user", "content": tool_results})
```
- **Salvaguardas:** agregar un límite máximo de iteraciones (`max_turns = 10`) para evitar loops infinitos si Claude se traba pidiendo tools sin parar.

### Using multiple tools
- Puedes declarar múltiples tools en el mismo request; Claude elige la más apropiada según el contexto.
- Claude puede pedir **varias tools en paralelo** en un solo turno (parallel tool use): la respuesta trae varios bloques `tool_use` a la vez y tú devuelves varios `tool_result` en un solo mensaje.
- Útil para tareas que requieren obtener datos de fuentes distintas simultáneamente (ej. clima + noticias + agenda para armar un briefing).

### Fine grained tool calling
- **`tool_choice`** controla el comportamiento:
  - `{"type": "auto"}` → default. Claude decide si usar o no una tool.
  - `{"type": "any"}` → Claude está obligado a usar alguna tool (la que sea).
  - `{"type": "tool", "name": "get_weather"}` → forzar una tool específica.
  - `{"type": "none"}` → prohibir tools en este turno.
- **Streaming de tool calls:** posible pero requiere reconstruir el JSON de argumentos por chunks.
- **Validación:** siempre validar los argumentos que Claude te pasa antes de ejecutar (esquema Pydantic, checks de rangos, sanitización).

### The text edit tool
- Tool predefinida por Anthropic (no la implementas tú, viene "bundled").
- Comandos: `view`, `create`, `str_replace`, `insert`, `undo_edit`.
- Se usa mucho en agentes de código (Claude Code la usa internamente).
- Se activa declarándola con el tipo especial:
  ```python
  tools = [{"type": "text_editor_20250124", "name": "str_replace_editor"}]
  ```

### The web search tool
- Tool nativa de Anthropic para buscar en la web sin que tengas que implementar un crawler o llamar a APIs externas.
- Activación:
  ```python
  tools = [{"type": "web_search_20250305", "name": "web_search"}]
  ```
- Claude decide autónomamente cuándo buscar, formula la query, procesa resultados y cita fuentes.
- Muy útil para información fresca o dominios donde el conocimiento de entrenamiento está desactualizado.
- Se factura aparte por búsqueda.

### Quiz on tool use with Claude
Preguntas sobre el flujo tool_use → tool_result, tool_choice, tools nativas y patrones multi-turno.

---

## Módulo 7 — RAG and Agentic Search

> **Resumen del módulo:** Enseña a construir sistemas de **Retrieval Augmented Generation**: recuperar documentos relevantes de una base de conocimiento externa y pasárselos a Claude como contexto. Cubre las estrategias clave de chunking, generación y almacenamiento de embeddings, el flujo end-to-end de un pipeline RAG, la búsqueda léxica con BM25 y cómo combinar ambos enfoques en un **pipeline multi-índice** (búsqueda híbrida) para maximizar precisión. Base fundamental para aplicaciones con conocimiento propietario.

### Introducing Retrieval Augmented Generation
- **RAG** = combinar recuperación de información con generación de LLM.
- **Problema que resuelve:**
  - El modelo no conoce datos propietarios (documentos internos, tickets, wiki de la empresa).
  - El modelo tiene un knowledge cutoff (no sabe de eventos posteriores al entrenamiento).
  - No cabe todo el conocimiento en el context window en cada request.
- **Solución:** antes de preguntarle a Claude, buscar los K fragmentos más relevantes en una base externa y adjuntarlos al prompt.
- **Ventajas frente a fine-tuning:**
  - Actualizable en tiempo real (agrega/quita documentos sin re-entrenar).
  - Trazable (puedes citar de dónde salió cada dato).
  - Más barato.

### Text chunking strategies
- **Fixed-size:** dividir cada N tokens/caracteres. Simple pero rompe frases y contexto.
- **Recursive:** intentar dividir por separadores en orden (párrafo → oración → palabra). Preserva mejor el significado.
- **Semantic:** usar embeddings para agrupar contenido relacionado. Más costoso pero de mejor calidad.
- **Con overlap:** solapar chunks (ej. últimas 50 palabras del anterior en el siguiente) para no perder contexto en fronteras.
- **Recomendaciones prácticas:**
  - Chunks de 200–500 tokens funcionan bien para la mayoría de casos.
  - Ajustar según tipo de documento (código, prosa, tablas requieren estrategias distintas).
  - Guardar metadata por chunk (documento fuente, página, sección) para citación posterior.

### Text embeddings
- Vectores densos (típicamente 512–3072 dimensiones) que representan significado semántico.
- Textos con significado similar → vectores cercanos en el espacio.
- **Modelos recomendados por Anthropic:** Voyage AI (`voyage-3`, `voyage-code-3`).
- **Almacenamiento:** vector databases.
  - **Managed:** Pinecone, Weaviate Cloud, Qdrant Cloud.
  - **Self-hosted:** pgvector (Postgres), Chroma, Milvus, Qdrant.
  - **En memoria:** FAISS (para prototipos).
- **Búsqueda:** similitud coseno o distancia euclidiana. Top-K vecinos más cercanos al vector de la query.

### The full RAG flow
Dos fases claras:
1. **Ingesta (offline):**
   - Cargar documentos.
   - Chunking.
   - Generar embedding por chunk.
   - Almacenar vector + chunk + metadata.
2. **Query (online):**
   - Recibir pregunta del usuario.
   - Generar embedding de la query.
   - Buscar top-K chunks más similares.
   - Construir prompt: system + contexto (chunks recuperados) + pregunta.
   - Llamar a Claude.
   - Devolver respuesta (idealmente con citas).

### Implementing the RAG flow
Código end-to-end del pipeline:
```python
# Ingesta
chunks = chunk_document(text, size=500, overlap=50)
embeddings = voyage_client.embed(chunks, model="voyage-3").embeddings
vector_db.upsert([
    {"id": i, "vector": e, "text": c}
    for i, (e, c) in enumerate(zip(embeddings, chunks))
])

# Query
q_emb = voyage_client.embed([user_question], model="voyage-3").embeddings[0]
top_chunks = vector_db.search(q_emb, top_k=5)

context = "\n---\n".join(c["text"] for c in top_chunks)
prompt = f"<context>{context}</context>\n\nPregunta: {user_question}"

response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": prompt}]
)
```

### BM25 lexical search
- Algoritmo estadístico clásico de information retrieval basado en frecuencia de términos.
- **Ventajas frente a embeddings:**
  - Excelente para búsqueda de términos exactos: nombres propios, códigos, IDs, siglas.
  - Interpretable (sabes por qué un doc scoreó alto).
  - No requiere modelo ni GPU.
- **Desventaja:** no captura sinonimia ("carro" vs "auto") ni semántica.
- **Librerías comunes:** `rank_bm25` en Python, o motores como Elasticsearch/OpenSearch/Meilisearch.

### A Multi-Index RAG pipeline
- **Búsqueda híbrida** = combinar BM25 + embeddings:
  1. Correr ambas búsquedas en paralelo.
  2. Fusionar resultados (Reciprocal Rank Fusion es popular).
  3. Opcionalmente, re-rankear con un modelo dedicado (Voyage rerank, Cohere rerank).
- Suele superar por 10–30% al mejor de los dos por separado.
- **Contextual Retrieval de Anthropic:** técnica adicional donde antes de embedear cada chunk, se le prefija un contexto generado por Claude ("Este chunk viene del documento X, sección Y, y habla sobre..."). Mejora la precisión de retrieval significativamente. Suele combinarse con prompt caching para abaratar el costo de generar los contextos.

---

## Módulo 8 — Features of Claude

> **Resumen del módulo:** Recorre las capacidades diferenciales de Claude más allá del texto plano: **extended thinking** para razonamiento profundo, soporte de **imágenes** y **PDFs** para multimodalidad, **citations** para respuestas verificables contra documentos fuente, **prompt caching** para reducir costo y latencia hasta un 90%, y **code execution + Files API** para ejecutar Python en sandbox y reutilizar archivos entre requests. Después de este módulo se sabe cuándo activar cada feature según el caso de uso.

### Extended thinking
- Modo en el que Claude "razona en voz alta" antes de responder.
- Se activa con:
  ```python
  response = client.messages.create(
      model="claude-sonnet-4-5",
      max_tokens=8000,
      thinking={"type": "enabled", "budget_tokens": 5000},
      messages=[...]
  )
  ```
- El `budget_tokens` es el máximo que Claude puede gastar en el "razonamiento interno" antes de dar la respuesta final.
- La respuesta trae bloques `thinking` (razonamiento) además de los `text` normales.
- **Cuándo usarlo:**
  - Matemáticas complejas.
  - Depuración de código no trivial.
  - Análisis multi-paso.
  - Tareas donde ver el razonamiento ayuda a validar el resultado.
- **Costo:** los tokens de thinking se cobran como output.

### Image support
- Multimodalidad nativa: enviar imágenes en el mismo request.
- Formatos soportados: JPEG, PNG, GIF, WebP.
- Envío por base64 o URL:
  ```python
  {
      "role": "user",
      "content": [
          {
              "type": "image",
              "source": {
                  "type": "base64",
                  "media_type": "image/png",
                  "data": base64_string
              }
          },
          {"type": "text", "text": "¿Qué hay en esta imagen?"}
      ]
  }
  ```
- **Casos de uso:**
  - OCR (extraer texto de screenshots, facturas, formularios).
  - Análisis de gráficas y dashboards.
  - Descripción para accesibilidad.
  - Extracción de datos de UIs o documentos escaneados.
  - Detección de defectos, revisión de diseños.

### PDF support
- Envío directo de PDFs como bloques `document`:
  ```python
  {
      "type": "document",
      "source": {
          "type": "base64",
          "media_type": "application/pdf",
          "data": base64_pdf
      }
  }
  ```
- Claude procesa **tanto el texto como las imágenes** de cada página.
- Límite típico: 100 páginas por request.
- **Casos de uso:**
  - Análisis de contratos.
  - Extracción de datos de reportes financieros.
  - Resumen de papers académicos.
  - QA sobre manuales técnicos.

### Citations
- Feature nativa: Claude cita el fragmento exacto del documento fuente que sustenta cada afirmación.
- Se activa con `"citations": {"enabled": true}` en el bloque documento.
- La respuesta incluye referencias verificables con offsets de caracteres o índices de página.
- **Reduce alucinaciones significativamente**: si Claude no encuentra sustento en las fuentes, tiende a decirlo en lugar de inventar.
- Clave para casos regulados: legal, médico, financiero, académico.

### Prompt caching
- Cachea porciones del prompt (system, tools, documentos, ejemplos) para reutilizar entre requests.
- **Ahorro:** hasta 90% en costo del contenido cacheado y reducción significativa de latencia.
- **Ideal para:**
  - System prompts largos que no cambian entre requests.
  - Documentos grandes usados como contexto repetidamente.
  - Ejemplos few-shot que se repiten.

### Rules of prompt caching
- Se marca con `cache_control: {"type": "ephemeral"}` en el bloque a cachear:
  ```python
  system=[
      {
          "type": "text",
          "text": "Instrucciones muy largas...",
          "cache_control": {"type": "ephemeral"}
      }
  ]
  ```
- **Reglas clave:**
  - Mínimo de tokens para que sea cacheable (varía por modelo: ~1024 para Sonnet, ~2048 para Opus).
  - TTL por defecto ~5 minutos (existe extended cache de 1 hora, cobrada a precio diferente).
  - El **orden importa**: contenido cacheado va al inicio; contenido dinámico al final. Cualquier cambio antes del breakpoint invalida el caché.
  - Se pueden definir hasta 4 breakpoints de cache en un mismo request.

### Prompt caching in action
Ejemplo práctico:
```python
response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": documento_gigante,
            "cache_control": {"type": "ephemeral"}
        }
    ],
    messages=[{"role": "user", "content": pregunta_del_usuario}]
)
print(response.usage)
# cache_creation_input_tokens: tokens que se guardaron por primera vez
# cache_read_input_tokens: tokens leídos del caché (baratos)
```
- La primera llamada cuesta más (creación de caché); las siguientes que reutilicen el caché cuestan una fracción.

### Code execution and the Files API
- **Files API:**
  - Subir archivos una vez y referenciarlos por `file_id` en múltiples requests.
  - Evita tener que reenviar PDFs/imágenes grandes cada turno.
- **Code execution tool:**
  - Tool nativa que ejecuta Python en un sandbox aislado.
  - Útil para análisis de datos, generación de gráficas (matplotlib), cálculos complejos, verificación de código.
  - Sin acceso a internet ni al sistema anfitrión, solo Python + librerías estándar + algunas científicas.
  - Se activa como cualquier tool nativa: `{"type": "code_execution_20250522", "name": "code_execution"}`.

### Quiz on features of Claude
Preguntas sobre extended thinking, multimodalidad, citations, prompt caching y code execution.

---

## Módulo 9 — Model Context Protocol (MCP)

> **Resumen del módulo:** Presenta MCP, el estándar abierto creado por Anthropic para conectar LLMs con tools y datos externos de forma uniforme (el "USB-C para IA"). Se aprende a construir tanto **servidores MCP** (que exponen tools, resources y prompts) como **clientes MCP** (que los consumen), usar el server inspector para debug y entender la diferencia entre los tres primitivos del protocolo. Es la vía moderna para integrar Claude con cualquier sistema sin reinventar el pegamento cada vez.

### Introducing MCP
- **Model Context Protocol** = estándar abierto para conectar LLMs con herramientas y datos externos.
- Creado por Anthropic pero abierto a todo el ecosistema (Cursor, VS Code, Zed, etc. ya lo soportan).
- **Analogía:** "USB-C para IA". Antes cada integración era ad-hoc; ahora hay un protocolo común.
- **Arquitectura cliente-servidor:**
  - **Servidor MCP:** expone capacidades (tools, resources, prompts).
  - **Cliente MCP:** las descubre y consume (Claude Desktop, Claude Code, tu app custom).
- **Transporte:** stdio (proceso local) o HTTP/SSE (remoto).

### MCP clients
- Un cliente es cualquier app que sabe hablar el protocolo MCP.
- Ejemplos oficiales: Claude Desktop, Claude Code.
- Se puede construir tu propio cliente (para integrarlo en un chatbot custom).
- El cliente maneja: descubrimiento de servidores, listado de capacidades, invocación de tools, gestión de la conexión.

### Project setup
- Instalar SDK oficial:
  ```bash
  pip install mcp
  ```
- Estructura típica del proyecto:
  ```
  mi-server-mcp/
    ├── pyproject.toml
    ├── server.py
    └── README.md
  ```
- Definir el entry point del servidor en `pyproject.toml` para que sea ejecutable.

### Defining tools with MCP
- Con el SDK, decorar funciones para exponerlas como tools:
  ```python
  from mcp.server.fastmcp import FastMCP

  mcp = FastMCP("Mi Servidor")

  @mcp.tool()
  def calculate(a: int, b: int) -> int:
      """Suma dos números enteros"""
      return a + b

  if __name__ == "__main__":
      mcp.run()
  ```
- El SDK **genera automáticamente el JSON Schema** a partir de la firma tipada y el docstring.
- Se pueden exponer múltiples tools en un mismo servidor.

### The server inspector
- CLI oficial (`mcp inspector`) para probar el servidor manualmente antes de conectarlo a un cliente.
- Permite:
  - Listar tools/resources/prompts.
  - Invocar tools con argumentos arbitrarios.
  - Ver requests y responses del protocolo.
- Herramienta esencial para debug durante el desarrollo.

### Implementing a client
- Cliente Python básico:
  - Conectar al servidor (stdio o HTTP).
  - Llamar a `list_tools()` para descubrir capacidades.
  - Invocar tool con `call_tool(name, arguments)`.
- El cliente traduce entre el protocolo MCP y la API de Claude:
  - Convierte los tools MCP a formato de tools de la API de Anthropic.
  - Cuando Claude pide una tool, el cliente la invoca vía MCP.
  - Devuelve el resultado a Claude.

### Defining resources
- **Resources** = datos que el servidor expone al cliente.
- Se identifican por URI: `file:///path`, `postgres://tabla/fila`, `github://repo/archivo`, etc.
- Ejemplo:
  ```python
  @mcp.resource("config://app-settings")
  def get_settings() -> str:
      return json.dumps({"debug": True, "region": "us-east-1"})
  ```
- Diferencia con tools: los resources son **data-first**, sin side effects. Tools ejecutan acciones.

### Accessing resources
- El cliente lista con `resources/list` y lee con `resources/read`.
- El usuario (o Claude, si se les pasa) decide cuáles adjuntar al contexto.
- Ejemplo de flujo: Claude Desktop muestra al usuario un botón para "Adjuntar resource"; el contenido se agrega al mensaje.

### Defining prompts
- **Prompts** = plantillas reutilizables que el servidor pone a disposición del cliente.
- Ejemplo:
  ```python
  @mcp.prompt()
  def code_review(language: str, code: str) -> str:
      return f"Revisa el siguiente código {language}:\n\n{code}"
  ```
- El usuario los selecciona desde la UI del cliente (menú de "prompts sugeridos").
- Útil para encapsular workflows recurrentes de una organización.

### Prompts in the client
- Cómo el cliente descubre y muestra los prompts al usuario final.
- El cliente pide `prompts/list`, muestra opciones, pide `prompts/get` con parámetros y usa el texto retornado como mensaje inicial.

### MCP review
Recap de los tres primitivos:
- **Tools** → acciones (function calling). El LLM decide cuándo usarlas.
- **Resources** → datos disponibles. El usuario (o el cliente) decide cuándo adjuntarlos.
- **Prompts** → plantillas. El usuario las invoca desde la UI.

Cuándo usar cada uno:
- ¿Ejecuta código o cambia estado? → **Tool**.
- ¿Es información que puede leerse? → **Resource**.
- ¿Es un template de conversación? → **Prompt**.

### Quiz on Model Context Protocol
Preguntas sobre arquitectura, primitivos, cuándo usar cada uno, protocolo cliente/servidor.

---

## Módulo 10 — Anthropic apps (Claude Code y Computer Use)

> **Resumen del módulo:** Panorama de los productos oficiales de Anthropic construidos sobre la API, con foco en **Claude Code**: instalación, uso agéntico en un repositorio real (refactor, debugging, tests, exploración de código) y cómo potenciarlo conectándolo a servidores MCP externos (GitHub, Postgres, Slack, etc.). También introduce **Computer Use** para automatización de UI. Módulo muy práctico para desarrolladores que quieren delegar tareas de código.

### Anthropic apps
- Panorama de productos Anthropic:
  - **Claude.ai** (web/desktop/mobile): chat consumer.
  - **Claude Code**: agente de código en terminal / VS Code / JetBrains.
  - **Computer Use**: capacidad de Claude para controlar la interfaz gráfica (mouse, teclado, capturas).
  - **API + integraciones nativas** (Claude en Excel, en PowerPoint, en Chrome, en Slack).

### Claude Code setup
- Instalación:
  ```bash
  npm install -g @anthropic-ai/claude-code
  ```
- Requisitos: Node.js (versión reciente), terminal, cuenta Anthropic o API key.
- Autenticación: `claude` en el terminal lanza el login OAuth o pide la API key.
- **Configuración importante:**
  - Archivo `CLAUDE.md` en la raíz del repo: contexto persistente que Claude Code lee siempre (arquitectura, convenciones, comandos comunes).
  - Configuración de permisos (qué comandos puede ejecutar sin pedir confirmación).
  - Configuración de MCP servers (ver siguiente lección).

### Claude Code in action
- Casos de uso:
  - Refactor de módulos completos.
  - Debugging con lectura de logs y stack traces.
  - Generación de tests unitarios y de integración.
  - Migraciones (ej. Angular 15 → 17, Python 3.9 → 3.12).
  - Exploración de repos grandes ("¿dónde se calcula el impuesto?").
  - Escritura de documentación técnica.
- **Uso agéntico:** Claude lee archivos, corre comandos (`grep`, `pytest`, `npm test`), edita código, verifica resultados, itera. Todo sin intervención manual paso a paso.

### Enhancements with MCP servers
- Conectar Claude Code a servidores MCP externos amplía sus capacidades sin escribir código adicional.
- Ejemplos populares:
  - **GitHub MCP:** listar PRs, revisar issues, comentar.
  - **Postgres MCP:** consultar la DB directamente.
  - **Slack MCP:** leer mensajes, publicar en canales.
  - **Filesystem MCP custom:** exponer directorios específicos con permisos controlados.
- Configuración típica en `.mcp.json` o vía `claude mcp add`.

---

## Módulo 11 — Agents and workflows

> **Resumen del módulo:** Cierra la parte técnica con los patrones arquitectónicos para construir sistemas basados en LLMs. Se aprende la distinción fundamental entre **workflows** (flujos predefinidos, predecibles) y **agents** (el LLM decide dinámicamente), y los patrones concretos de workflow: **paralelización** (sectioning y voting), **chaining** (encadenamiento de pasos) y **routing** (clasificación + enrutamiento a pipelines especializados). Cierra con el loop clásico de un agente, la importancia de inspeccionar el entorno y la recomendación de Anthropic: empezar siempre por lo más simple y escalar a agente solo cuando el problema lo justifique.

### Agents and workflows
- Distinción (basada en el post *"Building effective agents"* de Anthropic):
  - **Workflow:** flujo predefinido donde el LLM se usa en pasos concretos, orquestados por código. Predictible, testeable, más barato.
  - **Agent:** el LLM decide dinámicamente qué hacer y cuándo parar, en un loop abierto. Flexible, pero menos predecible y más caro.
- **Regla de oro:** los workflows suelen ser suficientes; los agentes se justifican cuando el número de pasos y las decisiones son imposibles de predefinir.

### Parallelization workflows
Dos variantes principales:
- **Sectioning:** dividir la tarea en subtareas independientes, ejecutarlas en paralelo, combinar los resultados.
  - Ejemplo: analizar 10 documentos ejecutando 10 llamadas concurrentes en lugar de secuenciales.
- **Voting:** ejecutar la misma tarea N veces con `temperature > 0` y hacer voto mayoritario.
  - Reduce varianza en clasificaciones críticas.
  - Costo N veces mayor pero mucho más confiable.
- Se implementan con `asyncio`, `concurrent.futures`, o queues.

### Chaining workflows
- Salida del LLM #1 → input del LLM #2 → etc.
- Cada paso es más simple y evaluable por separado.
- Ejemplo:
  1. Extraer datos crudos.
  2. Normalizar.
  3. Enriquecer con contexto.
  4. Generar reporte final.
- **Ventajas:** cada paso puede usar modelo distinto (Haiku para pasos simples, Opus solo donde importa), se debuggean por separado, se pueden reintentar pasos fallidos sin repetir todo.

### Routing workflows
- Un LLM inicial clasifica el input y lo enruta al pipeline especializado.
- Ejemplo (soporte al cliente):
  - Input: "No me llega el email de confirmación."
  - Router clasifica: `billing` / `technical` / `account`.
  - Enruta a pipeline "technical" con prompt específico y tools de logging.
- **Ventaja:** cada pipeline puede optimizarse independientemente.

### Agents and tools
Loop clásico de agente:
```
mientras no termine:
    LLM decide siguiente acción (tool o respuesta final)
    si es tool: ejecutar → agregar resultado al contexto
    si es respuesta final: romper el loop
```
- **Salvaguardas necesarias en producción:**
  - Límite de iteraciones (`max_turns`).
  - Timeout global.
  - Presupuesto de tokens.
  - Logging exhaustivo para debug.
  - Human-in-the-loop en decisiones críticas.

### Environment inspection
- Un agente debe poder **inspeccionar su entorno** antes de actuar: listar archivos, ver schema de DB, chequear estado del sistema.
- Tools tipo `view`, `list_files`, `describe_table`, `get_env` son fundamentales.
- Sin inspección, el agente actúa a ciegas y comete errores obvios.

### Workflows vs agents
Recomendación explícita de Anthropic:
- Empezar siempre por **lo más simple**.
- Prompt directo → si no basta, workflow de chaining → si no basta, routing → si no basta, agente.
- Los agentes cuestan más, tardan más y fallan de formas más impredecibles.
- Justificarlos requiere que el problema sea genuinamente open-ended.

### Quiz on Agents and Workflows
Preguntas sobre patrones, cuándo usar cada uno, y diferencia agente vs workflow.

---

## Módulo 12 — Final assessment y wrap up

> **Resumen del módulo:** Cierre del curso con una evaluación final integradora que cubre todos los módulos anteriores y una guía de próximos pasos para seguir aprendiendo: documentación oficial, cookbook con ejemplos reales y comunidad de desarrolladores. Sirve para consolidar lo aprendido y planear cómo aplicarlo en proyectos propios.

### Final Assessment
- Quiz integrador que cubre todos los módulos: API basics, evals, prompt engineering, tool use, RAG, features, MCP, apps y agentes.
- Sirve para identificar áreas donde repasar.

### Course Wrap Up
- Cierre del curso y próximos pasos:
  - Documentación oficial: `docs.anthropic.com`.
  - Cookbook con ejemplos: `github.com/anthropics/anthropic-cookbook`.
  - Comunidad de desarrolladores (Discord, GitHub Discussions).
  - Blog de Anthropic para novedades sobre modelos y features.
- Sugerencia final: aplicar lo aprendido construyendo un proyecto propio de punta a punta.

---

## Ruta de estudio sugerida

1. **Semana 1** — Módulos 1-3: fundamentos de la API y primera app funcional.
2. **Semana 2** — Módulos 4-5: evals y prompt engineering (base para todo lo demás).
3. **Semana 3** — Módulo 6: tool use (habilita la mayoría de casos prácticos).
4. **Semana 4** — Módulos 7-8: RAG y features avanzados.
5. **Semana 5** — Módulos 9-10: MCP y Claude Code.
6. **Semana 6** — Módulo 11 + assessment: agentes y arquitectura.

## Recursos complementarios

- Documentación oficial: https://docs.anthropic.com
- Cookbook con ejemplos: https://github.com/anthropics/anthropic-cookbook
- Post *"Building effective agents"*: https://www.anthropic.com/engineering/building-effective-agents
- Contextual Retrieval: https://www.anthropic.com/news/contextual-retrieval
- MCP: https://modelcontextprotocol.io
