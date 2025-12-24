"use strict";
const persona = {
  nombre: "Christhian",
  apellidos: "Silupú Moscol",
  edad: 31,
  altura: 1.64,
  peso: 70,
  nombreCompleto() {
    return `Soy ${this.nombre} ${this.apellidos} tengo ${this.edad}, mido ${this.altura} y peso ${this.peso} kg`;
  },
};

console.log(persona.nombreCompleto());

function saludar() {
  // ¿Cómo podemos implementar esta función?
  // console.log(this);
  return `Hola mi nombre es ${this.nombre} y tengo ${this.edad}`;
}

const persona1 = {
  nombre: "Simon",
  edad: 20,
  saludar: saludar,
};

const persona2 = {
  nombre: "Micaela",
  saludar: saludar,
};

console.log(persona1.saludar()); // Imprime: "Hola, mi nombre es Simon"
console.log(persona2.saludar()); // Imprime: "Hola, mi nombre es Micaela"

// This dentro de otros contextos
console.log(this);

const personaNew = {
  nombre: "Simon",
  apellido: "Grau",
  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(personaNew.obtenerNombreCompleto());

function saludar() {
  return this;
}

console.log(saludar());
