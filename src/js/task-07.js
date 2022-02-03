const refs = {
  slider: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const fontSizeChange = ({ value }) => (refs.text.style.fontSize = `${value}px`);

const textSizeChangeHandler = ({ currentTarget: slider }) =>
  fontSizeChange(slider);

fontSizeChange(refs.slider);

refs.slider.addEventListener('input', textSizeChangeHandler);
