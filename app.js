function funcionHTML (elemento,texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function condicionesIniciales() {

    funcionHTML("p","Ingrese el texto que desee encriptar o desencriptar.");

    return;

}

condicionesIniciales();