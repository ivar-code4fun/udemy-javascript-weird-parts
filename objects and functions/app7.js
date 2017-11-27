//arrays
//var arr = new Array();
var arr = [1,2,3];

console.log(arr[1]);

var arr = [
    1,
    false,
    {
        name : "Tony",
        address : "123 Main Street"
    },
    function(name) {
        var greeting = "Hello ";
        console.log(greeting + name)
    },
    "Hello"
];

console.log(arr);
console.log(arr[2].address);
arr[3](arr[2].name);
console.log(arr[4][0]);