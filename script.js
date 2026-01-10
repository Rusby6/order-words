document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "I refuse to join any club that would have me for a member",
    "If you're not having fun, you're doing something wrong",
    "Do you mind if I don't smoke?",
    "Those are my principles, and if you don't like them... well, I have others",
    "Either this man is dead or my watch has stopped.",
  ];

  // Generar números para la suma
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const sumaCorrecta = num1 + num2;

  // Mostrar los números para la suma
  document.getElementById("adden1").textContent = num1;
  document.getElementById("adden2").textContent = num2;

  // Elementos del formulario
  const user = document.getElementById("myname");
  const expUser = /^[a-zA-ZÀ-ÿ0-9\s'-]{2,50}$/; 
  const email = document.getElementById("myemail");
  const expEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //
  const result = document.getElementById("addition");
  const btnStart = document.getElementById("btnStart");
  const mensajeError = document.getElementById("mensajeError"); 

  let fraseRandom = "";
  let palabras = [];

  btnStart.addEventListener("click", (e) => {
    e.preventDefault();
    
    const isUserValid = expUser.test(user.value.trim());
    const isEmailValid = expEmail.test(email.value.trim());
    const isResultValid = parseInt(result.value) === sumaCorrecta;
    
    if (!isUserValid || !isEmailValid || !isResultValid) {
      mensajeError.style.display = "block";
      return;
    }

    // Ocultar formulario y mostrar juego
    mensajeError.style.display = "none";
    const login = document.querySelector(".login");
    login.style.display = "none";
    const juego = document.getElementById("game");
    juego.style.display = "block";

    iniciarJuego();
  });

  function iniciarJuego() {
    const desorden = document.getElementById("disorder");
    const orden = document.getElementById("guess");
    
    desorden.innerHTML = "";
    orden.innerHTML = "";

    // Seleccionar frase aleatoria
    const randomIndex = Math.floor(Math.random() * quotes.length);
    fraseRandom = quotes[randomIndex];

    // Dividir y desordenar palabras
    palabras = fraseRandom.split(" ");
    const fraseDesorden = [...palabras].sort(() => Math.random() - 0.5);

    // Crear elementos para palabras desordenadas
    fraseDesorden.forEach((palabra) => {
      const span = document.createElement("span");
      span.textContent = palabra + " "; 
      span.style.marginRight = "5px";
      span.style.cursor = "pointer";
      span.style.display = "inline-block";
      desorden.appendChild(span);

      // Mover de desorden a orden
      span.addEventListener("click", function moverAOrden(e) {
        e.target.remove();
        e.target.removeEventListener("click", moverAOrden);
        
        const nuevoSpan = e.target.cloneNode(true);
        nuevoSpan.addEventListener("click", function moverADesorden(e2) {
          e2.target.remove();
          desorden.appendChild(e2.target);
        });
        
        orden.appendChild(nuevoSpan);
      });
    });
  }

  const btnCheck = document.getElementById("check");
  btnCheck.addEventListener("click", () => {
    const fraseUsuario = document.getElementById("guess").textContent.trim();
    const mensajeSpan = document.getElementById("message");

    if (fraseUsuario === fraseRandom) {
      mensajeSpan.textContent = " ¡Correcto!";
      mensajeSpan.style.color = "green";
    } else {
      mensajeSpan.textContent = " ¡Incorrecto!";
      mensajeSpan.style.color = "red";
    }
  });
});