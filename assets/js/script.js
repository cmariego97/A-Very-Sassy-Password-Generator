// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variable Arrays
var numericCharacters = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Prompts
function generatePassword() {
  passwordLength = prompt("How long would you like your password to be? Choose a length between 8 to 128 characters.");

  if(!passwordLength) {
    alert("Please, choose a length for your passwords to generate.");
  
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Your password length may only have a minimum of 8 or a maximum of 128 characters.");

  } alert("You will generate a password with " + passwordLength + " characters.");
    console.log("You will generate a password with " + passwordLength + " characters.");

  // user confirm choices
  alert("Please, choose your criterias for the password generation. \n P.S. I dare you to choose none of them.")

  confirmLowerCase = confirm("Would you like to include lower case letters in your password? \n Click 'ok' for yes. \n Click 'cancel' for no.");
  console.log(confirmLowerCase);
  
  confirmUpperCase = confirm("Would you like to include upper case letters in your password? \n Click 'ok' for yes. \n Click 'cancel' for no.");
  console.log(confirmUpperCase);

  confirmNumbers = confirm("Would you like to include numbers in your password? \n Click 'ok' for yes. \n Click 'cancel' for no.");
  console.log(confirmNumbers);

  confirmSpecial = confirm("Would you like to include special characters in your password? \n Click 'ok' for yes. \n Click 'cancel' for no.");
  console.log(confirmSpecial);

  // if NO criteria is chosen then you will get NO choice >:D 
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecial) {
    alert("Why do you make me do this?? \n You chose none of the options, so I gave you all the options \n :)")

    confirmLowerCase = true;
    console.log("Lower case letters are forced upon the user: " + confirmLowerCase);

    confirmUpperCase = true;
    console.log("Upper case letters are forced upon the user: " + confirmUpperCase);
    
    confirmNumbers = true;
    console.log("The numerical alphabel are  forced upon the user: " + confirmNumbers);

    confirmSpecial = true;
    console.log("Special characters are forced upon the user: " + confirmSpecial);
  }

  // user choices
  userCriterias = [];
  
  if (confirmLowerCase) {
    userCriterias = userCriterias.concat(lowerCaseLetters);
  }
  if (confirmUpperCase) {
    userCriterias = userCriterias.concat(upperCaseLetters);
  }
  if (confirmNumbers) {
    userCriterias = userCriterias.concat(numericCharacters);
  }
  if (confirmSpecial) {
    userCriterias = userCriterias.concat(specialCharacters);
  }
  //logs user choices in console
  console.log(userCriterias)

  // variable for password generation
  var passwordEntry = "";
  
  // Loop for password random selection
  for (var i = 0; i < passwordLength; i++) {
    passwordEntry = passwordEntry + userCriterias[Math.floor(Math.random() * userCriterias.length)]
    
  } 
  // logs the generated password in console and returns in web page
  console.log(passwordEntry)
  return passwordEntry;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
