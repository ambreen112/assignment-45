let places:string[] = ["Turkey","Indonesia","Iran","Iraq","Dubai"];

console.log("Original order:",places);

console.log("Alphabetical order:",[...places].sort());    //...places =this syntx called spread operator

console.log("Original order:", places);

console.log("Reverse alphabetical order:",[...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reverse order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);