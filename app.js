let NumeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(Intentos);
    if (numeroDeUsuario === NumeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${Intentos} ${(Intentos === 1) ? "vez!" : "veces!"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acerto :(
        if (numeroDeUsuario > NumeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
    }
    Intentos++;
    limpiarCaja();
    return;

}

function limpiarCaja () {
   document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
   //Si ya sorteamos todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
   } else {
    //Si el numero generado esta inlucido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   }
}

function condicionesIniciales() {
    asignarTextoElemento("h1" , "Juego del número secreto!");
    asignarTextoElemento("p" , `Indica un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    Intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de juego nuevo
    
document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();
