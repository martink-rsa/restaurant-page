const menu = (() => {
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