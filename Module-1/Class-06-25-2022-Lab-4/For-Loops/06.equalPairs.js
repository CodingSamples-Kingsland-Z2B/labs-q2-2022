function main(numOfPairs, listOfPairs) {
	let lastSum = 0;
	let maxDifference = 0;
    // [-1,0,0,-1]
	for (let i = 0; i < numOfPairs * 2; i += 2) {
		let pairSum = listOfPairs[i] + listOfPairs[i + 1];
		if (i !== 0) {
			if (pairSum != lastSum) {
				maxDifference = Math.abs(pairSum - lastSum);
			}
		}
		lastSum = pairSum;
	}

	if (maxDifference != 0) {
		console.log(`No, maxdiff=${maxDifference}`);
	} else {
		console.log(`Yes, value=${lastSum}`);
	}
}

main(2, [-1, 0, 0, -1]);
main(2, [5, 6, 3, 7]);
