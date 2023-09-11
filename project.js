// Assignment Code
var generateBtn = document.querySelector("#generate");
// set of variables
var charLength = 30;
var nsl = [];
var number = ['1234567890'];
var special = ['%&#(^@*!){}<>?'];
var lowCase = ['abcdefghijklmnopqrstuvwxyz'];  
var upCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var truePrompt = popUpPrompt();
  
if (truePrompt){
  var password = generatePassword();
  passwordText.value = password;
}
else {
  passwordText.value = "";
}
}


//Prompt Questions
function popUpPrompt(){
  nsl = [];
charLength = prompt ("Length of password?")
if ( charLength < 8 || charLength > 128) {
  alert("Try again, your answer must be a number between 8 - 128!")
  return false;
}
//concate joins 2 or more strings and will add to array if true or OK
if (confirm("Include lowercase?")){
  nsl = nsl.concat(lowCase);
}
if (confirm("Include Uppercase?")){
  nsl = nsl.concat(upCase);
}
if (confirm("Include Numbers?")){
  nsl = nsl.concat(number);
}
if (confirm("Include Special Characters?")){
  nsl = nsl.concat(special);
}
return true;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generates Password from given criteria
function generatePassword(){
  var password = "";
  for (var i = 0; i < charLength; i++) {
    var randChar = Math.floor(Math.random() * nsl.length);
  password = password + nsl[randChar];
  }
  return password;
  }
//Ran out of time and couldnt figure out how to get characters to fit the criteria