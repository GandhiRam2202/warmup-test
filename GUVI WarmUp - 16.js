/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	///Your code Starts here 
	let len1 = word1.length;
	let len2 = word2.length;
	if (len1 === len2) 
	{
		return true;
	}
	return false;
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
*/