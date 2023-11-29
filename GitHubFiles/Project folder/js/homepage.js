// Created by student x22223487
let swich = true;
let videoPlace = document.querySelector('video');
function changeVideo() {
    let hex = 'images/pexels-rostislav-uzunov-9629254%20(1080p).mp4';
    // let hex = `<source src="images/pexels-rostislav-uzunov-9629254 (1080p).mp4" type="video/mp4">`;
    let wave = 'images/pexels-rostislav-uzunov-8303104%20(1080p).mp4';
    if (swich == true) {
        console.log('working');
        videoPlace.src = wave;
        swich = false;
    } else {
        console.log('working');
        videoPlace.src = hex;
        swich = true;
    }
}