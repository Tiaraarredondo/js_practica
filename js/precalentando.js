//Ahora diseñemos un programa que le pregunte al usuario “¿Vas a salir de tu casa?” por medio de un confirm.
let mensaje = "¿Vas a salir de tu casa?";
let resultado = confirm(mensaje);
if (resultado){
    let mensaje = "Checkea el pronostico del tiempo antes de salir"
    alert(mensaje)
}else{
    let mensaje = "Que bueno que te quedes. Va a llover mucho hoy."
    alert(mensaje)
}