import itemsTemplate from "../templates/items.hbs";
import menu from "../menu.json";

//const bodyRef = document.querySelector('body');
const menuRef = document.querySelector('.js-menu');

console.log(itemsTemplate);
console.log(menu);

const menuMarkup = itemsTemplate(menu);
//console.log(menuMarkup);

menuRef.insertAdjacentHTML('afterbegin', menuMarkup);
