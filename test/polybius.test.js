const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("It actually encodes", () => {
        expect(polybius('thinkful')).to.equal('4432423352125413');
    })
    it("that no additional symbols will be included as part of the input. Only spaces and letters will be included.", () => {
        expect(polybius('He!ll!o ??world#@ He!ll!o ??world#@')).to.equal('3251131343 2543241341 3251131343 2543241341');
    });
    it("It ignores capital letters", () => {
        expect(polybius('THINKFUL')).to.equal('4432423352125413');
    })
    

    it("It actually decodes", () => {
        expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
    }) 
    
    it('i & j can be converted to 42', ()=>{
        expect(polybius('ij')).to.equal('4242');
    })

    it("When decoding 42, both letters should somehow be shown i/j.", () => {
        expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful');
    });

    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
        expect(polybius('44324233521254134', false)).to.be.false;
    });
})