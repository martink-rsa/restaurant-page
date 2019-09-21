
const mainContainer = document.createElement('div');
const mainContentDisplayContainer = document.createElement('div');


const layout = (() => {
  const displayCoverStyle = () => {
    console.log('-- COVER STYLE --');
    /* Background */
    const contentWrapper = document.getElementById('content');
    contentWrapper.classList.add('content-wrapper');

    const mainContainerBackground = document.createElement('div');
    mainContainerBackground.classList.add('main-container-background');

    /* Main Container */
    mainContainer.id = 'main-display';
    mainContainer.classList.add('main-container');

    /* Main Container Cover Base */
    const mainContainerCoverBase = document.createElement('div');
    mainContainerCoverBase.classList.add('main-container-cover-base');
    mainContainer.appendChild(mainContainerCoverBase);

    /* Main Container Content Display */
    
    mainContentDisplayContainer.id = 'main-content-display';
    mainContentDisplayContainer.classList.add('main-content-display-container');
    mainContainer.appendChild(mainContentDisplayContainer);

    /* Main Container Cover Overlay 1 */
    const mainContainerCoverOverlay1 = document.createElement('div');
    mainContainerCoverOverlay1.classList.add('main-container-cover-overlay-1');
    mainContainer.appendChild(mainContainerCoverOverlay1);

    /* Main Container Cover Overlay 2 */
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
    mainContainer.appendChild(mainContainerCoverOverlay2);

    /* Push to `#content` */
    contentWrapper.appendChild(mainContainerBackground);
    contentWrapper.appendChild(mainContainer);
  };

  const displayPageOneStyle = () => {
    console.log('-- PAGE ONE STYLE --');
    /* Background */
    const contentWrapper = document.getElementById('content');
    contentWrapper.classList.add('content-wrapper');

    const mainContainerBackground = document.createElement('div');
    mainContainerBackground.classList.add('main-container-background');

    /* Main Container */
    mainContainer.id = 'main-display';
    mainContainer.classList.add('main-container');

    /* Main Container Cover Base */
    const mainContainerCoverBase = document.createElement('div');
    mainContainerCoverBase.classList.add('main-container-cover-base');
    mainContainer.appendChild(mainContainerCoverBase);

    /* Main Container Page One Underlay 1 */
    const pageOneUnderlay1 = document.createElement('div');
    pageOneUnderlay1.classList.add('page-one-underlay-1');
    mainContainer.appendChild(pageOneUnderlay1);

    /* Main Container Page One Underlay 1 */
    const pageOneUnderlay2 = document.createElement('div');
    pageOneUnderlay2.classList.add('page-one-underlay-2');
    mainContainer.appendChild(pageOneUnderlay2);

    /* Main Container Tabs */
    const pageOneTabsContainer = document.createElement('div');
    pageOneTabsContainer.classList.add('page-one-tabs-container');
    pageOneUnderlay1.appendChild(pageOneTabsContainer);

    /* Main Container Content Display */
    mainContentDisplayContainer.id = 'main-content-display';
    mainContentDisplayContainer.classList.add('main-content-display-container');
    mainContainer.appendChild(mainContentDisplayContainer);

    /* Main Container Page One Overlay 1 */
    const mainContainerCoverOverlay1 = document.createElement('div');
    mainContainerCoverOverlay1.classList.add('main-container-page-one-overlay-1');
    mainContainer.appendChild(mainContainerCoverOverlay1);

    /* Main Container Cover Overlay 2 */
    const mainContainerCoverOverlay2 = document.createElement('div');
    mainContainerCoverOverlay2.classList.add('main-container-cover-overlay-2');
    mainContainer.appendChild(mainContainerCoverOverlay2);

    /* Push to `#content` */
    contentWrapper.appendChild(mainContainerBackground);
    contentWrapper.appendChild(mainContainer);
  };

  const displayToPage = (style) => {
    if (style === 'cover') {
      displayCoverStyle();
    } else if (style === 'page1') {
      displayPageOneStyle();
    }
  };

  return {
    displayToPage,
  };
})();

export { mainContentDisplayContainer, layout };
