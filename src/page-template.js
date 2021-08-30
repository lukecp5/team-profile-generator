const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
            <div class="card team-card">
            <div class="card-header gray-bg white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body green-bg gray">
            <ul class="list-group">
                    <li class="list-group-item"><span class="label">ID: </span>${manager.getId()}</li>
                    <li class="list-group-item"><span class="label">Email: </span><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item"><span class="label">Office number: </span>${manager.getOfficeNumber()}</li>
            </ul>
            </div>
            </div>
            `;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="card team-card">
    <div class="card-header gray-bg white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body green-bg gray">
            <ul class="list-group">
                  <li class="list-group-item"><span class="label">ID: </span>${engineer.getId()}</li>
                  <li class="list-group-item"><span class="label">Email: </span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item"><span class="label">GitHub: </span><a href="https://github.com/${engineer.getGitHub()}/">${engineer.getGitHub()}</a></li>
            </ul>
            </div>
            </div>
            `;
  };

  const generateIntern = (intern) => {
    return `
    <div class="card team-card">
    <div class="card-header gray-bg white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body green-bg gray">
            <ul class="list-group">
                  <li class="list-group-item"><span class="label">ID: </span>${intern.getId()}</li>
                  <li class="list-group-item"><span class="label">Email: </span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item"><span class="label">School: </span>${intern.getSchool()}</li>
            </ul>
            </div>
            </div>
            `;
  };

  const html = [];

  // Filter out all employees whose role is Manager
  // Generate a new array from all of the employees whose role is Manager
  html.push(team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join("")
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      // Filter out all employees whose role is Intern
      .filter((employee) => employee.getRole() === "Intern")
      // Generate a new array from all of the employees whose role is Intern
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = team => {
  return `
      <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body class="white-bg">
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-4 my-team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-12 d-flex justify-content-center" id="team-holder">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
};
