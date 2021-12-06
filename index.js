// require neccesary packages
const inquirer = require("inquirer");
const fs = require("fs");

// require other js sheets you created
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const src = require("./src/src");

// array of questions to ask user in prompt
const questions = [
  {
    type: "input",
    message:
      "What is your employee's name? (Cannot be less than two A-z characters)",
    name: "name",
  },
  {
    type: "input",
    message: "What is your employee's ID? (Only numerical digits allowed)",
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

// fucntion responsible for kicking off the application - ask first questions, delivers follow up questions then calls the createEmployee function passing in the data it received from the user as arguments
function init() {
  // calls the variabkle array named questions - then passes the users answers as arguments into anon funtion in .then
  inquirer.prompt(questions).then((answers) =>
    // annon function runs the follow up question based on the users response to role question.
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

// function is responsible for creating the subclass objects based on user information that is being passed in as arguments
const createEmployee = (answers, office, github, school) => {
  if (answers.role === "Manager") {
    // creates new subclass constructor object
    const newManager = new Manager(
      answers.name,
      answers.empID,
      answers.email,
      office
    );
    // pushes new constructor object to variable array named team
    src.team.push(newManager);
    // calls the fuction responsible for asking to add another emp
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

// async request for last question
const addEmp = async () => {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "addEmp",
    },
  ]);
  // if addEmp is truthy then export current user input to buildCards on src page - then run the init function again
  if (answer.addEmp === true) {
    src.buildCards;
    init();
  } else {
    // calls the functions from the src document
    src.createTeam();
    src.createStyleCSS();
  }
};

// init function call
init();
