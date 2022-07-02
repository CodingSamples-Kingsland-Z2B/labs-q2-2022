function main(max1, max2, max3) {
	for (let num1 = 2; num1 <= max1; num1 += 2) {
		for (let num2 = 2; num2 <= max2; num2++) {
			if (num2 === 2 || num2 === 3 || num2 === 5 || num2 === 7) {
				for (let num3 = 2; num3 <= max3; num3 += 2) {

                    console.log(`${num1}${num2}${num3}`);
                }
			}
		}
	}
}

main(3, 5, 5);
