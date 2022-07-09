function main(destSavings){

    let currentValue = destSavings.shift();

    while(currentValue != "End" && currentValue != undefined){
        let dest = currentValue;

        let neededBudget = destSavings.shift();
        let currSaved=0;
        while(currSaved < neededBudget){
            let deposit = destSavings.shift();
            currSaved+=deposit;
            console.log(`Collected: ${currSaved}`);
            if(currSaved>neededBudget){
                console.log(`Going to ${dest}!`);
                break;
            }
        }
        currentValue = destSavings.shift();

    }


}

main(['Singapore', 5000, 300, 3000, 2500, 'Philippines', 2000, 500,500,1300, 'End']);