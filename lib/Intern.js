const Employee = require('./Employee');


/**
 * @class Intern
 * @extends {Employee}
 */
class Intern extends Employee{
/**
 * Creates an instance of Intern.
 * @param {Intern Name} name 
 * @param {Intern ID} id 
 * @param {Intern Email} email 
 * @param {Intern School} school 
 * 
 * @memberOf Engineer
 */
constructor(name,id, email, school){
      super(name, id, email);
      this.school = school;
}

getSchool(){
      return this.school;
}

getRole(){
      return "Intern";
}

}
module.exports = Intern;