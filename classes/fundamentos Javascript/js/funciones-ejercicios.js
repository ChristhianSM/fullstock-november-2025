let globalVar = 10;

function testScope(a) {
  let localVar = a + globalVar;
  return localVar;
}

console.log(testScope(5)); // 15

function suma(a, b, c = 3) {
  //c = undefined  // 1 + 2 + 3
  return a + b + c;
}

console.log(suma(1, 2)); // ???

function saludo(nombre, tipo = "Amigo") {
  return `Hola, ${nombre}. Eres un gran ${tipo}.`;
}

console.log(saludo("Luis", "compañero")); // ???

function producto(a, b) {
  return a * b;
}

let res = producto(5, 4);
console.log(res); // ???

let numero = 5;

function modificarValor() {
  // numero = 3;
  let numero = 10;
  return numero;
}

modificarValor();
console.log(numero); // ???

// Crear un objeto con las notas de un estudiante, tiene que tener 5 notas, sacar el promedio y mostrarlo en pantalla.
const student = {
  name: "Christhian",
  edad: 31,
  nota1: 15,
  nota2: 18,
  nota3: 16,
  nota4: 15,
  nota5: 16,
};

const getAverageGrade = function (student) {
  const promedio =
    (student.nota1 +
      student.nota2 +
      student.nota3 +
      student.nota4 +
      student.nota5) /
    5;
  return promedio;
};

console.log(
  `El promedio de notas del estudiante ${student.name} es: ${getAverageGrade(
    student
  )}`
);

const student1 = {
  name: "Xiomara",
  edad: 25,
  nota1: 10,
  nota2: 9,
  nota3: 5,
  nota4: 10,
  nota5: 7,
};
function calcularProm(nota1, nota2, nota3, nota4, nota5) {
  return (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
}
const prom = calcularProm(
  student1.nota1,
  student1.nota2,
  student1.nota3,
  student1.nota4,
  student1.nota5
);
console.log(`El promedio del estudiante es ${prom}`);

const student2 = {
  nombre: "Juan Pérez",
  edad: 31,
  nota1: 15,
  nota2: 18,
  nota3: 16,
  nota4: 15,
  nota5: 16,
};
function calcularPromedio(student) {
  suma =
    student.nota1 +
    student.nota2 +
    student.nota3 +
    student.nota4 +
    student.nota5;
  promedio = suma / 5;

  return promedio;
}
const promedioFinal = calcularPromedio(student2);
console.log(`El promedio del estudiante es ${promedioFinal}`);
