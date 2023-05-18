const charPos = (char, shift = 0) => char.charCodeAt(0) + shift; // Converts character into it's key code plus shift

const letterShift = (char, shift = 0, alphabetLength = 0) => String.fromCharCode(charPos(char, shift) + alphabetLength); // Converts charactor to string based on it's key code 

function caesar(input, shift, encode = true) {
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) { // Check's to see if we can run the full function
        return false;
    }
    input = input.toLowerCase(); // Changes our entire input into lowercase

    !encode ? shift *= -1 : shift *= 1  // Intialize shift's positive/negative effects

    let returnString = '';

    for (const char of input) {
        if (char.charCodeAt(0) < 'a'.charCodeAt(0) || char.charCodeAt(0) > 'z'.charCodeAt(0)) { // Add special characters
            returnString += char;
        } else if (charPos(char, shift) < 'a'.charCodeAt(0)) { // +++ Wraps letter around from a to z
            returnString += letterShift(char, shift, 26)
        } else if (charPos(char, shift) > 'z'.charCodeAt(0)) { // --- Wraps letter around from z to a
            returnString += letterShift(char, shift, -26)
        } else { // return letter based on shift
            returnString += letterShift(char, shift);
        }
    }
    return returnString;
}

module.exports = caesar;