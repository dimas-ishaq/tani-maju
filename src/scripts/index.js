/* eslint-disable no-unused-vars */
/* eslint-disable import/no-useless-path-segments */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../scripts/views/item-template/hero';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
