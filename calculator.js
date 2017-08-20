function calculate (expression) {
	var copy = expression;
	var numbers= [];
	var operators= [];
	var result;
	var mergedResult =[];

	// replaces numbers with # and . with ''
	expression = expression.replace(/[0-9]+/g, "#").replace(/[\.)]/g, "");
	// splits  starting and ending with numbers
	numbers = copy.split(/[^0-9\.]+/);
	// splits based on # and clears empty entries 
	operators = expression.split("#").filter(function(n){return n});
	result = parseFloat(numbers[0]);

	for(i = 1; i < numbers.length; i++){
		
		switch (operators[i-1]) {
			// division
			case '/':
			result = result/parseFloat(numbers[i]);
			break;
			// multiplication
			case '*':
			result = result*parseFloat(numbers[i]);
			break;
			//addition
			case '+':
			result = result+(parseFloat(numbers[i]));
			break;
			//subtraction
			case '-':
			result = result-parseFloat(numbers[i]);
			break;
		}
		
	}
	
	return result;	
}


