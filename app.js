const iniciar_sesion_btn = document.querySelector("#iniciar-sesion-btn");
const registrarse_btn = document.querySelector("#registrarse-btn");
const contenedor_ = document.querySelector(".contenedor");

registrarse_btn.addEventListener("click", () => {
  contenedor_.classList.add("modo-registrarse");
});

iniciar_sesion_btn.addEventListener("click", () => {
  contenedor_.classList.remove("modo-registrarse");
});
