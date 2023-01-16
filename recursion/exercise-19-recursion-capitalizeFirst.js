// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

//UEBSL 

/**
 * Understand 
 * 1. MOW: Write a function that accepts an array of strings, 
 * loops through them and capitalizes the first letter of the string 
 * 2. input: array of strings 
 * 3. output: array of strings 
 * 4. The inputs can be determined from the outputs 
 * 5. Labeling data --> capArray for array with capital letters? 
 * 
 * Explore Examples 
 * capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

 * 
 * Break it down 
 * 1. Base case --> when the array is empty return the array 
 * 2. Recursive call --> concat the first element in the array with capital letter with call to capitalizeFirst with the first element from the array moved 
 * 
 * Simply/Solve 
 * 
 * Look back and refactor 
 * 
 * 
 */

function capitalizeFirst(array) {
    let newArray = []
    if (array.length === 0) return newArray
    let capital = array[0][0].toUpperCase() + array[0].slice(1)
    newArray.push(capital)
    newArray = newArray.concat(capitalizeFirst(array.slice(1)))
    return newArray
}

console.log(capitalizeFirst(['car', 'taco', 'banana']))