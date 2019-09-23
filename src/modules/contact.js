const contact = (() => {
  const createBox = (style, size) => {
    const boxContainer = document.createElement('div');
    if (size === 50) {
      boxContainer.classList.add('box-style-1-container-50');
    } else if (size === 100) {
      boxContainer.classList.add('box-style-1-container-100');
    }
    /* if (style === 1) {
    } */
    return boxContainer;
  };

  const createSeparator = (type) => {
    const separatorContainer = document.createElement('div');
    if (type === 'box') {
      separatorContainer.classList.add('box-separator-container');

      const svgSeparator = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgSeparator.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
      svgSeparator.classList.add('svg-box-separator-container');

      const svgSeparatorLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      svgSeparatorLine.classList.add('svg-box-separator-line');
      svgSeparatorLine.setAttribute('x1', '50%');
      svgSeparatorLine.setAttribute('y1', '10%');
      svgSeparatorLine.setAttribute('x2', '50%');
      svgSeparatorLine.setAttribute('y2', '90%');

      svgSeparator.appendChild(svgSeparatorLine);
      separatorContainer.appendChild(svgSeparator);
    } else if (type === 'section') {
      separatorContainer.classList.add('section-separator-container');
    }
    return separatorContainer;
  };

  const displayToPage = () => {
    const mainDisplay = document.getElementById('main-content-display');

    const paraTag1 = document.createElement('p');
    const paraTag2 = document.createElement('p');
    const paraTag3 = document.createElement('p');
    const paraTag4 = document.createElement('p');
    const paraTag5 = document.createElement('p');
    const paraTag6 = document.createElement('p');
    const paraTag7 = document.createElement('p');
    const paraTag8 = document.createElement('p');
    const paraTag9 = document.createElement('p');
    const paraTag10 = document.createElement('p');

    const contactTopContainer = document.createElement('div');
    contactTopContainer.classList.add('contact-top-container');

    const contactTopBox1 = createBox(1, 100);

    paraTag1.textContent = 'Street: 4912  Woodland Avenue';
    paraTag2.textContent = 'City: Hammond';
    paraTag3.textContent = 'State: LA';
    paraTag4.textContent = 'Zip Code: 70401';
    paraTag5.textContent = 'Phone Number: 985-549-1279';

    contactTopBox1.appendChild(paraTag1);
    contactTopBox1.appendChild(paraTag2);
    contactTopBox1.appendChild(paraTag3);
    contactTopBox1.appendChild(paraTag4);
    contactTopBox1.appendChild(paraTag5);

    const contactTopBox2 = createBox(1, 100);

    paraTag6.textContent = 'Street: 3964  Prudence Street';
    paraTag7.textContent = 'City: Taylor';
    paraTag8.textContent = 'State: MI';
    paraTag9.textContent = 'Zip Code: 48180';
    paraTag10.textContent = 'Phone Number: 313-299-7107';

    contactTopBox2.appendChild(paraTag6);
    contactTopBox2.appendChild(paraTag7);
    contactTopBox2.appendChild(paraTag8);
    contactTopBox2.appendChild(paraTag9);
    contactTopBox2.appendChild(paraTag10);

    contactTopContainer.appendChild(contactTopBox1);
    contactTopContainer.appendChild(createSeparator('box'));
    contactTopContainer.appendChild(contactTopBox2);

    mainDisplay.appendChild(contactTopContainer);

    const contactFeatureContainer = document.createElement('div');
    contactFeatureContainer.classList.add('contact-top-container');

    const contactFeatureBox = createBox(1, 100);

    const contactFormContainer = document.createElement('div');
    contactFormContainer.classList.add('contact-form-container');

    const contactFormTag = document.createElement('form');
    contactFormTag.setAttribute('action', '');
    contactFormTag.id = 'contact-form';

    const contactFormInputText = document.createElement('textarea');
    contactFormInputText.classList.add('contact-form-input-text');

    contactFormTag.appendChild(contactFormInputText);
    contactFormContainer.appendChild(contactFormTag);

    const contactFormBtnSubmit = document.createElement('button');
    contactFormBtnSubmit.setAttribute('type', 'button');
    contactFormBtnSubmit.setAttribute('form', 'contact-form');
    contactFormBtnSubmit.classList.add('btn-style-1');
    contactFormBtnSubmit.textContent = 'SUBMIT';

    contactFormTag.appendChild(contactFormBtnSubmit);

    contactFeatureBox.appendChild(contactFormContainer);
    contactFeatureContainer.appendChild(contactFeatureBox);

    mainDisplay.appendChild(contactFeatureContainer);
  };

  return {
    displayToPage,
  };
})();
export { contact };
