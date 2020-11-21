// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function generatePassword() {
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];
console.log(special);
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numbers);
var lettersLo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var lettersLo = [abcdefghijklmnopqrstuvwxyz]
console.log(lettersLo);
var lettersUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var lettersUp = [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
console.log(lettersUp);

// Arrays for 2 choices
var speUp = [].concat(special, lettersUp);
var speLo = special.concat(lettersLo);
var speNum = special.concat(numbers);
var numLo = numbers.concat(lettersLo);
var numUp = lettersUp.concat(numbers);
var letUpLo = lettersUp.concat(lettersLo);

console.log(speNum);
console.log(speLo);
console.log(letUpLo);
console.log(speUp);
console.log(numUp);
console.log(numLo);

//Arrays for 3 choices
var speNumUp = special.concat(numbers, lettersUp);
var speNumLo = special.concat(numbers, lettersLo);
var speLoUp = special.concat(lettersUp, lettersLo);
var numLoUp = numbers.concat(lettersLo, lettersUp);
console.log(speNumLo);
console.log(speNumUp);
console.log(speLoUp);
console.log(numLoUp);

//Array for 4 choices
var all = special.concat(numbers, lettersLo, lettersUp);
console.log(all)

// the choices made to include characters
//var characters;

//the choices of confirms
var specialChoice;
var numbersChoice;
var lettersLoChoice;
var lettersUpChoice;

  //length
  var howLong = prompt("How long should your password be?");
  // if outside specified length
  if (howLong >128 || howLong < 8) {
    alert("Your password must be between 8 and 128 characters long. Try again.");
  }
  // alert the length of password - the bracket must end after the password is generated
  if (howLong <= 128 && howLong >= 8) {
    alert("Your password will be " + howLong + " characters long.");
    console.log("Password length: " + howLong);
  
  specialChoice = confirm("Should your password contain special characters?");
  numbersChoice = confirm("Should your password contain numbers?");
  lettersLoChoice = confirm("Should your password contain lower case letters?");
  lettersUpChoice = confirm("Should your password contain upper case letters?");
  }


 
  

//criteria met

// if all four confirmed - does not take upper case letters
    if (specialChoice === true && numbersChoice === true && lettersLo === true && lettersUp === true) {
    var characters = all;
    console.log(characters);
    }

// if only 3 confirmed
    //this one works
  else if (specialChoice === true && numbersChoice === true && lettersLoChoice === true) {
  var characters = speNumLo;
  console.log(characters);
    //this one works
  } else if (specialChoice === true && numbersChoice === true && lettersUpChoice === true) {
    var characters = speNumUp;
    console.log(characters);
    //this one works
  } else if (specialChoice === true && lettersUpChoice === true && lettersLoChoice === true) {
    var characters = speLoUp
    console.log(characters);
    //this one works
  } else if (numbersChoice === true && lettersUpChoice === true && lettersLoChoice === true) {
    var characters = numLoUp
    console.log(characters);
  }
 
// if only 2 confirmed
      //this one works
     else if (specialChoice === true && numbersChoice === true) {
      var characters = speNum;
      console.dir(characters);
      //this one does not include the letters
    } else if (specialChoice === true && lettersUp === true) {
      var characters = speUp;
      console.dir(characters);
      //this one does not include the letters
    } else if (specialChoice === true && lettersLo === true) {
      var characters = speLo;
      console.dir(characters);
      //this one does not include the letters
    } else if (numbersChoice === true && lettersLo === true) {
      var characters = numLo;
      console.dir(characters);
      //this one does not include the letters
    } else if (numbersChoice === true && lettersUp === true) {
      var characters = numUp;
      console.dir(characters);
      //this one does not include the upper case letters
    } else if (lettersUp === true && lettersLo === true) {
      var characters = letUpLo;
      console.dir(characters);
    }



// if only 1 confirmed THIS WORKS
     else if (specialChoice === true) {
      var characters = special;
      console.dir(characters);
    } else if (numbersChoice === true) {
      var characters = numbers;
      console.dir(characters);
    } else if (lettersLoChoice === true) {
      var characters = lettersLo;
      console.dir(characters);
    } else if (lettersUpChoice === true) {
      var characters = lettersUp;
      console.dir(characters);
    }

    //placeholder for password array
var result = [];
    //for loop to continue randomly choosing within the array until the length specified by user is reached
  for (var i = 0; i < howLong; i++) {
    //randomized choice within the array built by user selctions
      var endChoice = characters[Math.floor(Math.random() * characters.length)];
    //adds each new random character choice to the placeholder array
      result.push(endChoice)
    }
    console.log.endChoice

    //transforms the password array (result) into a string and returns it
  var ps = result.join("");
  return ps; 


  }


