var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

var john = {
    firstname: "John",
    lastname: "Doe"
}

//don't do this EVER!! only for demo purposes

john.__proto__ = person; //john now inherits from person
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: "Jane"
}

jane.__proto__ = person;
console.log(jane.getFullName());

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + " : " + john[prop]);
    }
}
   
var jill = {
    address: "123 Main Street",
    getFormalFullName: function() {
        return this.lastname + ", " + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return this.firstname;
    }
}

_.extend(john, jill, jim); //extends the properties of jill and jim to john

console.log(john);
console.log(john.getFormalFullName());
console.log(john.getFirstName());


