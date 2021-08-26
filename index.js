const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')

const inquirer = require('Inquirer')

const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

new Manager("Luke", 1, "luke@lukepoirrier.com", "32952345");
new Engineer("Luke 2", 2, "lp@lukepoirrier.com", "3295");
new Intern("Luke - Intern", 3, "lpintern@lukepoirrier.com", "329523");


function renderHTML(outputPath, team) {
fs.writeFileSync(outputPath, render(team), "utf8");
console.log(render(team));
}

renderHTML(outputPath, team);

// + WHEN I start the application
// + THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// + WHEN I enter the team manager’s name, employee ID, email address, and office number
// + THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// + WHEN I select the engineer option
// + THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// + WHEN I select the intern option
// + THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// + WHEN I decide to finish building my team
// + THEN I exit the application, and the HTML is generated


// _ name, employee ID, email address, and office number
function init(){
      // Inquirer Prompt for manager creation
      function createManager(){
      inquirer
      .prompt(
            [{
                  type: "input",
                  name: "managerName",
                  message: "What is the name of the manager of your team?",
                  validate: answer => {answer !== ""? true: "Please enter a manager name"}
            },
            {
                  type: "input",
                  name: "managerID",
                  message: "What is the ID of the manager of your team?",
                  validate: answer => { answer.match(/^[1-9]\d*$/) ? true : "Please enter a valid ID number(A number greater than 0)"}
            },{
                  type: "input",
                  name: "managerEmail",
                  message: "What is the email of the manager of your team?",
                  validate: answer => {answers.match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm) ? true: "Please enter a valid email address"}
            },{
                  type: "input",
                  name: "managerOfficeNumber",
                  message: "What is the office phone number of the manager of your team?",
                  validate: answer => {answers.match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm) ? true: "Please enter a valid email address"}
            }


      ])
      .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            team.push(manager);
            createTeam();
      })

}

function createTeam() {}
switch(userChoice.memberChoice){
      case "Engineer":
            addEngineer();
            break;
      case "Intern":
            addIntern();
            break;
      default: // default
            createTeam();
            break;
}
}