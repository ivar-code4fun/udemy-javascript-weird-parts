//first class functions

function greet() {
    console.log("hi");
}

greet.language = "english";
console.log(greet);
console.log(greet.language);

//this will not get hoisted
//anonymousGreet();

var anonymousGreet = function(name) {
    console.log("hi again " + name);
}

anonymousGreet("Ravi");
anonymousGreet();


function log(a) {
    console.log(a);
}

log(10);
log({ greeting : "hi" });

//passed a function to a function
log(function() {
    console.log("hi");
});

//executing a function by passing it as a param to another function
function execute(a) {
    a();
}

execute(function() {
    console.log("Executing an anonymous function!");
});
