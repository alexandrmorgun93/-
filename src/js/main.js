/*BEGIN PARALLAX*/
const Parallax = require('scroll-parallax');
let p = new Parallax('.parallax', {
    intensity: 40
}).init();

/*END PARALLAX*/

let menu = document.querySelector('.menu_btn');
let menuNuv = document.querySelector('.main_nav');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuNuv.classList.toggle('active');
});