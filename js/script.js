document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    let hasErrors = false;

    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        showError(input, `${input.placeholder} cannot be empty`);
        hasErrors = true;
      }
    });

    const emailInput = document.getElementById("email");
    if (emailInput.value.trim() !== "" && !isValidEmail(emailInput.value)) {
      showError(emailInput, "Looks like this is not an email");
      hasErrors = true;
    }
  });

  function showError(input, message) {
    const errorElement = document.createElement("span");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  }

  function clearErrors() {
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
