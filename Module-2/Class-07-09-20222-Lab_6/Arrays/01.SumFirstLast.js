function main(arrOfStrings){
    let first = Number(arrOfStrings[0]);
    let last = Number(arrOfStrings[arrOfStrings.length-1]);
    console.log(first+last);
}

main(['20', '30', '40']);
main(['10', '17', '22', '33']);
main(['11', '58', '69']);