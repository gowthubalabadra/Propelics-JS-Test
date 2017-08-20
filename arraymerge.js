/*Write a function that combines two arrays by alternatingly taking their elements in, e.g. [x,y,z], [10,20,30] prints [x,10,y,20,z,30] */


function mergeArrays (array1, array2) {
	var result = [];
	// check if params passed or array or not 
	if(Array.isArray(array1) && Array.isArray(array2)) {
		// check if params passed are of equal length
		if(array1.length !== array2.length){
			return 'please pass equal length arrays';
		}
		// merging 2 arrays to result array
		$.map(array1, function(value, index) {
			result.push(value,array2[index]) 
		});
	}else {
		return 'Please pass the arrays';
	}
	return result;
}