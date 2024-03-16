// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// 1
var peoples = ["Umar", "Usman", "Anas"];
var notattemped = ("anas");
var messages = ("can't make it for dinner");
console.log("".concat(notattemped + " " + messages));
// 2
var newperson = "huzaifa";
peoples[peoples.indexOf[notattemped]] = newperson;
console.log(peoples);
// 3
var newpeoples = ["umar", "usman", "huzaifa"];
var messages3 = ("you are invited to dinner");
console.log(newpeoples[0] + " " + messages3);
console.log(newpeoples[1] + " " + messages3);
console.log(newpeoples[2] + " " + messages3);
