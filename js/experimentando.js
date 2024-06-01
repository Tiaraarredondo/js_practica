let mensaje = "Ingresa tu nombre";
let nombre = prompt(mensaje);
console.log(nombre);

let mensaje_1 = "Ingresa su edad";
let edad = prompt(mensaje_1);
console.log(edad);

let mensaje_2 = "¿Te gustan los deportes?";
let fanDeportes = confirm(mensaje_2);
console.log(fanDeportes);

let mensaje_3 = `¡Muchas gracias ${nombre} por responder nuestras preguntas!`
alert(mensaje_3);

let usuario = {
    nombre : nombre,
    edad : edad,
    deporte : fanDeportes,
    deportista : function() {
      if (this.deporte) {
        console.log("Si, soy fan de los deportes");
      }  else {
        console.log("No soy tan fan aún de los deportes");
      }
    }
}
usuario.deportista();
