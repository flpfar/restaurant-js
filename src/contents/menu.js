const menuComponent = (() => {
  const menu = [
    'Baked Dijon Salmon', 'Chicken Cordon Bleu II', 'Garlic Red Potatoes',
    'Roasted Rack of Lamb', 'Modenese Pork Chops', 'Asparagus Parmesan',
    'Bourbon Pecan Chicken', 'Champagne Shrimp and Pasta', 'Italian Bread Bowls',
  ].sort();

  const mainElement = document.createElement('main');
  const menuContent = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const menuList = document.createElement('ul');
  const menuImage = document.createElement('img');

  (function addClasses() {
    mainElement.classList.add('contact');
    menuContent.classList.add('contact-content');
    menuHeading.classList.add('heading');
    menuImage.classList.add('content-image');
  }());

  function setMenuItems(menuList) {
    for (let i = 0; i < menu.length; i += 1) {
      const item = document.createElement('li');
      item.appendChild(document.createTextNode(menu[i]));
      menuList.appendChild(item);
    }
  }

  (function addElementsTextContent() {
    const menuHeadingContent = document.createTextNode('Menu');
    const imageSrc = 'https://images.unsplash.com/photo-1532636330734-1911664950db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

    setMenuItems(menuList);
    menuHeading.appendChild(menuHeadingContent);
    menuImage.setAttribute('src', imageSrc);
    menuImage.setAttribute('alt', 'Food Image');
  }())(() => {
    menuContent.appendChild(menuHeading);
    menuContent.appendChild(menuList);
    mainElement.appendChild(menuImage);
    mainElement.appendChild(menuContent);
  })();


  return mainElement;
})();

export default menuComponent;