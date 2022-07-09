function main(startL, endL, skipL) {
	let startN = startL.charCodeAt(0);
	let endN = endL.charCodeAt(0);
	let skipN = skipL.charCodeAt(0);
	let counter = 0;
	for (let first = startN; first <= endN; first++) {
		if (first != skipN) {
			for (let second = startN; second <= endN; second++) {
				if (second != skipN) {
					for (let third = startN; third <= endN; third++) {
						if (third != skipN) {
							counter++;
							let firstChar = String.fromCharCode(first);
							let secondChar = String.fromCharCode(second);
							let thirdChar = String.fromCharCode(third);

                            console.log(firstChar+secondChar+thirdChar);
						}
					}
				}
			}
		}
	}
    console.log(counter);
}

main('a', "d", 'b');
