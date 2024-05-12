function make_shirt(size: string = "large", message: string = "I Love Typescript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt();//default message on it
make_shirt("medium");//default message on it
make_shirt("small", "I Love Coading");