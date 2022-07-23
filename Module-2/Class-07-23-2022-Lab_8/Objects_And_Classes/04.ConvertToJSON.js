function main(firstName,lastName,hairColor){
    let obj = {
        firstName,
        lastName,
        hairColor
    };
    let json = JSON.stringify(obj);
    console.log(json);
}

main('George',
'Jones',
'Brown');