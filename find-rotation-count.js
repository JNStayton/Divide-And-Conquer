// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

//the number of times a SORTED array has been rotated will equal the index of the lowest value in that array
function findRotationCount(arr) {
	let lowerIdx = 0;
	let upperIdx = arr.length - 1;

	while (upperIdx >= lowerIdx) {
		let middleIdx = Math.floor((lowerIdx + upperIdx) / 2);
		let middleVal = arr[middleIdx];
		//if the value in the middle is less than the value directly before it, return its index (as the count for how many times the array has been rotated)
		if (middleVal < arr[middleIdx - 1]) {
			return middleIdx;
			//if the middle value is greater than the value at the upperIdx, then disregard all values below the middleIdx and run the loop again
		} else if (middleVal > arr[upperIdx]) {
			lowerIdx = middleIdx + 1;
			//otherwise, disregard all values above the middleIdx and run the loop again
		} else {
			upperIdx = middleIdx - 1;
		}
	}
	return 0;
}

module.exports = findRotationCount;
