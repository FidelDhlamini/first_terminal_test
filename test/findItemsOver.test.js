let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function(){

    it('it should return all the products that have a quantity higher than the threshold 20', function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ],20), [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27}
        ]);   
    });
    it('it should display an empty array if none the products reach the threshold ', function(){
        assert.deepEqual(findItemsOver([ {name : 'apples', qty : 10},
        {name : 'apples', qty : 3}],20),[]);    
    });
   
});