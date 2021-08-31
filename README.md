# Team Profile Generator
---
## Description
This Node.js application allows you to build a profile featuring all of the members of your team. It prompts you for each employees name, ID number, and email address. For the engineers you add, it will ask for a GitHub username. For the interns that you add, it will ask for the school they attend. After gathering the information for all of the team members from the CLI, it will generate an index.html and style.css tailored perfectly to display your team in an intuitive way. The webpage that is generated was built with a mobile-first design strategy, so everything is fully responsive and looks just as good on a mobile device as it does on a desktop computer.

The project was built using Object Oriented Programming practices, or OOP. The base is an Employee class, of which Intern and Engineer are subclasses of. This was a way for me to practice OOP development in JavaScript. This project uses Jest for the testing capabilities, and to ensure that all of the functionality of the software is working correctly. The team profile generator incorporates validation for the various input fields from two independent input validation modules available on the NPM website('email-validator' & 'validation-master'). 

---
![GIF of application in action](https://github.com/lukecp5/team-profile-generator/blob/main/assets/demo.gif?raw=true)    

**Check out the full length HD demo: [Video on Google Drive](https://drive.google.com/file/d/1l0JT5sq-o-6qWMjn1qcgPgViDcvAE1w6/view?usp=sharing)**

---
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [License](#installation)
* [Contributing](#installation)
* [Contact](#contact)
---


## Installation
To install this application and its dependencies, simply run these commands in the directory that you'd like the application to reside in(from the command-line):
```
git clone git@github.com:lukecp5/team-profile-generator.git
cd readme-generator
npm install     
```
---


## Usage
You will use Node.js to run the application once you have it cloned and all of the depencies installed. Enter this command inside the team-profile-generator directory:
  node index.js
Upon running the application, you will be presented with a series of questions about each member on your team. After you've entered the information about the manager of the team, you will be prompted to select whether you would like to add an engineer, an intern, or that you're done adding team members. Based on your selection, you will then receive another series of questions(Unless you chose to stop adding team members.)

After you have finished adding all of your team members and their information, the application will generate an attractive website and stylesheet based on the information you provided. These files will be located inside the './team-profile-generator/dist/' folder. They are then ready to be uploaded to your website, or used locally as a reference to all of your team members' information. 

---


## Technologies Used
- JavaScript
  - Node.js
  - Jest
  - Inquirer
  - email-validator
  - validation-master
- HTML
- CSS
- Bootstrap
- Font Awesome Icons

---

## Contributing
 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

--- 

## Contact
LinkedIn: [@luke-poirrier](https://www.linkedin.com/in/luke-poirrier)  
Email: [Luke@LukePoirrier.com](mailto:Luke@LukePoirrier.com)  
Portfolio: [LukePoirrier.com](http://lukepoirrier.com)  


