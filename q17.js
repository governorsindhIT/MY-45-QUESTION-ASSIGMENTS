var peoples = ["Umar", "Usman", "huzaifa"];
console.log(peoples);
// 2
peoples.unshift("hassan");
console.log(peoples);
// 3
var middleperson = ("usama");
var middleindex = peoples.length / 2;
peoples.splice(middleindex, 0, middleperson);
console.log(peoples);
var endperson = ("uroosa");
peoples.push(endperson);
console.log(peoples);
// 1
console.log("we can invited only two peoples for dinner");
while (peoples.length > 2) {
    var removed = peoples.pop();
    console.log(peoples);
    // 2
    console.log("\nsorry ".concat(removed, " we can't invite you to dinner!"));
}
;
var unremoved = ("umar");
var unremoved1 = ("hassan");
console.log("\nhello ".concat(unremoved, " letting them know they are still invited!"));
console.log("\nhello ".concat(unremoved1, " letting them know they are still invited!"));
peoples.pop();
peoples.pop();
console.log(peoples);
