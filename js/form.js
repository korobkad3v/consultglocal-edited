const form = document.getElementById("contactForm");
const inputFirstName = document.querySelector("#given-name");
const inputLastName = document.querySelector("#family-name");
const inputPhone = document.querySelector("#phone");
const inputEmail = document.querySelector("#email");

const iti = window.intlTelInput(inputPhone, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("us"));
  },
  strictMode: true,
  loadUtils: () =>
    import(
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"
    ),
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+\d{7,15}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document
    .querySelectorAll(".form__error-message")
    .forEach((el) => (el.textContent = ""));

  let hasError = false;

  const formData = {
    name: inputFirstName.value,
    lastName: inputLastName.value,
    email: inputEmail.value,
    phone: iti.getNumber(),
  };

  console.log(formData);

  if (formData.name.trim() === "") {
    showError(inputFirstName, "Введите имя");
    hasError = true;
  }

  if (formData.lastName.trim() === "") {
    showError(inputLastName, "Введите фамилию");
    hasError = true;
  }
  if (!emailRegex.test(formData.email)) {
    showError(inputEmail, "Введите корректный email");
    hasError = true;
  }

  if (!iti.isValidNumber() || !phoneRegex.test(formData.phone)) {
    showError(inputPhone, "Введите корректный телефон");
    hasError = true;
  }

  if (!hasError) {
    window.location.href = "thanks.html";
  }
});

function showError(inputElement, message) {
  const group = inputElement.closest(".form__group");
  const errorEl = group.querySelector(".form__error-message");
  if (errorEl) {
    errorEl.textContent = message;
  }
}
