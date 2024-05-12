function describe_city(city: string, country: string = "Pkistan"){            //pakistan is a default value hre
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Tokyo","Japan");