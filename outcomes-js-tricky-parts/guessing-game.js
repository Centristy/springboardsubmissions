function guessingGame(num) {

    const randNum= Math.floor(Math.random() * 100);
    let win = false;
    let guesses = 0;


    return function guess(num) {
        if (win) return "The game is over, you already won!";
        guesses++;
        if (num === randNum) {
            win = true;
            const guess = guesses === 1 ? "guess" : "guesses"; // plural or not
            return `You win! You found ${randNum} in ${guesses} ${guess}.`;
        }
        if (num < randNum) return `${num} is too low!`;
        if (num > randNum) return `${num} is too high!`;
        };
    

}

module.exports = { guessingGame };
