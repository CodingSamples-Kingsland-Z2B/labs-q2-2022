function main(happyNumber) {
    let output= "";
	for (let num1 = 1; num1 <= happyNumber; num1++) {
		for (let num2 = 0; num2 <= happyNumber; num2++) {
			for (let num3 = 0; num3 <= happyNumber; num3++) {
				for (let num4 = 0; num4 <= happyNumber; num4++) {
                    if(num1 + num2 === happyNumber && num3 + num4 === happyNumber){
                        output+= `${num1}${num2}${num3}${num4} `;
                    }
                }
			}
		}
	}
    console.log(output);
}

main(3); // 1000
