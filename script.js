const projectsCards = document.querySelectorAll('.projects-card');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight * 1.5 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    projectsCards.forEach((card) => {
        if (isInViewport(card)) {
            card.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', handleScroll);
