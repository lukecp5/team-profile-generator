const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
      test('Should instantiate Manager object as an instance of the employee class', () => {
            const manager = new Manager();
            expect(manager).toBeInstanceOf(Employee);
      })
})