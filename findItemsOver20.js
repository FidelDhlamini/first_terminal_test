module.exports = function findItemsOver20(list){
    var Over20 = [];
     for (var i=0;i<list.length;i++){
     if(list[i].qty> 20){
     Over20.push(list[i]);
       
     }
       
     }
     //return Over20;
     return Over20;
     
   }

//    var itemList = [
//     {name : 'apples', qty : 10},
//     {name : 'pears', qty : 37},
//     {name : 'bananas', qty : 27},
//     {name : 'apples', qty : 3},
// ];

// var results = findItemsOver20(itemList);

// var expectedResults = results;

