// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)

function findFloor(arr, x) {
	let lowerIdx = 0;
	let upperIdx = arr.length - 1;

	while (upperIdx >= lowerIdx) {
		let middleIdx = Math.floor((lowerIdx + upperIdx) / 2);
		let middleVal = arr[middleIdx];
		//if the middleVal is X, then return middleVal (can't get higher than yourself, eh?)
		if (
			middleVal === x ||
			//if the middleVal is less than X, AND the middleVal is the last val in the array, return middleVal
			(middleVal < x && middleIdx === arr.length - 1) ||
			//if the middleVal is less than X, AND the next number in the array is greater than X, return the middleVal
			(middleVal < x && arr[middleIdx + 1] > x)
		) {
			return middleVal;
			//if the middleVal is greater than X, then disregard all values above the middleIdx and run the loop again
		} else if (middleVal > x) {
			upperIdx = middleIdx - 1;
			//otherwise, disregard all values below the middleIdx and run the loop again
		} else {
			lowerIdx = middleIdx + 1;
		}
	}
	//if there is no value that fits the floor of X in the array, return -1
	return -1;
}

module.exports = findFloor;
