function main(arr){
    for(let i=0;i< arr.length/2;i++){
        //swap code
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp ;
    }

    console.log(arr.join(" "));
}

// cheaty way
// function main(arr){
//     console.log(arr.reverse().join(" "));
// }

main(['a', 'b', 'c', 'd', 'e']);
main(['abc', 'def', 'hig', 'klm', 'nop']);
main(['33', '123', '0', 'dd']);