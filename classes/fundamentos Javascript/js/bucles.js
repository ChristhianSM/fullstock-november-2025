// For
// const numero = 20;
// for (let i = 1; i <= numero; i++) {
//   if (i % 2 === 0) {
//     console.log("contador", i);
//   } else {
//     console.log("Es impar", i);
//   }
//   // al ultimo
// }

const numero = 20;
for (let i = 2; i <= numero; i = i + 2) {
  console.log("Es impar", i);
}
console.log("========================");

// While
const number = -1;
let index = 0;
while (index <= number) {
  if (index % 2 === 0) {
    console.log("En index es par", index);
  }
  index = index + 1;
}

// Do while
const num = 5;
let a = 0;
do {
  console.log("Entro al menos una vez", a);
  a++;
} while (a < num);

// let numeroPrompt = Number(prompt("Ingresa un numero"));

// while (isNaN(numeroPrompt)) {
//   numeroPrompt = Number(prompt("Ingresa un numero correcto por favor"));
// }
// console.log(numeroPrompt);

// let numeroPrompt;
// do {
//   numeroPrompt = Number(prompt("Ingresa un numero"));
// } while (isNaN(numeroPrompt));

// Ingresar un numero del 5 al 10, volver a preguntar si el usuario ingreso un numero no valido o ingreso un numero fuera de ese rango.

console.log("=======================");
// break y continue.
const palabra = "Codeable";
const buscarLetra = "C";

for (let i = 0; i < palabra.length; i++) {
  if (palabra[i] === buscarLetra) {
    console.log(
      "Se encontro la letra buscada por primera vez en la posicion:",
      i
    );
    // break;
  }
}

for (let i = 1; i <= 10; i++) {
  if (i === 4 || i === 7) {
    continue; // Salta la iteración actual y continua con la siguiente
  }
  console.log(i);
}
