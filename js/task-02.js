const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');
//console.log(ingredientsContainerEl);
/*const listEl = document.createElement('li');
listEl.textContent = ingredients;
listEl.classList = 'item';
console.log(listEl);
ingredientsContainerEl.prepend(listEl);*/

const elements = ingredients.forEach(option => {
  const listEl = document.createElement('li');
  listEl.textContent = option;
  listEl.classList = 'item';
  //console.log(option);
  console.log(listEl);
  return listEl;
});
console.log(elements);

//console.log(ingredients);

/*const makingListOfIngredients = element => {
  return element.forEach(option => {
    const listEl = document.createElement('li');
    listEl.textContent = option;
    listEl.classList = 'item';
    //console.log(option);
    console.log(listEl);
    return listEl;
  });
};
const elements = makingListOfIngredients(ingredients);
ingredientsContainerEl.append(...elements);
/*ingredientsContainerEl.append();
console.log(elements);*/