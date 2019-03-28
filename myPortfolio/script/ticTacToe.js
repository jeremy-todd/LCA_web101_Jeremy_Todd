var gameMarker = "X";

var winX = 0;
var winO = 0;
var winC = 0;

var winner = "no";

function hideReset() {
    document.getElementById("buttonClear").style.visibility = "hidden";
}

function changeMarker(mkr) {

    if (mkr == 'X') {
        gameMarker= 'X';
    } else if (mkr == 'O') {
        gameMarker = 'O';
    }
}

function placeMark(sq) {
    var sqr = sq;
    if (document.getElementById(sqr).innerHTML == "" && winner == "no") {
        document.getElementById(sqr).innerHTML = gameMarker;
    } else {
        document.getElementById(sqr).innerHTML = document.getElementById(sqr).innerHTML;
    }
    determineWinner();
}

function determineWinner() {
    var r1c1 = document.getElementById('r1c1').innerHTML;
    var r1c2 = document.getElementById('r1c2').innerHTML;
    var r1c3 = document.getElementById('r1c3').innerHTML;
    var r2c1 = document.getElementById('r2c1').innerHTML;
    var r2c2 = document.getElementById('r2c2').innerHTML;
    var r2c3 = document.getElementById('r2c3').innerHTML;
    var r3c1 = document.getElementById('r3c1').innerHTML;
    var r3c2 = document.getElementById('r3c2').innerHTML;
    var r3c3 = document.getElementById('r3c3').innerHTML;    

    if (r1c1 == r1c2 && r1c2 == r1c3 && r1c1 != "" && r1c2 != "" && r1c3 != "" && winner == "no") {
        //three match across top row
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else if (r2c1 == r2c2 && r2c2 == r2c3 && r2c1 != "" && r2c2 != "" && r2c3 != "" && winner == "no") {
        //three match across second row
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else if (r3c1 == r3c2 && r3c2 == r3c3 && r3c1 != "" && r3c2 != "" && r3c3 != "" && winner == "no") {
        //three match across third row
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else if (r1c1 == r2c1 && r2c1 == r3c1 && r1c1 != "" && r2c1 != "" && r3c1 != "" && winner == "no") {
        //three match down first column
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else if (r1c2 == r2c2 && r2c2 == r3c2 && r1c2 != "" && r2c2 != "" && r3c2 != "" && winner == "no") {
        //three match down second column
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else if (r1c3 == r2c3 && r2c3 == r3c3 && r1c3 != "" && r2c3 != "" && r3c3 != "" && winner == "no") {
        //three match down third column
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else if (r1c1 == r2c2 && r2c2 == r3c3 && r1c1 != "" && r2c2 != "" && r3c3 != "" && winner == "no") {
        //three match diagnol from top left to bottom right
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else if (r1c3 == r2c2 && r2c2 == r3c1 && r1c3 != "" && r2c2 != "" && r3c1 != "" && winner == "no") {
        //three match diagnol from top right to bottom left
        document.getElementById('gameWinner').innerHTML = gameMarker + " wins this game!";
        if (gameMarker == 'X') {
            document.getElementById('winsX').innerHTML = ++winX;
            document.getElementById("buttonClear").style.visibility = "visible";
        } else if (gameMarker == 'O') {
            document.getElementById('winsO').innerHTML = ++winO;
            document.getElementById("buttonClear").style.visibility = "visible";
        }
        winner = "yes";
    } else {
        if (r1c1 != "" && r1c2 != "" && r1c3 != "" && r2c1 != "" && r2c2 != "" && r2c3 != "" && r3c1 != "" && r3c2 != "" && r3c3 != "" && winner == "no") {
            document.getElementById('gameWinner').innerHTML = "This game is a draw!";
            document.getElementById('winsC').innerHTML = ++winC;
            document.getElementById("buttonClear").style.visibility = "visible";
            winner = "yes";
        }
    }

    if (gameMarker == 'X') {
        gameMarker = 'O';
    } else if (gameMarker == 'O') {
        gameMarker = 'X';
    }
}

function clearBoard() {
    document.getElementById('r1c1').innerHTML = "";
    document.getElementById('r1c2').innerHTML = "";
    document.getElementById('r1c3').innerHTML = "";
    document.getElementById('r2c1').innerHTML = "";
    document.getElementById('r2c2').innerHTML = "";
    document.getElementById('r2c3').innerHTML = "";
    document.getElementById('r3c1').innerHTML = "";
    document.getElementById('r3c2').innerHTML = "";
    document.getElementById('r3c3').innerHTML = "";
    document.getElementById('gameWinner').innerHTML = "";
    winner = "no";
    gameMarker = 'X';
    
    document.getElementById("buttonClear").style.visibility = "hidden";
}