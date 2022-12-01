// User variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//Password variable values: 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numerric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space for Uppercase conversion
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

get.addEventListener("click", function () {
  newps = generatePassword();
  document.getElementById("password").placeholder = newps;
});

// Function write password
function writePassword() {
   // Get user input
   enter = parseInt(prompt("Password must be between 8 to 128 characters"));
  
   if (!enter) {
       alert("Must enter value");
   } else if (enter < 8 || enter > 128) {
     
       enter = parseInt(prompt("You must choose between 8 and 128"));
      

   } else {
       //User input validated 1 to 4
       confirmNumber = confirm("password may contain numbers");
       confirmCharacter = confirm("password may contain special characters");
       confirmUppercase = confirm("password may contain ppercase letters");
       confirmLowercase = confirm("password may contain lowercase letters");
   };

   // Else if 4 negative options
   if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
       choices = alert("You must choose at least one criteria!");

   }
   // First if user input statement prompts to determine choices
   // Else if 4 positive options
   else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

       choices = character.concat(number, alpha, alpha2);
   }
   // Else if 3 positive options
   else if (confirmCharacter && confirmNumber && confirmUppercase) {
       choices = character.concat(number, alpha2);
   }
   else if (confirmCharacter && confirmNumber && confirmLowercase) {
       choices = character.concat(number, alpha);
   }
   else if (confirmCharacter && confirmLowercase && confirmUppercase) {
       choices = character.concat(alpha, alpha2);
   }
   else if (confirmNumber && confirmLowercase && confirmUppercase) {
       choices = number.concat(alpha, alpha2);
   }
   
   else if (confirmCharacter && confirmNumber) {
       choices = character.concat(number);

   } else if (confirmCharacter && confirmLowercase) {
       choices = character.concat(alpha);

   } else if (confirmCharacter && confirmUppercase) {
       choices = character.concat(alpha2);
   }
   else if (confirmLowercase && confirmNumber) {
       choices = alpha.concat(number);

   } else if (confirmLowercase && confirmUppercase) {
       choices = alpha.concat(alpha2);

   } else if (confirmNumber && confirmUppercase) {
       choices = number.concat(alpha2);
   }
  
   else if (confirmCharacter) {
       choices = character;
   }
   else if (confirmNumber) {
       choices = number;
   }
   else if (confirmLowercase) {
       choices = alpha;
   }
  
   else if (confirmUppercase) {
       choices = space.concat(alpha2);
   };

   var password = [];

  
   // Randomise selection for all variables: 
   for (var i = 0; i < enter; i++) {
       var pickChoices = choices[Math.floor(Math.random() * choices.length)];
       password.push(pickChoices);
   }
 
   var newps = password.join("");
   UserInput(newps);
   return newps;
}
// Enter password in textbox

function UserInput(newps) {
   document.getElementById("password").textContent = newps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
   copyPassword();
});
