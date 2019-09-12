let assert = require("assert");
let regCheck = require("../regCheck");
describe('The regCheck function', function(){

    it('it should return true if a number is for GP', function(){
        assert.equal(regCheck('DV 23 NB GP','GP'), true);      
    });
    it('it should return false if a number is for MP,CY,ND registration plates', function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false); 
   
    });
});