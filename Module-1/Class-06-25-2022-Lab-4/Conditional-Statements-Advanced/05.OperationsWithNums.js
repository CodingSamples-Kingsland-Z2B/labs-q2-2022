function main(num1, num2, operator) {
	let output = 0;
	switch (operator) {
		case "+":
			output = num1 + num2;
			break;
		case "-":
			output = num1 - num2;
			break;
		case "*":
			output = num1 * num2;
			break;
		case "/":
			output = num1 / num2;
			break;
		case "%":
			output = num1 % num2;
			break;
	}
	console.log(`${num1} ${operator} ${num2} = ${output}`);
}

main(12, 2, "^");
