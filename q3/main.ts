let myName:string="Sana Noor";
console.log(myName.toUpperCase());    //name in uppercase
console.log(myName.toLowerCase());    //name in lowercase
console.log(myName.replace(/\b\w/g , (char) =>char.toUpperCase()));  // name in titlecase