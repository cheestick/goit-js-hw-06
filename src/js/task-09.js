const changeColorButton = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');
const { body } = document;

const getBodyColor = () => getComputedStyle(body, null).backgroundColor;

const numToHex = num => {
  const hex = num.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const stringToNums = string =>
  `#${string
    .match(/\d+/gi)
    .map(item => numToHex(Number(item)))
    .join('')}`;

showBodyColor();
changeColorButton.addEventListener('click', () => render());

function changeBodyColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
}

function showBodyColor() {
  const currentColor = stringToNums(getBodyColor());
  colorRef.textContent = currentColor;
}

function render() {
  changeBodyColor();
  showBodyColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
