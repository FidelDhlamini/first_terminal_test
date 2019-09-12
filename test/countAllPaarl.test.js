let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('it should return the number of registration numbers in the string for Paarl', function(){
        assert.equal(countAllPaarl("CJ345123,CJ2345,CJ123"), 3);    
    });
    it('shoud not count non-Paarl registration numbers', function(){
        assert.equal(countAllPaarl("GP345123,CJ2345 "), 1);    
    });
    it('it should return message if no licence is passed in', function(){
        assert.equal(countAllPaarl(""), 'enter a reg Number');    
    });
    it('it should test for valid reg', function(){
        assert.equal(countAllPaarl("CA76678"), 'This registration number is not for Paarl');    
    });
   
});