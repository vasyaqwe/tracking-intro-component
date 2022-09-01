const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    navToggle.setAttribute("aria-expanded", !nav.hasAttribute("data-visible"));
    nav.toggleAttribute('data-visible');
})