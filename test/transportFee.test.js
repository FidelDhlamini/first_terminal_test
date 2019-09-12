let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function(){

    it('it should return R20 if the shift passed is morning', function(){
        assert.equal(transportFee('morning'),'R20' );  
    });
    it('it should return R10 if the shift passed is afternoon', function(){
      assert.equal(transportFee('afternoon'),'R10');  
  });
  it('it should return free if the shift passed is night', function(){
    assert.equal(transportFee('nightshift'),'free');  
  });
   
  });