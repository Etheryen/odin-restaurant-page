export default function createContact() {
  const element = document.createElement('div');
  const headline = document.createElement('h1');
  const main = document.createElement('main');
  const info1 = document.createElement('div');
  const title1 = document.createElement('h2');
  const desc1 = document.createElement('p');
  const info2 = document.createElement('div');
  const title2 = document.createElement('h2');
  const desc2 = document.createElement('p');

  headline.innerHTML = 'Contact';
  title1.innerHTML = 'Location';
  desc1.innerHTML = '234 Hollywood Avenue <br> Birmingham <br> B35 4HE';
  title2.innerHTML = 'Reservations'
  desc2.innerHTML = 'To issue a reservation please use the following phone number: <br> +44 909 8790982'

  info1.className = 'info';
  info2.className = 'info';

  main.appendChild(headline);
  info1.appendChild(title1);
  info1.appendChild(desc1);
  info2.appendChild(title2);
  info2.appendChild(desc2);
  main.appendChild(info1);
  main.appendChild(info2);
  element.appendChild(main);

  return element;
}