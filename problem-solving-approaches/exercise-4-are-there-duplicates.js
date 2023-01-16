// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

/**
 * UEBSL
 * Understand 
 *  1. MOW: Write a variadic function that takes parameters of any type and determine whether any of the parameters are the same 
 *  2. inputs: numbers or strings. Could objects or arrays also be passed in? 
 *  3. output --> a boolean either true or false 
 *  4. The output can be determined from the inputs 
 *  5. How to label the data? inputs: params, object that keeps track of the param called paramCount, result 
 
 * Explore Examples 
    (1, 2, 3)
    (1, 2, 2)
    (a, b, c)
    (1.2, 1.2. 3.4 4.3)
    ("", "", "Hello")
    ("1", 1, 2)

 * 
 * Break down the problem 
 * ✅ 1. Figure out how to write a vardiadic function (takes an unknown number of parameters)
 * ✅ 2. If there are no parameters return false 
 * ✅ 3. Create an object called paramCount to keep track of the parameters passed in
 * ✅ 4. Loop through the passed in parameters and add them to the paramCount object 
 *      Inside the loop determine if the value for the entry is already present and if so return true 
 * ✅ 5. At the end of the loop return false  
 * 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 * 
 * 
 */

// function areThereDuplicates(...params) {
//     if (!params.length) {
//         return false
//     }
//     let paramCount = {}
//     for (let i in params) {
//         let param = params[i]
//         if (paramCount[param]) {
//             return true
//         }
//         paramCount[param] = 1;
//     }
//     return false
// }
// console.log(areThereDuplicates(1, 2, 3))// false
// console.log(areThereDuplicates(1, 2, 2))// true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))// true 


// Alternate method: 

function duplicates(...params) {
    if (!params.length) return false
    params.sort()
    params.sort((a, b) => a - b)
    let p1 = 0
    let p2 = 1

    let check = (param1, param2) => {
        if (param1 == param2) return true
    }

    while (p2 < params.length && p1 < params.length) {
        if (check(params[p1], params[p2])) return true

        p1 = p2 + 1

        if (check(params[p1], params[p2])) return true
        p2 = p1 + 1
    }

    return false

}

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// console.log(areThereDuplicates(1, 2, 3))// false
// console.log(areThereDuplicates(1, 2, 2))// true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))// true 


// variadic function: 

function someFunction(...theArgs) {

    theArgs.sort()
    console.log(theArgs)
}

// sum(4, 2, 1, 3, 12)
// someFunction('a', 'b', 'd', 'c', 'd')


/**
 * The set object lets you store unique values of any type whether primitive values or object references
 * A value in set may only occur once. 
 * 
 * 
 * arguments object is an array-like object accessible inside functions 
 * that contains the values of the arguments passed to that function 
 * 
 */
function areThereDuplicatesOneLineSolution() {

    // if the set size and the argument length are the same that means that nothing was excluded from the set 
    // this tells us that there were not duplicates. 
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesOneLineSolution('a', 'b', 'c', 'a'))