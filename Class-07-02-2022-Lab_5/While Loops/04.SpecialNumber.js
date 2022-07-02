function main(num) {
	let special = true;

	let numCopy = num;
	while (numCopy > 0) {
		let currentDigit = numCopy % 10;

		if (num % currentDigit != 0 && currentDigit != 0 ) {
			special = false;
			break;
		}

		numCopy = Math.floor(numCopy / 10);
	}

	if(special){
        console.log(`${num} is special`);
    }else{
        console.log(`${num} is not special`);
    }
}

main(23); //not
main(204);// yes
 //204/4 52  0  204/2 102