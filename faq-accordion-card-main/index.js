const item = document.getElementsByClassName("card__qust-item");
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = document.querySelectorAll(".card__answer")[i];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
