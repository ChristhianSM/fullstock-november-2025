const persona = {
  nombre: "Simon",
  apellido: "Grau",
  obtenerNombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre, persona.apellido);
console.log(persona.nombreCompleto);
persona.apellido = "";
console.log(persona);

const producto = {
  nombre: "Audifonos",
  precio: 120,
  cantidad: 5,
  descuento: 10,
  get obtenerPrecioFinal() {
    return (
      this.precio * this.cantidad -
      (this.precio * this.cantidad * this.descuento) / 100
    );
  },
};

const total =
  producto.precio * producto.cantidad -
  (producto.precio * producto.cantidad * producto.descuento) / 100;

console.log(total);
console.log(producto.obtenerPrecioFinal);

//Setters
const personaNew = {
  nombre: "Simon",
  apellido: "Grau",
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  set nombreCompleto(valor) {
    if (typeof valor !== "string") return; // solo aceptamos strings

    const partes = valor.split(" "); // dividimos el string en un arreglo, parte = ["Maria", "González"]
    this.nombre = partes[0];
    this.apellido = partes[1];
  },
};

personaNew.nombreCompleto = "Maria González"; // Set
console.log(personaNew.nombreCompleto); // Get
console.log(personaNew.nombre); // Maria
console.log(personaNew.apellido); // González

console.log("==============");
// Ejercicio
const cuentaBancaria = {
  saldo: 1000,
  get obtenerSaldo() {
    return `$${this.saldo}`;
  },
  set obtenerSaldo(saldo) {
    if (saldo < 0) return;
    this.saldo = saldo;
  },
};

console.log(cuentaBancaria.obtenerSaldo); // "$1000"
cuentaBancaria.obtenerSaldo = 80;
console.log(cuentaBancaria.obtenerSaldo);
cuentaBancaria.obtenerSaldo = -100; // no tiene efecto
console.log(cuentaBancaria.obtenerSaldo); // "$80"
