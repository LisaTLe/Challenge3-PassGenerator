// Assignment Code
//arrays
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var generateBtn = document.querySelector("#generate");


//declared variables
var confirmLength = "";
var confirmSymbols;
var confirmNumbers;
var confirmUpper;
var confirmLower;


//user chooses password length
function generatePassword() {
    var confirmLength = window.prompt("How Many Characters Would You Like Your Password To Be? Password must be at least 8 characters long.");
//if user chooses number outside of parameters
while(confirmLength<=7||confirmLength>=129) {
    alert("Password length must be between 8-128 characters long. Try again.");
    var confirmLength = window.prompt("How Many Characters Would You Like Your Password To Be?");

}

//determine criteria of password
var confirmSymbols = confirm("Click OK if you would like symbols to be included in your password");
var confirmNumbers = confirm("Click OK if you would like numbers to be included in your password");
var confirmLower = confirm("Click OK if you would like lowercase letters to be included in your password");
var confirmUpper = confirm("Click OK if you would like uppercase letters to be included in your password");





//apply input promts to generate password
var choices = "";

if (confirmSymbols && confirmNumbers && confirmUpper && confirmLower) {
    choices = symbols.concat(numbers, alphaLower, alphaUpper);
}
// Else if for 3 positive options
else if (confirmSymbols && confirmNumbers && confirmUpper) {
    choices = symbols.concat(numbers, alphaUpper);
}else if (confirmSymbols && confirmNumbers && confirmLower) {
    choices = symbols.concat(numbers, alphaLower);
}else if (confirmSymbols && confirmLower && confirmUpper) {
    choices = symbols.concat(alphaLower, alphaUpper);
}else if (confirmNumbers && confirmLower && confirmUpper) {
    choices = numbers.concat(alphaLower, alphaUpper);
}
// Else if for 2 positive options 
else if (confirmSymbols && confirmNumbers) {
    choices = symbols.concat(numbers);

} else if (confirmSymbols && confirmLower) {
    choices = symbols.concat(alphaLower);

} else if (confirmSymbols && confirmUpper) {
    choices = symbols.concat(alphaUpper);
}else if (confirmLower && confirmNumbers) {
    choices = alphaLower.concat(numbers);

} else if (confirmLower && confirmUpper) {
    choices = alphaLower.concat(alphaUpper);

} else if (confirmNumbers && confirmUpper) {
    choices = numbers.concat(alphaUpper);
}
// Else if for 1 positive option
else if (confirmSymbols) {
    choices = (symbols);
}else if (confirmNumbers) {
    choices = (numbers);
}else if (confirmLower) {
    choices = (alphaLower);
}else if (confirmUpper) {
    choices = (alphaUpper);
};

//generate random password
var password = "";
    for (let index = 0; index < confirmLength; index++) {
        password = password + choices.charAt(Math.floor(Math.random() * choices.length));
        console.log (password);
}
return password;

generatePassword();

}
//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Event Listener to prompt when generate button clicked
document.querySelector("#generate").addEventListener("click", generatePassword);