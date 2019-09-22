import Logo from './menu-logo-flatten.png';

const home = (() => {
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
      

    }
    return separatorContainer;
  };

  const displayToPage = () => {
    console.log('home: displayToPage()');

    const mainDisplay = document.getElementById('main-content-display');
    mainDisplay.textContent = '';

    const homeTopContainer = document.createElement('div');
    homeTopContainer.classList.add('home-top-container');

    const homeLogoContainer = document.createElement('div');
    homeLogoContainer.classList.add('home-logo-container');
    const imgHomeLogo = new Image();
    imgHomeLogo.src = Logo;
    imgHomeLogo.classList.add('img-home-logo');
    imgHomeLogo.classList.add('animate-slide-left-in');

    setTimeout(() => {
      imgHomeLogo.classList.remove('animate-slide-left-in');
    }, 50);
    homeLogoContainer.appendChild(imgHomeLogo);
    homeTopContainer.appendChild(homeLogoContainer);
    mainDisplay.appendChild(homeTopContainer);

    const homeFeatureContainer = document.createElement('div');
    homeFeatureContainer.classList.add('home-feature-container');
    homeFeatureContainer.appendChild(createBox(1, 100));
    homeFeatureContainer.appendChild(createSeparator('box'));
    homeFeatureContainer.appendChild(createBox(1, 100));
    mainDisplay.appendChild(homeFeatureContainer);
  };



  return {
    displayToPage,
  };
})();
export { home }