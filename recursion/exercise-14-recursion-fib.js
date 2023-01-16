/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
 *  Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
 * which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

/**
 * UEBSL 
 * 
 * Understand 
 * 1. MOW: Write a function that accepts a number and returns the correct number in the fibbonacci sequence based on
 * the number that was passed in. 
 * 2. Inputs: a positive integer 
 * 3. output: a positive integer from the fibonnacci sequence 
 * 4. The output can be determined from the input 
 * 5. Label: parameter --> num 
 * 
 *   
 * 
 * Explore Examples 
 *      fib(4) // 3
 *      fib(10) // 55
 *      fib(28) // 317811
 *      fib(35) // 9227465
 * 
 *                      0  1  2  3  4  5   6   7   8  10  11  
 * Fibonnacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89  
 *                      1  2  3  4  5  6  7    8   9  10  11  
 * Break It Down 
 * 1. parameter --> index  
 * 2.base case --> at what point should the function stop calling itself 
 * 3.recursive call --> function should call itself with a changed parameter 
 * 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 */

function fib(index) {

    // base case
    if (index <= 2) return 1
    return fib(index - 1) + fib(index - 2)
    // recursive call 

}


