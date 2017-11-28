Array.prototype.myCustomFeature = "cool!";
var arr = ["John","Jane","Jim"];

for (var prop in arr) {
    console.log(prop + " : " + arr[prop]);
}

//better to not use for in , the for will only print the array values 

for (var i =0; i < arr.length; i++) {
    console.log(arr[i]);
}

