// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let nombreAmigo= document.getElementById("amigo");
let ulListaAmigos= document.getElementById("listaAmigos");
let ulResultado= document.getElementById("resultado")



function agregarAmigo(){
    let nuevoAmigo=nombreAmigo.value.trim();
    if(nuevoAmigo===""){
        alert ("Escribe un nombre valido");
    } else if (listaAmigos.includes(nuevoAmigo)){
        alert ("ese nombre ya fue registrado");
        } else{
            listaAmigos.push(nuevoAmigo); 
            ulListaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`;
            console.log (listaAmigos);
            limpiarEspacio();
        }    
} 

function sortearAmigo(){
    let sortear = Math.floor(Math.random()*listaAmigos.length);
    console.log(sortear);
    amigoSecreto= listaAmigos[sortear];
    ulResultado.innerHTML= `<li> Tu amigo Secreto es ${amigoSecreto}</li>`;
   
}

function limpiarEspacio(){
    document.getElementById("amigo").value="";
}
