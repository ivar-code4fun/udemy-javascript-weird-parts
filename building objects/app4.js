//es6 and classes
class Person {
    
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    greet() {
        return "Hello " + this.firstname;
    }
}

class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);   
    }
    
    greet() {
        return "Yo " + this.firstname;
    }
}

var john = new Person("John","Doe");
console.log(john.greet());

var jane = new InformalPerson("Jane","Doe");
console.log(jane.greet());