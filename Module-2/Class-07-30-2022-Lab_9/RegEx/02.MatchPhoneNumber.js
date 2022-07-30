function main(potenctialNumbers){
    let regex = /\+404([ -])\d{3}(\1)\d{4}\b/g;

    let validNumbers = [];
    let validNumber = regex.exec(potenctialNumbers);
    while(validNumber!= null){
        validNumbers.push(validNumber[0]);
        //console.log(validNumber);
        validNumber = regex.exec(potenctialNumbers);
    }

    console.log(validNumbers.join(", "));
}

main(`+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222`);