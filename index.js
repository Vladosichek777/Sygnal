let buttonHeaderOpen = document.querySelector('.header__button-mobile');
let headerMenu = document.querySelector('.header__mobile-menu');
let buttonHeaderClose = document.querySelector('.header__mobile-menu__button-close');


buttonHeaderOpen.addEventListener('click', () => {
    headerMenu.classList.remove('hiddenMobileMenu')
})

buttonHeaderClose.addEventListener('click', () => {
    headerMenu.classList.add('hiddenMobileMenu')
})