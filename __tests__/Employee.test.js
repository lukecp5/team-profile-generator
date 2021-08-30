// 

const Employee = require('../lib/Employee');

describe('Employee', () => {
      test('should create employee instance', () => {
            const employee= new Employee();
            expect(typeof employee).toBe('object');
      }),
      test('should create employee instance with the name property supplied at instantiation', () => {
            const employeeName = "name test";
            const employee = new Employee(employeeName);
            expect(employee.name).toBe('name test');
      }),
      test('when called, getName() returns the name of the employee', () => {
            const employee = new Employee('name test');
            expect(employee.getName()).toBe('name test');
      })
      test('should create employee instance with the id property supplied at instantiation', () => {
            const employeeId = "1234";
            let employee = new Employee("Name", employeeId);
            expect(employee.id).toBe(employeeId);
      })
      })
