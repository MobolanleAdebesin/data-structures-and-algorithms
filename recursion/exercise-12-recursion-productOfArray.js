// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.



/**
 * UEBSL
 * 
 * Understand 
 * 1. MOW: Write a function that multiplies all the numbers in an array and returns the resulting product 
 * 2. input: an array of numbers 
 * 3. output: a number 
 * 4. The output can be determined from the input 
 * 5. Labels: input --> array, output --> product 
 * Explore Examples 
 * 
 *  productOfArray([1,2,3]) // 6
 *  productOfArray([1,2,3,10]) // 60
 *  productOfArray([]) // null
 *  productOfArray([0]) // 0
 *  productOfArray([-1, -2, 3]) // 6 
 *  productOfArray([-1, -2, -3]) // -6 
 * 
 * Break it Down 
 * ✅ 1. Write a function that accepts an array. 
 * ✅ 2. Write the base case --> when should the recursive call end and what should it return when it does 
 * ✅ 3. return something with an operation and recursive call 
 * 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 */

function productOfArray(array) {
    // base case 
    if (array.length == 0) return 1

    // recursive call 
    return array[0] * productOfArray(array.splice(1))
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60
console.log(productOfArray([])) // 1
console.log(productOfArray([0])) // 0
console.log(productOfArray([-1, -2, 3])) // 6 
console.log(productOfArray([-1, -2, -3])) // -6 