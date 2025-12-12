console.log("Hola desde javascript en un archivo externo");
const h1Element = document.querySelector("h1");
// console.log(h1Element);
// const updateh1Element = "Nuevo texto";
h1Element.textContent = "Nuevo texto";
// console.log(h1Element.textContent);

const container = document.querySelector(".container");
const parrafo = document.createElement("p");
parrafo.textContent = "Soy un parrafo creado desde javascript";
parrafo.className = "parrafo";

container.appendChild(parrafo);
console.log(parrafo);

//
let a = 100;
let b = a; //100
a = 10;
console.log(a);
console.log(b);

let i = 10;
i = i + 1;
// i = 0 + 1

console.log("imprimo el valor de i:", i);

//Tipos de datos : Primitivos
// Numerico
const numero1 = 10;
const numero2 = 2;
const numero3 = 5;
const numero4 = 4;

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero3;
const division = numero1 / numero3;
const potencia = numero1 ** numero3;
const modulo = numero1 % numero4;
const operacionCombinada = numero1 - numero2 ** numero4;
console.log(
  suma,
  resta,
  multiplicacion,
  division,
  potencia,
  modulo,
  operacionCombinada
);

//Undefined
let indefinido;
console.log(indefinido);

//Null;
const elementoNullEnHtml = document.querySelector("a");
console.log("Elemento a en html:", elementoNullEnHtml);
const elemento = null;
console.log(elemento);
let isValid = null;

// Boolean
const estasConFiebre = true;
const estasConGripe = false;
console.log(estasConFiebre, estasConGripe);

//String
const string = "Hola mundo NUEVO";
string[1] = "h";
console.log(string);

// Tipos de datos: Funciones y objetos.
const product = {
  title: "Audifonos",
  descripcion: "Audifnos contra el agua",
  quantitity: 2,
  price: 20,
  characteristcs: {
    color: "red",
    bluetooh: "si",
  },
};

product.title = "Computadora";
product.price = "20000";
console.log(product);
console.log(product["quantitity"]);

const obj = new Object();
const object = {};
object.nuevo = "Si";
object.color = "Azul";

console.log(object);

// Funciones
saludar();
function saludar() {
  console.log("Hola desde una funcion");
}

const objeto1 = {};
let objeto2 = objeto1;
console.log(objeto1 === objeto2);

const variable1 = 20;
const variable2 = 20;
console.log(variable1 === variable2);
