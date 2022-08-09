function solve() {
	// document.getElementById('result').innerHTML =
	//   '<br />74 111 104 110<br />65 100 97 109 115<br />82 111 103 101 114<br />Kingsland ';
	//TODO...
	//step 1 get elements
	let textEl = document.getElementById("text");
	let resultEl = document.getElementById("result");
	resultEl.innerHtml = document.createElement("br");

	//get values and move relevant values to the variable we want them to be in
	let text = textEl.value;
	//"75 105 John Adams 110 103 115 Roger 108 97 110 100"
	let textArray = text.split(" ");

	//seperate the number with the strings
	let numberArray = textArray.filter((item) => {
		//"2" => 2 Number("2")
		// Number("a") => ? NaN
		return !isNaN(Number(item));
	});
	numberArray = numberArray.map(Number);
	let wordArray = textArray.filter((item) => {
		return isNaN(Number(item));
	});

	/* 
  find all the words and convert each letter to its ASCII number. If there are
other symbols such as "%", "@", "!" etc., convert them to their ASCII number as well.
  */
	for (let word of wordArray) {
		let p = document.createElement("p");
		let asciiArray = [];
		for (let letter of word) {
			asciiArray.push(letter.charCodeAt(0));
		}
		p.innerHTML = asciiArray.join(" ");
		resultEl.append(p);
	}

	/*all the numbers and convert them to
their ASCII char equivalent  */
	let p = document.createElement("p");
	let letterArray = [];
	for (let num of numberArray) {
		letterArray.push(String.fromCharCode(num));
	}
  p.innerHTML = letterArray.join("");
  resultEl.append(p);
}

