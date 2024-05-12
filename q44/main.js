// function with parameter
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with:".concat(items.join(", "), "."));
}
make_sandwich("burger", "cheese");
make_sandwich("chicken", "lettuce", "tomato sauce");
make_sandwich("cabbage", "mashroom", "mastard");
