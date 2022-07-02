function main(listOfTransactions) {
    let balace = 0;

    let i=0;

    while(listOfTransactions[i] != "End" && i < listOfTransactions.length){

        let currTransaction = listOfTransactions[i];
        
        balace += currTransaction;
       
        if(currTransaction >=0){
            console.log(`Increase: ${currTransaction.toFixed(2)}`);
        }else{
            currTransaction = Math.abs(currTransaction);
            console.log(`Decrease: ${currTransaction.toFixed(2)}`);
        }
        i++;
    }
    console.log(`Balance: ${balace.toFixed(2)}`);

}

main([500, 15.5, -80.35, "End"]);
