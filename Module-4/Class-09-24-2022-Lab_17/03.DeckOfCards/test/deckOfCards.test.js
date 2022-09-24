const assert = require("chai").assert;
const createCardDeck = require("../deckOfCards.js");

describe("valid input",function(){
    it("prints the deck of card",function(){
        assert(createCardDeck(['AS', '10D', 'KH', '2C']),"A♠ 10♦ K♥ 2♣")
    })
});

describe("invalid input",function(){
    it("Print out the Invalid Card",function(){
        assert.equal(createCardDeck(['5S', '3D', 'QD', '1C']),"Invalid card: 1C");
    })
});