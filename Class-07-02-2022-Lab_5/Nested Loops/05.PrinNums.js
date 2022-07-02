function main(start, end) {
	for (let currentNum = start; currentNum <= end; currentNum++) {
		let isPrime = true;
		for (let j = 2; j < currentNum; j++) {
			if (currentNum % j == 0 && currentNum != j) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			console.log(currentNum);
		}
	}
}

main(1, 50);
