// Created by student x22223487
let swich = true;
let placeholder = document.getElementById('placeholder');
function changeOver() {
    let start = `<div class="inner row">
<div class="text-center">
    <h1 class="display-3  py-5" style="color: white;">About Us</h1>
</div>
<div class="text-start">
    <p>We have the satifsfaction of our customers to hight steem, we know a happy client is the best
        reference
        we can get, and we delight on it.</p>
</div>
</div>`;
    let game = `<div class = "inner row">
    <div id="images">
        <img src="../images/start-right.svg" alt="Start on the right">
    </div>
    <div id="instructions">
        <h4>Do you want to play?</h4>
    </div>
    <div id="replace">
        <button class="button" onclick="startGame()">play</button>
    </div>
</div>`;
    if (swich == true) {
        console.log('working');
        placeholder.innerHTML = game;
        swich = false;
    } else {
        console.log('working');
        placeholder.innerHTML = start;
        swich = true;
    }
}
let placeBT;
let placeMsg;
let placeImg;
let randNum;
function startGame() {
    placeBT = document.getElementById('replace');
    placeMsg = document.getElementById('instructions');
    placeImg = document.getElementById('images');
    let image = `<img src="../images/behind.svg" alt="Hands Behind">`
    let msg = `<h4>Where is the red ball?</h4>`;
    let options = `<button class = "button"  onclick= "computeGame(0)">Right</button><button class="button" onclick= "computeGame(1)">Left</button>`;
    placeBT.innerHTML = options;
    placeMsg.innerHTML = msg;
    placeImg.innerHTML = image;
    randNum = Math.floor(Math.random() * 2);
}
function computeGame(userChoice) {
    let outcomeOne = `<h4>Nice guess, you win.</h4> <h4>Do you want to play again?</h4>`;
    let outcomeTwo = `<h4>Wrong guess, you loose.</h4> <h4>Do you want to play again?</h4>`;
    let button = `<button class="button" onclick="startGame()">play</button>`;
    let imgTrue = `<img src="../images/start-right.svg" alt="Start on the right">`;
    let imgFalse = `<img src="../images/start-left.svg" alt="Start on the Left">`;
    if (userChoice == 0) {
        if (userChoice == randNum) {
            let image = imgTrue;
            let msg = outcomeOne;
            let options = button;
            replace(options, msg, image)
        } else {
            let image = imgFalse;
            let msg = outcomeTwo;
            let options = button;
            replace(options, msg, image)
        }

    } else if (userChoice == 1) {
        if (userChoice == randNum) {
            let image = imgFalse;
            let msg = outcomeOne;
            let options = button;
            replace(options, msg, image)
        } else {
            let image = imgTrue;
            let msg = outcomeTwo;
            let options = button;
            replace(options, msg, image)
        }


    }

}
function replace(options, msg, image) {
    placeBT.innerHTML = options;
    placeMsg.innerHTML = msg;
    placeImg.innerHTML = image;
}