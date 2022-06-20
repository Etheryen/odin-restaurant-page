export default function createHome() {
  const element = document.createElement('div');
  const main = document.createElement('main');
  const headline = document.createElement('h1');
  const picture = document.createElement('picture');
  const image = document.createElement('img');
  const info1 = document.createElement('div');
  const author = document.createElement('h2');
  const review = document.createElement('p');
  const info2 = document.createElement('div');
  const title = document.createElement('h2');
  const hours = document.createElement('p');
  const footer = document.createElement('footer');
  const credit1 = document.createElement('span');
  const credit2 = document.createElement('span');

  headline.innerHTML = 'Wild Burgers';
  author.innerHTML = 'Anthony';
  review.innerHTML = '<i>Hands-down best burger restaurant in town. All my friends have been eating there for months now. Come and see for yourself.</i>';
  title.innerHTML = 'Hours';
  hours.innerHTML = 'Open 11am-22pm workdays and 10am-1am weekends.';
  credit1.innerHTML = 'Homepage photo by <a href="https://unsplash.com/@oladybul?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ola Dybul</a> on <a href="https://unsplash.com/s/photos/burger-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  credit2.innerHTML = 'Background photo by <a href="https://unsplash.com/@ghorich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danny de Jong</a> on <a href="https://unsplash.com/s/photos/grill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';


  image.src = 'img/restaurant.jpg';
  author.className = 'author';
  info1.className = 'info';
  info2.className = 'info';

  info1.appendChild(review);
  info1.appendChild(author);
  info2.appendChild(title);
  info2.appendChild(hours);
  picture.appendChild(image);
  main.appendChild(headline);
  main.appendChild(picture);
  main.appendChild(info1);
  main.appendChild(info2);
  footer.appendChild(credit1);
  footer.appendChild(credit2);
  element.appendChild(main);
  element.appendChild(footer);
  
  return element;
}