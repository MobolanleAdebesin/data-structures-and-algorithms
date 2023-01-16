/**
 * Write a function called recursiveRange which 
 * accepts a number and adds up all the numbers from 0 to the number passed to the function 
 */

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

/**
 * UEBSL
 * 
 * Understand 
 * 1. MOW: Write a function that accepts a number and add up all the numbers from 0 to the number passed in. 
 * 2. inputs: a number --> positive integer 
 * 3. output: a number --> positive integer 
 * 4. The output can be determined from the input 
 * 5. Labels: parameter --> num 
 * 
 * Explore Examples 
 *  // recursiveRange(6) // 21
    // recursiveRange(10) // 55 
 * 
 * ✅
 * Break It Down
 * ✅ 1. Write a function that accepts a number 
 * ✅ 2. Write the base case --> when should the function stop adding? When the number passed in is zero. 
 * What should it return --> zero. 
 * ✅ 3. Write a recursive call: the number plus the recursive call on the modified integer  
 * 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 */

function recursiveRange(num) {
    // base case 
    if (num === 0) return 0

    // recursive call 
    return num + recursiveRange(--num)
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 

