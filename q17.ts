let peoples:string[] = ["Umar","Usman","huzaifa"];
console.log(peoples);
// 2
peoples.unshift("hassan");
console.log(peoples);
// 3
let middleperson:string = ("usama");
let middleindex = peoples.length/2;
peoples.splice(middleindex,0,middleperson);
console.log(peoples);
let endperson:string = ("uroosa");
peoples.push(endperson);
console.log(peoples);
// 1
console.log("we can invited only two peoples for dinner");
while(peoples.length>2){
let removed = peoples.pop()
console.log(peoples);
// 2
console.log(`\nsorry ${removed} we can't invite you to dinner!`)
};
let unremoved:string = ("umar");
let unremoved1:string = ("hassan");
console.log(`\nhello ${unremoved} letting them know they are still invited!`);
console.log(`\nhello ${unremoved1} letting them know they are still invited!`);
peoples.pop();
peoples.pop();
console.log(peoples);
