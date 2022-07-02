function main(listOfNums) {
	let min = Infinity;
	let max = -Infinity;

	let i = 0;
	while (listOfNums[i] != "END" && i < listOfNums.length) {
		let currentNum = listOfNums[i];

		if (currentNum > max) {
			max = currentNum;
		}
		if (currentNum < min) {
			min = currentNum;
		}

		i++;
	}

	console.log("Min number: " + min);
	console.log("Max number: " + max);
}

main([10, 20, 304, 0, 50, "END"]);
