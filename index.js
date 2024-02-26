const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { start } = require("repl");

let teamMembers = [];

// code to gather information about the development team members
//  validation is added  to ensure that user input is in the proper format.
const teamManagerInfo= [
  {
    type: "input",
    name: "teamManagerName",
    message: "Enter your name",
    validate: val => /[a-z]/gi.test(val)       
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter your employee ID",
    validate: val => /[1-9]/gi.test(val)        
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your office number",
    validate: val => /[1-9]/gi.test(val)        
  }

]

  const engineerInfo = [
    {
      type: "input",
      name: "engineerName",
      message: "Enter engineer name",
      validate: val => /[a-z]/gi.test(val)   
    },
    {
      type: "input",
      name: "engineerID",
      message: "Enter ID number",
      validate: val => /[1-9]/gi.test(val)     
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address"
    },
    {
      type: "input",
      name: "gitHubUsername",
      message: "Enter gitHub username"
    }
  ]

  const internInfo = [
    {
      type: "input",
      name: "internName",
      message: "Enter intern name",
      validate: val => /[a-z]/gi.test(val)   
    },
    {
      type: "input",
      name: "internID",
      message: "Enter ID number",
      validate: val => /[1-9]/gi.test(val)     
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address"
    },
    {
      type: "input",
      name: "school",
      message: "Enter school"
    }

  ]


//use inquirer  to prompt manager info
inquirer.prompt( teamManagerInfo).then(answers =>{
  console.log(answers);
  //create instance obj of Manager class
  const newManagerAnswers = new Manager(answers.teamManagerName, answers.employeeID, answers.email, answers.officeNumber);
  console.log(newManagerAnswers);
  teamMembers.push(newManagerAnswers);
  startMenu();
});

// function that presentes the user with a menu of options
function startMenu(){
  inquirer.prompt([
    {
      type: 'list',
      message: "Pick one of three:",
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
      name: 'menuOptions'
    }
  ])
  // depending on selected option, use inquirer  to prompt instance of Engineer, Intern or finish building the team
  .then(val => {
    if(val.menuOptions === 'Add an engineer'){
      inquirer.prompt(engineerInfo).then(answers => {
          //create instance obj of Engineer class
       const newEngineerAnswers = new Engineer(answers.engineerName, answers.engineerID, answers.email, answers.gitHubUsername);
       console.log(newEngineerAnswers)
       teamMembers.push(newEngineerAnswers);
       console.log(teamMembers);
       startMenu()
      })
    } else if (val.menuOptions === 'Add an intern'){
      inquirer.prompt(internInfo).then(answers => {
        //create instance obj of Engineer class
     const newInternAnswers = new Intern(answers.internName, answers.internID, answers.email, answers.school);
     console.log(newInternAnswers)
     teamMembers.push(newInternAnswers);
     console.log(teamMembers);
     startMenu();
    })
    } else {
      fs.writeFileSync(outputPath, render(teamMembers), "UTF-8"
      //   if (err) {
      //     console.error("Error writing file:", err);
      //   } else {
      //     console.log("team.html created successfully!");
      //   }
      
      
      // }
      )

      finishBuildingTheTeam()
      // and render team.html
      // generateHTML()
    }
  
    })
}

function finishBuildingTheTeam(){
  //exit application
  process.exit(0);


}




// function generateHTML() {
//   fs.writeFileSync(outputPath, render, "utf-8");
// }




