const obj = {};
const obj2 = new Object();

// let animal = {};
// animal.nombre = "Leo";
// animal.energia = 10;

// animal.comer = function (cantidad) {
//   console.log(`${this.nombre} está comiendo.`);
//   this.energia += cantidad;
// };

// animal.dormir = function (tiempo) {
//   console.log(`${this.nombre} está durmiendo.`);
//   this.energia += tiempo;
// };

// animal.jugar = function (tiempo) {
//   console.log(`${this.nombre} está jugando.`);
//   this.energia -= tiempo;
// };

// const metodosAnimal = {
//   comer: function (cantidad) {
//     console.log(`${this.nombre} está comiendo.`);
//     this.energia += cantidad;
//   },
//   dormir: function (tiempo) {
//     console.log(`${this.nombre} está durmiendo.`);
//     this.energia += tiempo;
//   },
//   jugar: function (tiempo) {
//     console.log(`${this.nombre} está jugando.`);
//     this.energia -= tiempo;
//   },
// };

// function Animal(nombre, energia) {
//   // let animal = {};
//   let animal = Object.create(Animal.prototype); //{}, agrega prototipo
//   animal.nombre = nombre;
//   animal.energia = energia;

//   // animal.__proto__ = metodosAnimal;

//   return animal;
// }

// Animal.prototype.comer = function (cantidad) {
//   console.log(`${this.nombre} está comiendo.`);
//   this.energia += cantidad;
// };
// Animal.prototype.dormir = function (tiempo) {
//   console.log(`${this.nombre} está durmiendo.`);
//   this.energia += tiempo;
// };
// Animal.prototype.jugar = function (tiempo) {
//   console.log(`${this.nombre} está jugando.`);
//   this.energia -= tiempo;
// };

// function Animal(nombre, energia) {
//   this.nombre = nombre;
//   this.energia = energia;
// }

// Animal.prototype.comer = function (cantidad) {
//   console.log(`${this.nombre} está comiendo.`);
//   this.energia += cantidad;
// };

// Animal.prototype.dormir = function (tiempo) {
//   console.log(`${this.nombre} está durmiendo.`);
//   this.energia += tiempo;
// };

// Animal.prototype.jugar = function (tiempo) {
//   console.log(`${this.nombre} está jugando.`);
//   this.energia -= tiempo;
// };

class Animal {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }
  comer(cantidad) {
    console.log(`${this.nombre} está comiendo.`);
    this.energia += cantidad;
  }
  dormir(tiempo) {
    console.log(`${this.nombre} está durmiendo.`);
    this.energia += tiempo;
  }
  jugar(tiempo) {
    console.log(`${this.nombre} está jugando.`);
    this.energia -= tiempo;
  }
}

const leo = new Animal("Leo", 10);
const mimi = new Animal("Mimi", 15);
const firulais = new Animal("firulais", 15);
