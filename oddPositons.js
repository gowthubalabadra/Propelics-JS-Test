/*Write a function that returns the elements on odd positions in an array.*/
function getOddPositionValues (param) {
	var result = [];
	// return a msg if parameter is not an array
	if(!Array.isArray(param)) {
		return 'Please pass an array';
	}else{
		for(var i=0; i<param.length; i++) {
			// check for odd positions
			if((i+1)%2 !=0) {
				result.push(param[i]);
			}
		}
	}
	return result;
}