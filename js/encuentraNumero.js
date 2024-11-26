let numeroSecreto;
    let intentos;

    //Iniciar el juego
    document.getElementById("comenzarJuego").addEventListener("click", () => {
      numeroSecreto = Math.floor(Math.random() * 50) + 1;
      intentos = 0;
      document.getElementById("juego").style.display = "block";
      document.getElementById("resultadoAdivinar").textContent = "";
      document.getElementById("intentosAdivinar").textContent = "";
      document.getElementById("numeroUsuario").value = "";
    });

    document.getElementById("adivinarBtn").addEventListener("click", () => {
      const numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
      intentos++;

      if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 50) {
        document.getElementById("resultadoAdivinar").textContent = "Por favor, introduce un número válido entre 1 y 50.";
        return;
      }

      if (numeroUsuario > numeroSecreto) {
        document.getElementById("resultadoAdivinar").textContent = "El número es menor.";
      } else if (numeroUsuario < numeroSecreto) {
        document.getElementById("resultadoAdivinar").textContent = "El número es mayor.";
      } else {
        document.getElementById("resultadoAdivinar").textContent = "¡Lo has adivinado! ¡ÉXITO!";
        document.getElementById("intentosAdivinar").textContent = `Número de intentos: ${intentos}`;
      }
    });

    //Reiniciar el juego
    document.getElementById("reiniciarBtn").addEventListener("click", () => {
      document.getElementById("juego").style.display = "none";
      document.getElementById("resultadoAdivinar").textContent = "";
      document.getElementById("intentosAdivinar").textContent = "";
      document.getElementById("numeroUsuario").value = "";
    });