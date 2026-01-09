// SetTimeout
function saludar(saludo) {
  console.log("Hola", saludo);
}
// saludar();
// const timerId1 = setTimeout(saludar, 2000, "Silupú");
// const timerId = setTimeout(() => {
//   saludar("Christhian");
// }, 2000);

// clearTimeout(timerId1);
// console.log(timerId, timerId1);

// console.log("Adios");

// SetInterval
// const timerId2 = setInterval(saludar, 2000, "Juan");
// const timerId3 = setInterval(() => {
//   saludar("Renzo");
// }, 2000);

// setTimeout(() => {
//   clearInterval(timerId2);
// }, 5000);
// setTimeout(() => {
//   clearInterval(timerId3);
// }, 8000);

// Contador
let contador = 0;
// const timerIdContador = setInterval(() => {
//   console.log(contador);
//   contador += 1;
// }, 2000);

// setTimeout(() => {
//   clearInterval(timerIdContador);
// }, 5000);

console.log("Primero");
console.log("Segundo");
setTimeout(() => {
  console.log("Terceroo");
}, 0);
console.log("Cuarto");
