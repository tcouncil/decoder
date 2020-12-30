// input refers to the inputted text to be encoded or decoded.
// alphabet refers to substitution alphabet.
// encode refers to whether you should encode or decode the message.
function substitution(input, alphabet, encode = true) {
    if (alphabet.length !== 26) { // Check it see if alphabet if actual length of the alphabet
        return false;
    } else { // Here we'll compare each letter to see if we have any duplicates
        for (let letter in alphabet) {
            if (alphabet.slice(letter + 1).includes(alphabet[letter])) {
                return false;
            }
        }
    }

    // Variable declartions
    let returnString = '';
    const inArray = [...input]; // Spread our input into an array
    const inArrayLength = input.length; // Set our loop length to the amount of number pairs minus space length divided by 2 and then add space length back
    if (!encode) {
        for (let i = 0; i < inArrayLength; i++) { //Converts our numbers into letters
            switch (inArray[i].toLowerCase()) {
                case alphabet[0]:
                    returnString += 'a';
                    break;
                case alphabet[1]:
                    returnString += 'b';
                    break;
                case alphabet[2]:
                    returnString += 'c';
                    break;
                case alphabet[3]:
                    returnString += 'd';
                    break;
                case alphabet[4]:
                    returnString += 'e';
                    break;
                case alphabet[5]:
                    returnString += 'f';
                    break;
                case alphabet[6]:
                    returnString += 'g';
                    break;
                case alphabet[7]:
                    returnString += 'h';
                    break;
                case alphabet[8]:
                    returnString += 'i';
                    break;
                case alphabet[9]:
                    returnString += 'j';
                    break;
                case alphabet[10]:
                    returnString += 'k';
                    break;
                case alphabet[11]:
                    returnString += 'l';
                    break;
                case alphabet[12]:
                    returnString += 'm';
                    break;
                case alphabet[13]:
                    returnString += 'n';
                    break;
                case alphabet[14]:
                    returnString += 'o';
                    break;
                case alphabet[15]:
                    returnString += 'p';
                    break;
                case alphabet[16]:
                    returnString += 'q';
                    break;
                case alphabet[17]:
                    returnString += 'r';
                    break;
                case alphabet[18]:
                    returnString += 's';
                    break;
                case alphabet[19]:
                    returnString += 't';
                    break;
                case alphabet[20]:
                    returnString += 'u';
                    break;
                case alphabet[21]:
                    returnString += 'v';
                    break;
                case alphabet[22]:
                    returnString += 'w';
                    break;
                case alphabet[23]:
                    returnString += 'x';
                    break;
                case alphabet[24]:
                    returnString += 'y';
                    break;
                case alphabet[25]:
                    returnString += 'z';
                    break;
                case ' ':
                    returnString += ' ';
                    break;
            }
        }
    } else {
        for (let i = 0; i < inArrayLength; i++) { //Converts our numbers into letters
            switch (inArray[i].toLowerCase()) {
                case 'a':
                    returnString += alphabet[0];
                    break;
                case 'b':
                    returnString += alphabet[1];
                    break;
                case 'c':
                    returnString += alphabet[2];
                    break;
                case 'd':
                    returnString += alphabet[3];
                    break;
                case 'e':
                    returnString += alphabet[4];
                    break;
                case 'f':
                    returnString += alphabet[5];
                    break;
                case 'g':
                    returnString += alphabet[6];
                    break;
                case 'h':
                    returnString += alphabet[7];
                    break;
                case 'i':
                    returnString += alphabet[8];
                    break;
                case 'j':
                    returnString += alphabet[9];
                    break;
                case 'k':
                    returnString += alphabet[10];
                    break;
                case 'l':
                    returnString += alphabet[11];
                    break;
                case 'm':
                    returnString += alphabet[12];
                    break;
                case 'n':
                    returnString += alphabet[13];
                    break;
                case 'o':
                    returnString += alphabet[14];
                    break;
                case 'p':
                    returnString += alphabet[15];
                    break;
                case 'q':
                    returnString += alphabet[16];
                    break;
                case 'r':
                    returnString += alphabet[17];
                    break;
                case 's':
                    returnString += alphabet[18];
                    break;
                case 't':
                    returnString += alphabet[19];
                    break;
                case 'u':
                    returnString += alphabet[20];
                    break;
                case 'v':
                    returnString += alphabet[21];
                    break;
                case 'w':
                    returnString += alphabet[22];
                    break;
                case 'x':
                    returnString += alphabet[23];
                    break;
                case 'y':
                    returnString += alphabet[24];
                    break;
                case 'z':
                    returnString += alphabet[25];
                    break;
                case ' ':
                    returnString += ' ';
                    break;
            }
        }
    }
    console.log(`Our return string is: '${returnString}'`);
    return returnString;

}
module.exports = substitution;
