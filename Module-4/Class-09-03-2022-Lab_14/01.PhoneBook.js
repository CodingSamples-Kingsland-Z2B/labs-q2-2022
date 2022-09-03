function main(arrOfStrings){
    let phonebook = {};

    for(let input of arrOfStrings){
        let [name,number] = input.split(" ");

        phonebook[name] = number;
    }

    for(let name in phonebook){
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

main(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);