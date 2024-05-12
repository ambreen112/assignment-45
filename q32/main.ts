let current_users:string[] = ["Admin","Morgan","Imran","Newton","David"];

let new_users:string[] = ["Morgan","Sadia","Admin","Yousf","Hameed"];

new_users.forEach((newUSER) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUSER.toLowerCase()
        )
    ){
        console.log(`${newUSER} will need to enter a new username.`);
    }else{
        console.log(`${newUSER} is available.`)

    }
});