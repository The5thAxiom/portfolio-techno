let prev = null;

for (let a of document.getElementsByClassName('navlink')) {
    if (a.getAttribute('href') === window.location.hash) {
        a.setAttribute('class', 'active-navlink');
        prev = a;
    }
}

for (let a of document.getElementsByClassName('navlink')) {
    a.addEventListener('click', () => {
        if (prev)
            prev.setAttribute(
                'class',
                prev.getAttribute('class').replace('active-navlink', '')
            );
        a.setAttribute('class', 'active-navlink');
        prev = a;
        // setTimeout(() => {
        //     prev = a;
        // }, 100);
    });
}
