//1

function Mensaje () {
    console.log ("Hola mundo!")
}
Mensaje();

//2

function HolaNombre(nombre) {
    // let nombre = Dulce;
    // console.log("¡Hola, [nombre]!")
    console.log(`Hola ${nombre}`);
}
HolaNombre("Dulce");
HolaNombre("Maria");

//3

function DobleNumero(numero) {
    let doble = numero*2;
    console.log (`El doble del numero ingresado es ${doble}`);
}
DobleNumero(7);

//4

function Promedio(numero1, numero2, numero3) {
    let operacion = (numero1 + numero2 +numero3)/3;
    console.log(`El promedio de los 3 numeros ingreados es: ${operacion}`);
}
Promedio(8, 5, 2);

//5

function Mayor(numero1, numero2) {
    //let comparacion = numero1 > numero2;
    if (numero1 > numero2) {
        console.log(`El numero: ${numero1} es mayor a: ${numero2}`);
    } else {
        console.log(`El numero: ${numero2} es mayor a: ${numero1}`);
        
    }
}
Mayor(5, 10);
Mayor(20, 10);

6//

function Cuadrado(numero) {
    let multiplicacion = numero*numero;
    console.log(`El cuadrado de: ${numero} es: ${multiplicacion}`);
}
Cuadrado(3);