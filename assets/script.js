var characterLength = 8;

var choiceArr = [];

var lowerCaseArr= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numberArr =  ['0','1','2','3','4','5','6','7','8','9'];

var specialCharArr = ['~','!','@','#','$','%','^','&','*','(',')','-','_','=','+'];





//Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the prompts
function writePassword() {
  var correctPrompts = getPrompts(); //it will return either true or false
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
     var newPassword = generatePassword();
  passwordText.value = newPassword;
   
}  else {
  passwordText.value = "";
}
}

function generatePassword() {
// generatePassword would be based on prompts
  var password = "";
// I will use Math.random to figure number of characters
for (var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
}
return password;
};
function getPrompts() {
  choiceArr = [];
// ask for number of characters. Number of characters between 8 and 128
characterLength = parseInt(prompt("How many characters do you want in your password?(8 to 128 characters)"));

if  (isNaN(characterLength) || characterLength <8 || characterLength >128) {
  alert("Character length has to be between 8-128 digits. Please try again.");
return false;

}

// ask for lowercase letters in the password
if (confirm("Click ok to confirm lowercase letters")) { 
  choiceArr = choiceArr.concat(lowerCaseArr);
  
}
// ask for uppercase letters in the password
if (confirm("Click ok to confirm uppercase letters")) { 
  choiceArr = choiceArr.concat(upperCaseArr);
  
}
// ask for numbers in the password
if (confirm("Click ok to confirm number")) { 
  choiceArr = choiceArr.concat(numberArr);
  
}
// ask for special characters in the password
if (confirm("Click ok to confirm special characters")) { 
  choiceArr = choiceArr.concat(specialCharArr);
  
  }
  return true;
};
 
  




