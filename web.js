let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");

dropdownBtn.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};
