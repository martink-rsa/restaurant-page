const intro = () => {
  /* Logo */

  let logoMainContainer = document.createElement('div');
  logoMainContainer.classList.add('logo-main-container');

  let logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  /* Logo Main Text */
  let logoText = document.createElement('div');
  logoText.classList.add('logo-text');

  let logoH1 = document.createElement('h1');
  logoH1.textContent = `Francesco's Ristorante`;

  logoText.appendChild(logoH1);
  logoContainer.appendChild(logoText);

  /* Logo Slogan */

  let logoSlogan = document.createElement('div');
  logoSlogan.classList.add('logo-slogan');
  logoSlogan.textContent = 'Leave a tip, you cheap bastard.';

  logoContainer.appendChild(logoSlogan);

  logoMainContainer.appendChild(logoContainer);

  mainContainer.appendChild(logoMainContainer);



  /* ENTER link */
  const enterLink = document.createElement('a');

  /* ENTER container */
  const enterContainer = document.createElement('div');
  enterContainer.classList.add('enter-container');

  /* SVG Icon of Plate */
  const svgIconPlateContainer = document.createElement('div');
  svgIconPlateContainer.classList.add('svg-icon-plate-container');


  const svgIconPlate = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIconPlate.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
  svgIconPlate.setAttribute('viewbox', '0 0 100 100');
  svgIconPlate.classList.add('svg-icon-plate');
  svgIconPlate.id = 'svg-enter-site';

  const newPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  newPath1.setAttribute('d', 'M50.09,7.78A42.16,42.16,0,0,0,33.26,88.6L33.81,78c0-8.47-6.26-5.76-6.26-11.68,0-3.32.11-10.24.11-15.43C27.66,37,33.54,23.62,35,20.63s4.87-6.24,4.91-3.11c0,4.55.19,57.42.19,57.42h0L40.72,91a41.92,41.92,0,0,0,9.37,1.08,42.57,42.57,0,0,0,5.2-.35l1.4-27A13.5,13.5,0,0,1,48.47,59c-2.28-3.41,1.75-33.63,1.75-33.63h2.63V53.76h2.6V25.4H58.3V53.76h2.6V25.4h3V53.76h2.6V25.4h2s4,30.22,1.75,33.63a13.59,13.59,0,0,1-8.12,5.69.35.35,0,0,0-.12,0L63.3,90A42.15,42.15,0,0,0,50.09,7.78Z')
  
  const newPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  newPath2.setAttribute('d', 'M50.09,0a50,50,0,1,0,50,50A50.07,50.07,0,0,0,50.09,0Zm0,96.27A46.28,46.28,0,1,1,96.36,50,46.33,46.33,0,0,1,50.09,96.22Z')

  svgIconPlate.appendChild(newPath1);
  svgIconPlate.appendChild(newPath2);
  
  svgIconPlateContainer.appendChild(svgIconPlate);

  enterContainer.appendChild(svgIconPlateContainer);

  /* 'ENTER' text below plate SVG icon */
  const enterTextContainer = document.createElement('div');
  enterTextContainer.classList.add('enter-text-container');
  
  const enterText = document.createElement('div');
  enterText.classList.add('enter-text');
  enterText.textContent = 'ENTER';

  enterTextContainer.appendChild(enterText);

  enterContainer.appendChild(enterTextContainer);

  mainContainer.appendChild(enterContainer);

}
export { intro }
