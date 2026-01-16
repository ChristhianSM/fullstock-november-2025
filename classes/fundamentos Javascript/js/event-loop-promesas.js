// console.log("0"); // CallStack
// setTimeout(() => {
//   // CallStack - Web-API - macrotask - CallStack
//   console.log("1");
// }, 0);
// Promise.resolve().then(() => console.log("3")); // CallStack - microtask - CallStack
// console.log("2"); // CallStack

// // 0231
// console.log("=====================");
// setTimeout(() => {
//   console.log("\n--- Ejemplo 1 ---"); // 1
//   console.log("inicio"); // 2
//   setTimeout(() => console.log("timeout 1"), 0); // 9
//   Promise.resolve()
//     .then(() => console.log("promesa 1")) // 4
//     .then(() => console.log("promesa 2")) // 7
//     .then(() => console.log("promesa 4")); // 8
//   setTimeout(() => console.log("timeout 2"), 0); // 10
//   Promise.resolve().then(() => console.log("promesa 3")); // 5
//   Promise.resolve().then(() => console.log("promesa 8")); // 6
//   console.log("fin"); // 3
// }, 100);

// console.log("=====================");
// setTimeout(() => {
//   console.log("\n--- Ejemplo 2 ---"); // 1
//   console.log("inicio"); // 2
//   setTimeout(() => console.log("timeout"), 0); // 6
//   Promise.resolve().then(() => {
//     console.log("promesa 1"); // 4
//     // Esta promesa anidada se agrega a la cola de microtasks ACTUAL
//     // y se ejecutará antes que el timeout.
//     Promise.resolve().then(() => {
//       console.log("promesa anidada");
//     }); // 5
//   });
//   Promise.resolve().then(() => {
//     console.log("promesa fuera");
//   });
//   console.log("fin"); // 3
// }, 1000);

// console.log("=====================");
// console.log("\n--- Ejemplo 3 ---"); // 1
// async function foo() {
//   console.log("foo inicio"); // 3
//   console.log("Otro console"); // 4
//   await Promise.resolve();
//   console.log("foo después del await"); // 6
// }

// console.log("inicio"); // 2
// foo();
// console.log("fin"); // 5

// console.log("====================");
// let estado = "inicial";

// Promise.resolve().then(() => {
//   estado = "actualizado";
// });

// console.log(estado);

// console.log("1");  // 1

// setTimeout(() => {
//   console.log("2");  // 5
//   Promise.resolve().then(() => console.log("3"));  // 6
// }, 0);

// Promise.resolve().then(() => {
//   console.log("4");  // 3
//   setTimeout(() => console.log("5"), 0); // 8
// });

// setTimeout(() => console.log("6"), 0);  // 7

// Promise.resolve().then(() => console.log("7")); // 4

// console.log("8");  // 2

const persona = {
  nombre: "Christhian",
  ciudad: "Piura",
  edad: 31,
};
('{"nombre": "Christhiam","ciudad": "Piura", "edad": "31"}');

console.log("El objeto persona " + persona.nombre);

let escuela = {
  nombre: "Codeable",
  fundacion: "2019",
  graduados: 300,
  cohortsActuales: [
    {
      name: "C11",
      students: 15,
    },
    {
      name: "C12",
      students: 18,
    },
  ],
};

const json = JSON.stringify(escuela);
console.log(typeof json);
console.log(json);

const jsonParse = JSON.parse(json);
console.log(jsonParse.cohortsActuales[1]);

console.log("=================");
const usersDiv = document.querySelector("#users");
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let json = `[
        {"id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz"},
        {"id": 2, "name": "Ervin Howell", "email": "Shanna@melissa.tv"}
      ]`;
      resolve(json);
    }, 300);
  });
}

getUsers().then((data) => {
  const users = JSON.parse(data);
  users.forEach((user) => {
    // Crear cada div de usuario
    const divUser = document.createElement("div");
    divUser.className = "div-user";
    const nameUser = document.createElement("p");
    nameUser.textContent = `Nombre: ${user.name}`;
    const emailUser = document.createElement("p");
    emailUser.textContent = `email: ${user.email}`;
    divUser.appendChild(nameUser);
    divUser.appendChild(emailUser);

    usersDiv.appendChild(divUser);
  });
  console.log(users);
});
