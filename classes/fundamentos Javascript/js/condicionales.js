const nota = 11;
if (nota >= 15 && nota <= 17) {
  console.log("Alumno regular");
}

const valorTruthy = "undefined";
// Es una expresion
if (valorTruthy) {
  console.log("Entro por que la condicion tiene un valor truthy");
}

// If else
const llueve = false;
if (llueve) {
  console.log("Esta que llueve");
} else {
  console.log("No esta que llueve");
}

// If else if
if (nota >= 12 && nota <= 14) {
  console.log("Alumno maso menos");
} else if (nota >= 15 && nota <= 17) {
  console.log("Alumno bueno");
} else if (nota >= 18 && nota <= 20) {
  console.log("Alumno destacado");
} else {
  console.log("Alumno malo");
}

if (nota < 0 || nota > 20 || isNaN(nota)) {
  console.log("Nota ingresa incorrectamente");
}

if (nota >= 18) {
  console.log("Alumno destacado");
} else if (nota >= 15) {
  console.log("Alumno bueno");
} else if (nota >= 12) {
  console.log("Alumno maso menos");
} else {
  console.log("Alumno malo");
}

// Operador ternario
// condición ? expresiónSiTruthy : expresiónSiFalsy;
const estaLLoviendo = undefined ? "Si esta lloviendo" : "No esta lloviendo";
console.log(estaLLoviendo);

if (undefined) {
  console.log("Si esta lloviendo");
} else {
  console.log("No esta lloviendo");
}

// Switch case
const diaSemana = 10;
if (diaSemana === 1) {
  console.log("Dia Lunes");
} else if (diaSemana === 2) {
  console.log("Martes");
} else if (diaSemana === 3) {
  console.log("Miercoles");
} else if (diaSemana === 4) {
  console.log("Jueves");
} else if (diaSemana === 5) {
  console.log("Viernes");
} else if (diaSemana === 6) {
  console.log("Sabado");
} else if (diaSemana === 7) {
  console.log("Domingo");
} else {
  console.log("Ingresaste un numero incorrecto");
}

switch (diaSemana) {
  case 1:
    console.log("Dia Lunes");
    break;
  case 2:
    console.log("Dia Martes");
    break;
  case 3:
    console.log("Dia Miercoles");
    break;
  case 4:
    console.log("Dia Jueves");
    break;
  case 5:
    console.log("Dia Viernes");
    break;
  case 6:
    console.log("Dia Sabado");
    break;
  case 7:
    console.log("Dia Domingo");
    break;

  default:
    console.log("Ingresaste un numero incorrecto");
    break;
}

const dia = "Lunes";
switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
    console.log("Un día laborable.");
    break;
  case "viernes":
    console.log("¡Casi fin de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("Día de descanso.");
    break;
}
