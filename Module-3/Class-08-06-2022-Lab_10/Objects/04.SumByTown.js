function main(inputArray) {
	let townObj = {};
    //loop through the input array each even index (starting at 0) is a prop and the odd index are the values
    for(let i=0;i<inputArray.length;i+=2){
        //check if the prop exists in the object
        //if it doe not it will == undefined when indexed to in the object
        if(townObj[inputArray[i]]=== undefined){
            //assign the initial value to the prop
            //make sure its a number
            townObj[inputArray[i]] = Number(inputArray[i+1]);
        }else{
            //the prop already has value add the new value in
            townObj[inputArray[i]] += Number(inputArray[i+1]);
        }

    }
    //make json
    let json = JSON.stringify(townObj);
    //print json
    console.log(json);
}

main(["Sydney", "20", "Melbourne", "3", "Sydney", "5", "Melbourne", "4"]);
