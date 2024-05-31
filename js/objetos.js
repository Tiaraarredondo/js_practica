//Creá un objeto literal misDatos con tu información en sus propiedades: nombre, apellido, dni, comidasFavoritas (al menos 3. ¿Qué tipo de dato tenés que usar en esta propiedad?)

let misDatos = {
    nombre : "Tiara",
    apellido : "Arredondo",
    dni : "46089451",
    comidasFavoritas : ["lasagna", "tarta", "pizza"],
    edad : "19",
    saludar : function() {
        return "Hola mi nombre es " +this.nombre + " y tengo " +this.edad + " años. Mi primer comida favorita es " +this.comidasFavoritas[0];
    }
};
console.log(misDatos.nombre)
console.log(misDatos.apellido)
console.log(misDatos.dni)
console.log(misDatos.comidasFavoritas)

//Implementar el método saludar() en el objeto misDatos que al ser invocado retorne un string así: "Hola mi nombre es NOMBRE APELLIDO y tengo EDAD años. Mi primer comida favorita es LAPRIMERADELARRAY". Imprimí la frase en la consola.
console.log(misDatos.saludar()) 

//Vamos a crear un auto como objeto literal

let auto = {
    marca : "Toyota",
    modelo : "Corolla",
    anio : "2020",
    color : "gris",
    posicion : 0,
    avanzar : function(numero){
        if (numero > 0) {
            this.posicion += numero;
            console.log(`El auto avanzó ${numero} unidades. Posición: ${this.posicion}`);
        }
    },
    retroceder : function(numero){
        if (numero > 0) {
            this.posicion -= numero;
            console.log(`El auto retrocedió ${numero} unidades. Posición: ${this.posicion}`);
          }
        }
    }


auto.avanzar(10)
auto.retroceder(2)
auto.avanzar(5)

//

let nuevoAuto = {
    marca : "Toyota",
    modelo : "Corolla",
    anio : "2020",
    color : "gris",
    posicion : 0,
    moverse : function(numero){
        if (numero > 0) {
            this.posicion += numero;
            console.log(`El auto avanzó ${numero} unidades. Posición: ${this.posicion}`);
        }
        else {
            this.posicion += numero;
            console.log(`El auto retrocedio ${numero} unidades. Posición: ${this.posicion}`);
        }
    },
}
nuevoAuto.moverse(12)
nuevoAuto.moverse(-1)

//Batalla de superheroes
let ironMan = {
    nombre : "Iron Man",
    equipo : "Avengers",
    poderes :  ["Volar", "Lanzar misiles", "Disparar láser"],
    energia : 100,
    getPoder : function(num) {
        if (num >= 0 && num < this.poderes.length) {
            this.energia -= 10;
            let poderElegido = this.poderes[num];
            return `Poder Elegido de ${this.nombre}: ${poderElegido}. Energía restante: ${this.energia}.`;
        }
    }
}

let Hulk = {
    nombre : "Hulk",
    equipo : "Avengers",
    poderes : ["Aplastar", "Gritar", "Golpear"],
    energia : 100,
    getPoder : function(num) {
        if (num >= 0 && num < this.poderes.length) {
            this.energia -= 10;
            let poderElegido = this.poderes[num];
            return `Poder Elegido de ${this.nombre}: ${poderElegido}. Energía restante: ${this.energia}.`;
        }
    }
}
console.log(ironMan.getPoder(0));
console.log(Hulk.getPoder(2));
console.log(ironMan.getPoder(1));
console.log(Hulk.getPoder(0));

