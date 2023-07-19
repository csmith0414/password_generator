// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var number = [0,1,2,3,4,5,6,7,8,9];
  var special = ["!","@","#","$","%","^","&","*","|","-","_","?",".",":",";","?","+","=","[","{","]","}","`","~"];
  var options = []
  let pick = window.prompt ("Choose length of password. Must be between 8 and 128 characters")

 
  if (window.confirm("Does the password need lower case letters?")) {
      options = options.concat(lowerCase)
    } 
    else if ((window.confirm === false)) {

    }

  if (window.confirm("Does the password need upper case letters?")) {
    options = options.concat(upperCase);
  } 
  else if ((window.confirm === false)) {

  }

  if (window.confirm("Does the password need numbers?")) {
    options = options.concat(number);
  } 
  else if ((window.confirm === false)) {

  }

  if (window.confirm("Does the password need special characters?")) {
    options = options.concat(special);
  } 
  else if ((window.confirm === false)) {

  }

  function lengthInput(pick) {
    if (pick >= 8 && pick <= 128) {
       console.log(pick)
       return pick
    }
    else {
    alert("Please enter a number between 8 and 128")
    return null
    }
 }
function options () {
  var options = [];
  for (key in charset) {
    if (window.confirm == true) {
       result = result.concat();
       console.log(result);
    }
 }
} 
  return "This is the password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
