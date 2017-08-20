/*Write a function that tests whether a string is a palindrome.*/

function isPalindrome(myString){

	/* remove special characters, spaces and make lowercase*/
	var formattedText = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

	/* reverse removeChar for comparison*/
	var reverseText = formattedText.split('').reverse().join('');

	/* Check to see if myString is a Palindrome*/
	if(formattedText === reverseText){

		return true;
	}

	return false;
}