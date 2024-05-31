//Imprimí por consola 5 veces la frase: “Practicando con el bucle for”
for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for por vez " + i);
}

//Utilizando el valor de la variable " i " Imprimí 10 veces por consola la frase: “La variable i tiene el valor valorDei”. Usá la sintáxis template líterals.
for (let i = 0; i < 10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
}

//10 múltiplos de 2 ¿Qué parte del bucle for modificarías para que i varíe de 2 en 2.
for (let i = 2; i <=20; i+=2) {
    console.log(`el multiplo de 2 es ${i}`);
}

//50 múltiplos de 5 ¿Qué parte del bucle for modificarías para que i varíe de 5 en 5.
for (let i = 5; i <=250; i+=5) {
    console.log(`el multiplo de 5 es ${i}`);
}

//Creá un bucle for que imprima por consola los números desde el 100 al 0.
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

//Tablas de multiplicar
let base = 2
let resultados = []
for (let i = 1; i < 10; i++) {
    resultados.push(base * i);
}
console.log(resultados);

//ganancias
let ganancias = [1, 4, 666, 89, 45, 66, 77, 85, 123, 456];
let suma = 0;
for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}
console.log("la suma de las ganancias es:", +suma)

//recorrer array
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
]
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i])
    console.log(`El numero de track es: ${i}`, healingIsDifficult[i]);
}

//recorrer array
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
for (let i = 0; i < got.length; i++){
    let persona = got[i];
    console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
}
for (let i = 0; i < got.length; i++) {
    let persona = got[i]
    console.log(`Soy ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad}`)
}