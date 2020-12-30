const letterPos = (char) => char.toLowerCase().charCodeAt(0); // Changes charactor to lowercase and converts it into it's key code 

const letterGetter = (char) => String.fromCharCode(letterPos(char)); // Converts charactor to string based on it's key code 

// Global Variable Declartions
const LOWER_CHAR_CODE = 97;
const HIGHER_CHAR_CODE = 122;
const ALPHABET_LENGTH = 26;
const SPACE_CHAR_CODE = 32;

function encoder(letter){
    const alphabetPos = letterPos(letter) - HIGHER_CHAR_CODE + ALPHABET_LENGTH;
    const rowPos = Math.ceil(alphabetPos/5);
    const colPos = alphabetPos <= 5 ? alphabetPos : alphabetPos <= 8 ? (alphabetPos+1 % rowPos*5)-(rowPos*5) : (alphabetPos+1 % rowPos*5)-(rowPos*5)-1;

   // Modifier for I/J sharing a space
    if(rowPos === 2){
        switch(alphabetPos){
            case 9:  // Special case for I
            case 10: // Special case for J
                return `${4}${rowPos}`;
        }
    }
    return `${colPos!== 0 ? colPos : 5}${colPos!== 0 ? rowPos : (rowPos-1)}`;
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
            if (letterPos(char) > LOWER_CHAR_CODE && letterPos(char) < HIGHER_CHAR_CODE || letterPos(char) === SPACE_CHAR_CODE) { 
                letterPos(char) === SPACE_CHAR_CODE ? returnString += ' ' : returnString += encoder(letterGetter(char));
            }
        }
    } else {
        const numArray = [...input]; // Spread our input into an array of numbers
        const numArrayLength = ((input.length - numArray.filter(str => str === ' ').length) / 2) + numArray.filter(str => str === ' ').length; // Set our loop length to the amount of number pairs minus space length divided by 2 and then add space length back
        for (let i = 0; i < numArrayLength; i++) { //Converts our numbers into letters
            if(numArray[0] === ' '){ // If first element it our array is a space. add the space to our string and remove it
                returnString += ' ';
                numArray.shift(); // Removes our space
            }
            let num = numArray.shift(); // Shift the first index 
            num += numArray.shift(); // Add the next index to create our number pair
            switch (Number(num)) { // Covert our 'num' from a string into a number for our switch statement expression
                case 11:
                    returnString += 'a';
                    break;
                case 21:
                    returnString += 'b';
                    break;
                case 31:
                    returnString += 'c';
                    break;
                case 41:
                    returnString += 'd';
                    break;
                case 51:
                    returnString += 'e';
                    break;
                case 12:
                    returnString += 'f';
                    break;
                case 22:
                    returnString += 'g';
                    break;
                case 32:
                    returnString += 'h';
                    break;
                case 42:
                    returnString += '(i/j)';
                    break;
                case 52:
                    returnString += 'k';
                    break;
                case 13:
                    returnString += 'l';
                    break;
                case 23:
                    returnString += 'm';
                    break;
                case 33:
                    returnString += 'n';
                    break;
                case 43:
                    returnString += 'o';
                    break;
                case 53:
                    returnString += 'p';
                    break;
                case 14:
                    returnString += 'q';
                    break;
                case 24:
                    returnString += 'r';
                    break;
                case 34:
                    returnString += 's';
                    break;
                case 44:
                    returnString += 't';
                    break;
                case 54:
                    returnString += 'u';
                    break;
                case 15:
                    returnString += 'v';
                    break;
                case 25:
                    returnString += 'w';
                    break;
                case 35:
                    returnString += 'x';
                    break;
                case 45:
                    returnString += 'y';
                    break;
                case 55:
                    returnString += 'z';
                    break;
            }
        }
    }
    return returnString;
}

module.exports = polybius;
