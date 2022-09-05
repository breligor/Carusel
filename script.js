const img = document.querySelectorAll('.img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const photos = document.querySelector('.photos');
const pauseButton = document.querySelector('button');
let slideInterval = setInterval(moveForward,3000);
let width;
let counter = 0;
let playing = true;

function adaptSize() {
    width = document.querySelector('.gallery').clientWidth;
    photos.style.width = width * img.length + 'px';
    img.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
}
adaptSize();
window.addEventListener('resize', adaptSize);

function moveBack () {
    img[counter].classList.remove( 'show');
    counter--;
    if (counter < 0) {
        counter = img.length - 1;
    }
    img[counter].classList.add( 'show');
}

function moveForward () {
    img[counter].classList.remove( 'show');
    counter++;
    if (counter >= img.length) {
        counter = 0;
    }
    img[counter].classList.add( 'show');
}

prevBtn.addEventListener('click', moveBack);
nextBtn.addEventListener('click', moveForward);

function pauseSlideshow () {
    pauseButton.innerHTML = 'PLAY';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'PAUSE';
    playing = true;
    slideInterval = setInterval(moveForward,3000);
}

pauseButton.onclick = function() {
    if(playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};
