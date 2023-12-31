/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	
	let fullName = "";
	
	if (firstName) 
	{
		fullName += firstName;
	}
	
	if (firstName && lastName) 
	{
		fullName += " ";
	}
	
	if (lastName) 
	{
		fullName += lastName;
	}
	
	return fullName;
	
	///Your code Ends here
}
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/