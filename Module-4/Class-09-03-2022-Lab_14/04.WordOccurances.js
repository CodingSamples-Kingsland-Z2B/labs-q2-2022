function main(arrOfStrings) {
	let wordOccurance = new Map();

	for (let word of arrOfStrings) {
		if (wordOccurance.has(word)) {
			let oldcount = wordOccurance.get(word);
			let newCount = oldcount + 1;
			wordOccurance.set(word, newCount);
		} else {
			wordOccurance.set(word, 1);
		}
	}

	// asc a-b dec b-a [word, count]
	let sortedOccurance = Array.from(wordOccurance).sort((a, b) => b[1] - a[1]);

	for (let [item, amount] of sortedOccurance) {
		console.log(`${item} -> ${amount} times`);
	}
}

main([
	"Here",
	"is",
	"the",
	"first",
	"sentence",
	"Here",
	"is",
	"another",
	"sentence",
	"And",
	"finally",
	"the",
	"third",
	"sentence",
]);
