
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

  const displayInactiveTabs = (parentContainer) => {
    /* Main Container Tabs */
    /* --- Underlay for non-active tabs */
    const pageOneUnderlayTabs = document.createElement('div');
    pageOneUnderlayTabs.classList.add('page-one-underlay-tabs');

    const pageOneTabsContainer = document.createElement('div');
    pageOneTabsContainer.classList.add('page-one-tabs-container');
    pageOneUnderlayTabs.appendChild(pageOneTabsContainer);
    /* --- END Underlay */

    const pageOneTabContainer4 = document.createElement('div');
    pageOneTabContainer4.classList.add('page-one-tab-container');
    pageOneTabContainer4.classList.add('page-one-tab-four');
    const pageOneTabTextSpan4 = document.createElement('span');
    pageOneTabTextSpan4.classList.add('page-one-tab-text');
    pageOneTabTextSpan4.textContent = 'ABOUT';
    pageOneTabContainer4.appendChild(pageOneTabTextSpan4);
    pageOneTabsContainer.appendChild(pageOneTabContainer4);

    const pageOneTabContainer3 = document.createElement('div');
    pageOneTabContainer3.classList.add('page-one-tab-container');
    pageOneTabContainer3.classList.add('page-one-tab-three');
    const pageOneTabTextSpan3 = document.createElement('span');
    pageOneTabTextSpan3.classList.add('page-one-tab-text');
    pageOneTabTextSpan3.textContent = 'CONTACT';
    pageOneTabContainer3.appendChild(pageOneTabTextSpan3);
    pageOneTabsContainer.appendChild(pageOneTabContainer3);

    const pageOneTabContainer2 = document.createElement('div');
    pageOneTabContainer2.classList.add('page-one-tab-container');
    pageOneTabContainer2.classList.add('page-one-tab-two');
    const pageOneTabTextSpan2 = document.createElement('span');
    pageOneTabTextSpan2.classList.add('page-one-tab-text');
    pageOneTabTextSpan2.textContent = 'MENU';
    pageOneTabContainer2.appendChild(pageOneTabTextSpan2);
    pageOneTabsContainer.appendChild(pageOneTabContainer2);

    const pageOneTabContainer1 = document.createElement('div');
    pageOneTabContainer1.classList.add('page-one-tab-container');
    pageOneTabContainer1.classList.add('page-one-tab-one');
    const pageOneTabTextSpan1 = document.createElement('span');
    pageOneTabTextSpan1.classList.add('page-one-tab-text');
    pageOneTabTextSpan1.textContent = 'HOME';
    pageOneTabContainer1.appendChild(pageOneTabTextSpan1);
    pageOneTabsContainer.appendChild(pageOneTabContainer1);

    parentContainer.appendChild(pageOneUnderlayTabs);
  };

  const displayActiveTab = (parentContainer) => {
    const pageOneActiveTabs = document.createElement('div');
    pageOneActiveTabs.classList.add('page-one-active-tabs');

    const pageOneTabsContainer = document.createElement('div');
    pageOneTabsContainer.classList.add('page-one-active-tab-1-container');
    pageOneActiveTabs.appendChild(pageOneTabsContainer);
    /* --- END Underlay */

    const pageOneTabContainer1 = document.createElement('div');
    pageOneTabContainer1.classList.add('page-one-active-tab-container');
    pageOneTabContainer1.classList.add('page-one-active-tab-one');
    const pageOneTabTextSpan1 = document.createElement('span');
    pageOneTabTextSpan1.classList.add('page-one-tab-text');
    pageOneTabTextSpan1.textContent = 'HOME';
    pageOneTabContainer1.appendChild(pageOneTabTextSpan1);
    pageOneTabsContainer.appendChild(pageOneTabContainer1);

    parentContainer.appendChild(pageOneActiveTabs);
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

    displayInactiveTabs(mainContainer);

    /* Main Container Page One Underlay 1 */
    const pageOneUnderlay1 = document.createElement('div');
    pageOneUnderlay1.classList.add('page-one-underlay-1');

    displayActiveTab(pageOneUnderlay1);
    mainContainer.appendChild(pageOneUnderlay1);

    /* Main Container Page One Underlay 1 */
    const pageOneUnderlay2 = document.createElement('div');
    pageOneUnderlay2.classList.add('page-one-underlay-2');
    mainContainer.appendChild(pageOneUnderlay2);

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
