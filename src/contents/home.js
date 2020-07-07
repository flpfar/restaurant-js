const homeComponent = (() => {
  function addClasses(){
    mainElement.classList.add('home');
    homeContent.classList.add('home-content');
    homeHeading.classList.add('heading');
    homeText.classList.add('home-text');
    homeImage.classList.add('content-image');
  }

  function appendElementsChildren(){
    homeContent.appendChild(homeHeading);
    homeContent.appendChild(homeText);
    mainElement.appendChild(homeContent);
    mainElement.appendChild(homeImage);
  }

  function addElementsTextContent(){
    const homeHeadingContent = document.createTextNode('Welcome to Restaurant JS');
    const homeTextContent = document.createTextNode('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit excepturi quibusdam itaque numquam quas. Libero, accusamus! Rerum quaerat, ipsum fugiat, quibusdam iusto facere, dignissimos deleniti odio vero ratione nam necessitatibus.');
    const imageSrc = 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
    homeHeading.appendChild(homeHeadingContent);
    homeText.appendChild(homeTextContent);
    homeImage.setAttribute('src', imageSrc);
    homeImage.setAttribute('alt', 'Food Image');
  }

  const mainElement = document.createElement('main');
  const homeContent = document.createElement('div');
  const homeHeading = document.createElement('h1');
  const homeText = document.createElement('p');
  const homeImage = document.createElement('img');

  addClasses();
  addElementsTextContent();
  appendElementsChildren();

  return mainElement;
})();

export default homeComponent;
