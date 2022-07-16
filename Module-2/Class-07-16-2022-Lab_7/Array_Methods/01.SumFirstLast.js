function main(arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first+last);
}

main(['5','10']);