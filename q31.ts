// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames:string[] =["Admin","Hassan","Usama","Huzaifa","Sajid"];

if(usernames.length === 0){
    console.log("We need to find some users!")
}else {for(let user of usernames)
    if(user === "Admin"){
        console.log("Hello admin, would you like to see a status report? ")
       } else {
               console.log("Hello Eric, thank you for logging in again.")
           };
       };
 let usernames1:string[] = []
 if(usernames1.length === 0){
    console.log("We need to find some users!")}