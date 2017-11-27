//closures and callbacks

function sayHiLater() {
    
    var greeting = "Hi!";
    
    setTimeout(function() {
        console.log(greeting);
    }, 3000);
    
}

sayHiLater();

function tellMeWhenDone(callback) {
    
    var a = 100;
    var b = 200;
    
    callback();
}

tellMeWhenDone(function() {
    console.log("I am done!");
});

tellMeWhenDone(function() {
    alert("I am done!");
});