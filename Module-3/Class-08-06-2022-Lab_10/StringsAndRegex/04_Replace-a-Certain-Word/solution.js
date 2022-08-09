function solve() {

    //get elements from page

    let wordEL = document.getElementById("word");
    let textEl = document.getElementById("text");

    let resultEl = document.getElementById("result");

    // get values from the required elements
    let word = wordEL.value;
    let textArray = JSON.parse(textEl.value);
    //get The word that needs to be replaced in each of the strings it's in the text array at the second index.
    let wordToReplace = textArray[0].split(" ")[2];
    //make the word regex to find the word
    // i flag mean case insensitive so the match will not care about letter's casing
    let regex = new RegExp(wordToReplace,"i");
    //replace the old word with the new one
    //make p tags and add the word to the page
    textArray.forEach(text =>{
       let newText =text.replace(regex,word);
       let p =document.createElement("p");
       p.innerHTML = newText;
       resultEl.append(p);
    });

    
}