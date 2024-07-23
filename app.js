let textoUsuario = "";
let letrasTextoUsuario = [];
let textoNuevo = "";
let codificacion = [];

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

    if (textoUsuario.match(/[^a-z\s]/)) {

        console.log("este texto no es valido.");

    } else {

        codificacion = textoUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        console.log(`este es el texto original: "${textoUsuario}"`);
        console.log(`este es el texto por sus letras codificado: "${codificacion}"`);

    }

    return;
}

condicionesIniciales();