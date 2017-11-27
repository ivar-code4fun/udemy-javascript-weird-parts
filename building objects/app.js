//function constructor

function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getFullName = function() {
    return this.firstname + " " + this.lastname;
}

var john = new Person("John","Doe");
console.log(john);
console.log(john.getFullName());

var jane = new Person("Jane","Doe");
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ", " + this.firstname;
}

console.log(jane.getFormalFullName());