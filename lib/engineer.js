// import the parent classs
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
