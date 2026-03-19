const escuela = "Codeable";

function saludar() {
  console.log("hola");
}

function despedir() {
  console.log("Adios");
}

export { escuela as school, saludar, despedir };

export default function imprimir(mensaje) {
  console.log(mensaje);
}
