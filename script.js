const about = document.getElementById("about-nav");
const portfolio = document.getElementById("portfolio-nav");
const skills = document.getElementById("skill-nav");
const contact = document.getElementById("contact-nav");
const input = document.getElementById("menu-icon");
const body = document.querySelector("body");
const contactme = document.getElementById("contactmebox");
const info = document.getElementById("info");

//Makes the click me button into a clickable email
function showEmail() {
    contactme.innerHTML = `<a class="noselect" id="email" href="mailto:CodingWHenry@gmail.com?subject=Nice to meet you!">CodingWHenry@gmail.com</button>`;
}

contactme.addEventListener("click", showEmail);

//Transforms nav back to a hamburger after a link is clicked
function goToSection() {
    input.checked = false;
}

//Added to every list item in nav
about.addEventListener("click", goToSection);
portfolio.addEventListener("click", goToSection);
skills.addEventListener("click", goToSection);
contact.addEventListener("click", goToSection);
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}