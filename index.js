const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const src = require("./src/src");

const questions = [
  {
    type: "input",
    message: "What is your employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your employee's ID?",
    name: "empID",
  },
  {
    type: "input",
    message: "What is your employee's email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Please choose your employee's role:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) =>
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your manager's office number?",
          name: "office",
          when: function (_) {
            return answers.role === "Manager";
          },
        },
        {
          type: "input",
          message: "What is your engineer's GutHub username?",
          name: "github",
          when: function (_) {
            return answers.role === "Engineer";
          },
        },
        {
          type: "input",
          message: "What school does your intern attend?",
          name: "school",
          when: function (_) {
            return answers.role === "Intern";
          },
        },
      ])
      .then(({ office, github, school }) => {
        createEmployee(answers, office, github, school);
      })
  );
}

const createEmployee = (answers, office, github, school) => {
  if (answers.role === "Manager") {
    src.team;
    const newManager = new Manager(
      answers.name,
      answers.empID,
      answers.email,
      office
    );
    src.team.push(newManager);
    addEmp();
  } else if (answers.role === "Engineer") {
    const newEngineer = new Engineer(
      answers.name,
      answers.empID,
      answers.email,
      github
    );
    src.team.push(newEngineer);
    addEmp();
  } else if (answers.role === "Intern") {
    const newIntern = new Intern(
      answers.name,
      answers.empID,
      answers.email,
      school
    );
    src.team.push(newIntern);
    addEmp();
  }
};

const addEmp = async () => {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "addEmp",
    },
  ]);
  if (answer.addEmp === true) {
    src.grabTeamString;
    init();
  } else {
    src.createTeam();
  }
};

init();
