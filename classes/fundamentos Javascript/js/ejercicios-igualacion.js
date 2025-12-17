let fingernails = "mustache";
let toes = fingernails;
let nose = "must" + "ache"; //  "mustache"

fingernails === toes; // ?
toes === nose; // ?
nose === fingernails; // ?

// Ejercicio 2
let tomato = {};
let oregano = tomato;
let potato = {};
tomato = {};

tomato === oregano; // ?
oregano === potato; // ?
potato === tomato; // ?

// ejercicio 3
let tea = function () {
  return 0 / 0;
};
let coffee = function () {
  return 0 / 0;
};
let matcha = tea(); // NaN
let latte = coffee(); // NaN
tea === coffee; // ?  // funcion === funcion (false)
Object.is(tea, coffee); // ?
matcha === latte; // ?
Object.is(matcha, latte); // ?
