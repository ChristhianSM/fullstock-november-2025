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

function getUser(email, password, callback) {
  setTimeout(() => {
    const findUser = users.find((user) => user.email === email);
    if (!findUser || findUser.password !== password) {
      const error = new Error("Credenciales Invalidas");
      callback(error);
      return;
    }
    callback(null, findUser);
  }, 2000);
}

function getPublicRepos(username, callback) {
  setTimeout(() => {
    const hasConnectionError = Math.random() > 0.5;
    if (hasConnectionError) {
      const error = new Error("Error de conexion");
      callback(error);
      return;
    }

    const repos = githubPublicRepos.filter((repo) => repo.owner === username);
    callback(null, repos);
  }, 2000);
}

const email = prompt("Ingrese email");
const password = prompt("Ingrese Contraseña");

getUser(email, password, function (error, user) {
  if (error) {
    console.error(error);
    return;
  }

  console.log(`Bienvenid@ ${user.name}`);

  const username = user.githubUsername;

  getPublicRepos(username, function (error, repos) {
    if (error) {
      console.error(error);
      return;
    }

    console.log(repos);
  });
});
