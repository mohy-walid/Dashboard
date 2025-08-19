const toggleBtn = document.getElementById("toggleBtn");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("closed");
});
