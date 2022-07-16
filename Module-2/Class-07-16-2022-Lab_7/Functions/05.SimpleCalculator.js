function main(n1, n2, op) {
	simpleCalc(n1, n2, op);
}

function simpleCalc(num1, num2, operator) {
	switch (operator) {
		case "multiply":
			console.log(mult(num1, num2));
			break;
		case "divide":
			console.log(div(num1, num2));
			break;
		case "add":
			console.log(add(num1, num2));
			break;
		case "subtract":
			console.log(sub(num1, num2));
			break;
	}
}

function add(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
function mult(a, b) {
	return a * b;
}
function div(a, b) {
	return a / b;
}

main(5, 5, "multiply");
