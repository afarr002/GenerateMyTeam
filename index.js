const inquirer = require("inquirer");
const fs = require("fs");
const writeToFile = require("./src/src");

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "empID",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Please choose your role:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
];

function init() {
  inquirer.prompt(questions).then((userResponse) =>
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your office number?",
          name: "officeNumber",
          when: function (_) {
            return userResponse.role === "Manager";
          },
        },
        {
          type: "input",
          message: "What is your GutHub username?",
          name: "githubUsername",
          when: function (_) {
            return userResponse.role === "Engineer";
          },
        },
        {
          type: "input",
          message: "What school do you attend??",
          name: "school",
          when: function (_) {
            return userResponse.role === "Intern";
          },
        },
      ])

      .then(({ officeNumber, githubUsername, school }) => {
        fs.writeFile(
          "./dist/index.html",
          writeToFile(userResponse, officeNumber, githubUsername, school),
          (err) => {
            err ? console.log(err) : console.log("File was written!");
          }
        );
      })
  );
}

init();
