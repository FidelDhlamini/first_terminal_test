module.exports = function totalPhoneBill(log){
    var phoneLog = log.split(', ');
    var calls =[];
    var messages = [];
    //console.log(phoneLog);
   for(var i=0;i<phoneLog.length;i++){
     if(phoneLog[i].startsWith('ca')){
     calls.push(phoneLog[i]);
     } else if (phoneLog[i].startsWith('s')){
       messages.push(phoneLog[i]);
     }console.log(calls);
  } 
    var Bill1 = 2.75 * calls.length;
    var Bill2 = 0.65 * messages.length;
    var total = Bill1 + Bill2;
    return 'R'+ total.toFixed(2);
   
       
  }  