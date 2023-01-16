/**
 * Write a function called power which accepts a base and an exponent. 
 * The function should return the power of the base to the exponent. 
 * This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16


/**
 * UEBSL 
 * 
 * Understand the problem 
 * 1. MOW: Write a function that accepts a base and an exponent and return the result of raising the the base to the power of the exponent. 
 * 2. inputs: base --> positive integer exponent --> positive integer 
 * 3. output: the product --> a positive integer 
 * 4. The output can be determined from the input 
 * 5. Label data: base --> base, exponent -- exponent, product --> product 
 * Explore Examples 
 * 
 *  power(2,0) // 1   2 ^ 0 = 1 
    power(2,2) // 4   2 * 2 = 4 
    power(2,4) // 16  2 * 2 * 2 * 2 
 *  In each of these examples the operation ends when the exponent value has been reached 
 * Break down the problem 
 * ✅ 1. Provide 2 parameters to the power function: base and exponent 
 * ✅ 2. Write a base case --> what should cause the function to end/stop? 
 * ✅ 3. Write the recursive call --> the function should return a call to itself with a modified input and some operation  
 * 
 * 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 */

function power(base, exponent) {

    // base case 
    if (exponent == 0) return 1
    return base * power(base, exponent - 1)
    // recursive call 


}

console.log(power(2, 0))// 1   
console.log(power(2, 2))// 4  
console.log(power(2, 4))// 16  