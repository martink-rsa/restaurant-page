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

  const generateRecipes = () => {
    function Recipe({ name = 'Food', description = 'Description', price = '$999.99' }) {
      this.name = name;
      this.description = description;
      this.price = price;
    }

    const recipe1 = new Recipe({ name: 'Eggs Benedict', description: 'Eggs Benedict, poached eggs over bacon and buttered toasted English muffin, topped with Hollandaise sauce.', price: '$6.99' });
    const recipe2 = new Recipe({ name: 'Garlic Snails', description: 'Baked in garlic butter, topped with mozzarella cheese and served with brown bread.', price: '$5.99' });
    const recipe3 = new Recipe({ name: 'Carpaccio Cipriani', description: 'Thinly sliced raw beef fillet topped with fresh rocket, shaved parmesan & a Cipriani dressing.', price: '$9.99' });
    const recipe4 = new Recipe({ name: 'Linguine Pescatore', description: 'Thin pasta tossed in a sauce seafood of tomato, mussels, prawns and calamari with a touch of chili and garlic', price: '$15.99' });
    const recipe5 = new Recipe({ name: 'Lasagne', description: 'A traditional dish of bolognese mince with pasta layers in a creamy tomato-based sauce, topped with mozzarella and Cheddar.', price: '$11.99' });
    const recipe6 = new Recipe({ name: 'Filetto della Casa', description: 'Thinly sliced beef fillet, marinated & seared, topped with rocket, parmesan shavings & roasted potatoes.', price: '$13.99' });
    const recipe7 = new Recipe({ name: 'Dark Chocolate Mousse', description: 'A classic chocolate mousse for lovers of all things chocolate, studded with biscuits and topped with a layer of mascarpone.', price: '$4.99' });
    const recipe8 = new Recipe({ name: 'Mascarpone Ice Cream', description: 'Sandwiched between two layers of phyllo this delightful signature desert is topped with a simple strawberry sauce.', price: '$5.99' });

    const recipes = [];

    recipes.push(recipe1);
    recipes.push(recipe2);
    recipes.push(recipe3);
    recipes.push(recipe4);
    recipes.push(recipe5);
    recipes.push(recipe6);
    recipes.push(recipe7);
    recipes.push(recipe8);

    return recipes;
  };

  const displayToPage = () => {
    const mainDisplay = document.getElementById('main-content-display');
    const recipes = generateRecipes();
    const menuRecipesContainer = document.createElement('div');
    menuRecipesContainer.classList.add('menu-recipes-container');

    // [_1_____2_]

    for (let i = 0; i < recipes.length; i += 1) {
      const currentRecipeContainer = document.createElement('div');
      const currentTextContainer = document.createElement('div');
      const currentPriceContainer = document.createElement('div');
      const currentH5 = document.createElement('h5');
      const currentP = document.createElement('p');
      const currentBox = createBox(1, 50);

      currentRecipeContainer.classList.add('recipe-container');
      currentTextContainer.classList.add('recipe-text-container');
      currentPriceContainer.classList.add('recipe-price-container');


      currentP.textContent = recipes[i].description;
      currentH5.textContent = recipes[i].name;
      currentPriceContainer.textContent = recipes[i].price;

      currentTextContainer.appendChild(currentH5);
      currentTextContainer.appendChild(currentP);

      currentRecipeContainer.appendChild(currentTextContainer);
      currentRecipeContainer.appendChild(currentPriceContainer);

      currentBox.appendChild(currentRecipeContainer);

      menuRecipesContainer.appendChild(currentBox);
      mainDisplay.appendChild(menuRecipesContainer);
    }
  };

  return {
    displayToPage,
  };
})();
export { menu };
