const cards = document.querySelectorAll(".card");
const specialsCards = document.querySelectorAll(".card.especial");
const noSpecialsCards = document.querySelectorAll(".card:not(.especial)");

console.log("Cantidad de cards: ", cards.length);
console.log("Cantidad de cards especiales: ", specialsCards.length);
console.log("Cantidad de cards no especiales: ", noSpecialsCards.length);

console.log("=========================================");

const divsNaturaleza = document.querySelectorAll(
  ".imagen[data-categoria='naturaleza']",
);
const imgDestacada = document.querySelector(".imagen.destacada");
const imgsMore100Views = document.querySelectorAll(".imagen");
const imgsMore100ViewsArray = Array.from(imgsMore100Views).filter((div) => {
  const views = parseInt(div.dataset.visitas);
  if (views > 100) return true;
});

// const imgsMore100ViewsArray = Array.from(imgsMore100Views).filter(
//   (div) => parseInt(div.dataset.visitas) > 100,
// );

const imgCiudad = document.querySelectorAll("[data-categoria='ciudad']")[0];
const title = imgCiudad.querySelector(".titulo");

const exceptDestacada = document.querySelectorAll(".imagen:not(.destacada)");

console.log(
  "Cantidad de divs con data-categoria: Naturaleza: ",
  divsNaturaleza.length,
);
console.log("Imagen destacada: ", imgDestacada);
console.log("Imagenes con mas de 100 visitas: ", imgsMore100ViewsArray);
console.log("Titulo de la imagen: ", title);
console.log("Iamgenes excepto la destacada: ", exceptDestacada);
