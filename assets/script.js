var generateBtn = document.querySelector("#generate");

function getPasswordLength () {
    var passwordLength = prompt("Enter your desired password length (8-128 characters).");
    //ParseInt converts the prompt value into an integer and if it's not will return NaN 
    return parseInt(passwordLength);

}

function desiredCharacterTypes () {
    var includeLowercase = confirm("Include lowercase letters? (Yes/Cancel");
    var includeUppercase =confirm("Include Upper Case letters? (Yes/Cancel)");
    var includeNumeric = confirm("Include numeric characters? (Yes/Cancel");
    var includeSpecial = confirm("Include special characters? (Yes/Cancel)");

    return {
        includeLowercase: includeLowercase,
        includeUppercase: includeUppercase,
        includeNumeric: includeNumeric,
        includeSpeical: includeSpecial
    };
  
  
  }
function generatePassword() {
    var speicalChars = "!@#$%^&*()_-+=<>?";
    var numericChars = "0123456789";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

    var passwordLength = getPasswordLength();
    if (isNaN(passwordLength)) {
        alert('Password length must be between 8-128 characters.');
        return '';
    }

    if (passwordLength < 8) {
        alert("Password length must be at least 8 characters.");
        return '';
    }

    if (passwordLength > 128) {
        alert("Password length may be no more than 128 characters.");
        return '';

    }
  }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


