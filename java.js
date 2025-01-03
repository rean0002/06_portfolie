// Vælg burger-knappen og menuen
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

// Tilføj en klikbegivenhed til burger-menuen
burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open"); // Vis/skjul menuen
  burgerMenu.classList.toggle("open"); // Animer burger-knappen
});
