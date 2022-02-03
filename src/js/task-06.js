const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputValidationHandler);

function inputValidationHandler({ currentTarget }) {
  const validLength = currentTarget.dataset.length;
  const inputValueLength = currentTarget.value.length.toString();
  input.classList.toggle('valid', inputValueLength === validLength);
  input.classList.toggle('invalid', inputValueLength !== validLength);
}
