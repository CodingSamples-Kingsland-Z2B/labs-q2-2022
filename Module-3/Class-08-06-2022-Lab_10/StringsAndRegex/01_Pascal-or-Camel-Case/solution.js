/* 
Write a function that takes two string parameters as an input.
● The first parameter will be the text that you need to modify depending on the second parameter. The
words in it will always be separated by space.
● The second parameter will be either "Camel Case" or "Pascal Case". In case of a different input, you
should print "Error!"
Convert the first string to either of the cases. The output should consist of only one word - the string you have
modified. For more information, see the examples below:
Example

Input Output
"this is an example", "Camel Case"  thisIsAnExample
"secOND eXamPLE", "Pascal Case" SecondExample
"Invalid Input", "Another Case" Error!
*/

function solve() {
	//TODO...
	//step 1 get the items from the page
	let textElement = document.getElementById("text");
	let namingConventionElement = document.getElementById("naming-convention");
	let result = document.getElementById("result");

	//step 2 get the values from the input elements then clear the page side
	//console.log(textElement.value);
	let text = textElement.value;
	textElement.value = "";
	let namingConvention = namingConventionElement.value;
	namingConventionElement.value = "";

	//step 3 make the changes to the text then add it back to the output(result) area of the page
	if (namingConvention === "Camel Case") {
		//do camel case stuff
		result.textContent = toCamelCase(text);
	} else if (namingConvention === "Pascal Case") {
		//do Pascal case stuff
		result.textContent = toPascalCase(text);
	} else {
		result.textContent = "Error!";
	}
}

function toCamelCase(string) {
	let stringArray = string.split(" ");
	stringArray = stringArray.map((word) => word.toLowerCase());
	let camelCaseArray = [];
	camelCaseArray.push(stringArray.shift());
	//["is", "an", "example"]
	for (let i = 0; i < stringArray.length; i++) {
		let capitolizedWord = stringArray[i].replace(
			stringArray[i][0],
			stringArray[i][0].toUpperCase()
		);
		camelCaseArray.push(capitolizedWord);
	}
	//["this", "Is", "An", "Example"]
	return camelCaseArray.join("");
}

function toPascalCase(string) {
	let stringArray = string.split(" ");
	stringArray = stringArray.map((word) => word.toLowerCase());
	let pascalCaseArray = stringArray.map((word) => {
		return word.replace(word[0], word[0].toUpperCase());
	});

	//["this", "Is", "An", "Example"]
	return pascalCaseArray.join("");
}
