function make_great2(magicians:string[]): string[] {
    const gratMagicians: string[] = [];
    for(let i = 0;i<magicians.length; i++){
        gratMagicians.push(magicians[i]+" " +'the great');
    }return gratMagicians;
    }
    const magicians3:string[]=["huzaifa","ammar","usman"];
    const greatMagicians2:string[]= make_great2(magicians3);
    console.log(magicians3)
    console.log(greatMagicians2)
    