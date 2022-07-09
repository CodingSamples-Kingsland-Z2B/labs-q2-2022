function main(length, listofChars) {
	let sum = 0;

	for (let i = 0; i < length; i++) {
		let curChar = listofChars[i];
		if (curChar === "a") {
			sum++;
		} else if (curChar === "e") {
			sum += 2;
		} else if (curChar === "i") {
			sum += 3;
		} else if (curChar === "o") {
			sum += 4;
		} else if (curChar === "u") {
			sum += 5;
		}
	}

	console.log(sum);
}

main(3, ["i", "x", "u"]);

/* 

	     switch (curChar) {
			case "a":
				sum++;
				break;
			case "e":
				sum += 2;
				break;
			case "i":
				sum += 3;
				break;
			case "o":
				sum += 4;
				break;
			case "u":
				sum += 5;
				break;
		}
*/
