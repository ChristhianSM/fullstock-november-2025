//Operadores logicos
//  v y v = v
const verdadero = false;
const afirmativo = true;
const isVerdadero = verdadero && afirmativo;
console.log(isVerdadero);

// Datos falsy/*  */
Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(""); // false
Boolean(0); // false
Boolean(NaN); // false

console.log("Hola" && true); // v y v = v
console.log(false && "falso"); // f y v = f
console.log(10 && 20); // v y v = f
const condicion = true && "Hola mundo";

// Operador || or
//  f o f = f
const falso = true;
const negativo = false;
const isNegativo = falso || negativo;
console.log(isNegativo);

true || true; // true
false || true; // true
true || false; // true
false || false; // false

console.log(true || "hola"); // true || true = true
console.log(false || "hola" || "chao"); // true || true = true
console.log(10 || 20);

// Operador Not (!)
console.log(!true);
console.log(!false);
console.log(!"HOLA");
console.log(!10);
console.log(!undefined);

// Funciones
saludar();
function saludar() {
  return "Hola mundo";
}

const caminar = function () {
  return "Estoy caminando";
};

caminar();

let contarEnanos = function () {
  return 7;
};
let enanos = contarEnanos;
console.log(enanos);
