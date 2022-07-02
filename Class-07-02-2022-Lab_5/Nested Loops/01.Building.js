function main(countOfFloors, numOfEstates) {
	for (let floor = countOfFloors; floor > 0; floor--) {
		let output = "";
		for (let room = 0; room < numOfEstates; room++) {
			if (floor == countOfFloors) {
				output += `L${floor}${room} `;
			} else if (floor % 2 === 0) {
				output += `O${floor}${room} `;
			} else {
				output += `A${floor}${room} `;
			}
		}
		console.log(output.trim());
	}
}

main(5, 3);
