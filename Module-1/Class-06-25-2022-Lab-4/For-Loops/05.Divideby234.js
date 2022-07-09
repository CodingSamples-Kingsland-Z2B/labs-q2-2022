function main (length,listOfNums){
    let div2 =0;
    let div3 =0;
    let div4 =0;

    for( let i=0;i<length;i++){
        let currentNum = listOfNums[i];
        if(currentNum %2 ===0){
            div2++;
        }
        if(currentNum %3 ===0){
            div3++;
        }
        if(currentNum %4 ===0){
            div4++;
        }
    }
    // got / total *100
    let percent2 = div2 / length * 100;
    let percent3 = div3 / length * 100;
    let percent4 = div4 / length * 100;

    console.log(percent2.toFixed(2)+"%");
    console.log(percent3.toFixed(2)+"%");
    console.log(percent4.toFixed(2)+"%");
}

main(3,[3,6,9]);
main(3,[4,6,3]);