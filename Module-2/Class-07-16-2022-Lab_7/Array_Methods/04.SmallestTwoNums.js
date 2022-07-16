function main(arr){

    let sortedArray = arr.sort((a, b) => a - b);
    
    console.log(sortedArray.slice(0,2).join(" "));
}


main([3, 0, 10, 4, 7, 3]);