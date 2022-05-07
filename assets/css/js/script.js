// Assignment Code
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklkmnopqrstuvwxyz1234567890!?$#%@&";
var passwordLength = 10;
var password ="";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

  
}



function generatePassword(){
    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    // var randomNumber = Math.floor(Math.random() * characters.length);
    // password += characters.substring(randomNumber, randomNumber +1);

}

document.querySelector("#password").value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.querySelector("#generate").addEventListener("click", generatePassword);