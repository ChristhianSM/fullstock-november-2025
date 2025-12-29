// Name
function pepito() {}

console.log(pepito.name);

function sumar(a, b, c = 0) {
  return a + b + c;
}

// length
console.log(sumar.length);

// Arguments
function mostrarArgumentos() {
  console.log(arguments);
}

mostrarArgumentos(1, "2", true, 4, {});

// Rest Parameters y Spread Syntax
function sumarTodos(...numeros) {
  console.log(numeros);
  let result = 0;
  const cantidad = numeros.length;
  for (let i = 0; i < cantidad; i++) {
    result = result + numeros[i];
  }

  return result;
}
console.log(sumarTodos(1, 2, 3)); // 6
console.log(sumarTodos(10, 20, 30, 40, 50)); // 150

function ejemplo(a, b, c = 0, ...resto) {
  console.log("Requeridos: ", a, b);
  console.log("Opcional: ", c);
  console.log("Resto: ", resto);
}

ejemplo(10, 20, 30, 40, 50);

// Spread Syntax
const numeros = [5, 10, 15, 20, 25];
console.log(...numeros);

console.log("===================");
const objeto1 = { a: 1, b: 2 };
const objeto2 = { a: 3, d: 4 };
const objetoResultado = { ...objeto1, ...objeto2 };
console.log(objetoResultado);

const arreglo1 = [1, 2, 3];
const arreglo2 = [3, 5, 6];
const arregloResultado = [...arreglo1, ...arreglo2];
console.log(arregloResultado);

const arreglo1Copia = [...arreglo1];
console.log(arreglo1Copia);
