// function with parameter

function make_sandwich(...items:string[]) {                               //... this is called rest parameter syntax. It allow function to accept indefinite number of argument
    console.log(`Making a sandwich with:${items.join(", ")}.`);
}

make_sandwich("burger", "cheese");
make_sandwich("chicken", "lettuce", "tomato sauce");
make_sandwich("cabbage", "mashroom", "mastard");