class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	get fullName() {
		return this.firstName + " " + this.lastName;
	}
	// "first last"
	set fullName(name) {
		let [first, last] = name.split(" ");
		if (last == undefined || last == "") {
			return;
		}
		this.firstName = first;
		this.lastName = last;
	}
}

let person = new Person("Albert", "Simpson");
person.fullName = "Peter Parker";

console.log(person.fullName);
