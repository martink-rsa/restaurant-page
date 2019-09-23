const menu = (() => {
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
    console.log('menu: displayToPage()');
    const mainDisplay = document.getElementById('main-content-display');
    mainDisplay.textContent = 'MENU - Testing';
  };
  return {
    displayToPage,
  };
})();
export { menu }