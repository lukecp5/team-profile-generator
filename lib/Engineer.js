const Employee = require('./Employee');


/**
 * @class Engineer
 * @extends {Employee}
 */
class Engineer extends Employee{
/**
 * Creates an instance of Engineer.
 * @param {Employee Name} name 
 * @param {Employee ID} id 
 * @param {Employee Email} email 
 * @param {Employee Office Number} officeNumber 
 * 
 * @memberOf Engineer
 */
constructor(name,id, email, github){
      super(name, id, email);
      this.officeNumber = github;
}

getGithub(){
      return this.github
}
// Getters are used to access the properties of the object. They are defined here for privacy
getRole(){
      return "Employee";
}

}

// Extends Employee with: 
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`

