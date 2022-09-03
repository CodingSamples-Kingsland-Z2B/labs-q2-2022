function main(arrOfStrings){
    let storage = new Map();

    for(let input of arrOfStrings){
        let [name,amount] = input.split(" ");
        amount = Number(amount);
        if(storage.has(name)){
            let oldAmount = storage.get(name);
            let newAmount = oldAmount+ amount;
            storage.set(name,newAmount);
        }else{
            storage.set(name,amount);
        }
    }

    let mapArray = Array.from(storage);

    for(let [item,amount] of mapArray){
        console.log(`${item} -> ${amount}`);
    }
}

main(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);