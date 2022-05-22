// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //Ask the user for the length of password
  var passwordLengthString = prompt("Please enter the length of the password you want create. For this program to function properly, please input an integer in the range between 8 to 128 (inclusive): ");
  //If user click 'cancel', then end the process
  if (passwordLengthString == null) {
    return 'You have cancelled the password creating process'
  }
  //userSelection variable keep tract of user's choice for each type of character
  var userSelection = [false,false,false,false];
  //The following four lists keep the alphabet of each type of character
  var upperCaseList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numericList = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacterList = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','^','_','{','}','|','~','[',']'];
  //finalResult is the string that show up on screen as the result password
  var finalResult = '';
  //Convert the passwordLength variable from string to number
  var passwordLength = Number(passwordLengthString);
  //Check the length and characters for the length input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect password length! The length of the password must be more than 7 characters and less than 129 characters.");
    return 'You have input an invalid password length, please create the password again'
  }
  else if (isNaN(passwordLength)) {
    alert("Invalid character for the length!");
    return 'You have input an invalid character for the length of the password, please create the password again'
  }
  else {
    //If the length is valid, a series of question is asked to determine which type of character to include in the password
    if (confirm("Do you want uppercase letter in your password?")) {
      userSelection[0] = true;
    }
    else {
      userSelection[0] = false;
    }
    if (confirm("Do you want lowercase letter in your password?")) {
      userSelection[1] = true;
    }
    else {
      userSelection[1] = false;
    }
    if (confirm("Do you want numbers in your password?")) {
      userSelection[2] = true;
    }
    else {
      userSelection[2] = false;
    }
    if (confirm("Do you want special characters in your password?")) {
      userSelection[3] = true;
    }
    else {
      userSelection[3] = false;
    }
    console.log(userSelection);
    //If user choose all four questions as false, then tell the user you didn't choose anything
    if (!(userSelection[0] || userSelection[1] || userSelection[2] || userSelection[3])) {
      alert("You didn't choose any type of characters to include in your password. Please choose at least one type of character!");
      return 'No character type is chosen for the password. Please create the password again'
    }
    var charCounter = 0;
    //Use random function, while loop (for repeat) and conditional statement (for fitting user choice) to generate the appropiate password
    while (true) {
      if (userSelection[0]) {
        finalResult = finalResult.concat(upperCaseList[Math.floor(Math.random() * 26)]);
        charCounter++
        if (charCounter >= passwordLength) {
          break;
        }
      }
      if (userSelection[1]) {
        finalResult = finalResult.concat(lowerCaseList[Math.floor(Math.random() * 26)]);
        charCounter++
        if (charCounter >= passwordLength) {
          break;
        }
      }
      if (userSelection[2]) {
        finalResult = finalResult.concat(numericList[Math.floor(Math.random() * 10)]);
        charCounter++
        if (charCounter >= passwordLength) {
          break;
        }
      }
      if (userSelection[3]) {
        finalResult = finalResult.concat(specialCharacterList[Math.floor(Math.random() * 28)]);
        charCounter++
        if (charCounter >= passwordLength) {
          break;
        }
      }

    }
    return finalResult;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
