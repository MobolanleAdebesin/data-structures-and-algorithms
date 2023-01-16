/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
 * 
 */


/**
 * UEBSL
 * 
 * Understand
 * 1. MOW: Given an array comprised of positive whole numbers, 
 * what is the minimum sequence of numbers that can be added to a sum that is greater than or equal to the given target number
 * 2. inputs: array and a target integer 
 * 3. output: the minimum number of integers 
 * that can be added to create a sum that is greater than or equal to the target; an integer or zero 
 * 4. The output can be determined from the input 
 * 5. Labels: array --> array, positive integer --> target, minAddends --> our answer, pointers p1 and p2  
 * 
 * Explore Examples
 * 
 *  minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0 
 * 
 * Break down the problem 
 * ✅ 1. Create a function called minSubArrayLen that accepts two parameters: an array and an integer 
 * ✅ 2. If the array is empty return 0 
 * ✅ 3. Create two pointers, p1, equal to 0 for the start of the array (array[0])
 * ✅ 4. p2, equal to 1 for the second element in the array (aray[1])
 * 5. create a variable sum = 0 ????  
 * ✅ 6. create a variable called min 
 * ✅ 7. While p2 is less than the length of the array: 
 * ✅ 8. sum is equal to p1 + p2 
 * ✅ 9. Compare sum to target value: 
 * ✅ 10. If sum < target: 
 *     10b. p2++
   ✅ 11.or else if sum is >= target:
       11b. let numberOfAddends = (p2-p1) + 1  
       11c. if numberOfAddends < min --> min = number of addends 
       11d. p1++ 
       11e. if p1 == p2 --> p2++ 
 *    
 * 
 * Simplify/Solve
 * 
 * Look back and refactor 
 *  Would it be better to sort the array first? 
 * 
 */

//     p1
//  * [2, 3, 1, 2, 4, 3] --> 7
//  *           p2 

function minSubArrayLen(array, target) {
    if (!array.length) return 0;
    let p1 = 0;
    let p2 = 1;
    let min = Infinity
    let sum = array[p1] + array[p2]
    let numberOfAddends = 0
    let checkMin = (min, p1, p2) => {
        numberOfAddends = (p2 - p1) + 1;
        if (numberOfAddends < min) {
            min = numberOfAddends
        }
        return min
    }
    while (p2 < array.length) {
        if (sum < target) {
            p2++
            sum += array[p2]
        } else {
            sum -= array[p1]
            min = checkMin(min, p1, p2)
            p1++;
            if (p1 == p2) {
                if (array[p1] >= target) {
                    min = checkMin(min, p1, p2)
                }
                p2++
            }
        }
    }
    if (min == Infinity) {
        min = 0
    }
    return min
}


/** 
 *                            p1 
 * [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19]--> 52
 *                            p2 
 */


console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))// 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))// 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))// 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0 