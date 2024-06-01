let mensaje_1 = "Ingresa tu primer numero";
let numero_1 = prompt(mensaje_1);
console.log(numero_1);

let mensaje_2 = "Ingresa tu segundo numero";
let numero_2 = prompt(mensaje_2);
console.log(numero_2);

function multiplicar(numero_1,numero_2){
    let product = numero_1 * numero_2
    return `El resultado de multiplicar ${numero_1} y ${numero_2} es: ${product}`;
}
let resultado = multiplicar(numero_1, numero_2)
console.log(resultado)

