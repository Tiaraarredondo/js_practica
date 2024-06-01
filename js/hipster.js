let mensaje = "Ingresa tu nacionalidad";
let nacionalidad = prompt(mensaje);
console.log(nacionalidad);

let mensaje_1 = "Ingresa tu profesion";
let profesion = prompt(mensaje_1);
console.log(profesion);

let mensaje_2 = "Ingresa la cantidad de kms que caminas por dia";
let caminar = prompt(mensaje_2);
console.log(caminar);



function filosofoHipster(){
    if (nacionalidad === "argentino" &&
    profesion === "musico" &&
    caminar >= 2) {
    return "Soy un filosofo hipster";
    } else {
        return "Aun no soy filosofo hipster";
    }
}

let resultado = filosofoHipster(nacionalidad, profesion, caminar);
console.log(resultado);