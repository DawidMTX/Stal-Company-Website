const closeOpenMenu = document.querySelectorAll('.menu');
const menuItems = document.querySelector('.menu__items');
const menuBtn = document.querySelectorAll('.menu__button')
const cookieBtn = document.querySelector('.cookie__btn');

const menu = () => {
    menuItems.classList.toggle('hide')
}

closeOpenMenu.forEach((closeOpen) => {
    closeOpen.addEventListener('click', menu);
})
menuBtn.forEach((btn) => { btn.addEventListener('click', menu); })


//cookie 
cookieBtn.addEventListener('click', () => {
    document.querySelector('.cookie').classList.add('cookie--hide')
})


// navi

const navBar = document.querySelector('.navigation');
const navLogo = document.querySelector('.logo')
const headerName = document.querySelector(".company-name");

const navBarScroll = 80;


window.addEventListener('scroll', () => {

    if (scrollY > navBarScroll && window.innerWidth > 1024) {
        navBar.classList.add("navigation--active");
        navLogo.classList.add('logo--active')
       headerName.classList.add('company-name--active');
        menuBtn.forEach((btn) => {
            btn.classList.add('menu__button--active')
        })

      

    } else if (scrollY < navBarScroll && window.innerWidth > 1023) {
        navBar.classList.remove('navigation--active');
        navLogo.classList.remove('logo--active')
        headerName.classList.remove('company-name--active');

        menuBtn.forEach((btn) => {
            btn.classList.remove('menu__button--active')
        })
    
    
    }
})


// offer

let id = '';

let time = 6000;
let number = 0;

const minPicture = document.querySelectorAll('.min-picture');
const galleryPicture = document.querySelectorAll(".offer__picture");

// change picture by click button
minPicture.forEach((item, index) => {
    item.addEventListener('click', function (e) {

        id = this.dataset.control;
        number = index;
        minPicture.forEach(function (i) {
            i.classList.remove('is-selected')
        })

        item.classList.add('is-selected');


        galleryPicture.forEach(function (e, i) {

            e.classList.add('display-hide')
            if (e.dataset.slide == id) {
                e.classList.remove('display-hide')
            }
        });
        clearInterval(changeSlider)
        number++;
        changeSlider = setInterval(changePictureForMobile, time)

    })
})




// auto change picture
const changePictureForMobile = function (item) {

    if (number === galleryPicture.length) {
        number = 0;
    }
    galleryPicture.forEach(function (item) {
        item.classList.add('display-hide');
    })

    galleryPicture[number].classList.remove('display-hide');
    let slideNumber = galleryPicture[number].dataset.slide;


    minPicture.forEach(function (i) {
        i.classList.remove('is-selected');

    })
    minPicture[number].classList.add('is-selected');

    number++;
}



// mobile version of gallery


const rightBtn = document.querySelector('.navigation-buttons .right');
const leftBtn = document.querySelector('.navigation-buttons .left');

leftBtn.addEventListener('click', handswipeLeft);
rightBtn.addEventListener('click', handswipeRight);

function handswipeLeft() {

    clearInterval(changeSlider)
    number--;
    if (number == -1) { number = galleryPicture.length - 1 }

    galleryPicture.forEach(function (item) {
        item.classList.add('display-hide');

    })

    galleryPicture[number].classList.remove('display-hide');


    minPicture.forEach(function (i) {
        i.classList.remove('is-selected');
    })
    minPicture[number].classList.add('is-selected');
    changeSlider = setInterval(changePictureForMobile, time)
}
function handswipeRight() {

    clearInterval(changeSlider)
    number++;
    if (number == galleryPicture.length) { number = 0 }

    galleryPicture.forEach(function (item) {
        item.classList.add('display-hide');

    })

    galleryPicture[number].classList.remove('display-hide');


    minPicture.forEach(function (i) {
        i.classList.remove('is-selected');
    })
    minPicture[number].classList.add('is-selected');
    changeSlider = setInterval(changePictureForMobile, time)
}




let changeSlider = setInterval(changePictureForMobile, time);







