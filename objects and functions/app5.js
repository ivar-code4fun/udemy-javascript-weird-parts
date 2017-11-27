//by value - primitives
var a = 3;
var b = a;

a = 2;
console.log(a);
console.log(b);

//by reference - all objects

var c = { greeting : "hi" };
var d = c;

c.greeting = "hello";
console.log(d.greeting);

function changeGreeting(obj) {
    obj.greeting = "hola";
}

changeGreeting(d);

console.log(c);
console.log(d);

//equals operator sets up a new memory location
c = { greeting : "Howdy" };

console.log(c);
console.log(d);




