// list of words to choose from
const words = ['apple', 'pear', 'banana', 'peach', 'kiwi', 'orange', 'strawberry', 'blueberry', 'grapes'];

// reference to html
const unsolved = document.querySelector('#word');
let wrong = document.querySelector('#incorrect');
let guesses = document.querySelector('#guesses')
let wins = document.querySelector('#wins');

// initial states
var guessedLetters = [];
let badGuess = [];
numGuesses = 10;
guesses.innerText = numGuesses;
numWins = 0;
wins.innerText = numWins;

// throwing most into a function for ease later
const reset = function(){
    guessedLetters = [];
    badGuess = [];
    numGuesses = 10;
    wrong.innerText = badGuess;
    guesses.innerText = numGuesses;
    wins.innerText = numWins;
};

// initial set up of game
const randomWord = function() { 
    //random selection from list
    window.puzzle = words[Math.floor(Math.random()*words.length)];
    console.log(puzzle);
    // to create blank word
    let unsolvedSpaces = '';
    for (let i = 0; i < puzzle.length; i++){
        unsolvedSpaces = unsolvedSpaces + '_ ';
    };
    // global variable will be useful later
    window.unsolvedSpaces = unsolvedSpaces
    unsolved.innerText = unsolvedSpaces;
    // game has begun, so we can remove the event listener that started it
    document.removeEventListener('keypress', randomWord);
};

// starts game
document.addEventListener('keypress', randomWord);

// listens for letters being pressed, once one is, we want to know if it's been pressed yet
document.onkeydown = function(event) {
    // only listening to alphabet 
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        guess(event.key.toLowerCase());
    };
};

// checks if letter hase been guessed yet, if not, throws into evaluate function
function guess(letter) {
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        evaluateGuess(letter);
    }
};

// decides whether letter is in randomWord or not
function evaluateGuess(letter) {
    var positions = [];
    for (let i = 0; i < window.puzzle.length; i++) {
        // cases where guess is in randomWord, we want those letter locations
        if (window.puzzle[i] === letter) {
            positions.push(i);
        } 
    };

    // *2 because in my string I have a space after each '_' ~it's kinda weird, but this works
    for (let i = 0; i < positions.length; i++) {
        unsolvedSpaces = unsolvedSpaces.substring(0, (2*positions[i])) + letter + unsolvedSpaces.substring(2*(positions[i])+1, unsolvedSpaces.length);
        // updating puzzle display
        unsolved.innerText = unsolvedSpaces;
    };

    // cases where guess is NOT in randomWord
    if (positions.length === 0) {
        // displays wrong letters
        badGuess.push(letter);
        wrong.innerText = badGuess.join(', ');
        //displays guesses remaining
        numGuesses--;
        guesses.innerText = numGuesses;
    };

    // gotta update the status of the game (see if we've won or lost)
    guessUpdate();
};

// resets & generates new game if last one was won or lost
function guessUpdate() {
    // Losing Situation
    if (numGuesses === 0) {
        reset();
        randomWord();
    };
    // Winning Situation
    if (unsolvedSpaces.search('_') === -1) {
        numWins++;
        reset();
        randomWord();
    };
};