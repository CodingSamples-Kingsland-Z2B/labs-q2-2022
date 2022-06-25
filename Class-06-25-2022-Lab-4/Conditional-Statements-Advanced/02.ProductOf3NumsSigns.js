function main(num1,num2,num3){
    // logical way
    let numOfnegatives =0;

    if(num1 <0){
        numOfnegatives++;
    }
    if(num2 <0){
        numOfnegatives++;
    }
    if(num3 <0){
        numOfnegatives++;
    }
    
    if(num1==0 ||num2 ==0 || num3 ==0){
        console.log("Zero");
    }else if(numOfnegatives %2 ===0){
        console.log("Positive");
    }else{
        console.log("Negative");
    }

}

main(2,3,-1); // negative
main(-3,-4,5); // positive
main(-3,-4,-5); // negative
// 4 negatives // positive
main(-3,-4,0);// Zero





//simple with math
    // let product = num1 * num2 * num3;
    // if(product>0){
    //     console.log("Positive");
    // }else if(product<0){
    //     console.log("Negative");
    // }else{
    //     console.log("Zero");
    // }