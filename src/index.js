import './assets/styles/style.css';
import homeComponent from './contents/home';
import contactComponent from './contents/contact';
import menuComponent from './contents/menu';

const contentContainer = document.getElementById('content');

const header = (() => {
  const headerElement = document.createElement('header');
  const homeLink = document.createElement('a');
  const contactLink = document.createElement('a');
  const menuLink = document.createElement('a');

  homeLink.appendChild(document.createTextNode('Home'));
  homeLink.classList.add('active');
  contactLink.appendChild(document.createTextNode('Contact'));
  menuLink.appendChild(document.createTextNode('Menu'));

  homeLink.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    homeLink.classList.add('active');
    contentContainer.removeChild(contentContainer.lastChild);
    contentContainer.appendChild(homeComponent);
  });

  contactLink.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    contactLink.classList.add('active');
    contentContainer.removeChild(contentContainer.lastChild);
    contentContainer.appendChild(contactComponent);
  });

  menuLink.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    menuLink.classList.add('active');
    contentContainer.removeChild(contentContainer.lastChild);
    contentContainer.appendChild(menuComponent);
  });

  headerElement.appendChild(homeLink);
  headerElement.appendChild(menuLink);
  headerElement.appendChild(contactLink);

  headerElement.classList.add('header');

  return headerElement;
})();

contentContainer.appendChild(header);
contentContainer.appendChild(homeComponent);
