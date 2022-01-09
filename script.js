const about = document.getElementById("about-nav");
const portfolio = document.getElementById("portfolio-nav");
const contact = document.getElementById("contact-nav");
const input = document.getElementById("menu-icon");
const body = document.querySelector("body");
const contactme = document.getElementById("contactmebox");
const info = document.getElementById("info");


function showEmail() {
    contactme.innerHTML = `<button class="noselect" id="email">CodingWHenry@gmail.com</button>`;
}

contactme.addEventListener("click", showEmail);

function goToSection() {
    input.checked = false;
}

about.addEventListener("click", goToSection);
portfolio.addEventListener("click", goToSection);
contact.addEventListener("click", goToSection);
