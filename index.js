/*
Roles: 

Manager: 

*/

const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
      {
            name: "Luke",
            id: "1",
            email: "luke@lukepoirrier.com",
            role: "manager"
      },
      {
            name: "Wade",
            id: "2",
            email: "luke@lukepoirrier.com",
            role: "engineer"
      },
];

console.log(render(team));