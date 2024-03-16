function describe_city(city:string,country:string = "pakistan"):void{
    console.log(`${city} is in ${country}`)
}
describe_city("Islamabad")
describe_city('France','Europe')
describe_city('Lahore','Punjab')