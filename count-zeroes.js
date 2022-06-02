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
		if (middleVal === 0 && arr[middleIdx - 1] === 1) {
			return arr.length - middleIdx;
		} else if (middleVal === 1 && arr[middleIdx + 1] === 1) {
			lowerIdx = middleIdx + 1;
		} else if (middleVal === 0 && arr[middleIdx - 1] === 0) {
			upperIdx = middleIdx - 1;
		} else if (middleVal === 0 && arr[middleIdx - 1] === undefined) {
			return arr.length;
		} else {
			return arr.length - 1 - middleIdx;
		}
	}
	return 0;
}

module.exports = countZeroes;
