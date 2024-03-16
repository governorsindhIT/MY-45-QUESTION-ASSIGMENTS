var new_users = ["Eric", "Fatima", "Admin", "Uroosa", "Hassan"];
var current_users = ["Hassan", "Usama", "Huzaifa", "Usman", "Admin"];
var current_usersnames_lower = current_users.map(function (user) { return user.toLocaleLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_usersnames_lower.includes(new_user.toLocaleLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ",username is available "));
    }
}
;
