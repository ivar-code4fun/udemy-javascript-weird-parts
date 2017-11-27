//call, apply and bind

var person = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function() {
        
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    
    console.log("Logged : " + this.getFullName());
    console.log("Arguments : " + lang1 + " " + lang2);
    console.log("--------------------------------");
}

var logPersonName = logName.bind(person);

logPersonName("en");

//unlike bind which creates a copy of the function , call executes it
logName.call(person, "en", "es");
//unlike call ,the apply method looks for an array of arguments
logName.apply(person, ["en", "es"]);


//function borrowing

//say i have another person object that is missing some parameters

var person2 = {
    firstname : "Jane",
    lastname : "Doe"
}

//could have done the same thing with call
console.log(person.getFullName.apply(person2));

//function currying

function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(25)); // multiplies the number by two

var multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(25)); // multiplies the number by three
