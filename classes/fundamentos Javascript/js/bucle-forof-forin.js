// for of -> arreglos y string
const palabra = "Codeable";
// for of
for (const letra of palabra) {
  console.log(letra);
}

console.log("==========");
// for
for (let i = 0; i < palabra.length; i++) {
  console.log(palabra[i]);
}

const arrayFruits = ["Manzana", "Pera", "Melon", "Platano"];
for (const fruit of arrayFruits) {
  console.log(fruit);
}

console.log("==============");
// For in  -> iterar entre las propiedades de un objeto.
const persona = {
  nombre: "Angélica",
  edad: 30,
  profesion: "Desarrolladora",
};

// persona.edad  -> Cuando ya conocemos la propiedad
// propedad["edad"];  -> Cuando no la conocemos

for (const propiedad in persona) {
  console.log(`${propiedad} : ${persona[propiedad]}`);
}

const productos = [
  { id: 1, nombre: "Laptop", precio: 800 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 60 },
  { id: 4, nombre: "Monitor", precio: 300 },
];

// Usa for...of para:
// 1. Crear un array solo con los nombres de los productos
// 2. Calcular el precio total de todos los productos

// Metodos en datos primitivos.
let letras = "Hola";
const string = new String("Hola mundo");
let numeros = 10.15;
const num = new Number(numeros);
let boolean = true;
const booleano = new Boolean(boolean);
let indefinido = undefined;
let nulo = null;

// Metodo length -> Calcular la cantidad de caracteres
// Metodo ChartAt -> Obtiene un caracter de acuerdo al indice
// metodo subString ->
// Si indexStart es igual a indexEnd, substring() devuelve una cadena vacía.
// Si se omite el indexEnd, se extrae la subcadena hasta el final del string.
// Si indexStart o indexEnd son negativos o NaN, se tratan como si fueran 0.
// Si indexStart es mayor que indexEnd, el valor de indexEnd pasa a ser indexStart y viceversa (se intercambian)

// Metodo Slice -> extrae una cadena
// Metodo Repeat -> repite una cadena.
// Metodo Include -> Busca si una sub cadena esta incluida en una cadena.

// Metodo concat -> Concatena strings

// Metodos de los numeros
// Metodo toFixed();  -> Aproximar los decimales
// Metodo toString(); -> Convierte un numero a una determinada base.
