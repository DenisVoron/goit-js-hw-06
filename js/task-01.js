const outputOfAllElements = document.querySelectorAll('.item')

console.log('Number of categories:', outputOfAllElements.length);

outputOfAllElements.forEach((element) => {
    //console.log(element);

    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});