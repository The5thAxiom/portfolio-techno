let prev = null;

// setting the active link on page load
for (let a of document.getElementsByClassName('navlink')) {
    if (a.getAttribute('href') === window.location.hash) {
        a.classList.add('active-navlink');
        prev = a;
    }
}

// setting the active link on every navlink click
for (let a of document.getElementsByClassName('navlink')) {
    a.addEventListener('click', () => {
        if (prev) prev.classList.remove('active-navlink');
        a.classList.add('active-navlink');
        prev = a;
    });
}
