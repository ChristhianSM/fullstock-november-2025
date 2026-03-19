const body = document.body;
const span =
  body.firstElementChild.lastElementChild.children[0].firstElementChild
    .firstElementChild.children[0];

// Usando getElementById
const spanId = document.getElementById("objetivo");

// Usando getElementByClassname
const spanClass = document.getElementsByClassName("objetivo")[0];

// Usando getElementTagname
const spanTag = document.getElementsByTagName("span")[0];

console.log(body);
console.log("Obteniendo el elemento navegando por el DOM", span);
console.log("Obteniendo el elemento por su ID", spanId);
console.log("Obteniendo el elemento por su tag", spanTag);
console.log("Obteniendo el elemento por su clase", spanClass);

console.log("====================================");

const spanIdQuerySelector = document.querySelector("#objetivo");
const spanClassQuerySelector = document.querySelector(".objetivo");
const spanTagQuerySelector = document.querySelector("span");

console.log("Obteniendo el elemento por su id", spanIdQuerySelector);
console.log("Obteniendo el elemento por su clase", spanClassQuerySelector);
console.log("Obteniendo el elemento por su tag", spanTagQuerySelector);

console.log("====================================");
const getSpans = document.querySelectorAll(".objetivo");
const spansArray = Array.from(getSpans);

console.log("Obteniendo todos los spans usando su clase", spansArray);

const getSpan = document.querySelector("span#objetivo1");
console.log("Obteniendo el span navegando ", getSpan);

const lista2 = document.querySelector("[data-category='lista2']");

console.log(lista2);

console.log("======================================");
// Obtener todos los li que no tengan la clase li
const liWithoutLi = document.querySelectorAll(".lista:not(.li)");
console.log("Obteniendo todos los li sin la clase Li: ", liWithoutLi);

console.log("========================================");
// Buscando elementos dentro de un elemento
const listaDesordenada = document.querySelector(".lista-desordenada");
const lista3 = listaDesordenada.querySelectorAll(".lista");

console.log(listaDesordenada);
console.log(lista3);
