// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.


/**
 * UEBSL 
 * 
 * Understand 
 * 1. MOW: Write a recursive function that takes in an array and a callback function. 
 * The outer function should return true if the inner function returns true based on a value 
 * in the array that is passed to it. 
 * 2. input: array and callback function 
 * 3. output: boolean --> true 
 * 4. The output can be determined from the input 
 * 5.Labels: array --> array, callback --> callback 
 * 
 * Explore Examples 
 *  // SAMPLE INPUT / OUTPUT
    // const isOdd = val => val % 2 !== 0;
    // someRecursive([1,2,3,4], isOdd) // true
    // someRecursive([4,6,8,9], isOdd) // true
    // someRecursive([4,6,8], isOdd) // false
    // someRecursive([4,6,8], val => val > 10); // false
 * 
 * Break it down 
 * 1. Write a recursive function that accepts two parameters: an array and a callback function 
 * 2. If even one value in the array meets the condition set in the callback function return true
 * 3. Or else return false 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 */


function someRecursive(array, callback) {
    // base case 
    if (!array.map(callback).includes(true)) return false
    return callback(array) || someRecursive(array.slice(1), callback)
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false