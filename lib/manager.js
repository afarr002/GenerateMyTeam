// import the parent classs
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;

    if (isNaN(officeNumber) || officeNumber.toString().length < 3) {
      throw new Error(
        "Manager's office number cannot be less than 3 numerical digits"
      );
    }
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
