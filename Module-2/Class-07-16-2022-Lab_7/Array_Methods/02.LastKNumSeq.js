function main(finalLength, lookBack) {
	let sequence = [1];
	for (let buildingIndex = 1; buildingIndex < finalLength; buildingIndex++) {
		let lowestLookBackIndex = Math.max(0, buildingIndex - lookBack);
		//conditional way of doing line 4
		// let lowestLookBackIndex = 0;
		// if(buildingIndex - lookBack >0){
		//     lowestLookBackIndex = buildingIndex - lookBack;
		// }

		let sum = 0;
		for (let j = buildingIndex - 1; j >= lowestLookBackIndex; j--) {
			sum += sequence[j];
		}
		sequence.push(sum);
	}
	console.log(sequence.join(" "));
}

main(6, 3); //[ 1,1,2,4,7,13,  ]
//              0 1 2 3 4 5
//               <--
// 1 1
// 0 1 2 3 4
