function main(arrOfStrings) {
	let neigborH = new Map();

	let streets = arrOfStrings.shift().split(", ");
	streets.forEach((street) => {
		neigborH.set(street, []);
	});

	for (let input of arrOfStrings) {
		let [street, person] = input.split(" - ");
		if (neigborH.has(street)) {
			let list = neigborH.get(street);
			list.push(person);
		}
	}

	let sortedHoods = Array.from(neigborH).sort(
		(a, b) => b[1].length - a[1].length
	);

	for (let [name, people] of sortedHoods) {
		console.log(`${name}: ${people.length}`);
		people.forEach(person => console.log(`--${person}`));
	}
}

main([
	"Abbey Street, Herald Street, Bright Mews",
	"Bright Mews - Garry",
	"Bright Mews - Andrea",
	"Invalid Street - Tommy",
	"Abbey Street - Billy",
]);
