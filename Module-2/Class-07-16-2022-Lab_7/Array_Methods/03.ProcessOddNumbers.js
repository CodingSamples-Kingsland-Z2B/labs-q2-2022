function main(arr){
    let newArray = arr.filter((item,index)=>{
       return index % 2 !=0; 
    });
    newArray = newArray.map(element=>element*2).reverse();
    console.log(newArray.join(" "));
}

main([10, 15, 20, 25])//50 30



// function main2(arr){
//     let newArray = arr.filter((item,index)=>{
//        return index % 2 !=0; 
//     }).map(element=>element*2).reverse().join(" ");
//     console.log(newArray);
// }