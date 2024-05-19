const h1 = document.querySelector ('h1');
const input1 = document.querySelector ('#calculo1');
const input2 = document.querySelector ('#calculo2');
const boton = document.querySelector ('#btnCalculo');
const parrafo = document.querySelector ('#resultado');
const formulario = document.querySelector ('#form');

// vamos a escuchar el .value de nuestros input y los eventos de nuestra pagina HTML
//opcion 1

//function clickDelboton () {
 //       const numero1 = parseFloat (input1.value);
 //       const numero2 = parseFloat (input2.value);

 //       const resultadoSuma = numero1 + numero2;
 //       parrafo.innerText = "Resultado: " + resultadoSuma;

//}

//opcion 2 mejora la legibilidad
//addEventlistener, escuchar los eventos para 
//inscribirlo en nuestro JS

//boton.addEventListener('click', clickDelboton);
//function clickDelboton () {
       //const numero1 = parseFloat (input1.value);
       //const numero2 = parseFloat (input2.value);

       //const resultadoSuma = numero1 + numero2;
       //parrafo.innerText = "Resultado: " + resultadoSuma;
//}

//opcion 3 insertando un formulario en nuestro html

form.addEventListener('submit', sumarInputvalues);


function sumarInputvalues (event) {

       console.log (event);
       
       //llamamos al metodo (preventDefault) de la propiedad (event)
       event.preventDefault ();
       
       const numero1 = parseFloat (input1.value);
       const numero2 = parseFloat (input2.value);

       const resultadoSuma = numero1 + numero2;
       parrafo.innerText = "Resultado: " + resultadoSuma;
}