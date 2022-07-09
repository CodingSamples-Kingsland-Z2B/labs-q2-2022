function main(distance,passengers,price){
    //fuel needed for the unloaded bus
    let fuelNeeded = distance/100 * 7;
    //add the passers fuel consumption
    //100ml => 0.100 L
    fuelNeeded += passengers * 0.100;
    let totalCost = fuelNeeded * price;
    console.log(`Needed money for that trip is ${totalCost}lv.`);
    
}

main(260,9,2.49);

main(90,14,2.88);