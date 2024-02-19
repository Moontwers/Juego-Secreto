//1

function calculoIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
  }

  function valorDelFactorial() {

  }

  //2

  function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`2. El factorial de ${numero} es ${resultado}`);
  
//3

function convertirDolaresAReales(dolares) {
    let cotizacionDolar = 4.80;
    let reales = dolares * cotizacionDolar;
    return reales;
  }
  // Ejemplo de uso
  let valorEnDolar = 50;
  let valorEnReales = convertirDolaresAReales(valorEnDolar);
  console.log(`3. ${valorEnDolar} dólares  es R$ ${valorEnReales}`);

  //4

  function calcularAreayPerimetro(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    console.log("4. Área: " + area);
    console.log("4.1 Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreayPerimetro(altura, anchura);

  //5

  function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("5. Área: " + area);
    console.log("5.1 Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);

  //6

  function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  mostrarTablaDeMultiplicar(5);

  