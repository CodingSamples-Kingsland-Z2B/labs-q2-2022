function main(numA, numB, numC) {
    
	if (numA < numB && numB < numC) {
		console.log("Ascending");
	} else if (numA > numB && numB > numC) {
		console.log("Descending");
	} else {
		console.log("Not sorted");
	}
}

//main(1,2,3);//ascending
main(3, 5, 9); //decending order
// main(1,3,2);//Not sorted
// main(3,1,2);//Not sorted
