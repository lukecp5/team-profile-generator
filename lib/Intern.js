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
constructor(name,id, email, school){
      super(name, id, email);
      this.school = school;
}

getSchool(){
      return this.school;
}



// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
// Getters are used to access the properties of the object. They are defined here for privacy
getRole(){
      return "Manager";
}

}