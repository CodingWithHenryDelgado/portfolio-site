const about = document.getElementById("about-nav");
const portfolio = document.getElementById("portfolio-nav");
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
contact.addEventListener("click", goToSection);
