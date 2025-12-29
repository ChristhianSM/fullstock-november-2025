// 1. Funciones que tienen como argumento a otras funciones
function miFuncion(otraFuncion) {
  otraFuncion(); // ¡Ojo! Solo la imprimimos, no la llamamos
}

function otraFuncion() {
  console.log("Hola desde otraFuncion");
}

// invocamos la funcion con el argumento que es otra funcion
miFuncion(otraFuncion);

// 2. funciones que retornan otras funciones
function suma(a, b) {
  return a + b;
}

let resultado = suma(10, 20);
console.log(resultado);

console.log("==========================");
function crearMultiplicador(multiplicador) {
  return function (numero) {
    // console.log(numero * multiplicador);
    return numero * multiplicador;
  };
}

let multiplicador3 = crearMultiplicador(3);
let multiplicador8 = crearMultiplicador(8);

let resultado1 = multiplicador3(5);
console.log("Resultado:", resultado1);
console.log(multiplicador3(50));
console.log(multiplicador8(10));
