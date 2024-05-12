//Question NO 16 

let guests: string[]= ["Sana","Rohan","Madiha"];
console.log("Great news! I found a bigger dinner table!");

//Adding more guests
guests.unshift("Afsheen");
guests.splice(guests.length / 2, 0, "Neha");
guests.push("Abdullah");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//Question NO 17
console.log("Unfortunately,I can only invite two people for dinner.");

while(guests.length>2){
    let removeGuest = guests.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);