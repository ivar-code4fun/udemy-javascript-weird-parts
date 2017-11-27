//functional programming

var arr1 = [1,2,3];
console.log(arr1);

function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    
    return newArr;
}

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item * 3;
});
console.log(arr3);

var arrGreaterThan2 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arrGreaterThan2);

//creating a dynamic limit
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arrGreaterThanLimit = mapForEach(arr1, checkPastLimit.bind(this,1));
console.log(arrGreaterThanLimit);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arrGreaterThanLimitSimplified = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arrGreaterThanLimitSimplified);

//using underscore library
var arr4 = _.map(arr1, function(item) {
    return item * 6;
});

console.log(arr4);

var arr5 = _.filter([2,3,4,5,6,7], function(item) {
    return item % 2 === 0;
});

console.log(arr5);