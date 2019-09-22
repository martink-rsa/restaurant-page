/* Stylesheets */
import './style.css';

import { layout } from './modules/layout';
import { intro } from './modules/intro';
import { home } from './modules/home';
import { menu } from './modules/menu';
import { contact } from './modules/contact';
import { about } from './modules/about';

/* Now remove those elements from the HTML (so leave only the <html>, <body>, and <div id="content"> tags) 
and instead create them by using Javascript only, e.g. by appending each new element to the div#contentonce the page is first loaded. Since we’re all 
set up to write our code in multiple files write this initial page-load function inside of it’s own module and then import and call it inside of index.js.
Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at #7 on this hongkiat post for visual inspiration.

Put the contents of each ‘tab’ inside of it’s own module. Each module will export a function that creates a div element, adds the appropriate content 
and styles to that element and then appends it to the DOM.

Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs 
the correct ‘tab module’ to populate it again.

If you are using GitHub pages to host your completed page you need to do a tiny bit more work to get it to show up. After running webpack the 
full bundled version of your site is available in the dist folder, but GH pages is looking for an index.html in the root directory of your project.

Simply follow the instructions on this gist. EZPZ! */

// ------------------

// 'Tab' for each module/page.
// Export a function that adds all elements to container

// Content switching logic:
// Clear contents of container to switch to each page

// Intro loads
// User clicks Enter button
// Clear page
// Call module function to load page
// Show home module
// User clicks button on page with module's content
// Clear page
// Call module function to load page

const ModuleControl = (() => {

  return {

  };
})();

const RestaurantMain = (() => {
  const clearLayout = () => {
    // Clears the main container, but not background
    document.getElementById('main-display').textContent = '';
  };

  const clearContent = () => {
    // Clears the content container, but not layout and background
    document.getElementById('main-content-display').textContent = '';
  };

  const navigationTrigger = () => {
    // Pass control and [index]? to ModuleControl to
    //      call correct module
  };

  const setEvents = () => {
    console.log('CALL: setEvents()');
  };

  const showLayout = (newLayout) => {
    if (newLayout === 'cover') {
      layout.displayToPage('cover');

    } else if (newLayout === 'page1') {
      layout.displayToPage('page1');
    }
  };

  /* PUBLIC */
  const changeLayout = (newLayout) => {
    clearLayout();
    // # Animate here
    showLayout(newLayout);
  };

  const init = () => {
    setEvents();
    layout.displayToPage('page1');
    // intro.displayToPage();
  };

  return {
    changeLayout,
    init,
  };
})();

RestaurantMain.init();
// RestaurantMain.clearLayout();
// RestaurantMain.clearContent();

// layout.displayToPage('cover');