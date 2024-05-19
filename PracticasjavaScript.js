//Imprimir el primer elemento de un array

let arrEglo = ["Juanita", 2, "Edwin", 23, "Juanjo"]
let arreg = [1, 3, 4, "edwin"]

console.log (arrEglo)

function imprimerElementoporelemento (arra) {
        for (let i=0; i < arra.length; i++ ) {
            console.log (arra[i])
        }

}

imprimerElementoporelemento (arrEglo)

//como convertir objetos en arrays
//Crea una función que pueda recibir cualquier objeto como parámetro 
//e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)

const biciCleta = {

marca: "Lapierre",
grupo: "Shimano",
velocidades: 11,
ruedas: [2, "carbono", "disco"]

}

const vehiCulo = {

    marca: "Volskvawen",
    modelo: "Jetta Trenline",
    velocidades: 5,
    ruedas: [4, "Rin lujo de Aluminio", "Freno de disco en las 4 ruedas"]
    
    }
    
console.log(biciCleta)

//var bici= Object.values (biciCleta);

function imprimerObjetoenArray (objeTo) {

    const arraY = Object.values (objeTo);
    for (let i=0; i < arraY.length; i++ ) {
        console.log (arraY[i])
    }

}

imprimerObjetoenArray (vehiCulo)


// Reduccion de condicionales con un array u objetos


const misBicicletas = {

    ruta: "Mi bicicleta para puebas es de marca Lapierrie",
    mtb: "Mi bicicleta para puebas es de marca Scoth",
    gravel: "Mi bicicleta para puebas es de marca Treck",

}


function validarTipodeBicicleta (tipo) {

    if (misBicicletas[tipo]) {
        console.log (misBicicletas[tipo]);
        return;
    }
    console.warn ("No tengo ese tipo de bicileta")
}

validarTipodeBicicleta ('grave')