import Logo from './logo-text-home.svg';

const home = (() => {
  const displayToPage = () => {
    console.log('home: displayToPage()');

    const mainDisplay = document.getElementById('main-content-display');
    mainDisplay.textContent = 'HOME - Testing';

    const homeLogoContainer = document.createElement('div');
    homeLogoContainer.classList.add('home-logo-container');

    const homeLogo = new Image();
    homeLogo.src = Logo;
    homeLogo.style.height = '100px';
    homeLogo.style.width = '100px';

    mainDisplay.appendChild(homeLogo);


/*     const svgHomeLogo = document.createElement('img');
    svgHomeLogo.setAttribute('src', './logo-text-home.svg');
    svgHomeLogo.setAttribute('alt', 'Logo');
    svgHomeLogo.classList.add('svg-home-logo');
    homeLogoContainer.appendChild(svgHomeLogo); */



    mainDisplay.appendChild(homeLogoContainer);


  };
  return {
    displayToPage,
  };
})();
export { home }