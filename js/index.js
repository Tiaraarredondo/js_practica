// Crear una función rectangulo que reciba como parámetros la altura y el ancho de un rectángulo y retorne el área.


function rectangulo (altura,ancho) {
    let area = altura * ancho;
    return area;
};


let altura = 5;
let ancho = 10;
let area = rectangulo(altura, ancho);
console.log("El área es: " + area);


//Crear una función triangulo que reciba como parámetro la base y la altura de un triángulo y retorne el área.
function triangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
};


let b = 5;
let h = 10;
let a = triangulo(b, h);
console.log("El área es: " + a);


//Crea una función largoDelArray que reciba como parámetro un array y retorne la cantidad de elementos que contiene.
function largoDelArray(array) {
    return array.length;
};


let array_1 = [1, 2, 3, 4, 5];
let longitud = largoDelArray(array_1);
console.log("La cantidad de elementos en el array es: " + longitud);


//Crea una función cantidadDeLetras que reciba como parámetro una palabra y devuelva la cantidad de letras que tiene.
function cantidadDeLetras(palabra) {
    return palabra.length;
};


let palabra_1 = "ejemplo";
let cantidad = cantidadDeLetras(palabra_1);
console.log("La cantidad de letras en la palabra es: " + cantidad);


//Crea una función dolarHoy que reciba como parámetro un precio en pesos argentinos y devuelva el precio en dólares estadounidenses.


function dolarHoy(precioEnPesos) {
    const precioDolar = 100;
    const precioEnDolares = precioEnPesos / precioDolar;
    return precioEnDolares;
};


let precioEnPesos = 5000;
let precioEnDolares = dolarHoy(precioEnPesos);
console.log("El precio en dólares es: $" + precioEnDolares);


//Crea una función precioFinal que reciba un precio como parámetro y retorne el precio más el IVA (21%).


function precioFinal(precio) {
    const precioConIVA = precio * 0.21;
    return precioConIVA;
};


let precio = 100;
let precioConIVA = precioFinal(precio);
console.log("El precio final con IVA es: $" + precioConIVA);


//Crea una función mitad que reciba un número como parámetro y devuelva su mitad. Tené en cuenta que el operador de división en JavaScript es “ / ”.
function mitad(numero) {
    return numero / 2;
};


console.log(mitad(10));
console.log(mitad(25));
console.log(mitad(0));
console.log(mitad(-8));


//Desafío extra: Crea una función diaSegunNumero que reciba como parámetros un array y un número y retorne el día correspondiente al número ingresado.


function diaSegunNumero(numero){
    return dia;
}
let dias = [ "lunes" , "martes" , "miercoles" , "jueves" , "viernes" , "sabado" , "domingo" ]
let dia = dias[0]
let numero = dia.length


console.log(diaSegunNumero(numero))
