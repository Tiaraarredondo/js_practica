let hervirAgua = confirm("¿Ponemos a hervir el agua?");
    let respuesta = document.querySelector(".respuesta");

    if (hervirAgua) {
        respuesta.textContent = "Sí, pongamos a hervir el agua. ";
    } else {
        respuesta.textContent = "No, no pongamos a hervir el agua. ";
    }

    let dia = prompt("¿Qué día es hoy?");
    if (dia === "domingo") {
        respuesta.textContent += "¡Pongamos la olla, hoy se comen pastas!";
    } else {
        respuesta.textContent += "Mejor lo dejamos para el domingo.";
    }
