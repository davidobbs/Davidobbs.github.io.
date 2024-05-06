document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('menu-link-hover');
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('menu-link-hover');
        });
    });
});