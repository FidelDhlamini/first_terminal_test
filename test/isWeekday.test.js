let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function(){

    it('it should return false if the parameter passed in is not a day of the week', function(){
        assert.equal(isWeekday('Saturday'), false);    
    });
    it('it should return true if the parameter passed in is a day of the week', function(){
        assert.equal(isWeekday('Monday'), true); 
    });
    
});