function main(arrayOfStrings){

    let propNames = arrayOfStrings.shift().split("|").filter(word=> word !="").map(word=> word.trim());
    //console.log(propNames);
    let towns = [];
    for(let string of arrayOfStrings){
        let townItems = string.split("|").filter(word=> word !="").map(word=> word.trim());
        let town = {};
        town[propNames[0]] = townItems[0];
        town[propNames[1]] = parseFloat(parseFloat(townItems[1]).toFixed(2));
        town[propNames[2]] = parseFloat(parseFloat(townItems[2]).toFixed(2));
        towns.push(town);
    }
    townJSON = JSON.stringify(towns);
    console.log(townJSON);
}

main(['| Town | Latitude | Longitude |',
'| Melbourne |-37.840935 | 144.946457|',
'| Beijing | 39.913818 | 116.363625 |']);