
// - We use 'this' to make sure we're referencing the object that was instantiated with the constructor.

class Employee {
      constructor(name,id, email){
            this.name = name;
            this.id = id;
            this.email = email;
      }

      getName(){
            return this.name;
      }

      getId(){
            return this.id;
      }

      getEmail(){
            return this.email;
      }

      getRole(){
            return "Employee";
      }
}

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.*/
