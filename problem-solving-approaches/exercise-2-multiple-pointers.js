/**
 * 
 * Implement a function called countUniqueValues, 
 * which accepts a sorted array, 
 * and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.
 */


/**
 * UEBSL
 * Understand 
 *      MOW: Count the total number of unique values in the sorted array. 
 *      input: a sorted array 
 *      output: a number 
 *      the output can be determined from the input 
 *      how to label data that is a part of the problem: parameter --> sortedArray, variable to keep track of the number of unique digits --> count, 
 *      p1 and p2 --> pointers to scan the lenght of the sorted array and keep track of unique numbers 
 * 
 * 
 * Explore Examples 
 *      simple examples 
 *      more complex examples 
 *      examples with empty inputs 
 *      examples with invalid inputs 
 * 
 *      [1,1,1,1,1,2]
 *       i   j 
 *      [1,2,3,4,4,4,7,7,12,12,13]
 *       x y   
 *      []
 *      [-2,-1,-1,0,1]
 * 
 * Break Down 
 *  ✅ 1. Accept a sorted array parameter 
 *  ✅ 2. Check the length of the array --> if zero return 0 else --> create count variable and set equal to one  
 *  ✅3. Create p1 and set equal to the start of the array (sortedArray[0]) --> use variable i ?
 *  ✅4. create p2 and set equal to the second element in the array (sortedAray[1]) --> use variable j ?
 *  ✅5. Use a while loop that continues while, p2 is less than or equal to the last element in the array (while p2 < sortedArray[sortedArray.length])
 *  ✅6. if p1 != p2 --> add 1 to count; else --> move p1 to p2 and move p2 up one then check again 
 *    
 * 
 * Simplify / Solve 
 * 
 * 
 * Look Back 
 */


//        [1,1,1,1,1,2]
//         i   j          
function countUniqueValues(sArray) {
    let length = sArray.length
    if (!length) {
        return 0
    }
    let count = 1
    let p1 = 0
    let p2 = 1

    while (p2 < length) {
        if (sArray[p1] != sArray[p2]) {
            count++
            p1 = p2
        }
        p2++
    }
    return count
}

function alsoCountUniqueValues(sArray) {
    let length = sArray.length
    if (!length) {
        return 0
    }
    let unique = {};
    for (let i in sArray) {
        let digit = sArray[i];
        if (!unique[digit]) {
            unique[digit] = true
        }
    }
    return Object.keys(unique).length
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))// 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))// 7
// console.log(countUniqueValues([]))// 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1]))// 4

console.log(alsoCountUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(alsoCountUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(alsoCountUniqueValues([]))
console.log(alsoCountUniqueValues([-2, -1, -1, 0, 1]))