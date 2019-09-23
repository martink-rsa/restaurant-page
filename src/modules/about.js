const about = (() => {
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
      // svgSeparator.setAttribute('viewbox', '0 0 90 90');

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

    const aboutMainContainer = document.createElement('div');
    aboutMainContainer.classList.add('about-main-container');

    const aboutFeatureContainer = document.createElement('div');
    aboutFeatureContainer.classList.add('about-feature-container');
    const aboutFeatureContentBox = createBox(1, 100);

    aboutFeatureContentBox.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    aboutFeatureContentBox.textContent += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    aboutFeatureContainer.appendChild(aboutFeatureContentBox);
    aboutMainContainer.appendChild(aboutFeatureContainer);


    const aboutInfoContainer = document.createElement('div');
    aboutInfoContainer.classList.add('about-info-container');
    const aboutInfoLeft = createBox(1, 100);
    const aboutInfoLeftText = document.createElement('p');
    aboutInfoLeftText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    aboutInfoLeft.appendChild(aboutInfoLeftText);
    aboutInfoContainer.appendChild(aboutInfoLeft);
    aboutInfoContainer.appendChild(createSeparator('box'));
    const aboutInfoRight = createBox(1, 100);
    const aboutInfoRightText = document.createElement('p');
    aboutInfoRightText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    aboutInfoRight.appendChild(aboutInfoRightText);
    aboutInfoContainer.appendChild(aboutInfoRight);
    aboutMainContainer.appendChild(aboutInfoContainer);

    const aboutFooterContainer = document.createElement('div');
    aboutFooterContainer.classList.add('about-footer-container');
    const aboutFooterContentBox = createBox(1, 100);
    const aboutFooterContent = document.createElement('p');
    aboutFooterContent.classList.add('about-footer-content');

    aboutFooterContent.textContent = 'Lorem Ipsum';

    aboutFooterContentBox.appendChild(aboutFooterContent);
    aboutFooterContainer.appendChild(aboutFooterContentBox);
    aboutMainContainer.appendChild(aboutFooterContainer);

    mainDisplay.appendChild(aboutMainContainer);
  };

  return {
    displayToPage,
  };
})();
export { about };
