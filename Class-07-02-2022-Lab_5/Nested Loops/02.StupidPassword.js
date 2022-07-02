function main(num){

    let output = "";
    for(let i=2;i<=num;i= i + 2){
        for(let j=1;j<=num;j+=2){
           
            output += i.toString()+j.toString()+(i*j)+" ";
        }
    }
    console.log(output);
}

main(6);
//main(11);