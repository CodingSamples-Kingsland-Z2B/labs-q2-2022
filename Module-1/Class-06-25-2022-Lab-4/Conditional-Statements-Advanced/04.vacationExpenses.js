function main(season, accType, days) {
	let total = 0;
	let price = 0;
	switch (season) {
		case "Spring":
			switch (accType) {
				case "Hotel":
					price = days * 30;
					total = price * (1 - 0.2);
					break;
				case "Camping":
					price = days * 10;
					total = price * (1 - 0.2);
					break;
			}
			break;
		case "Summer":
			switch (accType) {
				case "Hotel":
					price = days * 50;
					total = price * 1;
					break;
				case "Camping":
					price = days * 30;
					total = price * 1;
					break;
			}
			break;
		case "Autumn":
			switch (accType) {
				case "Hotel":
					price = days * 20;
					total = price * (1 - 0.3);
					break;
				case "Camping":
					price = days * 15;
					total = price * (1 - 0.3);
					break;
			}
			break;
		case "Winter":
			switch (accType) {
				case "Hotel":
					price = days * 40;
					total = price * (1 - 0.1);
					break;
				case "Camping":
					price = days * 10;
					total = price * (1 - 0.1);
					break;
			}
			break;
	}
	console.log(total.toFixed(2));
}

main("Winter", "Hotel", 5);
