// a === b
// a == b
// Object.is(a,b)
const num1 = 2;
const num2 = 2;
const objeto1 = {};
const objeto2 = {};
console.log(Object.is(num1, num2));
console.log(Object.is(objeto1, objeto2));

let enanos = 7;
let continentes = "7";
let maravillas = 3 + 4;

console.log(Object.is(enanos, continentes));

let manzana = {};
let pera = manzana;
let naranja = pera;
pera = {};

console.log(Object.is(manzana, pera)); // ?
console.log(Object.is(pera, naranja)); // ?
console.log(Object.is(naranja, manzana)); // ?

// ===
console.log(2 === 2);
console.log({} === {});
console.log(2 === "2");

let resultado = NaN;
console.log(resultado === NaN);
Number.isNaN(resultado);

// ==
console.log(2 == "2");
