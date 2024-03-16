function make_great(magicians:string[]):void{
    for(let i = 0;i<magicians.length; i++){
        magicians[i]=magicians[i]+ " "+ 'The great'
    }
}


const magician2:string[]=["huzaifa","ammar","usman"];
make_great(magician2);
console.log(magician2);
