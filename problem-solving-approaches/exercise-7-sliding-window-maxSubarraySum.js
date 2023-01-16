/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
 */

/**
 * UEBSL
 * Understand 
 *  1. MOW: Given an array and a target number figure out what sequence of target number in the array leads to the maximum sum. 
 *  2. inputs: array and a target number 
 *  3. output: a number or null if no subsequence fulfills the criteria 
 *  4. The output can be determined from the input 
 *  5. Labels: array --> array target number --> target, variable called max --> to keep track of the most recent max number  
 * 
 * Explore Examples 
 * 
 *  maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null
 *  
 * ✅
 * Break down the problem 
 *  ✅ 1. Write a function that accepts two parameters: an array and a target number 
 *  ✅ 2. If the array length is less than the target number return null 
 *  ✅ 3. Create two pointers p1 = the beginning of the array (array[0])
 *     p2 = target-1 number away from array[target-1]
 *  ✅ 4. Create a variable called max which loops through from 0 to target in the array and sums these numbers 
 *      (this is the starting maximum)
 *  ✅ 5. While p2 < array.length: 
 *  ✅ 6. create a variable called tempMax and set equal to max - array[p1] + array[p2+1] from tempMax then increase p1 by 1 
 *  ✅ 7. add 1 to p2 and add array[p2] to tempMax 
 *  ✅ 8. Compare tempMax to max. If tempMax is greater than max, tempMax becomes the new max 
 *  ✅ 9. Or else continue the loop 
 *  ✅ 10. At the end of the loop return max 
 * Simplify/Solve 
 * 
 * Look back and Simplify 
 * 
 */
/**    
 *     max = 1 (-3 + 4)
 *     prev = 1 (-3 + 4)  
 *     next = 0
 * -------------------------------
 *      prev = 1 
 *      next =  1(prev) - -3 (p1) + 0 (p2)
 *      next = 4 
 *      max = 1 
 *      next > max --> max = next
 *      max = 4 
 *      prev = next
 *      p1++ 
 *      p2++
 *  
 *  
 * ---------------------------------------
 *      max = 4 
 *      prev = 4
 *      next = 4(prev) - 4(p1) + -2(p2)
 *      next = -2 
 *      max = 4 
 *      prev = next 
 *      prev = -2 
 *      p1++
 *      p2++  
 *  ------------------------------------------
 *      max = 4 
 *      prev = -2 
 *      next = -2(prev) - 0(p1) + 6(p2)
 *      next = 4 
 *      max = 4 
 *      prev = next 
 *      prev = 4 
 *      p1++
 *      p2++
 * ----------------------------------------
 *      max = 4 
 *      prev = 4
 *      next = 4(prev) - -2 (p1) + -1(p2)
 *      next = 5 
 *      max < next --> max = next 
 *      max = 5 
 *      prev = next 
 *      prev = 5 
 *      p1++ 
 *      p2++
 *      
 *               p1 
 *    [-3, 4, 0, -2, 6, -1]  --> 2
 *                       p2 
 *  */
function maxSubarraySum(array, target) {
    if (array.length < target) return null;
    let p1 = 0
    let p2 = target
    let max = 0
    for (let i = 0; i < target; i++) {
        max += array[i]
    }
    let prev = max
    let next = 0
    while (p2 < array.length) {
        next = prev - array[p1] + array[p2]
        if (next > max) {
            max = next
        }
        prev = next
        p1++
        p2++
    }
    return max
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))// 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))// 39 
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))// 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))// 5
console.log(maxSubarraySum([2, 3], 3))// null

// Alternate Solution: 

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}

function maxSubarraySum(array, target) {
    if (array.length < target) return null;
    let p1 = 0
    let p2 = target
    let max = 0
    for (let i = 0; i < target; i++) {
        max += array[i]
    }
    let prev = max
    let next = 0
    while (p2 < array.length) {
        next = prev - array[p1] + array[p2]
        if (next > max) {
            max = next
        }
        prev = next
        p1++
        p2++
    }
    return max
}