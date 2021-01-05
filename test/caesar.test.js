const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("If a letter is shifted so that it goes off the alphabet (e.g. a shift of 3 on the letter z).", () => {
        expect(caesar("thinkful", 3 )).to.equal('wklqnixo');
        expect(caesar("thinkful", 3 )).to.not.equal('qefkhcri');
        expect(caesar("z", 3 )).to.equal('c');
    });

    it("If a letter is shifted so that it goes off the alphabet a shift of -3 on the letter a).", () => {
        expect(caesar("thinkful", -3 )).to.equal('qefkhcri');
        expect(caesar("thinkful", -3 )).to.not.equal('wklqnixo');
        expect(caesar("c", 3, false )).to.equal('z');
    });
    it("It actually decodes.", () => {
        expect(caesar("wklqnixo", 3, false )).to.equal('thinkful');
    });

    it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () => {
        expect(caesar('This !is @a #secret message!', 8)).to.equal('bpqa !qa @i #amkzmb umaaiom!');
    });
    it("Capital letters can be ignored.", () => {
        expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal('this is a secret message!');
    });

    it("If the shift value is not present or equal to 0 the function should return false.", () => {
        expect(caesar('thinkful')).to.be.false;
    });
    it("If the shift value is greater than 25, the function should return false.", () => {
        expect(caesar('thinkful', 99)).to.be.false;
    });
    it("If the shift is less than -25 the function should return false.", () => {
        expect(caesar('thinkful', -26)).to.be.false;
    });
    it("If the shift is 0 the function should return false.", () => {
        expect(caesar('thinkful', 0)).to.be.false;
    });

})