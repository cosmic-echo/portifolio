
/*hamburguer menu action*/
var hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", function() {
  document.querySelector("#sidebar").classList.toggle("show-menu");
});

var radiorequest = document.querySelector("#radio--request");
var radiocontact = document.querySelector("#radio--contact");

var formrequest = document.querySelector("#form--request");
var formcontact = document.querySelector("#form--contact");

radiorequest.addEventListener('click', modifyVisibility, false);
radiocontact.addEventListener('click', modifyVisibility1, false);

function modifyVisibility() {
  formrequest.style.display = "block";
  formcontact.style.display = "none";
}

function modifyVisibility1() {
  formrequest.style.display = "none";
  formcontact.style.display = "display";
}