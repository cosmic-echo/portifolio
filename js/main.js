
/*hamburguer menu action*/
var hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", function() {
  document.querySelector("#sidebar").classList.toggle("show-menu");
});

var radio1 = document.querySelector("#radio--request");
var radio2 = document.querySelector("#radio--contact");

function showform() { 
  if(radio1.checked) { 
      document.querySelector("#form--request").classList.toggle("show-form");
      document.querySelector("#form--contact").classList.remove("show-form");
  }
  if(radio2.checked) { 
      document.querySelector("#form--contact").classList.toggle("show-form");
      document.querySelector("#form--request").classList.remove("show-form");
  }
};