/*hamburguer menu action*/
var hamburguer = document.querySelector("#hamburguer");
var sidebar = document.querySelector("#sidebar");

hamburguer.addEventListener("click", function() {
    sidebar.classList.toggle("show-menu");
});

/*Navigation menu*/
var sitenavigation = document.querySelector("#site-navigation");
var navbutton = document.querySelector("#nav-button");

navbutton.addEventListener("click", function() {
  sitenavigation.classList.toggle("show-nav");
  navbutton.classList.toggle("hover");
});

document.querySelector("#container").addEventListener("click", function(e) {
  sitenavigation.classList.remove("show-nav");
});

/*Contact popup*/
var contactpopup = document.querySelector("#contactpopup");
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
  if (!formrequest.classList.contains('show-form')){
    formrequest.classList.toggle("show-form");
    formcontact.classList.remove("show-form");
  }
}

function switchcontactform() {
  if (!formcontact.classList.contains('show-form')){
  formrequest.classList.remove("show-form");
  formcontact.classList.toggle("show-form");
  }
}

/*Show credits (footer)*/
var creditspopup = document.querySelector("#creditspopup");
var creditsbutton = document.querySelector("#showcredits");
var creditsclose = document.querySelector("#creditsclose");

creditsbutton.addEventListener("click", function() {
  creditspopup.classList.toggle("show-credits");
});
creditsclose.addEventListener("click", function() {
  creditspopup.classList.remove("show-credits");
});