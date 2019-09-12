let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('it should return the total bill of the calls made in the phone log', function(){
        assert.equal(totalPhoneBill("call"),'R2.75');    
    });
    
    it('it should return the total bill of the messages sent the phone log', function(){
        assert.equal(totalPhoneBill("sms"),'R0.65' );    
    });
   
});