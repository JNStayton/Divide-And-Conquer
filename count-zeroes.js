// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity: O(log N)

// Examples:

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
	let lowerIdx = 0;
	let upperIdx = arr.length - 1;

	while (lowerIdx <= upperIdx) {
		let middleIdx = Math.floor((lowerIdx + upperIdx) / 2);
		let middleVal = arr[middleIdx];
		//if we found one 0, and the value below it is a 1, then we found the first 0; return the length of the array - middleIdx for the count of 0's
		if (middleVal === 0 && arr[middleIdx - 1] === 1) {
			return arr.length - middleIdx;
			//if we found a 1, and the value above it is also a 1, reset the lowerIdx to be the middleIdx + 1
		} else if (middleVal === 1 && arr[middleIdx + 1] === 1) {
			lowerIdx = middleIdx + 1;
			//if we found a 0, and the value below it is also a 0, reset the upperIdx to be the middleIdx - 1
		} else if (middleVal === 0 && arr[middleIdx - 1] === 0) {
			upperIdx = middleIdx - 1;
			//if we found a 0 and it is the first item in the array, return the length of the array (since all values in the array would be 0)
		} else if (middleVal === 0 && arr[middleIdx - 1] === undefined) {
			return arr.length;
			//return the count of 0's once the loop is exhausted
		} else {
			return arr.length - 1 - middleIdx;
		}
	}
	//if there were no 0's, return 0
	return 0;
}

module.exports = countZeroes;
