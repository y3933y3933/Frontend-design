const submit = document.getElementById("submit");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const password = document.getElementById("password");

firstName.addEventListener("input", function (e) {
  notEmpty.call(this, e.target.value);
});

lastName.addEventListener("input", function (e) {
  notEmpty.call(this, e.target.value);
});

password.addEventListener("input", function (e) {
  notEmpty.call(this, e.target.value);
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  notEmpty.call(firstName, firstName.value);
  notEmpty.call(lastName, lastName.value);
  notEmpty.call(password, password.value);
}

function notEmpty(value) {
  if (!value.trim()) {
    this.setCustomValidity("Required");
  } else {
    this.setCustomValidity("");
  }
}
