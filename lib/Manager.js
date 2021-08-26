const { Module } = require('module');
const Employee = require('./Employee');

class Manager extends Employee{
      
/**
 * Creates an instance of Manager.
 * @param {Manager Name} name 
 * @param {Manager ID} id 
 * @param {Manager Email} email 
 * @param {Manager Office Number} officeNumber 
 * 
 * @memberOf Manager
 */
constructor(name,id, email, officeNumber){
      super(name, id, email);
      this.officeNumber = officeNumber;
}

getOfficeNumber(){
      return this.officeNumber;
}

getRole(){
      return "Manager";
}

}
module.exports = Manager;

