/**
 * Write a function factorial which accepts a number and returns the factorial of that number. 
 * A factorial is the product of an integer and all the integers below it; 
 * e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
 * factorial zero (0!) is always 1.
 * 
 */


/**
 * UEBSL 
 * 
 * Understand 
 * 1. MOW: Write a function that accepts an integer and returns the product of the integer multiplied by all the numbers 
 * below it. 
 * 2. inputs: parameter --> num 
 * 3. output: result --> product 
 * 4. The output can be determined from the input
 * 5. Label data: input --> num, output --> product 
 * 
 * Explore Examples 
 * 
 *  factorial(1) // 1
    factorial(2) // 2
    factorial(4) // 24
    factorial(7) // 5040

 * 
 * Break it down
 * ✅ 1. Write a function that accepts an integer 
 * ✅ 2. Write the base case --> when should the function stop? 
 * ✅ 3. Write the recursive call   
 * 
 * Simplify/Solve 
 * 
 * 
 * Look back and refactor 
 */

function factorial(integer) {
    // base  case 
    if (integer < 1) return 1

    // recursive call 
    return integer * factorial(integer - 1)

}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
