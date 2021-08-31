const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
      test('Should instantiate Manager object as an instance of the employee class', () => {
            const manager = new Manager();
            expect(manager).toBeInstanceOf(Employee);
      }),
      test('Should allow the office number property to be set at instantiation', () => {
            const officeNumber = '1234567890';
            const manager = new Manager("Manager Name", 1234, "Manager@email.com", officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
      }),
      test('getOfficeNumber() should return the office number of Manager object it is called on', () => {
            const officeNumber = '1234567890';
            const manager = new Manager("Manager Name", 1234, "Manager@email.com", officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
      })
})