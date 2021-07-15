// Assignment code here
// let specChar

// let acceptLength = function () {
//   let formatString = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

//   let promptLength = window.prompt('Please enter length of password, length can be between 8 to 128 characters');

//   let alphaNumStr = (/[A-Za-z]/).test(promptLength);
//   let specialChar = formatString.test(promptLength);

//   while (promptLength === null) {
//     return 1;
//   }

//   if (parseInt(promptLength) < 8 || parseInt(promptLength) > 128 || promptLength === "" || alphaNumStr || specialChar) {
//     alert('Please enter a number between 8 and 128.');
//     return 0;
//   }

//   return promptLength;
// };

// let charType = function () {
//   // let charType = prompt('Please enter the character type, select from the following (0 for no, 1 for yes):\n' +
//   //                       '1: lowercase, uppercase letters and numbers\n' +
//   //                       '2: lowercase, uppercase letters, numbers and special characters ');
//   //
//   // while (charType === null) {
//   //   return 1;
//   // }

//   let confirmSpec = confirm('Select ok if you want special characters');
//   let confirmNum = confirm('Select ok if you want numbers');
//   let confirmUp = confirm('Select ok if you want upper-case letters');
//   let confirmLow = confirm('Select ok if you want lower-case letters');

//   while (!confirmSpec && !confirmNum && !confirmUp && !confirmLow) {
//     alert('Must have at least 1 parameter');
//     let confirmSpec = confirm('Select ok if you want special characters');
//     let confirmNum = confirm('Select ok if you want numbers');
//     let confirmUp = confirm('Select ok if you want upper-case letters');
//     let confirmLow = confirm('Select ok if you want lower-case letters');
//   };

//   switch (parseInt(charType)) {
//     case 1:
//       var passString = "abcdefghijklmnopqrstuvwxyz";
//       return passString;
//       break;

//     case 2:
//       var passString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\'#$%&"()*+,-./;:>?<=@[]^_`|}{~';
//       return passString;
//       break;

//     case 3:
//       var passString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//       return passString;
//       break;

//     case 4:
//       var passString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\'#$%&"()*+,-./;:>?<=@[]^_`|}{~';
//       return passString;
//       break;

//     default:
//       alert('You did not pick a valid option. Try again.');
//       return 0;
//       break;
//   }
// };

// let passwordGen = function () {
//   var generatedPass = "";
//   let pwLength = acceptLength();

//   if (parseInt(pwLength) !== 1) {
//     while (pwLength === 0) {
//       pwLength = acceptLength();
//     }
//   };

//   if (parseInt(pwLength) !== 1) {
//     let passString = charType();

//     if (parseInt(passString) !== 1) {
//       while (passString === 0) {
//         passString = charType;
//       }
//     }

//     for (let i = 0; i < pwLength; i++) {
//       let position = Math.floor(Math.random() * passString.length);
//       var generatedPass = generatedPass + passString.charAt(position);
//     }
//   };

//   return generatedPass;
// };

let size;
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '.', ',', '?', '>', '<', '"', "'", '\'', ']', '[', '{', '}', '|', '`', '~'];
let lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let toUpper = function (x) {
  return x.toUpperCase();
};

let upperLetters = lowerLetters.map(toUpper);

let pwResult = [];

let hasNums = false;
let hasSpec = false;
let hasCaps = false;
let hasLower = false;



function getSize() {
  let size = prompt('The password can have between 8 and 128 characters. Input the number of characters you want the password to be.');
  size = parseInt(size);

  if (size < 8 || size > 128 || size === '' || !size) {
    alert('Must be a number between 8 and 128');
    return getSize();
  }

  console.log(size);
  return size;
};



function getRandomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
};

function generatePassword(pwLen) {
  while (pwResult.length < pwLength) {
    if (hasNums && pwLength > pwResult.length) {
      pwResult.push(getRandomIndex(nums));
    }
    if (hasSpec && pwLength > pwResult.length) {
      pwResult.push(getRandomIndex(special));
    }
    if (hasLower && pwLength > pwResult.length) {
      pwResult.push(getRandomIndex(lowerLetters));
    }
    if (hasCaps && pwLength > pwResult.length) {
      pwResult.push(getRandomIndex(upperLetters));
    }
  }

  // for (let i = 0; i < pwResult.length; i++) {
  //   if (hasNums) {
  //     pwResult.push(getRandomIndex(nums));
  //   }
  //   if (hasSpec) {
  //     pwResult.push(getRandomIndex(special));
  //   }
  //   if (hasLower) {
  //     pwResult.push(getRandomIndex(lowerLetters));
  //   }
  //   if (hasCaps) {
  //     pwResult.push(getRandomIndex(upperLetters));
  //   }
  // }
  
};

function confirmChoices() {

  hasNums = confirm('Do you want numbers?');
  hasSpec = confirm('Do you want special characters?');
  hasCaps = confirm('Do you want capital letters?');
  hasLower = confirm('Do you want lower-case letters?');

  if (!hasNums && !hasSpec && !hasCaps && !hasLower) {
    alert('Password needs at least 1 parameter');
    return confirmChoices();
  }
};

document.getElementById('generate').addEventListener('click', function() {
  pwLength = getSize();
  confirmChoices();
  generatePassword(pwLength);
  console.log(pwResult)
  // document.write(pwResult.join(''));
  FinalPassword = pwResult.join('');
  console.log(FinalPassword);
  writePassword();
})

let pwLength;
let FinalPassword;
// let pwLength = getSize();
// confirmChoices();
// generatePassword(pwLength);
// console.log(pwResult)
// // document.write(pwResult.join(''));
// let FinalPassword = pwResult.join('');
// console.log(FinalPassword);
// writePassword();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   if (password != "") {
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
//   }
// }

// Write password to the #password input
function writePassword() {
  // var password = generatePassword(FinalPassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = FinalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
