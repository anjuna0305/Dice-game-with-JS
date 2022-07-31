// let a = math.random() * 10;

sidesOfDice = ["./Dice_Images/dice_1.png", "./Dice_Images/dice_2.png", "./Dice_Images/dice_3.png", "./Dice_Images/dice_4.png", "./Dice_Images/dice_5.png", "./Dice_Images/dice_6.png",]

var dice1 = 0;
var dice2 = 0;

var player1 = {
    name: player1,
    score: 0
};

var player2 = {
    name: player2,
    score: 0
};


var indicator = 10;
var gameStatus = 0;

function btnCorrector() {
    if (indicator == 0) {
        document.getElementById("player1btn").style.backgroundColor = "rgb(7, 104, 7)";
        document.getElementById("player2btn").style.backgroundColor = "rgba(7, 104, 7,0.3)";
    }
    else {
        document.getElementById("player2btn").style.backgroundColor = "rgb(7, 104, 7)";
        document.getElementById("player1btn").style.backgroundColor = "rgba(7, 104, 7,0.3)";
    }
}


function machine() {
    if (gameStatus == 0) {
        btnCorrector();

        dice1 = Math.floor(Math.random() * (6 - 1) + 1);
        dice2 = Math.floor(Math.random() * (6 - 1) + 1);

        document.getElementById("diceStatus").innerHTML = dice1 + "," + dice2;

        document.getElementById("dice_1").src = sidesOfDice[dice1 - 1];
        document.getElementById("dice_2").src = sidesOfDice[dice2 - 1];

        if (dice1 == dice2) {
            if (dice1 == 1 && dice2 == 1) {
                document.getElementById("status").innerHTML = "OOPS!";
                if (indicator == 0) {
                    player1.score = 0;
                    indicator = 1;
                    btnCorrector();
                }
                else {
                    player2.score = 0;
                    indicator = 0;
                    btnCorrector();
                }
            } else
                document.getElementById("status").innerHTML = "Roll the Dice again";

        }
        else {
            if (indicator == 0) {
                if (player1.score + dice1 + dice2 >= 100) {
                    player1.score = 100;
                    gameStatus = 1;
                }
                else
                    player1.score = player1.score + dice1 + dice2;
                indicator = 1;
                document.getElementById("status").innerHTML = "Player 2 Roll the Dice";
                btnCorrector();
            }
            else {
                if (player2.score + dice1 + dice2 >= 100) {
                    player2.score = 100;
                    gameStatus = 1;
                }
                else
                    player2.score = player2.score + dice1 + dice2;
                indicator = 0;
                document.getElementById("status").innerHTML = "Player 1 Roll the Dice";
                btnCorrector();
            }
        }


        document.getElementById("player1score").innerHTML = player1.score;
        document.getElementById("player2score").innerHTML = player2.score;

        if (gameStatus == 1)
            if (player1.score == 100)
                document.getElementById("status").innerHTML = "WINNER : PLAYER1 refresh to play again!";
            else
                document.getElementById("status").innerHTML = "WINNER : PLAYER2 refresh to play again!";

    }
}

function playCall1() {
    if (indicator == 0 || indicator != 1) {
        indicator = 0;
        machine();
    }
}

function playCall2() {
    if (indicator == 1 || indicator != 0) {
        indicator = 1;
        machine();
    }
}