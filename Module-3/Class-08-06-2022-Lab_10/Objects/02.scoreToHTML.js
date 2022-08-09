function main(jsonArray) {
	
	//decode the json form the array holding the json
	let listOfScoreObjects = JSON.parse(jsonArray[0]);
	//get the keys out for the table header
	let keys = Object.keys(listOfScoreObjects[0]);
	//console.log(keys)
	// start the output table
	let table = "<table>\n";
	//make header
	let row = "  <tr>";
	for (let key of keys) {
		let th = "<th>";
		th += key;
        th += "</th>";	
		row += th;
	}
    row += "</tr>";
	table += row +"\n";
	//loop through array of objects to fill table
	for (let obj of listOfScoreObjects) {
		//create row
		let row ="  <tr>";
		for (let key in obj) {
			//create table data
			let td = "<td>";
			//take text out of object
			let text = String(obj[key]);
			//console.log(text);
			//get escaped text
			text =  encodeURIComponent(text);
			
			//add escaped text to table data
			td += text;
            td += "</td>";
			//add data to row
			row += td;
		}
        row += "</tr>";
		//add row to table
		table += row +"\n";
	}
    //finish table
    table += "</table>";
	//send out table
	console.log(table);
}

main(['[{"name":"Peter","score":479},{"name":"George","score":205}]']);
main(['[{"name":"Peter & Kiro","score":479},{"name":"George, Maria & Viki","score":205}]']);