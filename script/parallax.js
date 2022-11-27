let startPos = 500;

if( window.innerWidth > 751){
    startPos = 450;
} 
if( window.innerWidth > 751){
    startPos = 350;
} 
if( window.innerWidth > 1024){
    startPos = -10;
}
if( window.innerWidth > 1300){
    startPos = -150;
}
const parallax = document.querySelector('.parallax');

const efectParallax = () => {
    window.addEventListener('scroll', () =>{
        let scrollPos = window.scrollY.toFixed(0);
        let changePos = scrollPos / 4;
        let currentPos = startPos - changePos;
        parallax.style.backgroundPosition = `50% ${currentPos}px`;
    })
}

efectParallax();