module.exports = function findItemsOver(list,threshold){
 
    var hThresh =[];

      for(var i=0;i<list.length;i++){
     if(list[i].qty>threshold){
      hThresh.push(list[i]);
     } 
    }
      return hThresh;
    }