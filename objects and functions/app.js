//objects and the dot
var person = new Object();
//var person = [];

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
//person.firstname = "Tony";

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "123 Main Street";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.city);
console.log(person["address"]["state"]);