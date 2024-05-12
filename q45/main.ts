// function is define with parameters

function make_car(
    manufacture: string,
    model: string,
    ...option:[string, any][]
)
//inside a function a car object is initialize with properties
{
    let car = {manufacture, model};
    option.forEach(([key, value]) => (car[key] = value));    //using each loop on the option of array //key represent property name //value represtent the property associated with it.
    return car;
}

console.log(make_car("carolla", "frari", ["color", "grey"], ["year", 2021])); //color and year are key of it while grey and 2021 its value
console.log(make_car("toyota", "ford",["color","red"],["year",2022]));