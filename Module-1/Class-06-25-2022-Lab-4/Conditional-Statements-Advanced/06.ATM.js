function main(balance, withdrawAMT, withdrawLimit) {
	//complex conditioal way
    // if (balance > withdrawAMT && withdrawAMT <= withdrawLimit) {
	// 	console.log("The withdrawal was successful.");
	// } else if (withdrawAMT > withdrawLimit) {
	// 	console.log("The limit was exceeded.");
	// } else {
	// 	console.log("Insufficient availability.");
	// }

	// simple conditioal way
	if (withdrawAMT > withdrawLimit) {
		console.log("The limit was exceeded.");
	} else if (balance < withdrawAMT) {
		// "Insufficient availability."
		console.log("Insufficient availability.");
	} else {
		console.log("The withdrawal was successful.");
	}
}

main(420, 20, 25); // "The withdrawal was successful."
main(10, 50, 20); // "The limit was exceeded."
main(15, 20, 25); // "Insufficient availability."
