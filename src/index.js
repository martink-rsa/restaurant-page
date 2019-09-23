/* Stylesheets */
import './style.css';

import { layout } from './modules/layout';
import { intro } from './modules/intro';
import { home } from './modules/home';
import { menu } from './modules/menu';
import { contact } from './modules/contact';
import { about } from './modules/about';

const RestaurantMain = (() => {
  const clearLayout = () => {
    document.getElementById('main-display').textContent = '';
  };

  const clearContent = () => {
    document.getElementById('main-content-display').textContent = '';
  };

  const showModule = (newModule) => {
    if (newModule === 'cover') {
      clearContent();
      intro.displayToPage();
    } else if (newModule === 'home') {
      clearContent();
      home.displayToPage();
      layout.displayTabsToPage(1);
    } else if (newModule === 'menu') {
      clearContent();
      menu.displayToPage();
      layout.displayTabsToPage(2);
    } else if (newModule === 'contact') {
      clearContent();
      contact.displayToPage();
      layout.displayTabsToPage(3);
    } else if (newModule === 'about') {
      clearContent();
      about.displayToPage();
      layout.displayTabsToPage(4);
    }
  };

  const showLayout = (newLayout) => {
    if (newLayout === 'cover') {
      layout.displayToPage('cover');
      showModule('cover');
    } else if (newLayout === 'page1') {
      layout.displayToPage('page1', 1);
      showModule('home');
    }
  };

  const setEvents = (currentLayout) => {
    if (currentLayout === 'cover') {
      const introBtn = document.getElementById('intro-enter');
      introBtn.addEventListener('click', () => {
        clearLayout();
        showLayout('page1');
        showModule('home');
        setEvents('page1');
      });
    } else if (currentLayout === 'page1') {
      const tabBtn1 = document.getElementById('tab-btn-1');
      const tabBtn2 = document.getElementById('tab-btn-2');
      const tabBtn3 = document.getElementById('tab-btn-3');
      const tabBtn4 = document.getElementById('tab-btn-4');

      tabBtn1.addEventListener('click', () => {
        showModule('home');
      });
      tabBtn2.addEventListener('click', () => {
        showModule('menu');
      });
      tabBtn3.addEventListener('click', () => {
        showModule('contact');
      });
      tabBtn4.addEventListener('click', () => {
        showModule('about');
      });
    }
  };

  /* PUBLIC */
  const changeLayout = (newLayout) => {
    clearLayout();
    // # Animate here
    showLayout(newLayout);
  };

  const init = () => {
    showLayout('cover');
    setEvents('cover');
  };

  return {
    changeLayout,
    init,
  };
})();

RestaurantMain.init();
