// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){

// data
// we need different sets of characters 

//numbers 
//lowercase
//uppercase
//special characters
// number of characters 
// whether they chose number, lowercasem uppercase, or speucal characters

// how many characters do you want to use 
//do you want to use numbers ? yes or no 
//do you want to use lowercase ? yes or no 
//do you want to use uppercase ? yes or no 
//do you want to use character ? yes or no  


// put the selected characters together 

// randsomly sleect characters from all of the selected characters 

// put them together 

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
