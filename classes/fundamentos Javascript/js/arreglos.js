// // Arreglos
// const frutas = [
//   "Hola", //0
//   10, //1
//   true, //2
//   { nombre: "Christhian", edad: 31 }, // 3
//   [1, 2, 3, 4], //4
// ];

// const fruits = new Array(
//   "Manzana",
//   "Pera",
//   "Platano",
//   "Melon",
//   "Sandilla",
//   "Fresa"
// );

// // Acceso a cada elemento del arreglo
// console.log(frutas[3]);
// console.log(frutas[4]);

// //Modificar los elementos de un arreglo
// frutas[0] = "Hola Mundo";
// console.log(frutas);

// // Propiedades
// console.log("cantidad de elementos de fruits:", fruits.length);

// // Metodos de los arreglos
// // Metodo push y pop
// const numeros = [1, 2, 3, 4];
// const nuevoArreglo = [...numeros, 5];
// // numeros.push(5);
// // numeros.pop();
// console.log(numeros, nuevoArreglo);

// // Metodo unshift y shift
// const verduras = ["tomate", "Zanahoria", "papa", "cebolla"];
// // verduras.unshift("apio");
// verduras.shift();
// console.log(verduras);

// // Metodo splice();
// // const fruits = new Array(
// //   "Manzana",
// //   "Pera",
// //   "Platano",
// //   "Melon",
// //   "Sandilla",
// //   "Fresa"
// // );
// // Eliminar;
// // const frutasEliminadas = fruits.splice(-2);
// // console.log(
// //   `frutas que quedan: ${fruits}\nfrutas eliminadas: ${frutasEliminadas}`
// // );

// // Agregar elementos en cualquier posicion
// // const frutasInsertadas = fruits.splice(1, 0, "Mango", "Naranja");
// // console.log(`total de frutas: ${fruits}`);

// //Modificar elementos en cualquier posicion
// // const frutasEliminadas= fruits.splice(3, 1, "Mango");
// // console.log(`Arreglo de frutas modificado: ${fruits}`);

// // Metodo at();
// console.log(fruits.at(-2));

// // Metodo Includes
// const existFruta = fruits.includes("manzana");
// console.log(existFruta);

// // Metodo indexOf indexLastOf
// const lista = [1, 2, 3, 2, 1];
// console.log(lista.indexOf(2)); // 1
// console.log(lista.lastIndexOf(2)); // 3
// console.log("==============");

// // Metodo forEach
// const nuevaLista = [];
// lista.forEach((item) => {
//   nuevaLista.push(item * 2);
// });
// console.log(nuevaLista);
// console.log("==============");

// // Metodo Map();
// const productos = [
//   { id: 1, nombre: "Computadora", precio: 1000, cantidad: 1 },
//   { id: 2, nombre: "Laptop", precio: 1500, cantidad: 1 },
//   { id: 3, nombre: "Cpu", precio: 700, cantidad: 1 },
//   { id: 4, nombre: "tablet", precio: 800, cantidad: 1 },
// ];
// const nuevosProductos = productos.map((product) => {
//   // if (product.nombre === "Cpu") {
//   //   return {
//   //     ...product,
//   //     // nombre: "Computadora",
//   //     // precio: 1000,
//   //     cantidad: product.cantidad + 1,
//   //   };
//   // }
//   // return product;
//   return {
//     ...product,
//     cantidad:
//       product.nombre === "Cpu" ? product.cantidad + 1 : product.cantidad,
//   };
// });
// console.log(nuevosProductos);

// // Metodo Filter
// // const productosFiltrados = productos.filter((producto) => {
// //   if (producto.precio >= 1000) {
// //     return producto;
// //   }
// // });
// const productosFiltrados = productos.filter(
//   (producto) => producto.precio >= 1000
// );
// console.log(productosFiltrados);
// // Eliminar el producto con el id = 2;
// const productosResultantes = productos.filter((producto) => producto.id !== 2);
// console.log(productosResultantes);

// // Metodo Find FindIndex
// const productoEncontrado = productos.find((producto) => producto.id === 3);
// console.log(productoEncontrado);

// const indiceProductoEncontrado = productos.findIndex(
//   (producto) => producto.id === 3
// );
// console.log(indiceProductoEncontrado);

// // Metodo Reduce
// const total = productos.reduce(
//   (acumulador, valorActual) => acumulador + valorActual.precio,
//   0
// );

// // Esto seria similar a: let sum = 0;
// // for (let i = 0; i < products.length; i++) {
// //     sum += products[i].precio;
// // }
// // console.log(sum);

// console.log(total);
// console.log("===================");

// // Metodo Slice
// const animales = ["hormiga", "bisonte", "camello", "pato", "elefante"];
// // console.log(animales.slice(2));
// console.log(animales.slice(2, 4));
// console.log(animales);

// // Metodo Concat
// const a = [1, 2];
// const b = [3, 4];
// const c = a.concat(b);

// console.log(c);

// // Metodo Flat y FlatMap()
// const arr = [1, 2, [3, 4]];
// console.log("Arreglo aplnado:", arr.flat());

// const frases = ["Hola mundo", "Adiós"];
// const mapeado = frases.map((frase) => frase.split(" "));
// console.log(mapeado);

// const mapeado2 = frases.flatMap((frase) => frase.split(" "));
// console.log(mapeado2);

// // Metodo Join
// const elementos = ["Fuego", "Aire", "Agua"];
// console.log(elementos.join(" "));

// // Ordenamientos SORT
// const nombres = ["Diego", "Ana", "Carlos"];
// nombres.sort();
// console.log(nombres);

// const numbers = [1, 30, 4, 21, 100000];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// // Metodo Reverse
// const array = [1, 2, 3];
// array.reverse();
// console.log(array);

// // Metodo toSorted()
// const numeros3 = [3, 1, 2];
// const ordenados = numeros3.toSorted();
// console.log("ARREGLO ORIGINAL:", numeros3);
// console.log("ARREGLO NUEVO ORDENADO:", ordenados);

// // Metodo toReverse();
// const items = [1, 2, 3];
// const invertidos = items.toReversed();

// console.log("Arreglo original de items:", items);
// console.log("Arreglo invertido:", invertidos);

// // Metodo With
// const arr1 = [1, 2, 3];
// const nuevoArr = arr1.with(1, 200);

// console.log(arr1);
// console.log(nuevoArr);

const binaryArrayToNumber = (arr) => {
  // your code
  let numberBase10 = 0;
  for (let i = 0; i < arr.length; i++) {
    numberBase10 += arr[i] * 2 ** (arr.length - i - 1);
  }
  return numberBase10;
};
const arreglo = [0, 0, 1, 0];
console.log(binaryArrayToNumber(arreglo));
