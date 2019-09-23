import Logo from './menu-logo-flatten.png';
import Chef from './chef-1.jpeg';

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

    /* FEATURE */
    const homeChefFeatureBox = createBox(1, 100);

    const imgStyle1Container1 = document.createElement('div');
    imgStyle1Container1.classList.add('img-style-1-container');

    const imgHomeChef = new Image();
    imgHomeChef.src = Chef;
    imgHomeChef.classList.add('img-home-chef');
    imgStyle1Container1.appendChild(imgHomeChef);

    const imgStyle1Overlay1 = document.createElement('div');
    imgStyle1Overlay1.classList.add('img-style-1-overlay-1');
    imgStyle1Container1.appendChild(imgStyle1Overlay1);
    homeChefFeatureBox.appendChild(imgStyle1Container1);
    homeFeatureContainer.appendChild(homeChefFeatureBox);

    const homeFeatureChefTitleContainer = document.createElement('div');
    homeFeatureChefTitleContainer.classList.add('home-feature-chef-title-container');

    const homeFeatureChefTitleH4 = document.createElement('h4');
    homeFeatureChefTitleH4.textContent = 'CHEF FRANCESCO MILANESI';
    homeFeatureChefTitleContainer.appendChild(homeFeatureChefTitleH4);

    const homeFeatureChefTitleText = document.createElement('p');
    homeFeatureChefTitleText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    homeFeatureChefTitleContainer.appendChild(homeFeatureChefTitleText);

    homeChefFeatureBox.appendChild(homeFeatureChefTitleContainer);

    mainDisplay.appendChild(homeFeatureContainer);

    mainDisplay.appendChild(createSeparator('section'));

    /* INFO */
    const homeInfoContainer = document.createElement('div');
    homeInfoContainer.classList.add('home-info-container');

    const homeInfoLeft = createBox(1, 100);
    const homeInfoLeftText = document.createElement('p');
    homeInfoLeftText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    homeInfoLeft.appendChild(homeInfoLeftText);
    homeInfoContainer.appendChild(homeInfoLeft);

    homeInfoContainer.appendChild(createSeparator('box'));

    const homeInfoRight = createBox(1, 100);
    const homeInfoRightText = document.createElement('p');
    homeInfoRightText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    homeInfoRight.appendChild(homeInfoRightText);
    homeInfoContainer.appendChild(homeInfoRight);

    mainDisplay.appendChild(homeInfoContainer);
  };

  return {
    displayToPage,
  };
})();
export { home };
