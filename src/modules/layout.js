
const mainContainer = document.createElement('div');

const layout = () => {
  console.log('layout loaded');
  /* Background */
  const contentWrapper = document.getElementById('content');
  contentWrapper.classList.add('content-wrapper');

  const mainContainerBackground = document.createElement('div');
  mainContainerBackground.classList.add('main-container-background');

  /* Main Container */
  mainContainer.id = 'main-display';
  mainContainer.classList.add('main-container');

  /* Main Container Overlay 1 */
  const mainContainerCoverOverlay1 = document.createElement('div');
  mainContainerCoverOverlay1.classList.add('main-container-cover-overlay-1');

  /* Main Container Overlay 2 */
  const mainContainerCoverOverlay2 = document.createElement('div');
  mainContainerCoverOverlay2.classList.add('main-container-cover-overlay-2');

  const imgCoverOverlay2Top = document.createElement('div');
  imgCoverOverlay2Top.classList.add('img-cover-overlay-2');
  imgCoverOverlay2Top.classList.add('img-cover-bottom-corner');
  mainContainerCoverOverlay2.appendChild(imgCoverOverlay2Top);

  const imgCoverOverlay2Bottom = document.createElement('div');
  imgCoverOverlay2Bottom.classList.add('img-cover-overlay-2');
  imgCoverOverlay2Bottom.classList.add('img-cover-top-corner');
  mainContainerCoverOverlay2.appendChild(imgCoverOverlay2Bottom);

  const imgCoverOverlay2Beam = document.createElement('div');
  imgCoverOverlay2Beam.classList.add('img-cover-overlay-beam');
  mainContainerCoverOverlay2.appendChild(imgCoverOverlay2Beam);

  /* Push to `#content` */
  contentWrapper.appendChild(mainContainerBackground);
  contentWrapper.appendChild(mainContainer);
  contentWrapper.appendChild(mainContainerCoverOverlay1);
  contentWrapper.appendChild(mainContainerCoverOverlay2);
}

export { mainContainer, layout };
