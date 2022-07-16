function main(arrOfNums) {
	let evenSum = 0;
	let oddSum = 0;

	for (let number of arrOfNums) {
		if (number % 2 === 0) {
			evenSum += number;
		} else {
			oddSum += number;
		}
	}
    console.log(evenSum - oddSum);
}
main([1, 2, 3, 4, 5, 6]);
main([3, 5, 7, 9]);
main([2, 4, 6, 8, 10]);
