module.exports = function countRegNumber (regNumber){
	if(regNumber == ''){
		return 'string is empty';
	}
	var List = regNumber.split(',');
  	return List.length;
  
}