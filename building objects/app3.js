//object.create and prototypal inheritance

//creating a polyfill if Object.create does not exist!

if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error("Object.create implementation only accepts the first parameter");
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}
//End of polyfill

var person = {
    firstname : "Default",
    lastname : "Default",
    greet : function() {
        return "Hi" + this.firstname;
    }
}

//Object.create is supported by newer browsers - pure prototypal inheritance
var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";
john.greet = function() { return "Hi " + this.firstname + " " + this.lastname; } //override
console.log(john);
console.log(john.greet());



