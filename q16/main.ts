let guests: string[]= ["Sana","Rohan","Madiha"];
console.log("Great news! I found a bigger dinner table!");

//Adding more guests
guests.unshift("Afsheen");
guests.splice(guests.length / 2, 0, "Neha");
guests.push("Abdullah");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});