const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


      test('should create an instance of the engineer class as a subclass of the employee',() => {
            const engineer = new Engineer("test");
            expect(engineer).toBeInstanceOf(Employee);
      }),
      test('should create an instance of the engineer class with the github property supplied at instantiation', ()=> {
            const github = 'testGithub';
            let engineer = new Engineer("test", 1234, "Engineer@test.com", github);
            expect(engineer.github).toBe(github);
      }),
      test('when called, getGithub should return the github property supplied at instantiation', () => {
            const github = 'testGithub';
            const engineer = new Engineer("test", 1234, "Engineer@test.com", github);
            expect(engineer.getGithub()).toBe(github);
      })

