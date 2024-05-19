//Declarativas
function mifuncion() {  // aqui declaramos una funcion declarativa
return 3;
} 

mifuncion();

// De expresion

var mifuncion = function(a,b){
    return a + b;
}
mifuncion();
function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}
saludarEstudiante("Edwin");
// Resultado de un avariable sin el console.log

function sumar (a,b) {
var resultado = a+b;
return resultado;
}

sumar (5,7);
/////////////////////// otra forma seria

function suma (a,b) {
return a+b;

}
suma (5,5);



function solution (valor) {  
    return typeof (valor);
}

solution (1);
solution ("Edwin");
solution (false);
