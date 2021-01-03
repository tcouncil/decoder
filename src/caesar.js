// Global Variable Declartions
const SPECIAL_CHAR_RANGE = 65;
const LOWER_CHAR_CODE = 97;
const HIGHER_CHAR_CODE = 122;
const ALPHABET_LENGTH = 26;

const charPos = (char, shift = 0) => char.toLowerCase().charCodeAt(0) + shift; // Changes charactor to lowercase and converts it into it's key code 

const letterShift = (char, shift = 0, alphabetLength = 0) => String.fromCharCode(charPos(char, shift) + alphabetLength); // Converts charactor to string based on it's key code 

const shiftCriteria = (shift) => !shift || shift === 0 || shift < -25 || shift > 25;// Checks to see if shift meets the correct criteria

// input refers to the inputted text to be encoded or decoded.
// shift refers to how much each letter is "shifted" by
// encode refers to whether you should encode or decode the message.
function caesar(input, shift, encode = true) {
    if (shiftCriteria(shift)) { // Check's to see if we can run the full function
        return false;
    }

    !encode ? shift *= -1 : shift *= 1  // Intialize shift's positive/negative effects

    let returnString = '';

    for (const char of input) {
        if (char.charCodeAt(0) < SPECIAL_CHAR_RANGE) { // Add special characters under a certain range
            returnString += char;
        } else if (charPos(char, shift) < LOWER_CHAR_CODE) { // +++ Wraps letter around from a to z
            returnString += letterShift(char, shift, ALPHABET_LENGTH)
        } else if (charPos(char, shift) > HIGHER_CHAR_CODE) { // --- Wraps letter around from z to a
            returnString += letterShift(char, shift, -ALPHABET_LENGTH)
        } else { // return letter based on shift
            returnString += letterShift(char, shift);
        }
    }
    return returnString;
}

module.exports = caesar;