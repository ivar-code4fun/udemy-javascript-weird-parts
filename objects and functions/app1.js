//object literal
var Tony = { 
                firstname : "Tony", 
                lastname : "Alicea",
                address : {
                    street : "123 Main Street",
                    city : "New York",
                    state : "NY"
                }
            };

function greet(person) {
    console.log("hi " + person.firstname + " " + person.lastname);
}

greet(Tony);

greet({ firstname : "Mary" , lastname : "Doe" });

Tony.address2 = {
    street: "333 Second Street"
}

//console.log(person);

