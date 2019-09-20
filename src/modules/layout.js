
  let mainContainer = document.createElement('div');
const layout = () => {
  console.log('layout loaded')
  /* Background */ 
  let contentWrapper = document.getElementById('content');
  contentWrapper.classList.add('content-wrapper');

  let mainContainerBackground = document.createElement('div');
  mainContainerBackground.classList.add('main-container-background');

  /* Main Container */

  mainContainer.classList.add('main-container');
  
  /* Push to `#Content` */
  contentWrapper.appendChild(mainContainerBackground);
  contentWrapper.appendChild(mainContainer);
  
}

export { mainContainer, layout }