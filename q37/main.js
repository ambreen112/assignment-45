function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); //default message on it
make_shirt("medium"); //default message on it
make_shirt("small", "I Love Coading");
