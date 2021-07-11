let bill = 0;
let tip = 0;
let pepole = 0;
let tipAmout = 0;
let total = 0;

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");

billInput.addEventListener("input", function (e) {
  checkInputNumber.call(this, e.target.value);
});

peopleInput.addEventListener("input", function (e) {
  checkInputNumber.call(this, e.target.value);
});

function checkInputNumber(value) {
  if (Number(value.trim())) {
    this.setCustomValidity("");
  } else {
    this.setCustomValidity("error");
  }
}
