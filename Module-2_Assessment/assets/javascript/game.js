const words = ['apple', 'pear', 'banana', 'jack fruit', 'kiwi'];

const randomWord = function() { 
    puzzle = words[Math.floor(Math.random()*words.length)];
    console.log(puzzle);
    var unsolvedSpaces = '';
    for (let i = 0; i < puzzle.length; i++){
        unsolvedSpaces = unsolvedSpaces + '_ ';
    };
    let unsolved = document.querySelector('#word');
    unsolved.innerText = unsolvedSpaces;
};

document.addEventListener('keypress', randomWord);


// console.log(unsolvedSpaces);

// 3. Use a for-loop and the `innerText` property to create a string of li tags containing each collected intererst




// const wordCharCode = [];
// for (let i = 0; i < puzzle.length; i++) {
//     letter = randomWord[i];
//     keyNum = letter.keyCode;
//     wordCharCode.push(keyNum);
// };
// console.log(wordCharCode);

