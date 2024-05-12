//conditional test
//Equality in string
console.log("Testing equality with string:");
console.log("NEHA" == "NEHA"); //True
console.log("NEHA" == "Neha"); //false
//using lowercase function
console.log("Testing with lowercase:");
console.log("Neha".toLowerCase() == "apple"); //false
//Numerical testing
console.log("Numerical testing:");
console.log(5 > 3); //true
console.log(2 > 4); //false
console.log(8 >= 4 * 2); //true
console.log(7 <= 3); //false
//Test using "and" and "or" operator
console.log(true && false); //false
console.log(true || false); //true
//Test wether an item in an array
var vegetables = ["brinjal", "potato", "tomato"];
console.log("is 'tomato' in vegetables?");
console.log(vegetables.includes("tomato")); //true
//Test wether an item is not in an array
console.log("is 'spanish' in vegetables");
console.log(!vegetables.includes("spanish")); //true
