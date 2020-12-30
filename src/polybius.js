const charPos = (char) => char.toLowerCase().charCodeAt(0); // Changes charactor to lowercase and converts it into it's key code 

const letterGetter = (char, shift = 0, alphabetLength = 0) => String.fromCharCode(charPos(char)); // Converts charactor to string based on it's key code 

// Global Variable Declartions
const LOWER_CHAR_CODE = 97;
const HIGHER_CHAR_CODE = 122;
const ALPHABET_LENGTH = 26;

function encoder(letter){
    const alphabetPos = charPos(letter) - HIGHER_CHAR_CODE + ALPHABET_LENGTH;
    console.log(`Letter: ${letter}`);
    console.log(`Encoder Alphabet Position: ${alphabetPos}`);
    
    if(alphabetPos === )
    return alphabetPos;
}

function polybius(input, encode = true) {
    if (!encode) {
        const spaceArray = [...input];
        if ((input.length - spaceArray.filter(str => str === ' ').length) % 2 === 1) // Check if input length minus the space length is even or odd
            return false;
    }

    returnString = '';
    if (encode) {
        for (const char of input) { // Converts our letters into numbers
            console.log(charPos(char))
            if (charPos(char) > LOWER_CHAR_CODE) { 
                returnString += encoder(letterGetter(char));
            }
            console.log(`String: ${returnString}`);

         /*
            switch (char.toLowerCase()) {
                case 'a':
                    returnString += 11;
                    break;
                case 'b':
                    returnString += 21;
                    break;
                case 'c':
                    returnString += 31;
                    break;
                case 'd':
                    returnString += 41;
                    break;
                case 'e':
                    returnString += 51;
                    break;
                case 'f':
                    returnString += 12;
                    break;
                case 'g':
                    returnString += 22;
                    break;
                case 'h':
                    returnString += 32;
                    break;
                case 'i':
                case 'j':
                    returnString += 42;
                    break;
                case 'k':
                    returnString += 52;
                    break;
                case 'l':
                    returnString += 13;
                    break;
                case 'm':
                    returnString += 23;
                    break;
                case 'n':
                    returnString += 33;
                    break;
                case 'o':
                    returnString += 43;
                    break;
                case 'p':
                    returnString += 53;
                    break;
                case 'q':
                    returnString += 14;
                    break;
                case 'r':
                    returnString += 24;
                    break;
                case 's':
                    returnString += 34;
                    break;
                case 't':
                    returnString += 44;
                    break;
                case 'u':
                    returnString += 54;
                    break;
                case 'v':
                    returnString += 15;
                    break;
                case 'w':
                    returnString += 25;
                    break;
                case 'x':
                    returnString += 35;
                    break;
                case 'y':
                    returnString += 45;
                    break;
                case 'z':
                    returnString += 55;
                    break;
                case ' ':
                    returnString += ' ';
                    break;
            }
            */
           
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
