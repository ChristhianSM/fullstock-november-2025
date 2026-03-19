// Navegacion por elementos del DOM
const head = document.head;
const body = document.body;

const childElementsBody = body.children;
const firstElementChild = body.firstElementChild;
const lastElementChild = body.lastElementChild;

const h1 = body.firstElementChild;
const script = body.lastElementChild;
const nextSiblingH1 = h1.nextElementSibling;
const previusSiblingScript = script.previousElementSibling;
const parentElement = h1.parentElement;

const parrafo = body.firstElementChild.nextElementSibling.children[0];

// Convertir HTMLCollection en Arrays
const ul = parrafo.nextElementSibling.children;
console.log(ul instanceof Array);
console.log(Array.isArray(ul));
for (const hijo of ul) {
  console.log(hijo);
}

const ulArray = Array.from(ul);
console.log(ulArray instanceof Array);
console.log(Array.isArray(ulArray));
const mapeoUlArray = ulArray.map((item) => item);
// const mapeoUl = ul.map((item) => item);

console.log(body);

console.log("==================================");

// Navegacion por nodos del DOM
const bodyNodos = body.childNodes;
const firstNodo = body.firstChild;
const lastNodo = body.lastChild;
const nextNodo = firstNodo.nextSibling;
const previusNodo = lastNodo.previousSibling;
const parentNodo = firstNodo.parentNode;

console.log(bodyNodos);
console.log(parentNodo);
