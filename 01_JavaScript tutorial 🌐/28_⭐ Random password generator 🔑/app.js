// Your JavaScript code here

// Random password generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let charSet = '';
    if (includeLowercase) charSet += lowercaseChars;
    if (includeUppercase) charSet += uppercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;
    // console.log(charSet); // Debugging line to check the character set

    if (length <= 0) {
        return '(password lenghth should be greater than 0)'; // Invalid length
    } 
    if (charSet.length === 0) {
        return '(At least 1 set of password needs to be selected)'; // No characters to choose from
    } 

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length); // Generate a random index
        // console.log(randomIndex); // Debugging line to check the random index
        password += charSet[randomIndex]; // Append the character at the random index to the password
    }

    return password;
}


const passwordLength = 10; // Length of the password
const includeLowercase = true; // Include lowercase letters
const includeUppercase = true; // Include uppercase letters
const includeNumbers = true; // Include numbers
const includeSymbols = true; // Include symbols

let password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);