var miMombre = "Edwin"; //Scope Global//
function  nombre (){
    var miApellido = "Cuervo"; //Scope Local//
    console.log(miMombre + " " + miApellido);
}
nombre(); 
miMombre
miApellido