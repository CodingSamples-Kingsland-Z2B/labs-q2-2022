function main(num1, num2, num3) {
	console.log(posOrNeg(num1, num2, num3));
}

function posOrNeg(num1, num2, num3) {
	if (num1 == 0 || num2 == 0 || num3 == 0) {
		return "Positive";
	}

	let numofNegs = countOfNegs(num1, num2, num3);

	if (numofNegs % 2 === 0) {
		return "Positive";
	} else {
		return "Negative";
	}
}

function countOfNegs(n1, n2, n3) {
	let count = 0;
	if (n1 < 0) {
		count++;
	}
	if (n2 < 0) {
		count++;
	}
	if (n3 < 0) {
		count++;
	}
	return count;
}

main(5, 0, -15); // 5*12*-15 - Neg
// num1, num2 , num3
// 1 negative ->  negative
// 2 negatives -> positive
// 3 negatives -> negative
