/*
Roles: 

Manager: 

*/

const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

new Manager({"Luke"}, 1, "luke@lukepoirrier.com");
new Engineer({"Luke 2"}, 2, "lp@lukepoirrier.com");
new Intern({"Luke - Intern"}, 3, "lpintern@lukepoirrier.com");

fs.writeFileSync(outputPath, render(team), "utf8");
console.log(render(team));