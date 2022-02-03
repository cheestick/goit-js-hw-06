const ANONYMOUS = 'Anonymous';

const refs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', ({ currentTarget }) => {
  const userName = currentTarget.value.trim();
  refs.nameOutput.textContent = userName;
  if (userName === '') refs.nameOutput.textContent = ANONYMOUS;
});
