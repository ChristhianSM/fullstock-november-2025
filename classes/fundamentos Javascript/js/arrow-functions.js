// Arrow Functions
// function declarations
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(10, 20);
console.log(resultado);

// function expressions
const sumar2 = function (a, b) {
  return a + b;
};

const resultado2 = sumar2(30, 40);
console.log(resultado2);

// arrow functions
const sumar3 = (a, b) => a + b;
const resultado3 = sumar3(50, 60);
console.log(resultado3);

const saludar = (name, edad) => `Hola ${name}, tienes ${edad} años`;
console.log(saludar("Christhian", 31));

function saludar2(name, edad) {
  return `Hola ${name}, tienes ${edad} años`;
}

console.log(saludar2("Ana", 25));

let operar = (operacion, num1, numer2) => {
  switch (operacion) {
    case "sumar":
      return num1 + numer2;
    case "restar":
      return num1 - numer2;
    case "multiplicar":
      return num1 * numer2;
    case "dividir":
      return num1 / numer2;
    default:
      return "Operacion invalida";
  }
};

console.log(operar("multiplicar", 10, 15));

console.log("=================");
const escuela = {
  name: "codeable",
  mostrarNombre: function () {
    console.log(this.name);
  },
};

const persona = {
  nombre: "Juan",
  mostrarNombre: () => {
    console.log(this.nombre);
  },
};

escuela.mostrarNombre();
persona.mostrarNombre();

console.log("=================");
const school = {
  nombre: "Codeable",
  mostrarNombre: function () {
    console.log(this);
    // <- función tradicional (define this)
    const funcionInterna = () => {
      // <- función flecha (no tiene this)
      console.log(this.nombre);
    };

    funcionInterna();
  },
};

school.mostrarNombre(); // "Codeable"
