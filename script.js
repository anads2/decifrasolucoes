let hamburguer = document.querySelector("#hamburguer");
let menu = document.querySelector("#menu");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
