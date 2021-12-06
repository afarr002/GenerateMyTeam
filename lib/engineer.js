// import the parent classs
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;

    if (typeof github !== "string" || github.trim().length <= 3) {
      throw new Error(
        "Engineer's github username cannot be less than 3 characters"
      );
    }
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
