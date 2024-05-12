//Question 14
var guests = ["Sana", "Rohan", "Zohan"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join us for dinner?"));
});
//Question 15
var unableToAttend = "Zohan";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//new guest
var newGuest = "Madiha";
guests[guests.indexOf(unableToAttend)] = newGuest;
//new invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join us for dinner?"));
});
