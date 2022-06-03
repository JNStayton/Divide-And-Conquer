// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, val) {
	let upperIdx = arr.length - 1;
	let lowerIdx = 0;

	while (upperIdx >= lowerIdx) {
		middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
		middleVal = arr[middleIdx];
		//if the middle value is the one we're looking for, return that index
		if (middleVal === val) {
			return middleIdx;
			//if the value we're looking for is GREATER THAN the middle value...
		} else if (middleVal < val) {
			//if the value at the lower index is GREATER than the one we're looking for AND the upper index is less than the one we're looking for...
			if (arr[lowerIdx] > val && arr[upperIdx] < val) {
				//disregard all values above middleIdx and start again
				upperIdx = middleIdx - 1;
			} else {
				//otherwise, disregard all values below the middleIdx and start again
				lowerIdx = middleIdx + 1;
			}
			//if the value we're looking for is LESS THAN the middle value...
		} else if (middleVal > val) {
			//and if the value at the lowerIdx is less than (or equal to) the value we want...
			if (arr[lowerIdx] <= val) {
				//disregard all values above the middleIdx and start again
				upperIdx = middleIdx - 1;
			} else {
				//or disregard all values below the middleIdx and start again
				lowerIdx = middleIdx + 1;
			}
		}
	}
	//if value not found, it is not in the array
	return -1;
}

module.exports = findRotatedIndex;
