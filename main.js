const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.burguer-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu () {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
    if (!isCartMenuClosed){
        cartMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu () {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
    if (!isCartMenuClosed){
        cartMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('slide-right')
}
function toggleCartMenu () {
    const isMobileMenuOpen = mobileMenu.classList.contains('slide-right');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (isMobileMenuOpen){
        mobileMenu.classList.remove('slide-right');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    cartMenu.classList.toggle('inactive')
}