import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

// code lama
// import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
// import '../styles/responsive.css';
// import data from '../DATA.json';

// document.addEventListener('DOMContentLoaded', () => {
//   const listrestElement = document.querySelector('.list-restaurant');
//   const cardElement = document.querySelector('.card-grid');
//   const { restaurants } = data;

//   restaurants.forEach((restaurant) => {
//     cardElement.innerHTML += `
//         <article class="card-item">
//         <img class="card-item__thumbnail"
//              src="${restaurant.pictureId}"
//              alt="${restaurant.name} restaurant" tabindex="0">
//         <div class="card-item__content">
//         <h1 class="card-item__title" tabindex="0">${restaurant.name}</h1>
//         <p class="card-item_city" tabindex="0">

//           </p>
//           <p class="card-item__description" tabindex="0">${restaurant.description}</p>

//         </div>
//       </article>
//         `;
//   });
//   listrestElement.appendChild(cardElement);
// });

const menu = document.querySelector('#hamburgerButton')
const jumbotron = document.querySelector('.jumbotron')
const main = document.querySelector('main')
const menuBar = document.querySelector('.menu-bar')

menu.addEventListener('click', (event) => {
  menuBar.classList.toggle('open')
  event.stopPropagation()
})

jumbotron.addEventListener('click', () => {
  menuBar.classList.remove('open')
})

main.addEventListener('click', () => {
  menuBar.classList.remove('open')
})
