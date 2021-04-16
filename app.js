// video 
const video = document.querySelector(".video-container");


// buttons
const pauseBtn = document.querySelector(".pause-btn");
const playBtn = document.querySelector(".play-btn");

pauseBtn.addEventListener('click', function() {
    video.pause();
});

playBtn.addEventListener('click', function() {
    video.play();
});


// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
});