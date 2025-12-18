// Functions expressions
const sumar = function () {
  return 10 + 20;
};

console.log(sumar());

// function declaration
function multiplicar() {
  return 10 * 30;
}
const mult = multiplicar();
console.log(mult);

const paragraphTriangule = document.querySelector(".areaTriangulo");
function calcularArea() {
  const base = 10;
  const altura = 50;
  paragraphTriangule.textContent = (base * altura) / 2;
  // return
  // console.log(base);
}
// console.log(base);
calcularArea();

// Scope
const name = "Christhian Silupú Moscol";
const nombreCompleto = function () {
  const name = "Chris";
  const lastname = "Silupú";
  return `Mi nombres es ${name} ${lastname}`;
};
console.log(name);
// console.log(lastname);
console.log(nombreCompleto());

// Parametros y argumentos
const producto = {
  title: "Zapatillas",
  price: 150,
  quantity: 5,
};
function total(produc) {
  const total = produc.price * produc.quantity;
  return total;
}

console.log(`El total a pagar es : $${total(producto)}`);

// Valores por defecto
function descuento(price, quantity, porcetanje = 10, title = "Hola") {
  console.log(price, quantity, porcetanje, title);
  const descuento = price * quantity - (porcetanje / 100) * price;
  return descuento;
}

console.log(`El total a pagar es : $${descuento(50, 2)}`);

function crearUsuario(nombre, edad) {
  console.log(nombre, edad);
}

crearUsuario("Pedro"); // ???
crearUsuario("Pedro", 30, "987654321", "Mexico");

// Crear una funcion que retorne el IMC, leer las variables com prompt y mostrar la respuesta en una etiqueta html.
// IMC = Peso (kg) / (Altura (m) * Altura (m)),
const imcHtml = document.querySelector(".imc");
const weight = prompt("Ingresa tu peso en kilogramos");
const height = prompt("Ingresa tu altura en metros");

const calcularIMC = function (weight, height) {
  // console.log(weight, height);
  return weight / height ** 2;
};

imcHtml.textContent = `Tu indice de masa corporal (IMC) es : ${calcularIMC(
  weight,
  height
)}`;
