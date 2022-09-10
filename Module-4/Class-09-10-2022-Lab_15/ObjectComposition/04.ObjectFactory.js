function main(jsonInput) {
	let objList = JSON.parse(jsonInput);

	const concatenate = (a, o) => ({ ...a, ...o });
	let output = objList.reduce(concatenate, {});

    console.log(output);
}

main(`[{"canMove": true},{"canMove":true,
"doors": 4},{"capacity": 5}]`);

main(`[{"canFly": true},{"canMove":true,
"doors": 4},{"capacity":
255},{"canFly":true, "canLand":
true}]`)
