// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


// UEBSL

/**
 * Understand 
 *      1. MOW: Write a function that takes in two positive integers and determine if both integers are made up of the same digits occurring with the same frequency. 
 *      2. inputs: two, non-negative, whole numbers 
 *      3. output: boolean --> true or false 
 *      4. The output can be determined from the input --> I have enough information 
 *      5. Labeling data: inputs --> num1 and num2, output --> true or false, object --> frequencyCount to keep track of frequency of numbers 
 * Explore Examples
 *      // sameFrequency(182,281) // true
        // sameFrequency(34,14) // false
        // sameFrequency(3589578, 5879385) // true
        // sameFrequency(22,222) // false
 *       
 * Break down the problem 
 *      ✅ 1. Take in two parameters num1 and num2 
 *      ✅ 2. Convert num1 and num2 to strings so that they can be looped through and compared 
 *      ✅ 3.  Compare the length of num1 and num2 if they are not equal --> return false 
 *      ✅ 4. Create an object called frequencyCount {},
 *      5. Loop through num1,
 *          for each digit in the string, if it already exists in the frequencyCount object add 1 
 *          otherwise set the digits value equal to 1 
 *      6. Loop through num2 and if the digit exists in frequencyCount and is not zero, subtract 1. 
 *          If the digit does not exist in frequency count, return false. 
 *      7. At the end of the loop return true 
 * Simplify/Solve 
 * Look Back and Refactor 
 * 
 */

function sameFrequency(num1, num2) {
    let str1 = num1.toString(); // o(N)
    let str2 = num2.toString(); // o(N)

    if (str1.length != str2.length) {
        return false
    }
    let frequencyCount = {}

    for (let i in str1) {
        let digit = str1[i]
        frequencyCount[digit] ? frequencyCount[digit] += 1 : frequencyCount[digit] = 1
    }

    for (let i in str2) {
        let digit = str2[i]
        if (!frequencyCount[digit]) {
            return false
        }
        frequencyCount[digit] -= 1
    }

    return true
}


console.log(sameFrequency(182, 281)) //true
console.log(sameFrequency(34, 14))// false
console.log(sameFrequency(3589578, 5879385))// true
console.log(sameFrequency(22, 222))// false