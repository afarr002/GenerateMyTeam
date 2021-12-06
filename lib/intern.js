// import the parent classs
const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;

    if (typeof school !== "string" || school.trim().length <= 3) {
      throw new Error("Intern's school name cannot be less than 3 characters");
    }
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
