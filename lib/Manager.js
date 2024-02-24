// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee{
  constructor(officeNumber){
    super(employeeName, id, email);
      this.officeNumber = officeNumber;
    }

    //getRole()—overridden to return 'Manager'
    getRole(){
      // return Manager;
    }


}
