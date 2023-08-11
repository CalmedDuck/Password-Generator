var generateBtn = document.querySelector("#generate");

function getPasswordLength () {
    var passwordLength = prompt("Enter your desired password length (8-128 characters).");
    //ParseInt converts the prompt value into an integer and if it's not will return NaN 
    return parseInt(passwordLength);

}
//asking the user what characters they want to include in their password.
function desiredCharacterTypes () {
    var includeLowercase = confirm("Include lowercase letters? (Ok/Cancel)");
    var includeUppercase =confirm("Include Upper Case letters? (Ok/Cancel)");
    var includeNumeric = confirm("Include numeric characters? (Ok/Cancel)");
    var includeSpecial = confirm("Include special characters? (Ok/Cancel)");

    return {
        includeLowercase: includeLowercase,
        includeUppercase: includeUppercase,
        includeNumeric: includeNumeric,
        includeSpeical: includeSpecial
    };
  
  //all of the characters being used
  }
function generatePassword() {
    var speicalChars = "!@#$%^&*()_-+=<>?";
    var numericChars = "0123456789";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//requirements for the password length
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

    var characterTypes = desiredCharacterTypes();
    var characterPool = '';

    if (characterTypes.includeLowercase) {
        characterPool += uppercaseChars;
    }

    
  if (characterTypes.includeUppercase) {
    characterPool += uppercaseChars;
  }

  if (characterTypes.includeNumeric) {
    characterPool += numericChars;
  }

  if (characterTypes.includeSpecial) {
    characterPool += specialChars;
  }

  if (characterPool.length === 0) {
    alert("At least one character type must be selected.");
    return '';
  }
//Chooses a random character from the appropriate pools and repeats for the length of the requested password.
  var generatedPassword = '';
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  return generatedPassword;
}
  

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


