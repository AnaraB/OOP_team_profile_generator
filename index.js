const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamManagerInfo= [
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
    name: "officeNumber",
    message: "Enter your office number"
  }

]
// add validation to ensure that user input is in the proper format.
//use inquirer 
inquirer.prompt( teamManagerInfo).then(answers =>{
  console.log(answers);
  const newManagerAnswers = new Manager(answers.teamManagerName, answers.employeeID, answers.email, answers.officeNumber);
  console.log(newManagerAnswers);
  teamMembers.push(newManagerAnswers);
  startMenu();


});


function startMenu(){
  inquirer.prompt([
    {
      type: 'list',
      message: "Pick one of three:",
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
      name: 'menuOptions'
    }
  ])

}

function addEngineer(){

}

function addIntern(){

}

function finishBuildingTheTeam(){

}



// fs.appendFile(outputPath, render, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

