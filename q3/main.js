var myName = "Sana Noor";
console.log(myName.toUpperCase()); //name in uppercase
console.log(myName.toLowerCase()); //name in lowercase
console.log(myName.replace(/\b\w/g, function (char) { return char.toUpperCase(); })); // name in titlecase
