alert("Bienvenidos a mi sitio.");

let continuar = confirm("¿Está seguro de querer avanzar?");
let saludo = document.querySelector("h2.saludo");

if (!continuar) {
    saludo.textContent = "Lamentamos que no quieras continuar";
} else {
    saludo.textContent = "Que alegría que quieras continuar con tu visita";
    let nombre = prompt("Ingrese su nombre");
    document.querySelector("h1.bienvenido").textContent = `Bienvenido ${nombre}`;
    let edad = prompt("Ingrese su edad");

    if (edad < 18) {
        document.querySelector(".container-general").style.display = "none";
        document.getElementById("accesoDenegado").style.display = "block";
    } else {
        let gustaProgramacion = confirm("¿Te gusta la programación?");
        let backgroundDiv = document.querySelector(".background-img");

        if (gustaProgramacion) {
            backgroundDiv.style.backgroundImage = "url('img/programmer.jpeg')";
        } else {
            backgroundDiv.style.backgroundImage = "url('img/gatito.jpeg')";
        }

        let avatarRuta = prompt("Ingresa la URL de tu imagen");
        document.querySelector(".avatar").src = avatarRuta;

        let pelicula = {
            nombre: "",
            director: "",
            duracion: 0,
            actor: ""
        };
        pelicula.nombre = prompt("¿Cuál es el nombre de tu película favorita?");
        pelicula.director = prompt("¿Quién es el director?");
        pelicula.duracion = prompt("¿Cuál es la duración en minutos?");
        pelicula.actor = prompt("¿Quién es el actor principal?");

        document.getElementById("pelicula-nombre").textContent = `Nombre: ${pelicula.nombre}`;
        document.getElementById("pelicula-director").textContent = `Director: ${pelicula.director}`;
        document.getElementById("pelicula-duracion").textContent = `Duración: ${pelicula.duracion} minutos`;
        document.getElementById("pelicula-actor").textContent = `Actor principal: ${pelicula.actor}`;

        document.getElementById("pelicula").style.display = "block";
    }
}