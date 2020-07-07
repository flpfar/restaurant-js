const contactComponent = (() => {
  const mainElement = document.createElement('main');
  const contactContent = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const contactText = document.createElement('div');
  const contactImage = document.createElement('img');

  (function addClasses() {
    mainElement.classList.add('contact');
    contactContent.classList.add('contact-content');
    contactHeading.classList.add('heading');
    contactText.classList.add('contact-text');
    contactImage.classList.add('content-image');
  }());

  (function addElementsTextContent() {
    const contactHeadingContent = document.createTextNode('Contact Us');
    const contactTextParagraph1 = document.createElement('p');
    const contactTextParagraph2 = document.createElement('p');
    const imageSrc = 'https://images.unsplash.com/photo-1519822472072-ec86d5ab6f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

    contactTextParagraph1.appendChild(document.createTextNode('Street Adress, 9123 - City/UF - Country'));
    contactTextParagraph2.appendChild(document.createTextNode('999-9999 - restaurant@mail.com - www.restaurant.com'));
    contactHeading.appendChild(contactHeadingContent);
    contactText.appendChild(contactTextParagraph1);
    contactText.appendChild(contactTextParagraph2);
    contactImage.setAttribute('src', imageSrc);
    contactImage.setAttribute('alt', 'Food Image');
  }());


  (function appendElementsChildren() {
    contactContent.appendChild(contactHeading);
    contactContent.appendChild(contactText);
    mainElement.appendChild(contactImage);
    mainElement.appendChild(contactContent);
  }());

  return mainElement;
})();

export default contactComponent;
