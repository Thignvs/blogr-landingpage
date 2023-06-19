
const hamburger = document.querySelector('#openMenu');
const hideMenu = document.querySelector('#closeMenu');
const arrowDown = document.querySelector('.main-menu');
const arrowDow2 = document.querySelector('.main-menu2');
const arrowDow3 = document.querySelector('.main-menu3');

let activeSubMenu = null; // Check what submenu is active

function toggleSubMenu(subMenu) {
    if (activeSubMenu && activeSubMenu !== subMenu) {
        activeSubMenu.classList.remove('active');
    }
    subMenu.classList.toggle('active');
    activeSubMenu = subMenu;
}

function toggleMenu() {
    const nav = document.getElementById('nav-bar');
    nav.classList.toggle('active');
}

function closeMenu() {
    const close = document.getElementById('nav-bar');
    close.classList.remove('active');
    if (activeSubMenu) {
        activeSubMenu.classList.remove('active');
        activeSubMenu = null;
    }
}

function checkScreenWidth() {
    if (window.innerWidth >= 1000) {
        closeMenu();
    }
}

arrowDown.addEventListener('click', function () {
    toggleSubMenu(document.querySelector('#subMenu1'));
});

arrowDow2.addEventListener('click', function () {
    toggleSubMenu(document.querySelector('#subMenu2'));
});

arrowDow3.addEventListener('click', function () {
    toggleSubMenu(document.querySelector('#subMenu3'));
});

hideMenu.addEventListener('click', closeMenu);
hamburger.addEventListener('click', toggleMenu);
window.addEventListener('resize', checkScreenWidth);