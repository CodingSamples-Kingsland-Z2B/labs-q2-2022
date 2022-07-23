function main(name,area,population,country,postCode){
    let city = {
        name,
        area,
        population,
        country,
        postCode
    };
    let cityEntries = Object.entries(city);
    for(let [key,value] of cityEntries){
        console.log(`${key} -> ${value}`);
    }
}

main("Atlanta", "343", "416474", "USA", "404");