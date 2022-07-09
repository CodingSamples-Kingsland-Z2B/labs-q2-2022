function main(length,listofNums){
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < length; i++) {
		let curNum = listofNums[i];
        
		if (min > curNum) {
			min = curNum;
		}
		if (max < curNum) {
			max = curNum;
		}
	}
    console.log("Min number: "+min);
    console.log("Max number: "+max);
}

main(3,[10,350,50]);