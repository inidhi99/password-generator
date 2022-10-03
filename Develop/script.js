// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){
// assign lowerCase 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// assign upperCase
var upperCase = lowerCase.toUpperCase();
// assign numbers
var numbers = "1234567890";
// assign special character 
var speical = "!@#$%^&*()<>?/{}[]+-=-_.,:;'?/|";

var chosen =""


var passwordLength = parseInt(prompt("password length (between 8 to 128 characters) ?"));
if (passwordLength < 8 || passwordLength > 128){
 alert("please try again "); 
return 
}


return "password"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
