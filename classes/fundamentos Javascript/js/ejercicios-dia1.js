let enanos = 7;
let continentes = "7";
let maravillas = 3 + 4;

console.log(enanos === maravillas);

// Ejercicio 2
let animal = {};
let perro = animal;
let gato = {};

console.log(animal === perro);
console.log(animal === gato);

// Ejercico 3
let suma = function () {
  return 2 + 2;
};
let resultado = suma();
console.log(resultado);

// Ejercico 4
let saludar = function () {
  return "Hola 👋🏼";
};
let saludo = saludar();
let bienvenida = saludar();
console.log(saludo === bienvenida);

// Ejercico 5
let plantar = function () {
  return {};
};
let arbol = plantar();
let flor = plantar();
let idea = plantar();
console.log(arbol, flor, idea);
console.log("Arbol y flor son el mismo objeto", arbol === flor);
console.log("Arbol y idea son el mismo objeto", arbol === idea);
console.log("idea y flor son el mismo objeto", idea === flor);

// Ejercico 6
let cocinar = function () {
  return "estofado";
};

let preparar = function () {
  return "estofado";
};

let comida = cocinar();
let alimento = preparar();
let platillo = "estofado";

console.log(comida, alimento, platillo);
console.log(comida === alimento);

//Ejercicio 7
let sumar = function () {
  return 2 + 6;
};

let añadir = function () {
  return 2 + 6;
};

let agregar = function () {
  return 5 + 3;
};

let operar = añadir;
let resultadoTotal = sumar();
let respuesta = operar();
let numero = 8;

console.log(operar);

// Ejercicio 8
let prendido = "si"; //True
let enMovimiento = null; // falsy
let avanzando = prendido && enMovimiento; // Null -> falsy
let detenido = !avanzando; // true
let misterio = !detenido || (enMovimiento && !avanzando);
//              !true ||  (null && !null)
//              false || null
