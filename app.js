// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listadeNombres = [];
let nombreAmigo="";

AsignacionTextoElemento("h2", "Digite el nombre de sus amigos");

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value.trim();
    if(nombreAmigo===""){
        AsignacionTextoElemento("h2", "Escribe un nombre valido");
    } else if (listadeNombres.includes(nombreAmigo)){
        AsignacionTextoElemento("h2", "ese nombre ya fue registrado");
        } else{
            listadeNombres.push(nombreAmigo); 
            AsignacionTextoElemento("h2", "El nombre de tu amigo fue registrado exitosamente");
            console.log (listadeNombres);
        }
    limpiarEspacio();    
} 

function sortearAmigo(){
    let sortear = Math.floor(Math.random()*listadeNombres.length);
    console.log(sortear);
    let amigoSorteado= listadeNombres[sortear];
    console.log(amigoSorteado);
    AsignacionTextoElemento("h2", `Tu amigo secreto es ${amigoSorteado}`);
}
 

function AsignacionTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarEspacio(){
    document.getElementById("amigo").value="";
}
