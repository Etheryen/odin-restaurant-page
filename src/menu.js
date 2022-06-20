export default function createMenu() {
  const element = document.createElement('div');
  const headline = document.createElement('h1');
  const main = document.createElement('main');
  const info1 = document.createElement('div');
  const name1 = document.createElement('h2');
  const desc1 = document.createElement('p');
  const image1 = document.createElement('img');
  const info2 = document.createElement('div');
  const name2 = document.createElement('h2');
  const desc2 = document.createElement('p');
  const image2 = document.createElement('img');
  const info3 = document.createElement('div');
  const name3 = document.createElement('h2');
  const desc3 = document.createElement('p');
  const image3 = document.createElement('img');
  const info4 = document.createElement('div');
  const name4 = document.createElement('h2');
  const desc4 = document.createElement('p');
  const image4 = document.createElement('img');
  const info5 = document.createElement('div');
  const name5 = document.createElement('h2');
  const desc5 = document.createElement('p');
  const image5 = document.createElement('img');
  const footer = document.createElement('footer');
  const credit = document.createElement('span');

  headline.innerHTML = 'Menu';
  name1.innerHTML = 'The Wilderness';
  name2.innerHTML = 'The Cheeser';
  name3.innerHTML = 'The Classic Double';
  name4.innerHTML = 'The Extravagant';
  name5.innerHTML = 'Wagyu bite';
  desc1.innerHTML = '<em>For the wild</em>';
  desc2.innerHTML = '<em>For the cheese enthusiasts</em>';
  desc3.innerHTML = '<em>For the casual</em>';
  desc4.innerHTML = '<em>For the adventurous</em>';
  desc5.innerHTML = '<em>For the gourmet</em>';
  credit.innerHTML = 'Menu photos by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/s/photos/burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';


  image1.src = 'img/wilderness.jpg';
  image2.src = 'img/cheeser.jpg';
  image3.src = 'img/double.jpg';
  image4.src = 'img/extravagant.jpg';
  image5.src = 'img/wagyu-bite.jpg';

  info1.className = 'info menu';
  info2.className = 'info menu';
  info3.className = 'info menu';
  info4.className = 'info menu';
  info5.className = 'info menu';

  main.appendChild(headline);
  info1.appendChild(name1);
  info1.appendChild(desc1);
  info1.appendChild(image1);
  info2.appendChild(name2);
  info2.appendChild(desc2);
  info2.appendChild(image2);
  info3.appendChild(name3);
  info3.appendChild(desc3);
  info3.appendChild(image3);
  info4.appendChild(name4);
  info4.appendChild(desc4);
  info4.appendChild(image4);
  info5.appendChild(name5);
  info5.appendChild(desc5);
  info5.appendChild(image5);
  main.appendChild(info1);
  main.appendChild(info2);
  main.appendChild(info3);
  main.appendChild(info4);
  main.appendChild(info5);
  footer.appendChild(credit);
  element.appendChild(main);
  element.appendChild(footer);

  return element;
}