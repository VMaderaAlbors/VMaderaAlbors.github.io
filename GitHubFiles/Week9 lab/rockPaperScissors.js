let count = 3;
let endMsg = "<h2>Game Over</h2>";
function input(option) {

    let comOption = ["rock", "paper", "scissors"];
    let outcomeMsg;
    if (count > 0) {
        let randomiser = Math.floor(Math.random() * 3);
        console.log(randomiser);
        console.log(comOption);
        console.log(option);

        count--;

        document.getElementById("userDisplay").innerHTML = `You choose ${option}`;
        document.getElementById("comDisplay").innerHTML = `Computer choose ${comOption[randomiser]}`;

        if (option == 'rock') {

            if (comOption[randomiser] == 'rock') {
                console.log(randomiser);
                console.log(comOption);
                console.log(option);
                outcomeMsg = "Is a draw";

            } else if (comOption[randomiser] == 'scissors') {
                outcomeMsg = "You win";
                count = 0;
                endGame();
            } else {
                outcomeMsg = "You loose";
            }


        } else if (option == "paper") {
            if (comOption[randomiser] == 'paper') {
                console.log(randomiser);
                console.log(comOption);
                console.log(option);
                outcomeMsg = "Is a draw";

            } else if (comOption[randomiser] == 'rock') {
                outcomeMsg = "You win";
                count = 0;
                endGame();
            } else {
                outcomeMsg = "You loose";
            }



        } else if (option == "scissors") {
            if (comOption[randomiser] == 'scissors') {
                console.log(randomiser);
                console.log(comOption);
                console.log(option);
                outcomeMsg = "Is a draw";

            } else if (comOption[randomiser] == 'paper') {
                outcomeMsg = "You win";
                count = 0;
                endGame();
            } else {
                outcomeMsg = "You loose";
            }



        }
        document.getElementById("outcome").innerHTML = outcomeMsg;
    } else {
        endGame();

    }


}
function endGame() {
    document.getElementById("outcome").innerHTML += endMsg;
    const buttons = document.querySelectorAll('.bt');
    buttons.forEach(bt => {
        bt.remove();
    })




}