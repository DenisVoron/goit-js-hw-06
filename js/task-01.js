const NumberOfCategories = document.querySelectorAll('.item')

console.log(NumberOfCategories);
console.log('Number of categories:', NumberOfCategories.length);

NumberOfCategories.forEach((number, index) => {
    console.log(`Индекс ${index}, значение ${number}`);
});