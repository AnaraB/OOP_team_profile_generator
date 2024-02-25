// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
  constructor(employeeName, id, email, officeNumber){
    super(employeeName, id, email);
      this.officeNumber = officeNumber;
    }

    //getRole()—overridden to return 'Manager'
    getRole(){
      return "Manager";
    }

    getOfficeNumber(){
      return this.officeNumber;
    }


}


// const newManager = new Manager("Bob", 7979, "hufyfy@gmail.com", 98);
// console.log(newManager);

module.exports = Manager;

