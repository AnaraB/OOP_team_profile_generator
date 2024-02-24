// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
  constructor(gitHubUsername){
    super(employeeName, id, email);
    this.gitHubUsername = gitHubUsername;
  }

  getGitHub(){

  }

  getRole(){
    //return "Engineer";
  }
}

module.exports = Engineer;