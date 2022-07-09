function main(magicNum) {
	for (let first = 1; first <= magicNum; first++) {
		for (let second = 1; second <= magicNum; second++) {
			for (let third = 1; third <= magicNum; third++) {

                if(first* second*third === magicNum){
                    console.log(`${first}${second}${third}`);
                }
            }
		}
	}
}

main(1);

main(3);

// 111
