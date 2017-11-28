String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
}

var a = new Number(-3);
console.log(a.isPositive());

//do not use function constructors for primitives , look it does bad things !
var a = 3;

var b = new Number(3);

a == b; //returns true

a === b; //returns false as a is a number but b is an object with an encapsulated primitive type