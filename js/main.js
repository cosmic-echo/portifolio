
/*hamburguer menu action*/
var hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("show-menu");
});

/*transitions only after fully loading the page*/
