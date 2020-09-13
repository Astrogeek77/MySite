// Themes
const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
};

const theme = localStorage.getItem('theme') ||
    (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;


// Type Script
new TypeIt("#intro-heading", {
        speed: 60,
        loop: true
    }).type("Hello, I am Gautam Jain")
    .pause(8000)
    .delete()
    .pause(1000)
    .type("I am a Web Designer && Developer")
    .pause(8000)
    .delete()
    .go()

new TypeIt("#project-heading", {
        speed: 60,
        loop: true
    }).type("My Projects")
    .pause(8000)
    .delete()
    .go()

// image-grid
$(".owl-carousel").owlCarousel({
    items: 2,
    margin: 20,
    loop: true,
    center: true,
    dots: false
});

// Smooth Scroll Effect

const scroll = new SmoothScroll(' a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
});