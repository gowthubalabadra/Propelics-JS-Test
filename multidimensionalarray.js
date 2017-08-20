/* Write a function such that if an element in an MxN matrix is 0 , its entire row and column are set to 0 and then printed out.*/

function getResetArray (arr) {
	var index = {};
	var result = arr;
	// get the index of array and index of element in the array in the multi dimensional array
	for(var i=0; i<result.length; i++){
		for(var j=0; j<result[i].length; j++){
			if(result[i][j] === 0) {
				index.arrayIndex = i;
				index.ElementIndex = j;
				break;
			}
		}
	}

	// resetting the elements to zero based on the index values
	for(var i=0; i<result.length; i++){
		for(var j=0; j<result[i].length; j++){
			if(index.arrayIndex == i){
				result[i][j] = 0;
			}
			if(index.arrayIndex != i && index.ElementIndex == j){
				result[i][j] = 0;
			}
		}
	}  
	return result;
}