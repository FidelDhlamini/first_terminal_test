let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");
describe('The countAllFromTown function', function(){

    it('should return number registration numbers in the string that is for that town', function(){
        assert.deepEqual (countAllFromTown('CL 124,CL 345,CL 341','CL'), 3)  
    });
    it('should return number registration numbers in the string that is for that town', function(){
        assert.deepEqual (countAllFromTown('','CL'), 0)  
    });
    it('should return number registration numbers in the string that is for that town', function(){
        assert.deepEqual (countAllFromTown('CL 124','CL'), 1)  
    });
   
});