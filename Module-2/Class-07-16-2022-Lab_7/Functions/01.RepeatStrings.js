function main(string,count){
    console.log(repeatString(string,count))
}

function repeatString(str,timesToRepeat){
    return str.repeat(timesToRepeat);
}

main("abc",3);