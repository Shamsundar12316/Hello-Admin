// part 25// question 30 
// make array of your five username
var users = ["sham", "radai", "kirshana", "lal", "admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see  a status report");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
}
