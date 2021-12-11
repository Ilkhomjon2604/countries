let elDarkModeBtn = document.getElementById("dark-mode-change");
let elBody = document.querySelector(".dark-m");

elDarkModeBtn.addEventListener("click" , function () {
  elBody.classList.toggle("dark")
});
