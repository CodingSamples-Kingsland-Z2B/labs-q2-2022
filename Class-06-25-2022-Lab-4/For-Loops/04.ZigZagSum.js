function main(length, listofNums) {
	let sum = 0;

	for (let i = 0; i < length; i++) {
		let currentNum = listofNums[i];
		if ((i + 1) % 2 === 0) {
			sum -= currentNum;
		} else {
			sum += currentNum;
		}
	}
	console.log(sum);
}
main(2, [10, -20]); //30
main(3, [10, 20, 5]); //-5
