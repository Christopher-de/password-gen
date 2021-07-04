// Assignment code here


let acceptLength = function () {
  let formatString = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  let promptLength = window.prompt('Please enter length of password, length can be between 8 to 128 characters');

  let alphaNumStr = (/[A-Za-z]/).test(promptLength);
  let specialChar = formatString.test(promptLength);

  while (promptLength === null) {
    return 1;
  }

  if (parseInt(promptLength) < 8 || parseInt(promptLength) > 128 || promptLength === "" || alphaNumStr || specialChar) {
    alert('Please enter a number between 8 and 128.');
    return 0;
  }

  return promptLength;
};

let charType = function () {
  let charType = prompt('Please enter the character type, select from the following (1 or 2):\n' +
    '1: lowercase, uppercase letters and numbers/n' +
    '2: lowercase, uppercase letters, numbers and special characters ');

  while (charType === null) {
    return 1;
  }

  switch (parseInt(charType)) {
    case 1:
      var passString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return passString;
      break;

    case 2:
      var passString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\'#$%&"()*+,-./;:>?<=@[]^_`|}{~';
      return passString;
      break;

    default:
      alert('You did not pick a valid option. Try again.');
      return 0;
      break;
  }
};

let passwordGen = function () {
  var generatedPass = "";
  let pwLength = acceptLength();

  if (parseInt(pwLength) !== 1) {
    while (pwLength === 0) {
      pwLength = acceptLength();
    }
  };

  if (parseInt(pwLength) !== 1) {
    let passString = charType();

    if (parseInt(passString) !== 1) {
      while (passString === 0) {
        passString = charType;
      }
    }

    for (let i = 0; i < pwLength; i++) {
      let position = Math.floor(Math.random() * passString.length);
      var generatedPass = generatedPass + passString.charAt(position);
    }
  };

  return generatedPass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  if (password != "") {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
