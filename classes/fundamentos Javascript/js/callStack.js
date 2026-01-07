// function saludar() {
//   console.log("Se ejecuta saludar..."); // 2
// }

// console.log("Primer console.log"); // 1

// saludar();

// console.log("Segundo console.log"); // 3

// function prepararPocionMortifago() {
//   console.log("Preparando la poción para los Mortífagos 5"); // 5
//   añadirIngrediente("Lagrima de basilisco");
// }

// function prepararPocionAuror() {
//   console.log("Preparando la poción para los Aurors 2"); // 2
//   añadirIngrediente("Pluma de fénix");
//   prepararPocionMortifago();
//   añadirIngrediente("Escama de dragón");
// }

// function añadirIngrediente(ingrediente) {
//   console.log("Añadiendo " + ingrediente + "3 - 6 - 8"); // 3 - 6 - 8
//   realizarHechizo();
// }

// function realizarHechizo() {
//   console.log("Pronunciando hechizo para mezclar ingredientes 4 - 7 - 9"); // 4 - 7 - 9
// }

// console.log("Inicio de la preparación de pociones 1"); // 1
// prepararPocionAuror(); // Main
// console.log("Final de la preparación de pociones 10"); // 10

// Recursividad

// Calcular el factorial de un numero
// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!
// 4! = 4 x 3!
// 3! = 3 x 2!
// 2! = 2 x 1!
// 1! = 1 x 0!
// 0! = 1

// function factorial(n) {
//   let resultado = 1;
//   for (let i = 1; i <= n; i++) {
//     resultado = resultado * i; // 1, 2, 6, 24, 120
//   }

//   return resultado;
// }

function factorial(n) {
  // if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === -5) return 1;

  return n * factorial(n - 1);
}

// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1

// console.log(factorial(5));

// Fibonacci(1);
// fibonacci(0) = 0
// fibonacci(1) = 1
// Fibonacci(2) = 1
// Fibonacci(3) = 2
// Fibonacci(4) = 3
// Fibonacci(5) = 5
// Fibonacci(6) = 8

function fibonacci(n) {
  if (n < 0) {
    return;
  }
  // Casos bases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Escribir una funcion que imprima un conteo regresivo
// ejemplo: 5 -> 5, 4 ,3, 2, 1, 0

// Escribir una funcion que sume los numeros del 1 al n
// ejemplo: 5 -> 5 + 4 + 3 + 2 + 1 = 15

// Escribir una funcion que calcule una potencia
// ejemplo : 2 ** 5
// = 2 * 2 ** 4
// = 2 * 2 * 2 ** 3
// = 2 * 2 * 2 * 2 ** 2
// = 2 * 2 * 2 * 2 * 2 ** 1
// = 2 * 2 * 2 * 2 * 2 * 2 ** 0
