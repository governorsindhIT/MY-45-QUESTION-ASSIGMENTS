// 1
var peoples = ["Umar", "Usman", "huzaifa"];
console.log(peoples);
console.log("welcome all we found a bigger dinner table");
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
peoples.map(function (items) { return console.log("Dear ".concat(items, " you are invited to dinner!")); });
