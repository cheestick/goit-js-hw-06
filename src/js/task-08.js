const refs = {
  loginForm: document.querySelector('.login-form'),
  // email: document.querySelector('input[type="email"]'),
  // password: document.querySelector('input[type="password"]'),
};

refs.loginForm.addEventListener('submit', loginFormSubmitHandler);

function loginFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formElements = form.elements;

  const fieldsNames = takeFormFieldsNames(formElements);
  const fieldsRefs = takeFiledsRefByFieldsNames(fieldsNames, formElements);

  if (!validateFormFileds(fieldsRefs)) return;

  const data = gatherDataByFiledsNames(fieldsRefs);
  console.log(data);

  form.reset();
}

function validateFormFileds(fields) {
  for (const key in fields) {
    if (fields[key].value === '') {
      alert('All user data field must be filled!');
      return false;
    }
  }
  return true;
}

function takeFormFieldsNames(elements) {
  return Object.keys(elements)
    .join(' ')
    .match(/([A-Z])+/gi);
}

function takeFiledsRefByFieldsNames(fieldsNames, formElements) {
  const fieldsRefs = Object.create(null);
  fieldsNames.forEach(name => (fieldsRefs[name] = formElements[name]));
  return fieldsRefs;
}

function gatherDataByFiledsNames(fields) {
  const userData = Object.create(null);
  for (const key in fields) {
    userData[key] = fields[key].value;
  }
  return userData;
}
