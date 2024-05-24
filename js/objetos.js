//Creá un objeto literal misDatos con tu información en sus propiedades: nombre, apellido, dni, comidasFavoritas (al menos 3. ¿Qué tipo de dato tenés que usar en esta propiedad?)

let misDatos = {
    nombre : "Tiara",
    apellido : "Arredondo",
    dni : "46089451",
    comidasFavoritas : ["lasagna", "tarta", "pizza"],
    edad : "19",
    saludar : function() {
        return "Hola mi nombre es " +this.nombre, "y tengo " +this.edad, "años. Mi primer comida favorita es " +this.comidasFavoritas[0]
    }
};
console.log(misDatos.nombre)
console.log(misDatos.apellido)
console.log(misDatos.dni)
console.log(misDatos.comidasFavoritas)

//Implementar el método saludar() en el objeto misDatos que al ser invocado retorne un string así: "Hola mi nombre es NOMBRE APELLIDO y tengo EDAD años. Mi primer comida favorita es LAPRIMERADELARRAY". Imprimí la frase en la consola.
misDatos.saludar()
