# 🎭 Groucho Quotes Game
Juego web desarrollado como proyecto de práctica para reforzar
conceptos de HTML, CSS y JavaScript puro, sin uso de frameworks.

Un juego interactivo donde debes ordenar palabras desordenadas para formar
frases célebres de Groucho Marx, con sistema de verificación y validación.

## ✅ Características
- Sistema de acceso: Validación de usuario, email y prueba CAPTCHA matemática
- Frases de Groucho Marx: 5 frases célebres aleatorias
- Área roja para construir la frase
- Interacción drag & drop con clics
- Expresiones regulares para nombre y email
- Operación matemática aleatoria para verificar humano
- Verificación de frase reconstruida
- Sistema de retroalimentación: Mensajes de éxito/error inmediatos
- Diseño de dos fases: Formulario de acceso + interfaz de juego
- Interfaz visual clara: Colores diferenciados por áreas

## 🎮 Frases del juego
El juego incluye 5 frases célebres de Groucho Marx:

- "I refuse to join any club that would have me for a member"
- "If you're not having fun, you're doing something wrong"
- "Do you mind if I don't smoke?"
- "Those are my principles, and if you don't like them... well, I have others"
- "Either this man is dead or my watch has stopped."

## 🔐 Sistema de validación
- Nombre: Expresión regular /^[a-zA-ZÀ-ÿ0-9\s'-]{2,50}$/
- Email: Expresión regular estándar para emails
- CAPTCHA: Suma de dos números aleatorios (1-100)
- Transición suave: Formulario se oculta, juego se muestra


## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3 (Flexbox, efectos visuales, diseño responsive)
- JavaScript (ES6)
- Expresiones regulares para validación

## 📋 Uso
Fase 1: Validación de acceso
- Introduce tu nombre (sólo letras, números y espacios)
- Ingresa un email válido
- Resuelve la suma matemática que se muestra
- Haz clic en "Start" para comenzar

Fase 2: Juego
- Haz clic en palabras del área azul (desordenadas) para moverlas al área roja
- Ordena las palabras en el área roja para formar la frase original
- Haz clic en palabras del área roja para devolverlas al área azul si es necesario
- Usa el botón "Comprobar" para verificar tu solución
- Recibirás retroalimentación inmediata (¡Correcto! o ¡Incorrecto!)

## 📁 Estructura del proyecto
```text
order-words/
├── index.html      # Estructura principal con formulario y juego
├── styles.css      # Estilos y diseño visual
├── script.js       # Lógica del juego y validaciones
└── README.md       # Documentación
```

## 🔧 Instalación
1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/order-words.git
```
2. Accede al directorio del proyecto:

```bash
cd order-words
```
3. Abre el archivo index.html en tu navegador.
