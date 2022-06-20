import createNav from './nav.js';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

const content = document.querySelector('#content');
content.appendChild(createNav());
content.appendChild(createHome());

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.className = 'current'

home.addEventListener('click', () => {
  content.removeChild(content.children[1]);
  content.appendChild(createHome());
  menu.className = '';
  contact.className = '';
  document.querySelector('#home').className = 'current'
});

menu.addEventListener('click', () => {
  content.removeChild(content.children[1]);
  content.appendChild(createMenu());
  home.className = '';
  contact.className = '';
  document.querySelector('#menu').className = 'current'
});

contact.addEventListener('click', () => {
  content.removeChild(content.children[1]);
  content.appendChild(createContact());
  home.className = '';
  menu.className = '';
  document.querySelector('#contact').className = 'current'
});