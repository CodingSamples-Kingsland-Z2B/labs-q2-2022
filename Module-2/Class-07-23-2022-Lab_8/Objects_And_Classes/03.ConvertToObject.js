function main(jsonString){
    let obj = JSON.parse(jsonString);

    for(let prop in obj){
        console.log(`${prop}: ${obj[prop]}`);
    }
}

main('{"name": "George", "age": 40,"town":"Atlanta"}');