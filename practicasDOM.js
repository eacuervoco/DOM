// forma profesional es crear variables

const h1 = document.querySelector ('h1');
const p = document.querySelector ('p');
const parrafo = document.querySelector ('.parrafo');
const pid = document.querySelector ('#parr');
const input = document.querySelector ('input');
const h2 = document.querySelector ('h2');

console.log (input.value)
console.log ({
    h1,
    p,
    parrafo,
    pid,
    input
})

// Escribir HTML desde JS

h1.innerHTML = 'Cambio del H1 desde JS <br> Se puede insertar etiquetas HTML  ';
h2.innerText = 'Cambio del H2 desde JS <br> Se puede insertar etiquetas HTML, en este caso es texto  ';

// acceder a un un atributo

console.log (h1.getAttribute ('pantallas'));

//Modificar un atributo de nustro html

h2.setAttribute ('class', 'gina');

// agregar clases desde JS

//h1.classList.add('Edwin');

//eliminar un clase

h1.classList.remove ('Edwin');

// otras herramientas interesantes
//h1.classList.toggle ('Edwin'); 
//h1.classList.contains ('Edwin'); condicional devuelve un true o false si nuestro elemento conttiene la clase

// modificar el atributo value

input.value = "456"


//crear un elemento desde 0

const img = document.createElement ('img')

img.setAttribute ('src', 'https://www.enter.co/wp-content/uploads/2018/06/halo-5-guardians-soundtrack-now-available-online_evzx-768x432.jpg');
console.log (img)

pid.append (img);