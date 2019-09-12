let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('it should take a CY registration number and return the town the car is from', function(){
        assert.equal(fromWhere('CY'),'Bellville');    
    });
    it('it should take a CJ registration number and return the town the car is from', function(){
        assert.equal(fromWhere('CJ'),'Paarl');    
    });
    it('it should take a CA registration number and return the town the car is from', function(){
        assert.equal(fromWhere('CA'),'Cape Town');    
    });
    it('it should take a CC registration number and return the town the car is from', function(){
        assert.equal(fromWhere('CC'),'Some other place!');    
    });
   
});