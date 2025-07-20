const readline = require('readline-sync');

let password;
let isUpperCase = false;
let isLowerCase = false;

do {
password = readline.question("Please enter a password: ");
password.split("");
for (const letter of password) {
    if (letter.toUpperCase() === true) {
        isUpperCase === true;
    } else if (letter.toLowerCase === true) {
        isLowerCase === true;
    } else {isUpperCase === false;
        isLowerCase === false;
        console.log("Password requires at least one uppercase and one lowercase letter.");
    }
}}
while (password.length <= 8 || isUpperCase != 
true || isLowerCase != true);

console.log("Your password has been saved.");