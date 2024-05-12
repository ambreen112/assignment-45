//Question 14

let guests:string[]=["Sana","Rohan","Zohan"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join us for dinner?`);
});

//Question 15
let unableToAttend = "Zohan";
console.log(`${unableToAttend} can't make it to dinner.`);
 
//new guest
let newGuest = "Madiha";
guests[guests.indexOf(unableToAttend)] = newGuest;

//new invitation
guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join us for dinner?`);
});