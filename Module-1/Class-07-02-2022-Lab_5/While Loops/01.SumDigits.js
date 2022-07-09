function main(num){
    num = Math.abs(num);
    let sum=0;
    // math
        // while(num>0){
        //     sum += num %10;
            
        //     num = Math.floor(num/10);
        // }
        //     console.log(sum);
    //string
    let wordNum = num.toString();
    let i=0;
    while(i< wordNum.length){
        sum+= Number(wordNum[i]);
        i++;
    }
    console.log(sum);
}

main(5634);//18
main(150); //6
main(-532);//10