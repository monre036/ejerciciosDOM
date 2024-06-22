// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const startPointElement = document.getElementById('start-point');
console.log(
  `Soy un ${startPointElement.tagName} con el id ${startPointElement.id} y la clase ${startPointElement.className}, mi padre es un ${startPointElement.parentElement.tagName} con el id ${startPointElement.parentElement.id} y la clase ${startPointElement.parentElement.className}, mi hermano es un ${startPointElement.previousElementSibling.previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.previousElementSibling.id} y la clase ${startPointElement.previousElementSibling.previousElementSibling.className}, mi otro hermano es un ${startPointElement.previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.id} y la clase ${startPointElement.previousElementSibling.className}.`
);
console.log('');

//-------------------------------------------------------------------------------\\

const firstListElement = document.getElementById('first-list');
const firstListElementText = firstListElement.children[0].textContent;

const secondListElement = document.getElementById('second-list');
const secondListElementText = secondListElement.children[0].textContent;

firstListElement.textContent = secondListElementText;
secondListElement.textContent = firstListElementText;

//-------------------------------------------------------------------------------\\

const mainElement = document.getElementById('main');
const headerElements = mainElement.querySelectorAll('header');
const h1Elements = mainElement.querySelectorAll('h1');
const navElements = mainElement.querySelectorAll('nav');
const ulElements = mainElement.querySelectorAll('ul');
const liElements = mainElement.querySelectorAll('li');
const sectionElements = mainElement.querySelectorAll('section');
const articleElements = mainElement.querySelectorAll('article');
const h2Elements = mainElement.querySelectorAll('h2');
const pElements = mainElement.querySelectorAll('p');
const aElements = mainElement.querySelectorAll('a');
const imgElements = mainElement.querySelectorAll('img');
const spanElements = mainElement.querySelectorAll('span');
const footerElements = mainElement.querySelectorAll('footer');

const countElements = (array) => {
  console.log(`- Hay ${array.length} ${array[0].tagName}.`);
};
countElements(headerElements);
countElements(h1Elements);
countElements(navElements);
countElements(ulElements);
countElements(liElements);
countElements(sectionElements);
countElements(articleElements);
countElements(h2Elements);
countElements(pElements);
countElements(aElements);
countElements(imgElements);
countElements(spanElements);
countElements(footerElements);
