var random = Math.floor(Math.random() * 10);
var plays = 1;
var number = 0;

play();
function play() {
    number = prompt(plays + 'º Tentativa, adivinhe o número:');

    checkResult();
}

function checkResult() {
    console.log(number + " == " + random);

    if (number == random) {
        alert('Acertou. Parabéns!!!');
    } else if (plays >= 3) {
        alert('Game Over');
    } else {
        plays ++;

        play();
    }
}