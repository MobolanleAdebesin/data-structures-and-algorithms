// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

/**
 * UEBSL
 * Understand 
 *  1. MOW: Given a SORTED array, figure out if there is a pair in the array that produces the "target" number 
 *  passed into the function 
 *  2. inputs: sorted array and target number 
 *  3. outputs: boolean --> true or false 
 *  4. The output can be determined from the input 
 *  5. Label the data: sorted array --> sArr, target --> target, two pointers --> p1 and p2 
 * 
 * Explore Examples 
 *  // averagePair([1,2,3],2.5) // true
    // averagePair([1,3,3,5,6,7,10,12,19],8) // true
    // averagePair([-1,0,3,4,5,6], 4.1) // false
    // averagePair([],4) // false
 * 
            p1   
            [-1, 0, 3, 4, 5, 6] --> 4.1 
                       p2
 * Break down the problem 
 * ✅ 1. Write a function that accepts two parameters (sArr and target)
 * ✅ 2. If the array is empty immediately return false 
 * ✅ 3. Create p1 and p2 
 * ✅ 4. p1 should start at the beginning of the array sArr[0]
 * ✅ 5. p2 should start at the end of the array sArr[sArr.length]
 * ✅ 6. while p1 < p2: 
 * ✅ 7. Add together sArr[p1] and sArr[p2] and divide by 2 --> avg 
 * ✅ 8. Compare to target: if  avg == target return true 
 * ✅ 9. if avg > target subtract 1 from p2 
 * ✅ 10. if avg < target add 1 to p1  
 * ✅ 11. once the loop is broken, return false 
 * 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 * 
 */

function averagePair(sArray, target) {
    if (!sArray.length) return false;
    let p1 = 0
    let p2 = sArray.length - 1

    while (p1 < p2) {
        let avg = (sArray[p1] + sArray[p2]) / 2
        if (avg == target) return true
        avg > target ? p2 -= 1 : p1 += 1;
    }
    return false
}

function averagePairTwo(sArray, target) {
    if (!sArray.length) return false;
    let p1 = Math.floor(sArray.length / 2)
    let p2 = p1 + 1

    while (p1 < p2 && p2 < sArray.length && p1 > 0) {
        let avg = (sArray[p1] + sArray[p2]) / 2
        if (avg == target) return true

        avg > target ? p1 -= 1 : p2 += 1;
    }
    return false
}
/**
 *              p1   
 * [1, 3, 3, 5, 6, 7, 10, 12, 19], 8
 *                     p2 
 */
console.log(averagePairTwo([1, 2, 3], 2.5))// true
console.log(averagePairTwo([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))// true
console.log(averagePairTwo([-1, 0, 3, 4, 5, 6], 4.1))// false
console.log(averagePairTwo([], 4))// false


// console.log(averagePair([1, 2, 3], 2.5))// true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))// true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))// false
// console.log(averagePair([], 4))// false