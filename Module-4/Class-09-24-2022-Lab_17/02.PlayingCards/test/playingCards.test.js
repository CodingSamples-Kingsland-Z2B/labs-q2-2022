const assert = require("chai").assert;
const PlayingCards = require("../playingCards.js");

describe("Make a Card", function () {
	it("A S Should be An Ace of Spades (\u2660)", function () {
		let card = new PlayingCards("A", "S");
		assert.equal(card.toString(), "A\u2660");
	});
	it("10 H Should be a 10 of Hearts (\u2665)", function () {
		let card = new PlayingCards("10", "H");
		assert.equal(card.toString(), "10\u2665");
	});

	it("Invalid Inputs", function () {
		assert.throws(new PlayingCards("1", "C"),Error ,"Error");
	});
});
