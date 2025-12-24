function despedirse() {
  console.log("Chaoooo");
}

const persona = {
  name: "Christhian",
  edad: 31,
  isDeportista: true,
  address: {
    pais: "Perú",
    departament: "Piura",
  },
  // Metodos
  saludar: function () {
    // Function Expressions
    console.log("Holaaaaa");
  },
  despedirse: despedirse, // Function Declarations
};

console.log(persona.name);
persona.saludar();
persona.despedirse();

function pikachuSaluda() {
  console.log("Pikachu saluda");
}

const pokemon = {
  nombre: "Pikachu",
  saludar: pikachuSaluda,
};

pokemon.saludar();

const auto = {
  color: "blue",
  acelerar() {
    console.log("Esta acelerando");
  },
};

auto.acelerar();

function volarAvion() {
  /* implementación... */
}
function volarAve() {
  /* implementación... */
}

function volar(specie = "avion") {
  console.log(`el ${specie} esta volando`);
}

const avion = {
  volar: volar,
};

const ave = {
  volar: volar,
};

avion.volar();
ave.volar("ave");

// Ejercicio CALCULCULADORA
const calculadora = {
  name: "Calculadora de Christhian",
  suma(a, b) {
    if (this.validar(a, b)) {
      return `La suma es : ${a + b}`;
    }
  },
  resta(a, b) {
    if (this.validar(a, b)) {
      return `La Resta es : ${a - b}`;
    }
  },
  multiplicacion(a, b) {
    if (this.validar(a, b)) {
      return `La Multiplicación es : ${a * b}`;
    }
  },
  division(a, b) {
    if (this.validar(a, b)) {
      if (b === 0) {
        return `No existe division entre 0`;
      }
      return `La division es : ${parseInt(a / b)} y el resto es ${a % b}`;
    }
  },
  validar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      console.error("Error: Ambos argumentos deben ser números.");
      return false;
    }
    return true;
  },
};

console.log(calculadora.division(8, 0));
