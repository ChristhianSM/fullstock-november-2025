// Ejercicio 1
// let mentirilla = {
//   sabor: "amargo",
// };

// let torta = {
//   __proto__: mentirilla,
// };

// torta === mentirilla; // false
// torta.sabor === mentirilla.sabor;  // true
// torta.hasOwnProperty("sabor") === mentirilla.hasOwnProperty("sabor"); // false

// Ejercicio 2
let mentirilla = {
  sabor: "amargo",
};

let torta = {
  __proto__: mentirilla,
};

mentirilla.sabor = "mantequilla";

mentirilla.sabor; // "mantequilla"
torta.sabor; // "mantequilla"

// Ejercicio 3
// let spider = {

//   patas: 8,
// };

// let milesMorales = {
//   __proto__: spider,
// };

// milesMorales.patas = 2; // asignacion

// spider.legs; // undefined
// spider.patas; // 8
// milesMorales.patas; // 2

// Ejercicio 4
let spider = {
  patas: 8,
};

let miles = {
  __proto__: spider,
};

let gwen = {
  __proto__: spider,
};

miles.patas = 2;
spider.patas = gwen.patas * 2;

console.log(gwen.patas); // 16

// Ejercicio 5
let stan = { destino: "cielo" };
let cartman = {
  __proto__: stan,
};
// >>> Dibuja el diagrama VV en este momento. Guíate del resultado de las siguientes líneas <<<

// console.log(cartman === stan); // false
// console.log(cartman.destino); // "cielo"

// stan.destino = "infierno";
// console.log(cartman.destino); // "infierno"
