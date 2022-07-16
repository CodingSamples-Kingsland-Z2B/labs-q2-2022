function main(arr){
    let sortedArr = arr.sort();
    sortedArr.forEach((element,index) => {
        console.log(`${index+1}.${element}`);
    });
}

main(["Potatoes",
"Tomatoes",
"Onions",
"Apples"]);

function main2(arr){
    arr.sort().forEach((element,index) => {
        console.log(`${index+1}.${element}`);
    });
}