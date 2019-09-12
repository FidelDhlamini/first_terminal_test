let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('it should return true if license plate is for Bellville', function(){
        assert.equal(isFromBellville('CY'), true);      
    });
    it('it should return false if license plate is not for Bellville', function(){
        assert.equal(isFromBellville('CJ'), false); 
    });
});