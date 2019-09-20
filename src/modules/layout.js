
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


  /* Main Container Overlay 1 */
  const mainContainerOverlay1 = document.createElement('div');
  mainContainerOverlay1.classList.add('main-container-overlay-1');

  /* Main Container Overlay 2 */
  const mainContainerOverlay2 = document.createElement('div');
  mainContainerOverlay2.classList.add('main-container-overlay-2');

  const imgMenuOverlay2_0 = document.createElement('div');
  imgMenuOverlay2_0.classList.add('img-menu-overlay-2');
  imgMenuOverlay2_0.classList.add('img-menu-bottom-corner');
  mainContainerOverlay2.appendChild(imgMenuOverlay2_0);

  const imgMenuOverlay2_1 = document.createElement('div');
  imgMenuOverlay2_1.classList.add('img-menu-overlay-2');
  imgMenuOverlay2_1.classList.add('img-menu-top-corner');
  mainContainerOverlay2.appendChild(imgMenuOverlay2_1);

  const imgMenuOverlayBeam = document.createElement('div');
  imgMenuOverlayBeam.classList.add('img-menu-overlay-beam');
  mainContainerOverlay2.appendChild(imgMenuOverlayBeam);


  





  
  /* Push to `#Content` */
  contentWrapper.appendChild(mainContainerBackground);
  contentWrapper.appendChild(mainContainer);
  contentWrapper.appendChild(mainContainerOverlay1);
  contentWrapper.appendChild(mainContainerOverlay2);
  
}

export { mainContainer, layout }