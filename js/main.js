/*hamburguer menu action*/
var hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", function() {
  document.querySelector("#sidebar").classList.toggle("show-menu");
});

/*Contact popup*/
var contactpopup = document.querySelector("#contactpopup");
var contactbutton = document.querySelector("#closecontact");
var closebutton = document.querySelector("#closecontact");
var lockpage = document.querySelector("#lockpage");

function showcontactform() {
  contactpopup.classList.toggle("show-contactform");
  lockpage.classList.toggle("showlockpage");
}
function closecontactform() {
  contactpopup.classList.remove("show-contactform");
  lockpage.classList.remove("showlockpage");
}

/*Switch between contact forms*/
var formrequest = document.querySelector("#form1--request");
var formcontact = document.querySelector("#form2--contact");


function switchrequestform() {
  formrequest.classList.toggle("show-form");
  formcontact.classList.remove("show-form");
}

function switchcontactform() {
  formrequest.classList.remove("show-form");
  formcontact.classList.toggle("show-form");
}