// 1
let peoples:string[] = ["Umar","Usman","huzaifa"];
console.log(peoples);
console.log("welcome all we found a bigger dinner table");
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
peoples.map((items)=>console.log(`Dear ${items} you are invited to dinner!`));
