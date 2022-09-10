function main() {
	let mage = (name) => {
		return {
			name,
			heath: 100,
			mana: 100,
			cast: function (spellName) {
				this.mana--;
				console.log(`${this.name} cast ${spellName}`);
			},
		};
	};
	let fighter = (name) => {
		return {
			name,
			heath: 100,
			stamina: 100,
			fight: function (spellName) {
				this.stamina--;
				console.log(`${this.name} slashes at the foe!`);
			},
		};
	};
	return { mage, fighter };
}

let create = main();
console.log(create);
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
