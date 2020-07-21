
/*hamburguer menu action*/
var hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", function() {
  document.querySelector("#sidebar").classList.toggle("show-menu");
});

var radiorequest = document.querySelector("#radio1--request");
var radiocontact = document.querySelector("#radio2--contact");

var formrequest = document.querySelector("#form1--request");
var formcontact = document.querySelector("#form2--contact");

radiorequest.addEventListener('click', modifyVisibility, false);
radiocontact.addEventListener('click', modifyVisibility1, false);

function modifyVisibility() {
  formrequest.classList.toggle("show-form");
  formcontact.classList.remove("show-form");
}

function modifyVisibility1() {
  formrequest.classList.remove("show-form");
  formcontact.classList.toggle("show-form");
}
