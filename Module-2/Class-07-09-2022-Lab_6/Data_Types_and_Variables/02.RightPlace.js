function main(missingChar,char,comparisonString){

    let correctedString = missingChar.replace("_", char);
    if(correctedString === comparisonString){
        console.log("Matched");
    }else {
        console.log("Not Matched");
    }
}

main('Str_ng', 'I', 'Strong');//not matched
main('Str_ng', 'i', 'String');//matched