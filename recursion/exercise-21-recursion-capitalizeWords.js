// Write a recursive function called capitalizeWords. Given an array of words, 
// return a new array containing each word capitalized.


/**
 * UEBSL 
 * 
 * Understand 
 * 1. Write a function that accepts an array of words and returns an array of all capital words 
 * 2. inputs: array of strings 
 * 3. output: array of strings 
 * 4. The output can be determined from the input 
 * 5. Labels --> variable for the capitalized words --> allCaps 

 * 
 * Explore 
 * // let words = ['i', 'am', 'learning', 'recursion'];
    // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 * Break It Down 
    1. base case --> when the array is empty return []
    2. recursive call --> call capitalizeWords with a slice of the original array 
 * 
 * Simplify/Solve
 * 
 * Look Back and Refactor 
 */


function capitalizedWords(array) {
    let allCaps = []
    if (array.length === 0) return allCaps

    allCaps.push(array[0].toUpperCase())

    return allCaps.concat(capitalizedWords(array.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
