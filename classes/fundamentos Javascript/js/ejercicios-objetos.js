const nombre = "Christhian";
const apellido = "Silupú";
const edad = 31;
const tamano = 1.7;
const texto =
  "Hola soy" +
  " " +
  nombre +
  " " +
  apellido +
  " y tengo " +
  edad +
  " y mido " +
  tamano +
  "m";
const texto2 = `Hola soy ${nombre} ${apellido}, tengo ${edad} años y mido ${tamano}m`;
const h3 = document.querySelector(".texto");
h3.textContent = texto2;
console.log(texto);
console.log(texto2);

// Ejercicio con prompt
// const name = prompt("Ingresa tu nombre :");
// const lastname = prompt("Ingresa tu apellido :");
// const age = prompt("Ingresa tu edad :");
// const height = prompt("Ingresa tu talla :");

// const formatString = `Hola soy ${name} ${lastname}, tengo ${age} años y mido ${height}m`;
// const paragrahp = document.querySelector(".paragrahp");
// paragrahp.textContent = formatString;

// Calcular el area y el perimetro de un rectangulo, sabiendo su largo y su ancho.
// A = b*h, 2p = 2b + 2h

const objeto1 = { name: "Christhian" };
const objeto2 = { color: "red" };
const objetoResultante = { ...objeto1, ...objeto2 };

const array = ["sTRING", 20, true];

console.log(array);

const resturante = {
  name: "La fragata",
  ubicacion: {
    calle: "Tambogrande",
    number: 309,
  },
  capacity: 50,
  categories: ["italiana", "vegetariana", "postres"],
};

console.log(
  `la calle del restaurantes es : ${resturante.ubicacion.calle} y la comida seleccionada es : ${resturante.categories[1]}`
);
