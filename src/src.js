//require neccesary packages
const fs = require("fs");

// create empty array to house the constructor objects built from user input
const team = [];

// function is responsible for creating the manager cards that will be appended to the html
const managerCard = (emp) => {
  const manager = `
    <div class="card" style="width: 18rem">
      <div class="card-header whiteText">Manager</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${emp.getName()}</li>
          <li class="list-group-item">ID Number: ${emp.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${emp.getOfficeNumber()}</li>
        </ul>
  </div>`;
  return manager;
};

// function is responsible for creating the engineer cards that will be appended to the html
const engineerCard = (emp) => {
  const engineer = `
    <div class="card" style="width: 18rem">
      <div class="card-header whiteText">Engineer</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${emp.getName()}</li>
          <li class="list-group-item">ID Number: ${emp.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
          <li class="list-group-item">GitHub Username: <a
                href="https://github.com/${emp.getGithub()}"
                target="_blank"
                rel="noopener noreferrer"
                >${emp.getGithub()}</a
              ></li>
        </ul>
  </div>`;
  return engineer;
};

// function is responsible for creating the intern cards that will be appended to the html
const internCard = (emp) => {
  const intern = `
    <div class="card" style="width: 18rem">
      <div class="card-header whiteText">Intern</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${emp.getName()}</li>
          <li class="list-group-item">ID Number: ${emp.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
          <li class="list-group-item">School: ${emp.getSchool()}</li>
        </ul>
  </div>`;
  return intern;
};

// variable houses the css to be created with the index.html
const styleCSS = `
.jumbotron {
  background-color: rgba(251, 79, 20);
}

.center {
  text-align: center;
}

.card-header {
  background-color: rgba(0, 34, 68);
}
.card {
  margin-top: 30px;
}

.sect-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.whiteText {
  color: white;
}
`;

// variable houses the function responsible for adding the position cards to html file
const buildCards = (team) => {
  // sets the card template to an empty string
  let cardTemp = "";
  // function is responsible for sorting through each cards emp.getRole(), and storing the output into the card template
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

  // variable housing the html template
  const indexHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
        <link rel="stylesheet" href="./style.css">
        <title>Generate My Team!</title>
      </head>
      <body>
        
        <header class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 center whiteText">My Team on Display</h1>
          </div>
        </header>
        <section class="sect-container">
          ${cardTemp}
        </section>
        <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
      </body>
    </html>
  `;

  return indexHTML;
};

// function responsible for writing the html file
const createTeam = () => {
  // writes the file to the html doc in the dist folder, and calls the information stored in buildCards with the team argument passed in, and stores an error message to be displayed if something goes wrong
  fs.writeFile("./dist/index.html", buildCards(team), (err) => {
    if (err) {
      err ? console.log(err) : console.log("Index.HTML file was written!");
    }
  });
};

// function is responsible for writing the css file
const createStyleCSS = () => {
  // writes the file to the css doc in the dist folder, and calls the information stored in styleCSS variable, and stores an error message to be displayed if something goes wrong
  fs.writeFile("./dist/style.css", styleCSS, (error) => {
    if (error) {
      error ? console.log(error) : console.log("Style.CSS file was written!");
    }
  });
};

// exports the individual functions and variables to be used on index.js page
module.exports = {
  team,
  buildCards,
  createTeam,
  createStyleCSS,
};
