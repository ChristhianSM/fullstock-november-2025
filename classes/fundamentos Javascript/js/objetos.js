const carro = {
  title: "Mercedes",
  color: "Rojo",
  llantasDeRepuesto: 2,
  isDeportivo: true,
  aspecto: {
    faros: "no",
  },
};
const auto = {};
console.log(carro);
console.log(carro.title); // Sintaxis punto

const propiedad = "aspecto";
console.log(carro[propiedad]); // Sintaxis corchetes
// const objeto = new Object();

// let sherlock = { apellido: "Holmes", edad: 64 };
// let nombrePropiedad = prompt("¿Qué quieres saber?");
// alert(sherlock[nombrePropiedad]);

// Ejemplo;
// let sherlock = {
//   apellido: "Holmes",
//   direccion: { ciudad: "Londres" },
// };

// let john = {
//   apellido: "Watson",
//   direccion: { ciudad: "Londres" },
// };

// john.apellido = "Lennon";
// john["apellido"] = "Lennon 1";
// john.direccion.ciudad = "New York";

//Ejercicios
// let capitan = "Jack";
// let perlaNegra = { capitan: capitan };
// capitan = "Barbossa";

let pratt = { name: "Chris" };
let hemsworth = { name: "Chris" };
let evans = { name: "Chris" };

let hielo = { sabor: undefined };
let arena = {};
let respuesta = hielo.sabor === arena.sabor; //undefined === undefined

// let capitan = { apellido: "Sparrow" };
// let herrero = { apellido: "Turner" };
// capitan.apellido = herrero.apellido; // capitan.apellido = "Turner"
// herrero.apellido = capitan.apellido;
// // herrero.apellido = "Turner"

let capitan = { apellido: "Sparrow" };
let herrero = { apellido: "Turner" };

const temp = capitan.apellido;
capitan.apellido = herrero.apellido; // capitan.apellido = "Turner"
herrero.apellido = temp;
// herrero.apellido = "Turner"

// Ejemplo de sherlock y john
let sherlock = {
  apellido: "Holmes",
  direccion: { ciudad: "Londres" },
};

let john = {
  apellido: "Watson",
  direccion: { ciudad: "Londres" },
};

john.apellido = "Lennon";
john.direccion.ciudad = "Nueva York";

console.log(sherlock.direccion.ciudad);

const objetoMutable = {
  color: "Rojo",
  tamano: "grande",
};

// objetoMutable = "string";
objetoMutable.color = "blanco";

// Ejercicos de mutaciones:
const documento = { titulo: "Ventas" };
const copia = { ...documento };
copia.titulo = copia.titulo + " (Copia)";

// console.log(documento.titulo); // ???
