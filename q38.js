function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Islamabad");
describe_city('France', 'Europe');
describe_city('Lahore', 'Punjab');
