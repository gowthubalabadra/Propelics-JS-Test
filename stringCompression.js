/*Write a function to perform basic string compression using the counts of repeated characters; e.g "aabcccccaaa"
would become "a2b1c5a3" . If the compressed string would not become smaller than the original string, just print the
original string.*/


function getCompressedString (text) {
	var result = [];
	var splittedText = text.split('')
	var count = 1;
	result.push(splittedText[0]);
	for(var i=0; i<splittedText.length; i++) {
		if(splittedText[i] === splittedText [i+1]){
			count++;
		}else{
			splittedText[i+1] !== undefined ? result.push(count,splittedText[i+1]) : result.push(count);
			count = 1;
		}

	}
	return result.join('');
}