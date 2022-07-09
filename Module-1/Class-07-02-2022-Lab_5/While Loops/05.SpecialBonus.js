function main(stopNum, listOfNums) {

    let previousValue = 0;

    let currentValue = listOfNums.shift();

    while(currentValue != stopNum && currentValue!= undefined){
        previousValue= currentValue;
        
        currentValue = listOfNums.shift();
    }

    previousValue = previousValue + (previousValue*0.2);
    console.log(previousValue);

}

main(25, [20, 30, 25]);
