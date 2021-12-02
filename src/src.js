const fs = require("fs");

function writeToFile(userResponse, officeNumber, githubUsername, school) {
  return `
  ${userResponse.name}
  ${userResponse.email}
  ${userResponse.empID}
  ${userResponse.role}
  ${officeNumber}
  ${githubUsername}
  ${school}`;
}

module.exports = writeToFile;

/* 
template literal to build the base of thml document, then add another template literal via a variable house in an expression.

ie - `html doc
html doc
html doc
${card1}
html doc
html doc`


const card1 = `template literal that builds the card`
*/
