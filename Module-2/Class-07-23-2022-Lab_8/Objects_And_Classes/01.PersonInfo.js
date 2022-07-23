function main(firstName,lastName,age){
    let person = {
        firstName,
        lastName,
        age
    };

    for(let prop in person){
        console.log(`${prop}: ${person[prop]}`);
    }
}

main("Peter","Pan","20");