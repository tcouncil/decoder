// Global Variable Declartions
const LOWER_CHAR = 97;
const HIGHER_CHAR = 122;
const ALPHABET = 26;
const SPACE_CHAR = 32;

const letterPos = (char) => char.toLowerCase().charCodeAt(0); // Changes charactor to lowercase and converts it into it's key code 

const letterGetter = (char) => String.fromCharCode(letterPos(char)); // Converts charactor to string based on it's key code 

function encoder(letter) {
    const alphabetPos = letterPos(letter) - HIGHER_CHAR + ALPHABET;

    // Row Position
    const rowPos = Math.ceil(alphabetPos / 5);

    // Column Postion 
    const colPos = alphabetPos <= 5 ? alphabetPos : alphabetPos <= 8 ? (alphabetPos + 1 % rowPos * 5) - (rowPos * 5) : (alphabetPos + 1 % rowPos * 5) - (rowPos * 5) - 1;

    // Modifier for I/J sharing a space
    if (rowPos === 2) {
        switch (alphabetPos) {
            case 9:  // Special case for I
            case 10: // Special case for J
                return `${4}${rowPos}`;
        }
    }
    return `${colPos !== 0 ? colPos : 5}${colPos !== 0 ? rowPos : (rowPos - 1)}`;
}

function decoder(column, row) {
    let alphabetPos = (5 * (row - 1)) + column;
    row === 1 ? alphabetPos -= 1 : row === 2 ? alphabetPos -= 1 : alphabetPos;

    switch (alphabetPos) {
        case 8:  // Special case for I/J
            return '(i/j)';
        case 9: // Handler for K
            return 'k';
    }
    return String.fromCharCode(alphabetPos + LOWER_CHAR);
}

function polybius(input, encode = true) {
    if (!encode) {
        const spaceArray = [...input];
        if ((input.length - spaceArray.filter(str => str === ' ').length) % 2 === 1) // Check if input length minus the space length is even or odd
            return false;
    }
    let returnString = '';
    if (encode) {
        for (const char of input) { // Converts our letters into numbers
            if (letterPos(char) >= LOWER_CHAR && letterPos(char) <= HIGHER_CHAR || letterPos(char) === SPACE_CHAR) {
                letterPos(char) === SPACE_CHAR ? returnString += ' ' : returnString += encoder(letterGetter(char));
            }
        }
    } else {
        const numArray = [...input]; // Spread our input into an array of numbers
        const numArrayLength = ((input.length - numArray.filter(element => element === ' ').length) / 2); // Set our loop length to the amount of number pairs minus space length divided by 2
        for (let i = 0; i < numArrayLength; i++) { // For each column/row pair and space
            if (numArray[0] === ' ') { // If the next element it our array is a space, add the space to our string and remove it
                returnString += ' ';
                numArray.shift(); // Removes our space
            }
            const colPos = numArray.shift(); // Shift the first index to be our column position
            const rowPos = numArray.shift(); // Shift the next index to be our row position
            returnString += decoder(Number(colPos),Number(rowPos)); // Add the decoded character to our return string
        }
    }
    return returnString;
}
module.exports = polybius;