function binarySearch(sortArray, target) {
    let left = 0
    let right = sortArray.length - 1
    while (left < right) {
        let mid = Math.ceil((left + right) / 2)
        let sel = sortArray[mid]
        if (sel === target) return mid;
        else if (sel > target) {
            right = mid
        } else {
            left = mid
        }
    }
    return -1
}
// 0  1  2  3  4
console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4

// Colt's Binary Search 

function BinarySearch(arr, elem) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== elem) {
        if (elem < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
}

BinarySearch([2, 5, 6, 9, 13, 15, 28], 15)

