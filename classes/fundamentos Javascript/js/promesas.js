// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hasErrorConnection = Math.random() > 0.5;
//     if (hasErrorConnection) {
//       reject("Ocurrio un error de conexion");
//     }
//     resolve("Se resolvio correctamente");
//   }, 2000);
// });

// // function onSuccess(value) {
// //   console.log(value);
// // }

// // function onError(error) {
// //   console.log(error);
// // }

// promesa
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const users = [
  {
    email: "pepe@mail.com",
    password: "supersecret",
    name: "Pepe",
    githubUsername: "pepe-20",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
];

const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

const collaborators = [
  { idRepo: 2, id: 10, name: "Christhian", username: "christhian25" },
  { idRepo: 2, id: 11, name: "Juan", username: "juan10" },
  { idRepo: 3, id: 11, name: "Juan", username: "juan10" },
];

function getUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findUser = users.find((user) => user.email === email);
      if (!findUser || findUser.password !== password) {
        const error = new Error("Credenciales Invalidas");
        reject(error);
      }
      resolve(findUser);
    }, 2000);
  });
}

function getPublicRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasConnectionError = Math.random() > 0.5;
      if (hasConnectionError) {
        const error = new Error("Error de conexion");
        reject(error);
      }

      const repos = githubPublicRepos.filter((repo) => repo.owner === username);
      resolve(repos);
    }, 2000);
  });
}

function getCollaborators(idRepo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasConnectionError = Math.random() > 0.5;
      if (hasConnectionError) {
        const error = new Error("Error de conexion");
        reject(error);
      }
      const usersCollaborators = collaborators.filter(
        (item) => item.idRepo === idRepo
      );
      resolve(usersCollaborators);
    }, 2000);
  });
}

// const email = prompt("Ingrese email");
const email = "pepe@mail.com";
// const password = prompt("Ingrese Contraseña");
const password = "supersecret";
let username = "";

const userPromise = getUser(email, password);
userPromise
  .then((user) => {
    const username = user.githubUsername;

    return getPublicRepos(username);
  })
  .then((repos) => {
    console.log(repos);
    // repos.forEach((repo) => {
    //   const idRepo = repo.id;
    //   console.log(idRepo);

    //   // return getCollaborators(idRepo);
    // });
  })
  .catch((error) => console.log(error));

// ANIDAMIENTO DE PROMESAS
function getPromise() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function imprimeA() {
  console.log("A");
}

function imprimeB() {
  console.log("B");
}

function lanzaError() {
  console.log("Se lanza un error");

  throw new Error();
}

function capturarError() {
  console.log("Se capturó el error");
}

getPromise()
  .then(imprimeA) // A
  .then(imprimeB) // B
  .then(lanzaError) // Se lanza un error
  .catch(capturarError); // Se capturó el error
