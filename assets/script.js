// Assignment Code
var generateBtn = document.querySelector("#generate");

 function generatePassword() {

// ask for number of characters
var askForNumberOfCharacters= function(input){
var input = Number(prompt("How many characters is your password?"));

var numberInputed= input;

if (numberInputed < 8) {
  alert("number too low")  
  }

return;
};

askForNumberOfCharacters();
// ask for special characters
var askForSpecialCharacters= function(input) {
var input = Type(prompt("What type of special characters are in your password"));

var lower = false
var upper = false
var number = false
var symbol = false

while (!lower && !upper && !number && !symbol)

lower = confirm("Click OK to confirm lowercase characters");

upper = confirm("Click OK to confirm uppercase characters");

number = confirm("Click OK to confirm number characters");

symbol = confirm("Click Ok to confirm symbol characters (~!@#$%^&*()-_=+)");

} 

if (lower) { 
  userInput += charString[0];
  
}

if (upper) { 
  userInput += charString[1];
  
}

if (number) { 
  userInput += charString[2];
  
}

if (symbol) { 
  userInput += charString[3];
  
}
var password = "";

for (var i = 1; i <= userInput.length; i++) {
  var index = (Math.floor(Math.random) * userInput);
  password = password + userInput[index]
}
return password
};






// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
