const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const inquirer = require("Inquirer");

const render = require("./src/page-template");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

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
          validate: (answer) => {
            return true;
            //   answer !== "" ? true : "Please enter a manager name";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the ID of the manager of your team?",
          validate: (answer) => {
            if (answer.match(/^[1-9]\d*$/)) {
              return true;
            } else {
              return `Please enter a valid ID number(A number greater than 0)`;
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the email of the manager of your team?",
          validate: (answer) => answer ? true : "Please enter a valid email address"
          },
        {
          type: "input",
          name: "managerOfficeNumber",
          message:
            "What is the office phone number of the manager of your team?",
          validate: (answer) => {
            answers.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
              ? true
              : "Please enter a phone number";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        team.push(manager);
        getTeamMembers();
      });
  } // Close the createManager() function

  createManager();

  // - Menu that displays the options for the employee role. If no input is provided, the default action is to render the souce code and output it to the ./dist/ directory.
  const getTeamMembers = () => {
    switch (userChoice.memberChoice) {
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      default:
        // default
        renderHTML(team);
        break;
    }
  }; // </createTeam()>

  // - createEngineer() - Prompts the user for information about the engineer, then instantiates a new Engineer and adds it to the team array when called.
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message:
            "What is the name of the engineer you would like to add to the team?",
          validate: (answer) => {
            answer !== "" ? true : "Please enter a name for the engineer";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the ID of the engineer?",
          validate: (answer) => {
            answer.match(/^[1-9]\d*$/)
              ? true
              : "Please enter a valid ID number(A number greater than 0)";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the engineer?",
          validate: (answer) => {
            answers.match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim)
              ? true
              : "Please enter a valid email address";
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the GitHub username of the Engineer?",
          validate: (answer) =>
            answer !== ""
              ? true
              : "Please enter the Engineer's GitHub username",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );

        team.push(manager);
        getTeamMembers();
      });
  }
  function renderHTML(outputPath, team) {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(team), "utf8");
  }
} // Close the init() function
init();
