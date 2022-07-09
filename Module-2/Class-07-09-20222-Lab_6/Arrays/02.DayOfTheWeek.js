function main(dayNumber) {
	let week = ["Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday","Sunday"];

	if (dayNumber >= 1 && dayNumber <= 7) {
		console.log(week[dayNumber - 1]);
	} else {
		console.log("Invalid day!");
	}
}


main(1); //Monday
main(3); //Wednesday
main(6); //Saturday
main(33); //Invalid day!
