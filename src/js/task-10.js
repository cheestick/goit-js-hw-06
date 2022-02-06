const refs = {
  boxesQuantity: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const size = {
  INITIAL: 30,
  STEP: 10,
};

refs.createBtn.addEventListener('click', onCreateButtonClick);
refs.destroyBtn.addEventListener('click', onDestroyButtonClick);

function onCreateButtonClick() {
  const amount = getBoxesAmount();
  createBoxes(amount);
}

function onDestroyButtonClick() {
  destroyBoxes(refs.boxes);
}

function createBoxes(amount) {
  if (!amount) return;

  const boxes = [];
  let prevBoxSize = getLastBoxSize();
  for (let i = 0; i < amount; i += 1) {
    prevBoxSize += prevBoxSize === 0 ? size.INITIAL : size.STEP;
    const box = createBox(prevBoxSize);
    boxes.push(box);
  }

  renderBoxes(boxes);
}

function createBox(size) {
  const newBox = document.createElement('div');
  newBox.style.width = `${size}px`;
  newBox.style.height = newBox.style.width;
  newBox.style.backgroundColor = getRandomHexColor();
  return newBox;
}

function renderBoxes(boxes) {
  refs.boxes.append(...boxes);
}

function destroyBoxes(boxes) {
  boxes.innerHTML = '';
}

function getLastBoxSize() {
  return parseInt(refs.boxes.lastElementChild?.style.width) || 0;
}

function getBoxesAmount() {
  return refs.boxesQuantity.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
