let codificacion = [];
let decodificacion = [];
const h1 = document.querySelector("h1");
const img = document.querySelector(".cuerpo__seccionResultado__imagen");
const p = document.querySelector("p");
const textarea = document.querySelector("#texto")
const textoResultado = document.querySelector("#textoResultado");
const copiar = document.querySelector("#copiar");
const pegar = document.querySelector("#pegar");
const seccionResultado = document.querySelector(".cuerpo__seccionResultado");

function funcionHTML (elemento,texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function resultado() {

    textoResultado.style.display = "block";
    copiar.style.display = "block";
    h1.style.display = "none";
    p.style.display = "none";
    img.style.display = "none";
    copiar.innerHTML = "Copiar"
    return;

}

function mensajeResultado() {

    textoResultado.style.display = "none";
    copiar.style.display = "none";
    h1.style.display = "block";
    p.style.display = "block";
    window.innerWidth < 1000 ? img.style.display = "none" : img.style.display = "block";
    
    return;

}

function limpiar() {
    
    textoUsuario = textarea.value;

    if (textoUsuario.trim() === "") {

        textarea.value = "";
    }

    return;
    

}

function condicionesIniciales() {

    funcionHTML("h1","Ningún mensaje fue encontrado");
    mensajeResultado();
    limpiar();

    return;

}

function logicaEncriptado() {

    textoUsuario = textarea.value;

    if (textoUsuario.match(/[^a-z\s]/) || textoUsuario.trim() === "") {

        funcionHTML("h1","El texto no es valido.");
        mensajeResultado();
        limpiar();

    } else {

        codificacion = textoUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        funcionHTML ("#textoResultado",codificacion);
        resultado();

    }

    return;
}

function logicaDesencriptado() {

    textoUsuario = textarea.value;

    if (textoUsuario.match(/[^a-z\s]/) || textoUsuario.trim() === "") {

        funcionHTML("h1","El texto no es valido.")
        mensajeResultado();

    } else {

        decodificacion = textoUsuario.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        funcionHTML ("#textoResultado",decodificacion);
        resultado();

    }

    return;
}

function copiarTexto() {

    textoCopiable = textoResultado.value;
    navigator.clipboard.writeText(textoCopiable);
    copiar.innerHTML = "Copiado";

    return;

}

function pegarTexto() {

    navigator.clipboard.readText()

        .then(textoPegado => {
            textarea.value = textoPegado;
        })
        .catch(err => {
            console.error("Error al pegar del portapapeles: ", err);
        });

    return;

}

textarea.addEventListener("input", function() {
    if (textarea.value === "") {
        funcionHTML("h1","Ningun mensaje fue encontrado");
        mensajeResultado();
    }
  });

condicionesIniciales();