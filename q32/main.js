var current_users = ["Admin", "Morgan", "Imran", "Newton", "David"];
var new_users = ["Morgan", "Sadia", "Admin", "Yousf", "Hameed"];
new_users.forEach(function (newUSER) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUSER.toLowerCase(); })) {
        console.log("".concat(newUSER, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUSER, " is available."));
    }
});
