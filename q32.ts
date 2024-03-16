let new_users:string[] = ["Eric","Fatima","Admin","Uroosa","Hassan"];
let current_users:string[] = ["Hassan","Usama","Huzaifa","Usman","Admin"];


let current_usersnames_lower:string[]=current_users.map(user =>user.toLocaleLowerCase())


for(let new_user of new_users) {
    if (current_usersnames_lower.includes(new_user.toLocaleLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken`)
    }else{
        console.log(`Yes ${new_user},username is available `)
    }
};
       
    



