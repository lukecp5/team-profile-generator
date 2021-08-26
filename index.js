const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')

const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

new Manager("Luke", 1, "luke@lukepoirrier.com", "32952345");
new Engineer("Luke 2", 2, "lp@lukepoirrier.com", "3295");
new Intern("Luke - Intern", 3, "lpintern@lukepoirrier.com", "329523");

fs.writeFileSync(outputPath, render(team), "utf8");
console.log(render(team));