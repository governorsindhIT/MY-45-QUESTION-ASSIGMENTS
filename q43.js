function make_great2(magicians) {
    var gratMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        gratMagicians.push(magicians[i] + " " + 'the great');
    }
    return gratMagicians;
}
var magicians3 = ["huzaifa", "ammar", "usman"];
var greatMagicians2 = make_great2(magicians3);
console.log(magicians3);
console.log(greatMagicians2);
