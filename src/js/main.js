/*BEGIN PARALLAX*/
const Parallax = require('scroll-parallax');
let p = new Parallax('.parallax', {
    intensity: 40
}).init();
/*END PARALLAX*/
/*slick*/
let slick = require('slick-carousel');

$('.increase_content').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 970,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2
            }
        },
    ]
})
;
// language
const language = document.querySelector('.language');
language.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('active')) {
        e.preventDefault();
    }
    language.classList.toggle('active');
});


let menu = document.querySelector('.menu_btn');
let menuNuv = document.querySelector('.nav_block');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuNuv.classList.toggle('active');
});


let slider = document.querySelectorAll('.slide_elem');
let yak = 0;
let timer = null;

function lastElem(arr, int, boll) {
    if (boll) {
        return (arr[int + 1]) ? int + 1 : 0;
    } else {
        return (arr[int - 1]) ? int - 1 : arr.length - 1;
    }
}


function autoSlider(boll, int) {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active');

    }
    if (arguments.length < 2) {
        yak = lastElem(slider, yak, boll);
        slider[yak].classList.add('active');
    }
    else {
        yak = int;
        slider[int].classList.add('active');
    }
}

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 39) {
        clearInterval(timer);
        autoSlider(true);
        defult();
    } else if (e.keyCode === 37) {
        clearInterval(timer);
        autoSlider(false);
        defult();
    }
});

function defult() {
    timer = setInterval(() => {
        autoSlider(true);
    }, 7000);
}

slider[0].classList.add('active');

defult();