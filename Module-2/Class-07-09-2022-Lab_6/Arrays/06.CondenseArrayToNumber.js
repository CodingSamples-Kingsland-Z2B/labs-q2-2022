function main(arrOfNums){
    //while our array length is greater than one
    while(arrOfNums.length >1){
        //build new array
        let condensedArray =[];
        //condence to new array with length -1
        for(let i=0;i<arrOfNums.length-1;i++){
            condensedArray[i] = arrOfNums[i] + arrOfNums[i+1];
        }
        //assign back to the origional
        arrOfNums = condensedArray;
    }

    console.log(arrOfNums.join(""));
}

main([2,10,3]);
main([5,0,4,1,2]);
//5,4,5,3
//9,9,8
//18,17
//35 
main([1]);