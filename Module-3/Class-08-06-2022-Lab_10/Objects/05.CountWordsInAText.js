function main(inputString) {
    let inputArray = inputString[0].split(/\W+/).filter(word => word != "");
    //console.log(inputArray);
	let wordsCount = {};
    //loop through the input string as and array count if words appear more than once
    for(let i=0;i<inputArray.length;i++){
        //check if the word exists in the object
        //if it does not it will == undefined when indexed to in the object
        if(wordsCount[inputArray[i]]=== undefined){
            //assign the initial value to the prop to 1 instance of a found word
            //make sure its a number
            wordsCount[inputArray[i]] =1;
        }else{
            //the prop already has value add 1 to indicate this is the next time we found the word
            wordsCount[inputArray[i]]++;
        }

    }
    //make json
    let json = JSON.stringify(wordsCount);
    //print json
    console.log(json);
}

main(['JS devs use Node.js for server-side JS.-- JS for devs']);