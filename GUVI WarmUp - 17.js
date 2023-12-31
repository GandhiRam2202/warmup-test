/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	
	let num = Math.pow(x2 - x1, 2);
	let num1 = Math.pow(y2 - y1, 2);
	let num2 = num + num1;
	let num3 = parseInt(Math.sqrt(num2));
	return num3;
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/