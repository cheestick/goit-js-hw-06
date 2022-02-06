const refs = {
  loginForm: document.querySelector('.login-form'),
};

refs.loginForm.addEventListener('submit', loginFormSubmitHandler);

function loginFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  if (!validateFormFileds(formData)) return;

  const userData = harvestUserData(formData);
  console.log(userData);

  form.reset();
}

function validateFormFileds(formData) {
  const invalidValues = getInvalidFieldsNames(formData);

  if (invalidValues.length === 0) return true;

  alert(
    `All user data fields must be filled!
    Please enter ${invalidValues.join(', ')}`,
  );
  return false;
}

function getInvalidFieldsNames(formData) {
  const invalidValues = [];

  formData.forEach((value, name) => {
    if (value === '') invalidValues.push(name);
  });

  return invalidValues;
}

function harvestUserData(formData) {
  const userData = Object.create(null);
  formData.forEach((value, name) => (userData[name] = value));

  return userData;
}
