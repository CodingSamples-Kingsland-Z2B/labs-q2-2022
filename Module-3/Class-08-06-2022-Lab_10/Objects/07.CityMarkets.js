function main(stringsArray){
    //need to make object
    let cityMarkets ={};
    /*
        i will structure the object like this (you can make your own way) 
        {
            townName:{
                product: amountOf sales * price per unit
            }
        }
     */
    //use regex to get each part of the string
    let regex = /(?<town>\w+)[ ]?\-\> (?<product>.+) \-> (?<amountOfSales>\d+) \: (?<priceForOneUnit>0?\.?\d+)/;

    for(let string of stringsArray){
        let match = regex.exec(string);
        let town = match.groups.town;
        let product = match.groups.product;
        let amountOfSales = Number(match.groups.amountOfSales);
        let priceForOneUnit = parseFloat(match.groups.priceForOneUnit);
        let productTotalIncome = amountOfSales * priceForOneUnit;
        if(cityMarkets[town]==undefined){
            cityMarkets[town] ={};
            
        }
        setProduct(cityMarkets[town],product,productTotalIncome);
    }
    //console.log(cityMarkets)
    //print out the stuff
    for(let town in cityMarkets){
        console.log(`Town - ${town}`);
        for(let product in cityMarkets[town]){
            console.log(`$$$${product} : ${cityMarkets[town][product]}`);
        }
    }
}

function setProduct(town,product,productTotalIncome){
    if(town[product] ==undefined){
        town[product] = productTotalIncome;
    }else{
        town[product] += productTotalIncome;
    }
}


main(['Sydney -> Laptops HP -> 200 : 2000','Sydney -> Raspberry -> 200000 : 1500','Sydney-> Audi Q7 -> 200 : 100000','Montana -> Portokals -> 200000 : 1','Montana -> Qgodas -> 20000 : 0.2','Montana -> Chereshas -> 1000 : 0.3']);