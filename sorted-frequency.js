// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

//binary search through the array to find the first index occurence of the value
function findFirstIdx(arr, val) {
	let lowerIdx = 0;
	let upperIdx = arr.length - 1;

	while (lowerIdx <= upperIdx) {
		let middleIdx = Math.floor((lowerIdx + upperIdx) / 2);
		let middleVal = arr[middleIdx];
		if ((middleVal === val && middleIdx === 0) || (middleVal === val && arr[middleIdx - 1] != val)) {
			return middleIdx;
		} else if (val <= middleVal) {
			upperIdx = middleIdx - 1;
		} else {
			lowerIdx = middleIdx + 1;
		}
	}
	return -1;
}

//binary search through the array to find the last occurence of the value
function findLastIdx(arr, val) {
	let lowerIdx = 0;
	let upperIdx = arr.length - 1;
	let lastIdx;

	while (lowerIdx <= upperIdx) {
		let middleIdx = Math.floor((lowerIdx + upperIdx) / 2);
		let middleVal = arr[middleIdx];
		if ((middleVal === val && middleIdx === arr.length - 1) || (middleVal === val && arr[middleIdx + 1] != val)) {
			lastIdx = middleIdx;
			return lastIdx;
		} else if (val >= middleVal) {
			lowerIdx = middleIdx + 1;
		} else {
			upperIdx = middleIdx - 1;
		}
	}
}

//runs both findFirstIdx and findLastIdx
//if there is no firstIdx, returns -1
//otherwise, returns the count between indices
function sortedFrequency(arr, val) {
	let firstIdx = findFirstIdx(arr, val);
	let lastIdx = findLastIdx(arr, val);

	if (firstIdx === -1) {
		return -1;
	} else {
		return lastIdx - firstIdx + 1;
	}
}

module.exports = sortedFrequency;
