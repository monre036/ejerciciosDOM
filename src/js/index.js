// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const startPointElement = document.getElementById('start-point');
console.log(
  `Soy un ${startPointElement.tagName} con el id ${startPointElement.id} y la clase ${startPointElement.className}, mi padre es un ${startPointElement.parentElement.tagName} con el id ${startPointElement.parentElement.id} y la clase ${startPointElement.parentElement.className}, mi hermano es un ${startPointElement.previousElementSibling.previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.previousElementSibling.id} y la clase ${startPointElement.previousElementSibling.previousElementSibling.className}, mi otro hermano es un ${startPointElement.previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.id} y la clase ${startPointElement.previousElementSibling.className}.`
);

//-------------------------------------------------------------------------------\\

const firstListElement = document.getElementById('first-list');
const firstListElementText = firstListElement.children[0].textContent;

const secondListElement = document.getElementById('second-list');
const secondListElementText = secondListElement.children[0].textContent;

firstListElement.textContent = secondListElementText;
secondListElement.textContent = firstListElementText;
