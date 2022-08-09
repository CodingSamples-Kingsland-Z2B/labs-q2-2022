function main(arrayOfStrings){
    let townPop = {};
    //loop through the input array each even index (starting at 0) is a prop and the odd index are the values
    for(let i=0;i<arrayOfStrings.length;i++){
        let [key,value] = arrayOfStrings[i].split(" <-> ");
        //check if the prop exists in the object
        //if it doe not it will == undefined when indexed to in the object
        if(townPop[key]=== undefined){
            //assign the initial value to the prop
            //make sure its a number
            townPop[key] = Number(value);
        }else{
            //the prop already has value add the new value in
            townPop[key] += Number(value);
        }

    }
    //print object 
    for(let key in townPop){
        console.log(`${key}: ${townPop[key]}`);
    }
    
}

main(["Sydney <-> 1200000", "Montana <-> 20000", "New York <-> 10000000", "Washington <-> 2345000", "Las Vegas <-> 1000000"]);