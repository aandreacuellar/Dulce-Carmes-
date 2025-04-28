// JavaScript Document
const navmenu = document.querySelector("#navmenu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
	navmenu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
	navmenu.classList.remove("visible");
})
