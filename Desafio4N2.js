//1
let listaGenerica = [];

//2
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//3
    lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

//4
    function mostrarLenguagesSeparadamente() {
        for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
          console.log(lenguagesDeProgramacion[i]);
        }
      }
      mostrarLenguagesSeparadamente();
//5

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

//6
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);

  //7
  function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numerosDos = [3, 6, 9, 12, 15];
  encontrarMayorMenor(numerosDos);

  //8
  function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numerosTres = [5, 10, 15, 20, 25];
  let suma = calcularSuma(numerosTres);
  console.log('Suma:', suma);

  //9
  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }


