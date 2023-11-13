// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let stop = true;
  let output = [];
  let passwordLength = 0;
  
  while (stop) {
    passwordLength = prompt('Enter password length between [8 - 128] characters: ');
        
    if(passwordLength === null || Number(passwordLength) >= 8 && Number(passwordLength) <= 128){
      stop = false
    }else if(passwordLength !== null && (Number(passwordLength) < 8 || Number(passwordLength) > 128)) {
      alert('Please enter a valid password length');
    }else{
      alert('Only numbers between [8 - 128] are allowed');
    }
  }

  if(passwordLength !== null){
    const lowerCase = confirm('Do you want to include lowercase characters');
    if(lowerCase) {
      output = [...output, ...lowerCasedCharacters];
    }
  
    const upperCase = confirm('Do you want to include uppercase characters');
    if(upperCase) {
      output = [...output, ...upperCasedCharacters];
    }
    
    const numericValues = confirm('Do you want to include numeric values');
    if(numericValues) {
      output = [...output, ...numericCharacters];
    }

    const specialChars = confirm('Do you want to include special characters [$@%&*, etc]');  
    if(specialChars) {
      output = [...output, ...specialCharacters];
    }

    return {output, passwordLength}
  }

  return false;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  const getPass = getPasswordOptions();

  if(getPass){
    console.log(getPass);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);