//var miNombre; // aqui declaramos la variable y le ponemos nombre
//miNombre = "Edwin Alexander Cuervo"; //aqui la inicializamos
var miApellido = undefined; //hoisting con las variables
console.log(miApellido + " Soy ese hoisting ");
miApellido = "Cuervo";


hola(); //funcion
var miApellido = "Cuervo";
function hola() {
    console.log("Hola " + miApellido);
}
//var miApellido = "Cuervo";

