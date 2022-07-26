function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.body;
const entersColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', onClickChangeColor);

function onClickChangeColor() {
  const color = getRandomHexColor();

  body.style.backgroundColor = color;
  entersColor.textContent = color;
}
