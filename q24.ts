// UNEQUALITY
let name1:string = ("hassan");
let name2:string = ("hassan");
let name3:string = ("usman");
if(name1 == name3){
    console.log("names are equal")
}else{
    console.log("names are not equal")
};
// EQUALITY
if(name1 == name2){
    console.log("names are equal")
}else{
    console.log("names are not equal")
};

// test#2
let names1:string = ("huzaifa");
let names2:string = ("Huzaifa");
let names3:string = ("huzaifa");
if(names1 == names2){
    console.log("names are equal")
}else{
    console.log("names are not equal")
};

if(names1 == names3){
    console.log("names are equal")
}else{
    console.log("names are not equal")
};

// test#3

let age1:number = 20;
let age2 :number = 25;
if(age1 == 20){
    console.log("eligible for vote")
}else{
    console.log("not eligible for vote")
};
if(age1 => 20){
    console.log("not eligible")
}else{
    console.log("eligible")
};
//test#4

if(age1 == 20 && age2 == 25){
    console.log("eligible for vote")
}else{
    console.log("not eligible")
}; 

if(age1 == 20 && age2 != 25){
    console.log("eligible not for vote")
}else{
    console.log("not eligible")
}; 

if(age1 == 20 ||  age2 != 25){
    console.log("person is eligible not for vote")
};

let countries:string[] = ["pakistan","india","bangladesh","afhghanistan","england"];
let countries1:string[] = ["pakistan","india","bangladesh","afhghanistan","england"];
if(countries == countries1){
    console.log("it is correct")
}else{
    console.log("it is not correct")
};


let countries2:string[] = ["ireland","australia"];
let countries3:string[] = ["ireland","australia"];
if(countries2 == countries3){
    console.log("it is not correct")
}else{
    console.log("it is correct")
};

















