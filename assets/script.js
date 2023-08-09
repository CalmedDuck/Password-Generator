var generateBtn = document.querySelector("#generate");

function getPasswordLength () {
    var passwordLength = prompt("Enter your desired password length (8-128 characters).");
    //ParseInt converts the prompt value into an integer and if it's not will return NaN 
    return parseInt(passwordLength);

}

function generatePassword() {
    var speicalChars = "!@#$%^&*()_-+=<>?";
    var numericChars = "0123456789";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


