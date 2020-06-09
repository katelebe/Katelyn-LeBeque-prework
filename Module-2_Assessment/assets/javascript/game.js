// list of words to choose from
const words = ['apple', 'pear', 'banana', 'peach', 'kiwi', 'orange', 'strawberry', 'blueberry', 'grape',
'plum', 'tangerine', 'guava', 'tomato', 'watermelon', 'honeydew', 'cantaloupe', 'apricot', 'cherry',
'grapefruit', 'kumquat', 'mango', 'papaya', 'pineapple', 'passionfruit', 'coconut'];

// reference to html
const image = document.querySelector('#image');
const start = document.querySelector('#start');
const unsolved = document.querySelector('#word');
let wrong = document.querySelector('#incorrect');
let guesses = document.querySelector('#guesses')
let wins = document.querySelector('#wins');

// initial states
var guessedLetters = [];
let badGuess = [];
numGuesses = 12;
guesses.innerText = numGuesses;
numWins = 0;
wins.innerText = numWins;

// throwing most into a function for ease later
const reset = function(){
    guessedLetters = [];
    badGuess = [];
    numGuesses = 12;
    wrong.innerText = badGuess;
    guesses.innerText = numGuesses;
    wins.innerText = numWins;
};

// initial set up of game
const randomWord = function() { 
    //random selection from list
    window.puzzle = words[Math.floor(Math.random()*words.length)];
    // to create blank word
    let unsolvedSpaces = '';
    for (let i = 0; i < puzzle.length; i++){
        unsolvedSpaces = unsolvedSpaces + '_ ';
    };
    // global variable will be useful later
    window.unsolvedSpaces = unsolvedSpaces
    unsolved.innerText = unsolvedSpaces;
    // game has begun, so we can remove the event listener that started it
    start.innerText = 'Time to Start Guessing. . .'
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
    var locations = [];
    for (let i = 0; i < window.puzzle.length; i++) {
        // cases where guess is in randomWord, we want those letter locations
        if (window.puzzle[i] === letter) {
            locations.push(i);
        } 
    };

    // *2 because in my string I have a space after each '_' ~it's kinda weird, but this works
    for (let i = 0; i < locations.length; i++) {
        unsolvedSpaces = unsolvedSpaces.substring(0, (2*locations[i])) + letter + unsolvedSpaces.substring(2*(locations[i])+1, unsolvedSpaces.length);
        // updating puzzle display
        unsolved.innerText = unsolvedSpaces;
    };

    // cases where guess is NOT in randomWord
    if (locations.length === 0) {
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
        newImage();
        start.innerText = 'Press enter for the next word!'
        document.addEventListener('keydown', winReset);
    };
};

// replace image with one of the correct fruit
function newImage() {
    if (puzzle === 'apple') {
        image.src = './assets/images/apple.jpg';
    };

    if (puzzle === 'pear') {
        image.src = './assets/images/pear.jpg';
    };

    if (puzzle === 'banana') {
        image.src = './assets/images/banana.jpg';
    };

    if (puzzle === 'peach') {
        image.src = './assets/images/peach.png';
    };

    if (puzzle === 'kiwi') {
        image.src = './assets/images/kiwi.jpg';
    };

    if (puzzle === 'orange') {
        image.src = './assets/images/orange.jpg';
    };

    if (puzzle === 'strawberry') {
        image.src = './assets/images/strawberry.jpg';
    };

    if (puzzle === 'blueberry') {
        image.src = './assets/images/blueberry.jpg';
    };

    if (puzzle === 'grape') {
        image.src = './assets/images/grape.jpg';
    };

    if (puzzle === 'plum') {
        image.src = './assets/images/plum.jpg';
    };

    if (puzzle === 'tangerine') {
        image.src = './assets/images/tangerine.jpg';
    };

    if (puzzle === 'guava') {
        image.src = './assets/images/guava.jpg';
    };

    if (puzzle === 'tomato') {
        image.src = './assets/images/tomato.jpg';
    };

    if (puzzle === 'watermelon') {
        image.src = './assets/images/watermelon.jpg';
    };

    if (puzzle === 'honeydew') {
        image.src = './assets/images/honeydew.jpg';
    };

    if (puzzle === 'cantaloupe') {
        image.src = './assets/images/cantaloupe.jpg';
    };

    if (puzzle === 'apricot') {
        image.src = './assets/images/apricot.jpg';
    };

    if (puzzle === 'cherry') {
        image.src = './assets/images/cherry.png';
    };

    if (puzzle === 'grapefruit') {
        image.src = './assets/images/grapefruit.jpg';
    };

    if (puzzle === 'kumquat') {
        image.src = './assets/images/kumquat.jpg';
    };

    if (puzzle === 'mango') {
        image.src = './assets/images/mango.jpg';
    };

    if (puzzle === 'papaya') {
        image.src = './assets/images/papaya.jpg';
    };

    if (puzzle === 'pineapple') {
        image.src = './assets/images/pineapple.png';
    };

    if (puzzle === 'passionfruit') {
        image.src = './assets/images/passionfruit.jpg';
    };

    if (puzzle === 'coconut') {
        image.src = './assets/images/coconut.jpg';
    };
};

// resets after a win
function winReset() {
    if (event.keyCode === 13) {
        document.removeEventListener('keydown', winReset);
        reset();
        randomWord();
    };
};