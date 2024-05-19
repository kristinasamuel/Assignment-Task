#! /usr/bin/env node 
 /// 3. Friend checker game
// prompt the user to enter the name.
// use a switch statement to check if entered name is known is a friend
// output a confirmation message if the name is known, ohervise output a default responce.

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Please enter your friend name:",
  }
]);
switch (answer.name) {
  case "Ali":
    console.log("is your friend");
    break;
  case "jason":
    console.log("is you friend");
    break;
  case "jessica":
    console.log("is your friend");
    break;
  default:
    console.log("is not your friend");
    
}

























