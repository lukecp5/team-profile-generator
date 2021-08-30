const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
      test('should create an instance of Intern, as a subclass of the employee class', () => {
            const intern = new Intern();
            expect(intern).toBeInstanceOf(Employee);
      }),
      test('should set the school property at instantiation of intern object', () => {
            const school = "Georgia Institute of Technology";
            const intern = new Intern("TestName", 1234, "Test@Email.com", school);
            expect(intern.school).toBe(school);
      }),
      test('when called, getSchool() should return the school property supplied at instantiation', () => {
            const school = "Georgia Institute of Technology";
            const intern = new Intern("TestName", 1234, "Test@test.com", school);
            expect(intern.getSchool()).toBe(school);
      })
})