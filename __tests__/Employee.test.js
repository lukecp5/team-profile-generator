// 

const Employee = require('../lib/Employee');

describe('Employee', () => {
      test('should create employee instance', () => {
            const e= new Employee();
            expect(typeof e).toBe('object');
      });
})
