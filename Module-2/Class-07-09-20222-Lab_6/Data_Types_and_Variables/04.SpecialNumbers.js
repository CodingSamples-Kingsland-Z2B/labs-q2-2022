function main(n) {
	for (let i = 1; i <= n; i++) {
		let sum = 0;
		//adds the digits of the number together
		//1 -> 0.1 -> 0
		for (let currNum = i; currNum > 0; currNum = parseInt(currNum / 10)) {
			sum += currNum % 10;
		}
		//string version of above
		// let numStr = i.toString(); //1 => "1"
		// for(let j =0; j<numStr.length;j++ ){
		//     sum += Number(numStr[i]);
		// }

		if (sum == 5 || sum == 7 || sum == 11) {
			console.log(`${i} -> True`);
		} else {
			console.log(`${i} -> False`);
		}
	}
}

main(15);
