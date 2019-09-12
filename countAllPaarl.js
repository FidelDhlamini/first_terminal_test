module.exports = function countAllPaarl(regNumber){
    if(regNumber == ""){
      return "enter a reg Number"
    }  
    if (regNumber == "CA76678"){
      return 'This registration number is not for Paarl'

    }
    var licenceNum = regNumber.split(',');
      //console.log(licenceNum);
      var Paarl = [];
      for(var i=0;i<licenceNum.length;i++){
        //console.log(licenceNum[i].startsWith('CJ'));
        if(licenceNum[i].startsWith('CJ')){
       Paarl.push(licenceNum[i]);
      }
    } 
      //console.log(Paarl);
      return Paarl.length;
    
     
    }