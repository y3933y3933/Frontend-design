const modeSwitch = document.querySelector("#mode-switch");
const phoneMedia = window.matchMedia("(max-width: 375px)");
const add = document.querySelector("#add-todo");
let darkMode = false;
let todos = [];

modeSwitch.addEventListener("click", function () {
  darkMode = !darkMode;
  toggleDarkLightMode(darkMode);
});

function toggleDarkLightMode(isDark) {
  modeSwitch.src = isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg";
  switchTheme(isDark);
}

function switchTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

add.addEventListener("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    const value = e.target.value.trim();
    if (value) {
      todos.push({
        id: Date.now(),
        value,
        completed: false,
      });
    }
  }
});


function addTodos(){

}