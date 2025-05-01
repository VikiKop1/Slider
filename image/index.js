let imgSlider = document.querySelectorAll('.imgSlider');
let links = document.querySelectorAll('.about__list');
let points = document.querySelectorAll('.point');

let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

let counter = 0;

function updateActiveImage(index) {

    imgSlider.forEach(slide => slide.classList.remove('activeImage'));
    links.forEach(link => link.classList.remove('active'));
    points.forEach(point => point.classList.remove('activeImage'));

    imgSlider[index].classList.add('activeImage');
    links[index].classList.add('active');
    points[index].classList.add('activeImage');

}

links.forEach((link, index) => {
    point.addEventListener('click', () => {
        counter = index;
        updateActiveImage(counter);
    });
});

leftBtn.addEventListener('click', () => {
    counter--;
    if (conter < 0) {
        counter = imgSlider.length - 1;
    }
    updateActiveImage(counter);
});

rightBtn.addEventListener('click', () => {
    counter++;
    if (counter >= imgSlider.length) {
        counter = 0;
    }
    updateActiveImage(counter);
});

updateActiveImage(counter);