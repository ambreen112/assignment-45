// function is define with parameters
function make_car(manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    }); //using each loop on the option of array //key represent property name //value represtent the property associated with it.
    return car;
}
console.log(make_car("carolla", "frari", ["color", "grey"], ["year", 2021])); //color and year are key of it while grey and 2021 its value
console.log(make_car("toyota", "ford", ["color", "red"], ["year", 2022]));