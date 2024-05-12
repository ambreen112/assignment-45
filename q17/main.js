//Question NO 16 
var guests = ["Sana", "Rohan", "Madiha"];
console.log("Great news! I found a bigger dinner table!");
//Adding more guests
guests.unshift("Afsheen");
guests.splice(guests.length / 2, 0, "Neha");
guests.push("Abdullah");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
//Question NO 17
console.log("Unfortunately,I can only invite two people for dinner.");
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("Sorry, ".concat(removeGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
