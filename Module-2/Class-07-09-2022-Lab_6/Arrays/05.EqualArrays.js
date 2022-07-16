function main(arr1,arr2){
    //conver array of strings to arrays of nums
    for(let index in arr1){
        arr1[index]= Number(arr1[index]);
    }
    for(let i in arr2){
        arr2[i]= Number(arr2[i]);
    }
    //check if the arrays are eqaul to each other
    let isIdentical = true;
    for(let i= 0;i<arr1.length;i++){
        //if one pair of indexes are not equal
        if(arr1[i]!= arr2[i]){
            //print out where we found the inequality and set that they are not equal
            isIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            //stop looping because we know ite not an identical pair
            break;
        }
    }
    //if we are identical (equal)
    if(isIdentical){
        let sum =0;
        //sum the values of the array
        for(let num of arr1){
            sum +=num;
        }
        //print that they are equal and the sum
        console.log(`Arrays are identical. Sum: ${sum}`);
    }


}




main(['10','20','30'], ['10','20','30']);
main(['1','2','3','4','5'], ['1','2','4','4','5']);
main(['1'], ['10']);
