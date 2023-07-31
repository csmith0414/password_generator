// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var size = lengthInput()
  if (size === null) {
    return ""
  }
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "|", "-", "_", "?", ".", ":", ";", "?", "+", "=", "[", "{", "]", "}", "`", "~"];
  var options = []
  var islowerCase = true
  var isupperCase = true
  var isnumber = true
  var isspecial = true

  if (window.confirm("Does the password need lower case letters?")) {
    options = options.concat(lowerCase)
  }
 else {
    islowerCase = false
  }

  if (window.confirm("Does the password need upper case letters?")) {
    options = options.concat(upperCase);
  }
  else {
    isupperCase = false
  }

  if (window.confirm("Does the password need numbers?")) {
    options = options.concat(number);
  }
  else {
    isnumber = false
  }

  if (window.confirm("Does the password need special characters?")) {
    options = options.concat(special);
  }
  else {
    isspecial = false
  }
if (islowerCase === false && isupperCase === false && isnumber === false && isspecial === false){
  alert("You have to select at least one of the options")
  return ""
}
return newPassword(options, size)
}

function lengthInput(pick) {
  var pick = window.prompt("Please select length of password between 8 and 128 characters.")
  if (pick >= 8 && pick <= 128) {
    console.log(pick)
    return pick
  }
  else {
    alert("Please enter a number between 8 and 128")
    return null
  }
}
function newPassword(options, size) {
  var finalPassword = ""
  for (var i = 0; i < size; i++) {
    var index = Math.floor(Math.random() * options.length)
    finalPassword = finalPassword + options[index]
  }
  return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
