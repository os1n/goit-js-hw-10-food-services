import './styles.css';
import './js/templating';

const bodyRef = document.querySelector('body');
const checkBoxRef = document.querySelector('.js-switch-input');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let currentTheme;
// Get the latest state of theme and set it to current
if (localStorage.getItem(Theme)) {
  currentTheme = localStorage.getItem(Theme);
} else {currentTheme = Theme.LIGHT};
console.log('Current theme on entry =' ,currentTheme);
bodyRef.classList.add(currentTheme);

// set toggle switch to dark if it was dark
if (currentTheme === Theme.DARK) {
  checkBoxRef.checked = true;
} 

const switchHandler = event => {
  console.dir(event.currentTarget.checked);
  if (currentTheme === Theme.LIGHT) {
    currentTheme = Theme.DARK;
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem(Theme, currentTheme);
    console.log(localStorage.getItem(Theme));
  } else {
    currentTheme = Theme.LIGHT;
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem(Theme, currentTheme);
    console.log(localStorage.getItem(Theme));
  }
};

checkBoxRef.addEventListener('change', switchHandler);

// ===---- Simple exapmle of template use START
// const menuData = {
//   title: 'Eat it createElement, templates rule!',
//   items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
// };
// const source = document.querySelector('#menu-template').innerHTML.trim();
// const bodyRef = document.querySelector('body');
// Handlebars.compile(source);
// //console.log(source);
// const template = Handlebars.compile(source);
// const markup = template(menuData);
//console.log(markup);
//bodyRef.insertAdjacentHTML('afterbegin', menuMarkup);
// ===---- Simple exapmle of template use END
