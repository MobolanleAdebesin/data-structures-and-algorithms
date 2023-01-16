/**
 * UEBSL: 
 * 
 * Understand 
 * 1. MOW: Sort an unsorted array using selection sort. 
 * 2. input: unsorted array 
 * 3. output: sorted array 
 * 4. the output can be determined from the inputs 
 * 5. labeling the data:
 *      a. var called min --> for keeping track of the min data 
 *      b. pointer at the beginning of the array to keep track of where to start the comparison for each loop
 *      c. sliding pointer --> to pick the value to compare to the minimum 
 *      d. swap function to swap the minimum value to the beginning of the array
 * 
 * Explore Examples 
 * 
 * Break it Down / Pseudocode: 
 * 1. Store the first element as the smallest value you've seen so far 
 * 2. Compare this item to the next item in the array until you find a smaller number 
 * 3. If a smaller number is found, designate that smaller number to be the new minimum 
 * and continue until the end of the array. 
 * 4. If the "minimum" is not the value (index) you initially began with, swap the two values 
 * 5. Repear this with the next element until the array is sorted 
 * 
 * Simplify/Solve 
 * 
 * Look back and Simplify 
 */
// length = 4 
//   0  1  2  3 
[5, 6, 8, 4]
//   s        sl
// min = 5 sl = 6 
// min = 5 sl = 8 
// min = 5 sl = 4 --> slider = arr.length - 1 --> swap 
// min = 4 sl = 4 --> slider = arr.length - 1 
// if (slider == arr.length - 1){
//  if(min < arr[start]){
//   swap number at start with number at min ---> need to put min at start index, need to put other number at index of min. So I need to keep track of min index too. 
//}
//  add 1 to start, set slider to start + 1 
//}   
// function selectionSort(arr) {
//     function swap(arr, idx1, idx2) {
//         let temp = arr[idx1]
//         arr[idx1] = arr[idx2]
//         arr[idx2] = temp
//     }

//     let start = 0
//     let slider = 1
//     let min = arr[start]
//     let minIdx = start
//     while (start < arr.length - 1) {
//         if (arr[slider] < min) {
//             min = arr[slider]
//             minIdx = slider
//         }
//         slider++
//         if (slider > arr.length - 1) {
//             if (min < arr[start]) {
//                 swap(arr, minIdx, start)
//             }
//             start++
//             slider = start + 1
//             min = arr[slider]
//         }
//     }
//     return arr
// }

function selectionSort(arr) {
    function swap(arr, idx1, idx2) {
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }

    let start = 0
    let slider = 1
    let minIdx = start
    while (start < arr.length - 1) {
        if (arr[slider] < arr[minIdx]) {
            minIdx = slider
        }
        slider++
        if (slider > arr.length - 1) {
            if (arr[minIdx] < arr[start]) {
                swap(arr, minIdx, start)
            }
            start++
            slider = start + 1
            minIdx = start

        }
    }
    return arr
}


let test1 = [5, 6, 8, 4]
let test2 = [24, 100, 32, 85, 77, 10, 5]
let test3 = [1000, 2000, 90, 5, 45, 3000]

console.log(selectionSort(test1))
console.log(selectionSort(test2))
console.log(selectionSort(test3))