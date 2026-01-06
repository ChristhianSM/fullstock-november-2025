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

// Animal.siguienteAComer = function (animales) {
//   const ordenarAnimales = animales.sort((a, b) => a.energia - b.energia);
//   return ordenarAnimales[0].nombre;
// };

// function Perro(nombre, energia, raza) {
//   Animal.call(this, nombre, energia);
//   this.raza = raza;
// }

// const leo = new Animal("Leo", 10);
// const motha = new Animal("Motha", 100);
// console.log(leo);
// // leo.dormir(5);
// // console.log(leo.energia);

// for (const propiedad in leo) {
//   console.log(propiedad);
// }

class Animal {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }

  static siguienteAComer(animales) {
    const ordenarAnimales = animales.sort((a, b) => a.energia - b.energia);
    return ordenarAnimales[0].nombre;
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

  get status() {
    return `${this.nombre} tiene ${this.energia} de energía`;
  }

  set status(energia) {
    if (energia >= 0) {
      this.energia = energia;
    }
  }
}

class Perro extends Animal {
  constructor(nombre, energia, raza) {
    super(nombre, energia);
    this.raza = raza;
  }

  jugar(tiempo) {
    console.log(`${this.nombre} mueve la cola de felicidad.`);
    super.jugar(tiempo);
  }

  comer(cantidad) {
    super.comer(cantidad);
    super.dormir(10);
  }
}

class Automovil {}

const leo = new Animal("Leo", 150);
const motha = new Animal("Motha", 100);
const light = new Perro("Light", 250, "Chuzkerman");
// light.jugar(10);
light.comer(20);

const animales = [leo, motha, light];
// console.log(Animal.siguienteAComer(animales));
// console.log(leo instanceof Animal);
// console.log(leo instanceof Automovil);

// console.log(motha.status);
// console.log(light.status);
// motha.status = -10;
// console.log(motha.status);

// console.log(siguienteAComer(animales));
// console.log(leo);
// // leo.dormir(5);
// for (const propiedad in leo) {
//   console.log(propiedad);
// }

// console.log(Object.getPrototypeOf(motha));
