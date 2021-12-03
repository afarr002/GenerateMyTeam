const team = [];
const fs = require("fs");

const managerCard = (emp) => {
  const manager = `
    <div class="card" style="width: 18rem">
      <div class="card-header"> Manager </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Name: ${emp.getName()}</li>
          <li class="list-group-item"> ID Number: ${emp.getId()}</li>
          <a href="mailto:${emp.getEmail()}" ><li class="list-group-item"> Email: ${emp.getEmail()}</li></a>
          <li class="list-group-item"> Office Number: ${emp.getOfficeNumber()}</li>
        </ul>
  </div>`;
  return manager;
};

const engineerCard = (emp) => {
  const engineer = `
    <div class="card" style="width: 18rem">
      <div class="card-header"> Engineer </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Name: ${emp.getName()}</li>
          <li class="list-group-item"> ID Number: ${emp.getId()}</li>
          <a href="mailto:${emp.getEmail()}" ><li class="list-group-item"> Email: ${emp.getEmail()}</li></a>
          <li class="list-group-item"> Office Number: ${emp.getGithub()}</li>
        </ul>
  </div>`;
  return engineer;
};
const internCard = (emp) => {
  const intern = `
    <div class="card" style="width: 18rem">
      <div class="card-header"> Intern </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Name: ${emp.getName()}</li>
          <li class="list-group-item"> ID Number: ${emp.getId()}</li>
          <a href="mailto:${emp.getEmail()}" ><li class="list-group-item"> Email: ${emp.getEmail()}</li></a>
          <li class="list-group-item"> Office Number: ${emp.getSchool()}</li>
        </ul>
  </div>`;
  return intern;
};

const grabTeamString = (team) => {
  let cardTemp = "";
  team.forEach((emp) => {
    switch (emp.getRole()) {
      case "Manager":
        cardTemp += managerCard(emp);
        break;
      case "Engineer":
        cardTemp += engineerCard(emp);
        break;
      case "Intern":
        cardTemp += internCard(emp);
        break;
    }
  });

  const indexHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href=""https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css""
        />
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Generate My Team!</title>
      </head>
      <body>
        
        <header class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">My Team</h1>
          </div>
        </header>
        <section class="sect-container">
          ${cardTemp}
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  `;

  return indexHTML;
};

const createTeam = () => {
  fs.writeFile("./dist/index.html", grabTeamString(team), (err) => {
    if (err) {
      err ? console.log(err) : console.log("File was written!");
    }
  });
};

module.exports = {
  team,
  grabTeamString,
  createTeam,
};
