module.exports = function countAllFromTown(regNumber,town){
    var licencePlates = regNumber.split(',');
    
  
    var fromStellies=[];
    for(var i=0; i<licencePlates.length;i++){
      var plates =licencePlates[i];
      var licence = plates.trim();
    if(licence.startsWith(town)){
     fromStellies.push(licence);
    }
  }
    var numberOfTowns = fromStellies.length
  
    return numberOfTowns;
  }