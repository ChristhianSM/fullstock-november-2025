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

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUser(email, password) {
  await delay(2000);

  const findUser = users.find((user) => user.email === email);
  if (!findUser || findUser.password !== password) {
    const error = new Error("Credenciales Invalidas");
    throw new Error(error);
  }
  return findUser;
}

async function getPublicRepos(username) {
  await delay(2000);

  const hasConnectionError = false;
  if (hasConnectionError) {
    const error = new Error("Error de conexion");
    throw new Error(error);
  }

  const repos = githubPublicRepos.filter((repo) => repo.owner === username);
  return repos;
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
const email = "pepe@mail1.com";
// const password = prompt("Ingrese Contraseña");
const password = "supersecret";

// async function getDataUser() {
//   try {
//     console.warn("Login user...");
//     const user = await getUser(email, password);
//     console.log("¡Bienvenid@ " + user.name + "!");

//     console.warn("Loading Github repos...");
//     const username = user.githubUsername;
//     const repos = await getPublicRepos(username);
//     console.log("Tus repositorios de Github:");
//     repos.forEach((repo) => console.log(repo));
//   } catch (error) {
//     console.log(error);
//   }
// }

// getDataUser();

// async function saludar() {
//   return "Hola Como estas";
// }

// const promesa = saludar();
// // promesa.then((data) => console.log(data));
// // console.log(promesa);

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Datos"), ms);
//   });
// }

// async function ejemplo() {
//   console.log("Inicio");
//   const resultado = await delay(2000);
//   console.log("Luego de 2 segundos:", resultado);
//   console.log("fin");
// }

// ejemplo();

async function secuencial() {
  const user1 = await getUser("pepe@mail.com", "supersecret");
  const user2 = await getUser("ana@mail.com", "letmein");

  console.log([user1, user2]);

  return [user1, user2];
}

async function paralelo() {
  try {
    const users = await Promise.allSettled([
      getUser("pepe@mail1.com", "supersecret"),
      getUser("ana@mail.com", "letmein"),
    ]);
    // console.log(user1, user2);
    // users.then((data) => console.log(data));
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

// secuencial();
paralelo();
// console.log(secuencial());
