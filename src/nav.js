export default function createNav() {
  const nav = document.createElement('nav');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';

  home.id = 'home';
  menu.id = 'menu';
  contact.id = 'contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}