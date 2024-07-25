let textoUsuario = document.querySelector("#texto");
let letrasTextoUsuario = [];
let textoNuevo = "";
let codificacion = [];
let decodificacion = [];
const h1 = document.querySelector("h1");
const img = document.querySelector(".cuerpo__seccionResultado__imagen");
const p = document.querySelector("p");
const seccionResultado = document.querySelector(".cuerpo__seccionResultado");

function funcionHTML (elemento,texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function resultado() {

    seccionResultado.style.textAlign = "left";
    h1.style.fontWeight = "400";
    h1.style.color = "var(--color-3)";
    h1.style.position = "relative";
    h1.style.top = "2%"; 
    p.style.display = "none";
    img.style.display = "none";
    return;

}

function mensajeResultado() {

    p.style.display = "block";
    img.style.display = "block";
    seccionResultado.style.textAlign = "center";
    h1.style.fontWeight = "700";
    h1.style.color = "var(--color-5)";
    return;

}

function limpiar() {
    
    document.querySelector("#texto").value = "";

}

function condicionesIniciales() {

    funcionHTML("h1","Ningun mensaje fue encontrado");
    limpiar();

    return;

}

function logicaEncriptado() {

    textoUsuario = document.getElementById("texto").value;

    if (textoUsuario.match(/[^a-z\s]/)) {

        funcionHTML("h1","El texto no es valido.")
        /* console.log("este texto no es valido."); */
        mensajeResultado();

    } else {

        codificacion = textoUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        funcionHTML ("h1",codificacion);
        resultado();
        /* console.log(`este es el texto original: "${textoUsuario}"`);
        console.log(`este es el texto por sus letras codificado: "${codificacion}"`); */

    }

    return;
}

function logicaDesencriptado() {

    textoUsuario = document.getElementById("texto").value;

    if (textoUsuario.match(/[^a-z\s]/)) {

        funcionHTML("h1","El texto no es valido.")
        /* console.log("este texto no es valido."); */
        mensajeResultado();

    } else {

        decodificacion = textoUsuario.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        funcionHTML ("h1",decodificacion);
        resultado();
        /* console.log(`este es el texto original: "${textoUsuario}"`);
        console.log(`este es el texto por sus letras decodificado: "${decodificacion}"`); */

    }

    return;
}

if (textoUsuario === "") {

    funcionHTML("h1","Ningun mensaje fue encontrado");
    mensajeResultado();

}

condicionesIniciales();     //punto actual. 25/07/2024