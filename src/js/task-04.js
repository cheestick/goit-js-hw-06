const operation = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const refs = {
  valueRef: document.querySelector('#value'),
  oneLessButton: document.querySelector(
    `[data-action="${operation.DECREMENT}"]`,
  ),
  oneMoreButton: document.querySelector(
    `[data-action="${operation.INCREMENT}"]`,
  ),
};

refs.oneLessButton.addEventListener('click', changeCounterValueHandler);
refs.oneMoreButton.addEventListener('click', changeCounterValueHandler);

const counter = createCounter();

function createCounter() {
  let counterValue = 0;

  const incrementValue = () => (counterValue += 1);
  const decrementValue = () => (counterValue -= 1);

  return action => {
    switch (action) {
      case operation.DECREMENT:
        setValue(refs.valueRef, decrementValue());
        break;
      case operation.INCREMENT:
        setValue(refs.valueRef, incrementValue());
        break;
      default:
        console.log(`There is no <<${action}>> behaviour`);
    }
  };
}

function changeCounterValueHandler({ target }) {
  const action = target.dataset.action;
  counter(action);
}

function setValue(ref, value) {
  ref.textContent = value;
}
