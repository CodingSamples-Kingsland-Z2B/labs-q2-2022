function main(base, power){
    //2^5 1 * 2 * 2 * 2 * 2 * 2
    //2^0 = 1
    let product = 1;

    for(let i=1;i<= power;i++){
        product *= base;
    }
    console.log(product);

}

main(2,5);//32
main(3,4);//81
main(2.5,3);//15.625