let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function', function(){

    it('it should return all the products that have a quantity higher than 20', function(){
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
    ]), [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}    
    ])
   
    });
    it('it should return an empty array when given items below 20', function(){
        assert.deepEqual(findItemsOver20([
            {name : 'crayons', qty : 11},
            {name : 'bread', qty : 18},
            {name : 'sweet potatoes', qty : 4},
            {name : 'avocados', qty : 3},
    ]), [])
   
    });
});