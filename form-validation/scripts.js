const form = document.querySelector("form");

inputFields = Array.from(form.querySelectorAll("input"));
inputErrors = Array.from(form.querySelectorAll("span.error"));

inputFields.forEach((element, index) => {
  const elementError = inputErrors[index];
  element.addEventListener("input", () => {
    if (element.validity.valid) {
      element.className = "";
      elementError.textContent = "";
      elementError.className = "error";
    } else {
      showError(element, elementError);
    }
  });
});

form.addEventListener("submit", (e) => {
  const passwordField = document.querySelector("#password");
  const confirmPasswordField = document.querySelector("#confirm-password");
  if (confirmPasswordField.value != passwordField.value) {
    const passwordError = document.querySelector("#password + span.error");
    const confirmPasswordError = document.querySelector(
      "#confirm-password + span.error"
    );
    [passwordError, confirmPasswordError].forEach((e) => {
      e.textContent = "Passwords must match!";
      e.className = "error active";
    });
    passwordField.className = "invalid";
    confirmPasswordField.className = "invalid";
  }
  for (let i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].validity.valid) {
      e.preventDefault();
      showError(inputFields[i], inputErrors[i]);
    }
  }
});

function showError(element, error) {
  switch (element.getAttribute("name")) {
    case "email":
      if (element.validity.valueMissing) {
        error.textContent = "You need to enter an email address.";
      } else if (element.validity.typeMismatch) {
        error.textContent = "Entered value needs to be an email address.";
      }
      break;
    case "country":
      if (element.validity.valueMissing) {
        error.textContent = "You need to enter a country.";
      }
      break;
    case "zip":
      if (element.validity.valueMissing) {
        error.textContent = "You need to enter a zip address.";
      } else if (element.validity.patternMismatch) {
        error.textContent = "Entered value must be exactly 5 numerical digits.";
      }
      break;
    case "password":
      if (element.validity.valueMissing) {
        error.textContent = "You need to enter a password.";
      }
      break;
    case "confirm-password":
      if (element.validity.valueMissing) {
        error.textContent = "Please reenter your password";
      }
      break;
  }
  error.className = "error active";
  element.className = "invalid";
}
