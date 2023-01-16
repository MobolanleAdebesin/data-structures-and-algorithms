// Write a recursive function called flatten which accepts an array of arrays 
// and returns a new array with all values flattened.

/**
 * UEBSL 
 * 
 * Understand 
 * 1. MOW: write a recursive function that aceepts an array with unknown number of multi-nested arrays 
 * and returns a non-nested array with all of the values from the nested arrays on the same level. 
 * 2. inputs: nested array 
 * 3. output: flat array 
 * 4. The output can be determined from the input 
 * 5. Labels --> parameter = nestedArray 
 * Explore Examples 
    flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]) // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 * 
 * Break it down 
 * 1. base case --> when the function should return and no longer call itself 
 * 2. recursive call --> the function should call itself with a modified input and some operation 
 * to keep track as the final result is tabulated. 
 * 
 * 1. Look at the first element in the array.
 * 2. if the the element is a number: 
 *      2b. remove it from the array and add it to the new array 
 * 3. else if the element is an array: 
 *      3b. look at the first element in the array and check if it is a number 
 * 4. if the array passed into the function is empty.. return an empty array  
 *      
 * Simplify/Solve
 * 
 * 
 * Look back and refactor 
 */


function flatten(array) {
    let newArray = [];

    function helper(input) {
        if (input.length === 0) return []
        if (typeof input[0] === "number") {
            newArray.push(input[0])
        } else {
            newArray.concat(helper(input[0]))
        }
        helper(input.slice(1))
    }

    helper(array)
    return newArray
}

function flatten(array) {
    let newArray = [];
    if (array.length === 0) return []
    if (typeof array[0] === "number") {
        newArray.push(array[0]);
    } else {
        newArray = newArray.concat(flatten(array[0]))
    }
    newArray = newArray.concat(flatten(array.slice(1)))
    return newArray
}


console.log(flatten([1, 2, 3, [4, 5]]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))// [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

// let array = [1, 2, 3]
// console.log("array1", array)
// array.splice(0, 1)
// console.log("array2", array)
// array.splice(0, 1)
// console.log("array3", array)

