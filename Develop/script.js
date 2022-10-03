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

var chosen = ""
var randomPassword = ""

// password length to confirm the characters
var passwordLength = parseInt(prompt("password length (between 8 to 128 characters) ?"));
if ((passwordLength < 8 || passwordLength > 128) || isNaN(passwordLength)) {
 alert("please try again "); 
return;   
}

// ask questions regarding what they want in their password 
var confirmlowerCase = confirm("Do you want lowercase letters in your password?");
if (confirmlowerCase) chosen += lowerCase;
var confirmupperCase = confirm("Do you want uppercase letters in your password?");
if (confirmupperCase) chosen += upperCase;
var confirmnumbers = confirm("Do you want numbers in your password?");
if (confirmnumbers) chosen += numbers;
var confirmspecial = confirm("Do you want special characters in your password?");
if (confirmspecial) chosen += speical;



// randomly select the characteers based on the length selected
for (var i = 0; i <= passwordLength; i++) {
  randomPassword += chosen[Math.floor(Math.random() * chosen.length)];
}

// put the randompassword together 
return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
