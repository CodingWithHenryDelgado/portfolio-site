// const about = document.getElementById("about-nav");
// const portfolio = document.getElementById("portfolio-nav");
// const skills = document.getElementById("skill-nav");
// const contact = document.getElementById("contact-nav");
// const input = document.getElementById("menu-icon");
// const body = document.querySelector("body");
// const contactme = document.getElementById("contactmebox");
// const info = document.getElementById("info");
const menu = document.getElementById("menu");
const centercentre = document.getElementById("centercentre");
const thelifedu = document.getElementById("thelifedu");

centercentre.addEventListener("click", function () {
    //Create container div to keep the iframe
    const window = document.createElement("div");
    window.id = "container-iframe"

    //Create the iframe element with the site
    const site = document.createElement("iframe");
    site.id = 'cc-iframe';
    site.src = 'https://www.uie.com/';
    site.title = 'UIE website';

    const containerDescription = document.createElement("div");
    containerDescription.id = 'cc-info'

    const description = document.createElement("p");
    const text = document.createTextNode("I redesigned the main site of UIE with the help of the Lead of Marketing and Design, Summer, and my Manager, Marko. They both supplied me with the design template and helped me improve it when testing it's responsiveness.")

    const descriptionTwo = document.createElement("p");
    const textTwo = document.createTextNode(" I would use our test page in WordPress, in order to make sure the HTML code works well with our WordPress theme and if it's responsive. We went through several revisions until it was decided to use this on our main page.");

    const siteButton = document.createElement("a");

    siteButton.id = 'siteButton';

    siteButton.href = 'https://www.uie.com/';

    siteButton.target = '_blank';

    const siteButtonText = document.createTextNode("View Site");

    siteButton.appendChild(siteButtonText);

    const siteCode = document.createElement("a");

    siteCode.id = 'siteCode';

    const siteCodeText = document.createTextNode("No Public Code!");

    siteCode.appendChild(siteCodeText);

    description.appendChild(text);

    descriptionTwo.appendChild(textTwo);

    const getOut = document.createElement("button");

    getOut.id = 'closeButton';

    const getOutText = document.createTextNode("X");

    getOut.appendChild(getOutText);

    const htmlImage = document.createElement("img");

    htmlImage.id = "HTML5"

    htmlImage.src = "./img/html5.png";

    htmlImage.alt = "HTML5 Icon";

    const cssImage = document.createElement("img");

    cssImage.id = "CSS3"

    cssImage.src = "./img/css3.png";

    cssImage.alt = "CSS3 Icon";

    const wordPressImage = document.createElement("img");

    wordPressImage.id = "WP"

    wordPressImage.src = "./img/wordpress.png";

    wordPressImage.alt = "WordPress Icon";

    const fileZillaImage = document.createElement("img");

    fileZillaImage.id = "FileZilla"

    fileZillaImage.src = "./img/filezilla.png";

    fileZillaImage.alt = "FileZilla Icon";

    const ccHeader = document.createElement("h2");

    ccHeader.id = 'ccHeader';

    const ccHeaderLink = document.createElement("a");

    ccHeaderLink.href = 'https://www.uie.com/';

    const ccHeaderText = document.createTextNode("UIE - Redesign Project");

    ccHeaderLink.appendChild(ccHeaderText);

    ccHeader.appendChild(ccHeaderLink);

    containerDescription.appendChild(site);

    containerDescription.appendChild(description);

    containerDescription.appendChild(descriptionTwo);

    containerDescription.appendChild(siteCode);

    containerDescription.appendChild(siteButton);

    containerDescription.appendChild(siteCode);

    containerDescription.appendChild(getOut);

    containerDescription.appendChild(htmlImage);

    containerDescription.appendChild(cssImage);

    containerDescription.appendChild(wordPressImage);

    containerDescription.appendChild(fileZillaImage);

    containerDescription.appendChild(ccHeader);

    window.appendChild(containerDescription);

    document.body.appendChild(window);

    getOut.onclick = function () {
        document.body.removeChild(window);
    }
})

thelifedu.addEventListener("click", function () {
    //Create container div to keep the iframe
    const window = document.createElement("div");
    window.id = "container-iframe"

    //Create the iframe element with the site
    const site = document.createElement("iframe");
    site.id = 'cc-iframe';
    site.src = 'https://henrydelglitch.github.io/the-lifedu/';
    site.title = 'UIE website';

    const containerDescription = document.createElement("div");
    containerDescription.id = 'cc-info'

    const description = document.createElement("p");
    const text = document.createTextNode("During my first month, I was given illustrator and Figma files to build their site from scratch. I would show my progress to the Senior Developer, Abhinav Manohar and he would give me feedback.")

    const descriptionTwo = document.createElement("p");
    const textTwo = document.createTextNode("Every week, the whole team would have a Zoom meeting (India and USA). I would show my progress on the site, then once we agree the page was complete, the Designer, Shradha of the team would give me more pages to create and work on.");

    const siteButton = document.createElement("a");

    siteButton.id = 'siteButton';

    siteButton.href = 'https://henrydelglitch.github.io/the-lifedu/';

    siteButton.target = '_blank';

    const siteButtonText = document.createTextNode("View Site");

    siteButton.appendChild(siteButtonText);

    const siteCode = document.createElement("a");

    siteCode.id = 'siteCode';

    siteCode.target = '_blank';

    siteCode.href = 'https://github.com/HenryDelGlitch/the-lifedu';

    const siteCodeText = document.createTextNode("Github Code");

    siteCode.appendChild(siteCodeText);

    description.appendChild(text);

    descriptionTwo.appendChild(textTwo);

    const getOut = document.createElement("button");

    getOut.id = 'closeButton';

    const getOutText = document.createTextNode("X");

    getOut.appendChild(getOutText);

    const htmlImage = document.createElement("img");

    htmlImage.id = "HTML5"

    htmlImage.src = "./img/html5.png";

    htmlImage.alt = "HTML5 Icon";

    const cssImage = document.createElement("img");

    cssImage.id = "CSS3"

    cssImage.src = "./img/css3.png";

    cssImage.alt = "CSS3 Icon";

    const jsImage = document.createElement("img");

    jsImage.id = "JS"

    jsImage.src = "./img/js.png";

    jsImage.alt = "JS Icon";

    const ccHeader = document.createElement("h2");

    ccHeader.id = 'lifeduHeader';

    const ccHeaderLink = document.createElement("a");

    ccHeaderLink.href = 'https://github.com/HenryDelGlitch/the-lifedu';

    const ccHeaderText = document.createTextNode("The Lifedu");

    ccHeaderLink.appendChild(ccHeaderText);

    ccHeader.appendChild(ccHeaderLink);

    containerDescription.appendChild(site);

    containerDescription.appendChild(description);

    containerDescription.appendChild(descriptionTwo);

    containerDescription.appendChild(siteCode);

    containerDescription.appendChild(siteButton);

    containerDescription.appendChild(siteCode);

    containerDescription.appendChild(getOut);

    containerDescription.appendChild(htmlImage);

    containerDescription.appendChild(cssImage);

    containerDescription.appendChild(jsImage);

    containerDescription.appendChild(ccHeader);

    window.appendChild(containerDescription);

    document.body.appendChild(window);

    getOut.onclick = function () {
        document.body.removeChild(window);
    }
})

class Particle {

    constructor(svg, coordinates, friction) {
        this.svg = svg
        this.steps = ($(window).height()) / 2
        this.item = null
        this.friction = friction
        this.coordinates = coordinates
        this.position = this.coordinates.y
        this.dimensions = this.render()
        this.rotation = Math.random() > 0.5 ? "-" : "+"
        this.scale = 1 + Math.random()
        this.siner = 500 * Math.random()
    }

    destroy() {
        this.item.remove()
    }

    move() {
        this.position = this.position - this.friction
        let top = this.position - 800;
        let left = (this.coordinates.x) + Math.sin(this.position * Math.PI / this.steps) * this.siner;
        this.item.css({
            transform: "translateX(" + left + "px) translateY(" + top + "px) scale(" + this.scale + ") rotate(" + (this.rotation) + (this.position + (this.dimensions.height)) + "deg)"
        })

        if (this.position < -(this.dimensions.height)) {
            this.destroy()
            return false
        } else {
            return true
        }
    }

    render() {
        this.item = $(this.svg, {
            css: {
                transform: "translateX(" + this.coordinates.x + "px) translateY(" + this.coordinates.y + "px)"
            }
        })
        $("body").append(this.item)
        return {
            width: this.item.width(),
            height: this.item.height()
        }
    }
}

const rhombus = `<svg width="512px" height="512px" viewBox="0 0 512 512" style="z-index: -2"><path class="rhombus" d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z"/><path class="rhombus" d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z"/></svg>`

const pentahedron = '<svg viewBox="0 0 561.8 559.4" class="svg" style="z-index: -2"><path class="pentahedron" d="M383.4,559.4h-204l-2.6-0.2c-51.3-4.4-94-37-108.8-83l-0.2-0.6L6,276.7l-0.2-0.5c-14.5-50,3.1-102.7,43.7-131.4 L212.1,23C252.4-7.9,310.7-7.9,351,23l163.5,122.5l0.4,0.3c39,30.3,56,82.6,42.2,130.3l-0.3,1.1l-61.5,198 C480.4,525.6,435.5,559.4,383.4,559.4z M185.5,439.4h195.2l61.1-196.8c0-0.5-0.3-1.6-0.7-2.1L281.5,120.9L120.9,241.2 c0,0.3,0.1,0.7,0.2,1.2l60.8,195.8C182.5,438.5,183.7,439.1,185.5,439.4z M441,240.3L441,240.3L441,240.3z"/></svg>'
const x = '<svg viewBox="0 0 12 12" class="svg" style="z-index: -2"> <path class="x" d="M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5 C4.3,11.2,5,12,6,12s1.7-0.8,1.7-1.7V7.7h2.5C11.2,7.7,12,7,12,6S11.2,4.3,10.3,4.3z"/></svg>'

const circle = '<svg viewBox="0 0 512 512" class="svg" style="z-index: -2"><path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6" /><path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" /><path fill="#f16529" d="M256 480.5V131H404.3L376 447" /><path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26" /><path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" /></svg>'

const point = '<svg viewBox="0 0 12 12" class="svg" style="z-index: -2"> <path class="point" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>'

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const data = [point, rhombus, pentahedron, circle, x]

let isPaused = false;
window.onblur = function () {
    isPaused = true;
}.bind(this)
window.onfocus = function () {
    isPaused = false;
}.bind(this)

let particles = []

setInterval(function () {
    if (!isPaused) {
        particles.push(
            new Particle(data[randomInt(0, data.length - 1)], {
                "x": (Math.random() * ($(window).width() / 4)),
                "y": $(window).height()
            }, (1 + Math.random() * 3))
        )
    }
}, 200)

function update() {
    particles = particles.filter(function (p) {
        return p.move()
    })
    requestAnimationFrame(update.bind(this))
}
update()

