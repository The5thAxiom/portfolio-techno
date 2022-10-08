const rem = Number.parseInt(
    getComputedStyle(document.documentElement).fontSize.replace('px', '')
);
const navBarHeight = 4 * rem;

// setting the active link whenever the section it links to reaches the top
let prev = null;
let lastScrollTop = 0;
let hasGoneUp = {};

window.addEventListener('scroll', e => {
    const currentScrollTop = document.documentElement.scrollTop;
    const scrollingDown = currentScrollTop > lastScrollTop;

    for (let section of document.getElementsByTagName('section')) {
        const y = section.getBoundingClientRect().y;
        const id = section.getAttribute('id');
        if (scrollingDown && y <= navBarHeight && !hasGoneUp[id]) {
            hasGoneUp[id] = true;
            const link = document.querySelector(`a[href="#${id}"]`);
            if (prev) prev.classList.remove('active-navlink');
            link.classList.add('active-navlink');
            prev = link;
        } else if (!scrollingDown && y >= navBarHeight && hasGoneUp[id]) {
            hasGoneUp[id] = false;
            const link = document.querySelector(`a[href="#${id}"]`);
            if (prev) prev.classList.remove('active-navlink');
            link.classList.add('active-navlink');
            prev = link;
        }
    }

    lastScrollTop = currentScrollTop;
});
