var edad = 1;

if (edad === 18) {
 
    console.log("Puedes votar, sera tu 1 vez");
    }

    else if (edad > 18) {
        console.log("Puedes votar nuevamente");

    }
     else  {

        console.log("Aun no puedes votar");
     }

     edad ===18 ?  console.log("Puedes votar, sera tu 1 vez") :  console.log("No Puedes votar")

    
    function jugar(eleccionUsuario) {
        // Definir las opciones disponibles por medio de un Arreglo
        let opciones = ["piedra", "papel", "tijeras"];
      
        // Generar la elección aleatoria de la máquina con metodos
        let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
      
        // Verificar el resultado del juego con condicional if
        if (eleccionUsuario === eleccionMaquina) {
          // Empate
          console.log("Empate. Ambos eligieron " + eleccionUsuario + ".");
        } else if (
          (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
          (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
          (eleccionUsuario === "tijeras" && eleccionMaquina === "papel")
        ) {
          // El usuario gana
          console.log("¡Ganaste! Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + ".");
        } else {
          // El usuario pierde
          console.log("Perdiste. Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + ".");
        }
      }
        

jugar("tijeras");

function jueGo (opcionesJugador) {

    let opciones = ["piedra", "papel", "tijeras"];
    let maquinaOpciones = opciones [Math.floor(Math.random() * opciones.length)];

 

     switch (true) {

      case  opcionesJugador === maquinaOpciones :
        console.log("Empate eligieron " + opcionesJugador + " y la máquina eligio " + maquinaOpciones+ ".")
           break;
      case opcionesJugador === "piedra" && maquinaOpciones === "tijeras":
            console.log("¡Ganaste! eligeste! " + opcionesJugador + " y la máquina elige " + maquinaOpciones + ".");
            break; 
     case  opcionesJugador === "papel" && maquinaOpciones === "piedra":
           console.log("¡Ganaste! eligeste! " + opcionesJugador + " y la máquina elige " + maquinaOpciones + ".");
           break; 
     case opcionesJugador=== "tijeras" && maquinaOpciones === "papel":
           console.log("¡Ganaste! eligeste! " + opcionesJugador + " y la máquina elige " + maquinaOpciones + ".");
           break; 
     default:console.log("¡Perdiste! eligeste " + opcionesJugador + " y la máquina elige " + maquinaOpciones + ".");
                     
    }

  }
jueGo("piedra");


function solution(article) {
  

  switch (true) {
    case article === "computadora": console.log("Con mi computadora puedo programar usando JavaScript")
      break;
    case article === "celular": console.log("En mi celular puedo aprender usando la app de Platzi")
      break;
    case article === "cable": console.log("¡Hay un cable en mi bota!") 
      break;
    default: console.log("Artículo no encontrado")   
  }

}

solution("computadora")
solution("celular")
solution("cable")
solution("libro")    


var anaListas = ["Edwin", "Diego", "Alejo", "Milgay"];


 function turNos (tecnicos) {
console.log(` Tienes turno de 14:00 , ${tecnicos}`);
 }

 for(var i=0; i <anaListas.length; i++ ) {
turNos(anaListas[i]);

 }

 for (var tecnicos of anaListas) {
  turNos(tecnicos)
 }

 while (anaListas.length>0) {
 var tecnicos = anaListas.shift();
 turNos(tecnicos);

 }


// declaracion de objetos en JS
 var miAuto = {
    marca: "Volskswagen" ,
    modelo: "Jetta" ,
    annio: 2011 
  };

  // agregar un metodo a mi objeto atraves de una funcion a mi objeto en JS
 var miAuto = {
  marca: "Volskswagen" ,
  modelo: "Jetta" ,
  annio: 2011 ,
  detallesDelauto: function () {
      console.log (` Este Auto es un, ${this.marca} ${this.modelo}`)
  } 
};

miAuto.detallesDelauto ();
miAuto.marca

// funcion constructora

function auto (marca, modelo, annio, kilometraje, cilindraje) {
    this.marca= marca;
    this.modelo= modelo;
    this.annio= annio;
    this.kilometraje= kilometraje;
    this.cilindraje= cilindraje;
}

var autoNuevoingresado1 = new auto("Volskswagen", "Jetta Trendline", 2011, 113000, "2.0cc" );
var autoNuevoingresado2 = new auto("Toyota", "Land Cruise", 2014, 13000, "4.0cc" );
console.log (autoNuevoingresado1 , autoNuevoingresado2);


// reto de lista de autos

/* function autos (marca, modelo, annio, kilometraje, cilindraje) {
  this.marca= marca;
  this.modelo= modelo;
  this.annio= annio;
  this.kilometraje= kilometraje;
  this.cilindraje= cilindraje;
}

var listaDeautos = []; 


for(var u=0; u <= 2; u ++ ) {
     var marca = prompt("Ingrese la marca del automovil")
     var modelo = prompt("Ingrese el modelo del automovil")
     var annio = prompt("Ingrese año del automovil")
     var kilometraje = prompt("Ingrese el KM del automovil")
     var cilindraje = prompt("Ingrese el cilindraje del automovil")
     listaDeautos.push (new autos (marca, modelo, annio, kilometraje, cilindraje));
   }
   for (var u =0; u < listaDeautos.length; u++ ) {
    console.log (listaDeautos [u]);
   }  */

   //metodo de recorridos de Arrays
   var analistaCGestion = [
    { nombre: "Edwin", turno: "Mañana", roll: "RAN" },
    { nombre: "Alejandro", turno: "Mañana", roll: "CORE" },
    { nombre: "Milgay", turno: "Tarde", roll: "RAN"},
    { nombre: "Castillo", turno: "Tarde", roll: "CORE"},
    { nombre: "Diego", turno: "Noche", roll: "RAN"},
    { nombre: "Javier", turno: "Noche", roll: "CORE" },
    
  ]
//metodo filter
  var horarioAnalistas = analistaCGestion.filter (function (horario){
          return horario.turno === "Noche"
  } );

  console.log (horarioAnalistas)

  //metodo mapeo
var nombreTurno = analistaCGestion.map (function(turnoAnalista){
    return turnoAnalista.roll

});

console.log (nombreTurno)

// metodo find



var turnoCore = analistaCGestion.find (function(analistaName) {
return analistaName.nombre === "Milgay"
});

console.log (turnoCore)

// metodo forEach()

analistaCGestion.forEach (function (analistaroll){
console.log (analistaroll.turno)
});

// metodo some, regresa un tru.

var existeTurno = analistaCGestion.some (function (turNo){
      return turNo.turno === "Mañana"

});

console.log (existeTurno)

// Array de números y texto metodo Push
let numArray = [1,2,3,4,5]
console.log (numArray)

function newNum(){
  numArray.push(6,7)  
}
newNum()
console.log (numArray)

let textoArray = ["Gina", "Juanjose", "Edwin"]
console.log (textoArray)
function newTexto () {
  textoArray.push ("Marcela", "Alexander")
}

newTexto ()
console.log (textoArray)

//Array de números y texto metodo shift, Pop

let numeArray = [1,2,3,4,5]
console.log (numeArray)

 let newnumeArray = numeArray. shift ()


console.log (numeArray)

let texArray = ["Gina", "Juanjose", "Edwin"]
console.log (texArray)
let newtexArray = texArray. shift ()

console.log (texArray)

let numEArray = [1,2,3,4,5]
console.log (numEArray)

 let newnumEArray = numEArray. pop ()


console.log (numEArray)

let texTArray = ["Gina", "Juanjose", "Edwin"]
console.log (texTArray)
let newtexTArray = texTArray. pop ()

console.log (texTArray)

