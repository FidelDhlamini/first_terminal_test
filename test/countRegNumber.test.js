let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('It should count the number of registration numbers in the string', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);      
    });
    it('It should return a message if the string is empty', function(){
        assert.equal(countRegNumber(''),'string is empty');      
    });
    
});