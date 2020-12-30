const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("Only spaces and letters will be included.", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal('jrufscpw');
    });
    it("Spaces should be maintained throughout.", () => {
        expect(substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('elp xhm xf mbymwwmfj dne');
    });
    
    it("Decoder actually decodes", () => {
        expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal('thinkful');
    });

    it("The alphabet parameter must be string of exactly 26 characters. Otherwise, it should return false.", () => {
        expect(substitution('thinkful', 'short')).to.equal(false);
    });
    it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false", () => {
        expect(substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')).to.equal(false);
    });
})
