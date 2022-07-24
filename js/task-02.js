const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const makingListOfIngredients = (ingredient) => {
  return ingredient.map((element) => {
    //console.log(element);
    const listEl = document.createElement('li');
    listEl.textContent = element;
    listEl.classList = 'item';
    return listEl;
  });

};
const elements = makingListOfIngredients(ingredients);
console.log(elements);
ingredientsContainerEl.append(...elements);