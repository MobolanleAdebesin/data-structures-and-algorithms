/**
 * Start looping from the end if the array, towards the beginning 
 * with a variable called i. 
 * Start an inner loop with a variable called j from the beginning until i - 1 
 * If arr[j] is greater than arr[j+1] swap those two values. 
 * Return the sorted array
 */

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr
}

let array = [1, 3, 2, 4, 10, 5]

console.log(bubbleSort(array))