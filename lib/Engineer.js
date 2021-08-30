const Employee = require('./Employee');

class Engineer extends Employee{

constructor(name,id, email, github){
      super(name, id, email);
      this.github = github;
}

getGithub(){
      return this.github;
}
// Getters are used to access the properties of the object. They are defined here for privacy
getRole(){
      return "Engineer";
}

}
module.exports = Engineer;
