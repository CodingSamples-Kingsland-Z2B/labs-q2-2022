function main(stringsArray) {
    //make array to stor unique words, lowercase
    let wordsArray =[];

    //need to loop through the array of strings
    for( let string of stringsArray){
           //need to split up the string on non word characters and find the unique words
           //take out and white spaces
        let stringSplit = string.split(/\W+/).filter(word=> word!= "");
        
        //loop through the split string, and word that's not in the array already will be pushed in otherwise, skip
        for(let word of stringSplit){
            //make sure its all lowercase so it'll find correct matches
            word = word.toLowerCase();
            if(wordsArray.includes(word) === false){
                wordsArray.push(word);
            }
        } 
    }
    console.log(wordsArray.join(", "));

}

main([
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Pellentesque quis hendrerit dui.",
	"Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
	"Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
	"Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
	"Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
	"Integer ac turpis commodo, varius nulla sed, elementum lectus.",
	"Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.",
]);
