function main(array, callback){
    let newArray = array.reduce((acc,curr)=>{
       
        acc.push(callback(curr));
        return acc;
    },[]);
    return newArray;
}

// function main(array, callback){
//     let newArray = [];

//     for(let item of array){
//         let update = callback(item);
//         newArray.push(update);
//     }
//     return newArray;
// }


let nums = [1,2,3,4,5];
console.log(main(nums,(item)=> item * 2));

let letters = ["a","b","c"];
console.log(main(letters,(l)=>l.toLocaleUpperCase())) // [ 'A', 'B', 'C' ]