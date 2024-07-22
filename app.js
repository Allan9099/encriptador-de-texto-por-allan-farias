let textoUsuario = "";
let letrasTextoUsuario = [];
let textoNuevo = "";

function funcionHTML (elemento,texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function condicionesIniciales() {

    funcionHTML("p","Ingrese el texto que desee encriptar o desencriptar.");

    return;

}

function logicaEncriptado() {

    textoUsuario = document.getElementById("texto").value;

    letrasTextoUsuario = textoUsuario.split("");

    /*console.log(`este es el texto original: "${textoUsuario}"`)
    console.log(`este es el texto por sus letras: "${letrasTextoUsuario}".`);*/
    textoNuevo = letrasTextoUsuario.join("");
    /*console.log(`y este el texto ya rearmado: "${textoNuevo}"`);*/

    return;
}

/*function test(){

    alert("hola mundo!");

}*/

condicionesIniciales();