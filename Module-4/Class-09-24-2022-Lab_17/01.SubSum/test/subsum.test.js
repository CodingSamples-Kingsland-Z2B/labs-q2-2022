const chai = require("chai");
const assert = chai.assert;
const subSum = require("../subsum.js");


describe('Valid Array', () => { 
    it("out of range for end index should only read until end index",function(){
        assert.equal(subSum([10, 20, 30, 40, 50, 60], 3, 300),150);
    });
    it("out of range for start index should start at the 0 index",function(){
        assert.equal(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1),3.3);
    });
    it("Empty array should output 0",function(){
        assert.equal(subSum([], 1, 2),0);
    });
});

describe('Valid Array, invalid inputs', () => { 
    it("if non number in array output should be NaN",function(){
        assert.isNaN(subSum([10, 'twenty', 30, 40], 0, 2),"String in array makes output NaN");
        //NaN ===NaN => false
        //isNaN()
    });
});

describe('Invalid Array', () => { 
    it("if array input is not of type array then ouput should be NaN",function(){
        assert.isNaN(subSum('text', 0, 2),"String input instead of array outputs NaN");
    });
});