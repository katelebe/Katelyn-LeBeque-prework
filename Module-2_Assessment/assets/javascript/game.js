const words = ['apple', 'pear', 'banana', 'jack fruit', 'kiwi'];

// set up start of game
const randomWord = function() { 
    window.puzzle = words[Math.floor(Math.random()*words.length)];
    console.log(puzzle);
    let unsolvedSpaces = '';
    for (let i = 0; i < puzzle.length; i++){
        unsolvedSpaces = unsolvedSpaces + '_ ';
    };
    window.unsolvedSpaces = unsolvedSpaces
    const unsolved = document.querySelector('#word');
    unsolved.innerText = unsolvedSpaces;
    document.removeEventListener('keypress', randomWord);
};
// starts game
document.addEventListener('keypress', randomWord);

// listens for letters being pressed, once one is, it throws into guess function
document.onkeydown = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        guess(event.key.toLowerCase());
    }
}

var guessedLetters = [];

// checks if letter hase been guessed yet, if not, throws into evaluate function
function guess(letter) {
    console.log(letter)
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        evaluateGuess(letter);
    }
}

//replace element in a string?
//String.prototype.replaceAt = function(index, replacement) {
//    return this.substring(0, index) + replacement + this.substring(index + 1)
//}

// decides whether letter is in word or not
function evaluateGuess(letter) {
    var positions = [];
    for (let i = 0; i < window.puzzle.length; i++) {
        if (window.puzzle[i] === letter) {
            positions.push(i);
        }
    };

    console.log(positions);
    
    console.log(unsolvedSpaces)
    
    // *2 because in my string I have a space after each '_' jk it's still not perfect
    for (let i = 0; i < positions.length; i++) {
        unsolvedSpaces = unsolvedSpaces.substring(0, (2*positions[i])) + letter + unsolvedSpaces.substring(2*(positions[i])+1, unsolvedSpaces.length);
        console.log(unsolvedSpaces);
        let solving = document.querySelector('#word');
        solving.innerText = unsolvedSpaces;
    };
}
