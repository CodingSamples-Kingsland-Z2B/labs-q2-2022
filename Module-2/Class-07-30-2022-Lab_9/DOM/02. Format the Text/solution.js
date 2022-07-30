/* 
You need to create a new paragraph element which holds no more than 3 sentences from the given input.
• If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these
sentences and append this paragraph to the div with an id "output".
Otherwise, when you have more than 3 sentences in that input paragraph, you need to create enough paragraphs
to get all sentences from the input text.
Just remember to restrict the sentences in each paragraph to 3.
*/
function solve() {
	let inputText = document.getElementById("input").innerHTML;
	let output = document.getElementById("output");

	//split up the input string into sentences
	let arrayOfSentences = inputText.split(". ");
	//now that the sentences are seperated we need to go though and add them to paragraphs
	//at most 3 at a time
  console.log(arrayOfSentences);
  console.log(arrayOfSentences[arrayOfSentences.length-1]);
 
	for (let i = 0; i < arrayOfSentences.length; i += 3) {
		let p = document.createElement("p");
		for (let j = i; j < i + 3 && j < arrayOfSentences.length; j++) {
      if(j == arrayOfSentences.length-1){
        p.textContent += arrayOfSentences[j];
      }else{
        p.textContent += arrayOfSentences[j] + ". ";
      }
			
		}
    output.append(p);
	}

}
