// let spiderman = {};
// console.log(spiderman.identidad);

// let humano = {
//   corazon: true,
// };

// let maryJean = {
//   pelo: "rojo",
// };

// maryJean.__proto__ = humano;

// console.log("==================");
// console.log(humano.pelo); // undefined
// console.log(maryJean.pelo); // rojo

// console.log(humano.corazon); // true
// console.log(maryJean.corazon); // true

// console.log(humano.cola); // undefined
// console.log(maryJean.cola); // undefined

// Cadena de prototipos
// let mamifero = {
//   poneHuevos: false,
// };

// let human = {
//   corazon: true,
// };

// human.__proto__ = mamifero;

// let lois = {
//   pelo: "negro",
// };

// lois.__proto__ = human;

// Shadowing
// console.log("==================");
// let humano = {
//   corazon: true,
//   pelo: "natural",
// };

// let maryJean = {
//   pelo: "rojo",
// };

// maryJean.__proto__ = humano;
// console.log(maryJean.pelo);
// console.log(humano.pelo);

// Asignacion
// let humano = {
//   corazon: true,
// };

// let maryJean = {
//   pelo: "rojo",
// };

// maryJean.__proto__ = humano;
// maryJean.corazon = false; // Asignacion crea una propiedad en maryJean
// console.log(maryJean.corazon);
// console.log(humano.corazon);

const obj = {};
console.log(obj.__proto__);

// Un Objeto Sin Prototip
const objetoSinProto = {};
objetoSinProto.__proto__ = null;

// Contaminacion del prototipo
let spiderman = {};
console.log(spiderman.identidad); // "Peter Parker"

spiderman.__proto__.identidad = "Peter Parker"; // ASIGNACION AL PROTOTIPO GLOBAL

// Otra forma de asignar el prototipo
// let humano = {
//   corazon: true,
// };

// let maryJean = {
//   pelo: "rojo",
//   __proto__: humano, // esto funciona
// };

let humano = {
  corazon: true,
};

let maryJean = {
  pelo: "rojo",
};

// maryJean.__proto__ = humano;
Object.setPrototypeOf(maryJean, humano);
// console.log(Object.getPrototypeOf(maryJean));
