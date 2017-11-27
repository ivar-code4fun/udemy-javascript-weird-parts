function greet(name) {
    console.log("Hello " + name);
}
greet('John');

var greetFunc = function(name) {
    console.log("Hello " + name);
};

greetFunc('John');

//this is an immediately invoked function expression(IIFE)
var greeting = function(name) {
    return "Hello " + name;
}();
console.log(greeting);

var greeting1 = function(name) {
    return "Hello " + name;
}('John');
console.log(greeting1);

//classic IIFE
(function(name) {
    var greeting = "Inside IIFE: Hello ";
    console.log(greeting + name);
}("Ananya"));


