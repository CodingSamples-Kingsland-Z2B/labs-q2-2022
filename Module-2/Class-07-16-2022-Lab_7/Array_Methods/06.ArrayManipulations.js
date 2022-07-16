function main(arr) {
	let arrOfNums = arr
		.shift()
		.split(" ")
		.map((element) => Number(element));
	//["4", "19", "2", '53', "6", "43"]
	change(arr, arrOfNums); //(arr, arrOfNums)

	console.log(arrOfNums.join(" "));

    

}
// commands = [ "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]

function change(commands, manipulate) {
    commands.forEach((command) => {
        let [action, num1, num2] = command.split(" ");
        
        if (action == "Add") {
            //Add {number}: add a number to the end of the array
            num1 = Number(num1);
            manipulate.push(num1);

        } else if (action == "Remove") {
            //Remove {number}: remove number from the array
            num1 = Number(num1);
            let index = manipulate.indexOf(num1);
            while(index !=-1){
                manipulate.splice(index,1);
                index = manipulate.indexOf(num1);
            }
            
        } else if (action == "RemoveAt") {
            //RemoveAt {index}: removes number at a given index
            num1 = Number(num1);
            manipulate.splice(num1,1);
        } else if (action == "Insert") {
            //Insert {number} {index}: inserts a number at a given index
            let num2Add = Number(num1);
            let index = Number(num2);
            manipulate.splice(index,0,num2Add);
        }
    });
    return manipulate;
}

main(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);