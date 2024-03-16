// UNEQUALITY
var name1 = ("hassan");
var name2 = ("hassan");
var name3 = ("usman");
if (name1 == name3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
;
// EQUALITY
if (name1 == name2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
;
// test#2
var names1 = ("huzaifa");
var names2 = ("Huzaifa");
var names3 = ("huzaifa");
if (names1 == names2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
;
if (names1 == names3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
;
// test#3
var age1 = 20;
var age2 = 25;
if (age1 == 20) {
    console.log("eligible for vote");
}
else {
    console.log("not eligible for vote");
}
;
if (function (age1) { return 20; }) {
    console.log("not eligible");
}
else {
    console.log("eligible");
}
;
//test#4
if (age1 == 20 && age2 == 25) {
    console.log("eligible for vote");
}
else {
    console.log("not eligible");
}
;
if (age1 == 20 && age2 != 25) {
    console.log("eligible not for vote");
}
else {
    console.log("not eligible");
}
;
if (age1 == 20 || age2 != 25) {
    console.log("person is eligible not for vote");
}
;
var countries = ["pakistan", "india", "bangladesh", "afhghanistan", "england"];
var countries1 = ["pakistan", "india", "bangladesh", "afhghanistan", "england"];
if (countries == countries1) {
    console.log("it is correct");
}
else {
    console.log("it is not correct");
}
;
var countries2 = ["ireland", "australia"];
var countries3 = ["ireland", "australia"];
if (countries2 == countries3) {
    console.log("it is not correct");
}
else {
    console.log("it is correct");
}
;
