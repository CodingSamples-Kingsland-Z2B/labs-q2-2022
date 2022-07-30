function main(inputString) {
	let regex =
		/\b(?<day>\d{2})([/.-])(?<month>[A-Z][a-z]{2})(\2)(?<year>\d{4})\b/g;
	let dateObjArray = [];

	let dateMatch = regex.exec(inputString);
	while (dateMatch != null) {
		let dateObj = {
			day: dateMatch.groups["day"],
			month: dateMatch.groups["month"],
			year: dateMatch.groups["year"]
		};
		dateObjArray.push(dateObj);
		dateMatch = regex.exec(inputString);
	}

	for (let dateObj of dateObjArray) {
		console.log(
			`Day: ${dateObj.day}, Month: ${dateObj.month}, Year: ${dateObj.year}`
		);
	}
}

main(
	"13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
);
