window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const y = navbar.getBoundingClientRect().y;
    if (y === 0 && !navbar.classList.contains('at-the-top'))
        navbar.classList.add('at-the-top');
    else if (y && navbar.classList.contains('at-the-top'))
        navbar.classList.remove('at-the-top');
});
