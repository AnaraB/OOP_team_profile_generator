const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamManagerQuestions= [
  {
    type: "input",
    name: "teamManagerName",
    message: "Enter your name"
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter your employee ID"
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address"
  },
  {
    type: "input",
    name: "office number",
    message: "Enter your office number"
  }

]
// add validation to ensure that user input is in the proper format.
//use inquirer 
inquirer.prompt( teamManagerQuestions).then(answer =>{

  let data = createData(answer);
  fs.writeFileSync(`${answer}`, data)
});



// after that the user is presented with a menu with the option to:
// Add an engineer
// Add an intern
// Finish building the team
