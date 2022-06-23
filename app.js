
let carousel = document.querySelector('[data-slides]');

let slides = [...carousel.children];

let POSITION = 30;
const positions = new Map ();

function initSlide() {

    slides.forEach((x, i) => {
        x.style.left = POSITION + i * 100 + '%';
        // console.log(x.style.left);
        let position = Number(x.style.left.split('%')[0]);
        positions.set(i, position);
    });
}
initSlide();

function initSlideBackwards() {
    slides.forEach((x, i) => {
        x.style.left = POSITION + i * 100 + '%';
        // console.log(x.style.left);
        let position = Number(x.style.left.split('%')[0]);
        positions.set(i, position);
    });
}

console.log(positions);
let newPositions = new Map(positions);

const buttons = document.querySelectorAll('[data-carousel-button]');

const image = document.querySelector(['data-active']);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.currentTarget);

    const offset = button.dataset.carouselButton === "next" ? 100 : -100;
    console.log('offset', offset)  

    slides.forEach((x, i) => {
        let newPosition = newPositions.get(i) - offset;
        x.style.left = newPosition + '%';
        newPositions.set(i, newPosition);
        console.log(newPositions.get(i))
        
    });
    console.log('newPositions', newPositions)
    
    });
})


