function subSum(array,startIndex,endIndex){
    if(typeof array !== "object" || array.length == undefined){
        return NaN;
    }
    let issue = array.find(item=> isNaN(Number(item)))
    if(issue != undefined){
        return NaN;
    }
    if(startIndex<0){
        startIndex =0;
    }
    if(endIndex >= array.length){
        endIndex = array.length -1;
    }
    let sum =0;
    for(let i=startIndex;i<=endIndex;i++){
        sum+= array[i];
    }
    let counter =0;
    if( parseInt(sum) !==parseFloat(sum)){
        let temp = sum;
        while(Math.floor(temp) %10 != 0){
            temp*=10;
            counter++;
        }
    }

    return parseFloat(sum.toFixed(counter));
    
}

// console.log(subSum([1.11, 2.2, 3.3, 4.4, 5.5], -3, 1))

module.exports = subSum;



