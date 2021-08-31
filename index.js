const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const inquirer = require("Inquirer");
const validator = require('email-validator');
const multiValidator = require('validation-master');

const render = require("./src/page-template");
const cssFile = require("./src/css-contents")
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const htmlPATH = path.join(OUTPUT_DIR, "index.html");
const cssPATH = path.join(OUTPUT_DIR, "style.css");

// new Manager("Luke", 1, "luke@lukepoirrier.com", "32952345");
// new Engineer("Luke 2", 2, "lp@lukepoirrier.com", "3295");
// new Intern("Luke - Intern", 3, "lpintern@lukepoirrier.com", "329523");

// Initialize empty array to hold the team members of the current organization
const team = [];
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

const cssContents = `
:root{
--gray: #223843;
--white: #eff1f3;
--green: #59a96a;
--brightoj: #f79256;
--darkoj: #d77a61;
font-size: 16px;
}
body{
  background-color: white;
  color: white;
}
/* Colors for the page in the form of :root variables*/
.green-bg{
  background-color: var(--green);
}
.white-bg{
  background-color: var(--white);
}
.gray-bg{
  background-color: var(--gray);
}
.brightoj-bg{
  background-color: var(--gray);
}
.darkoj-bg{
  background-color: var(--gray);
}
.green{
  color: var(--green);
}
.white{
  color: var(--white);
}
.gray{
  color: var(--gray);
}
.brightoj{
  color: var(--gray);
}
.darkoj{
  color: var(--gray);
}

/* End of :root variables section */ 

/* Styling to make the labels look more legible and stand out against the information they represent */
.label{
  font-weight: bolder;
}
/* Overriding Bootstrap 4.3.1 stylings to add a background color and custom text color */
.list-group-item{
  background-color: var(--green) !important; 
  font-weight: bold;
}
/* Add flex-wrap property so the cards don't continue to line up horizontally after the page is filled */
#team-holder{
  flex-wrap: wrap;
}
.team-card{
  justify-content: space-between;
  max-width: 18rem; 
  display: flex;
  flex-direction: column;
  border: none;
  margin: 1rem;
}
.team-card a{
  color: var(--gray);
  text-decoration: underline;
}
.my-team-heading{
  color: var(--gray);
  background-color: var(--green);
}
`

// _ name, employee ID, email address, and office number
function init() {
  // Inquirer Prompt for manager creation
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of the manager of your team?",
          validate: (answer) => multiValidator.isAlphabetic(answer) ? true : false
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the ID of the manager of your team?",
          validate: (answer) => multiValidator.isNumeric(answer) ? true : "Please enter a valid ID Number"
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the email of the manager of your team?",
          validate: (answer) => validator.validate(answer) ? true : "Please enter a valid email address"
          },
        {
          type: "input",
          name: "managerOfficeNumber",
          message:
            "What is the office phone number of the manager of your team?",
            validate: (answer) => multiValidator.isNumeric(answer) ? true : "Please enter a valid phone number"
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        console.log(`${answers.managerName} has been added as a manager`)
        team.push(manager);
        chooseNewMember();
      });
  } // Close the createManager() function

  createManager();

  // ! Menu that displays the options for the employee role. If no input is provided, the default action is to render the souce code and output it to the ./dist/ directory.
  function chooseNewMember(){
  inquirer.prompt({
    type: "list",
    name: "typeOfTeamMember",
    choices: [
      "Engineer",
      "Intern",
      "No more team members"
    ]
  })
  .then((memberType => {
    switch (memberType.typeOfTeamMember) {
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      case "No more team members":
        renderHTML(htmlPATH, team);
        break;
      default:
        // default
        renderHTML(htmlPATH, team);
        break;
    }
  }))}; // </createTeam()>

  // ! createEngineer() - Prompts the user for information about the engineer, then instantiates a new Engineer and adds it to the team array when called.
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message:
            "What is the name of the engineer you would like to add to the team?"
          // validate: (answer) => {
          //   answer !== "" ? true : "Please enter a name for the engineer";
          // },
        },
        {
          type: "input",
          name: "id",
          message: "What is the ID of the engineer?",
          validate: (answer) => multiValidator.isNumeric(answer) ? true : "Please enter a valid ID Number"
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the engineer?",
          validate: (answer) => validator.validate(answer) ? true : "Please enter a valid email address"
        },
        {
          type: "input",
          name: "github",
          message: "What is the GitHub username of the Engineer?",
          validate: (answer) => answer != null ? true : "Please enter a valid GitHub username"
        }
        ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );

        team.push(engineer);
        console.log(`Added ${answers.name} as an engineer on your team`);
        chooseNewMember();
      });
  }

  // ! createIntern() {} 
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message:
            "What is the name of the intern you would like to add to the team?",
          // validate: (answer) => {
          //   answer !== "" ? true : "Please enter a name for the intern";
          // },
        },
        {
          type: "input",
          name: "id",
          message: "What is the ID of the intern?",
          validate: (answer) => multiValidator.isNumeric(answer) ? true : "Please enter a valid ID Number"
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the intern?",
          validate: (answer) => validator.validate(answer) ? true : "Please enter a valid email address"
        },
        {
          type: "input",
          name: "school",
          message: "What school does/did the intern attend?",
          validate: (answer) => answer != "" ? true : "Please enter a valid school name"
        }
        ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );

        team.push(intern);
        console.log(`Added ${answers.name} as an intern on your team`);
        chooseNewMember();
      });
  }

  function renderHTML(outputPath, team) {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    console.log(`We have just added ${team.length} members to your team, the website is now available in the ${OUTPUT_DIR} directory`);
    fs.writeFileSync(htmlPATH, render(team), "utf8");
    fs.writeFileSync(cssPATH, cssFile(), "utf8");
  }
} // Close the init() function
init();
