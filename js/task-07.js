const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onTextChange);

function onTextChange() {

    text.style.fontSize = input.value + 'px';
};
