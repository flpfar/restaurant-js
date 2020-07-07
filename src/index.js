import './assets/styles/style.css';
import homeComponent from './contents/home';
import contactComponent from './contents/contact';

const contentContainer = document.getElementById('content');

contentContainer.appendChild(contactComponent);
