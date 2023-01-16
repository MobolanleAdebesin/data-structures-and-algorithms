/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers 
 * and converts them to strings.
 * Recursion would be a great way to solve this!
 * 
 * UEBSL 
 * 
 * Understand 
 * 1. Write a function that loops through an object and if the value of the object is a number, convert it to a string and then return the object 
 * 2. inputs: nested object with number values 
 * 3. outputs: nested object with number values converted to strings 
 * 4. The output can be determined from the input 
 * 5. Labels --> result = stringedObject
 * 
 * 
 * Explore Examples 
 * 
 * 
  let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
 * Break It Down 
   1. Loop through the object and check if the value is a number, if the value is a number, convert to a string 
   2. Otherwise ignore the object 
   3. base case --> return once the end of the object is reached 
   4. recursive call --> pass in nested object to the function 
 * 
 * Simplify/Solve 
 * 
 * Look Back and Refactor 
 * 
 * 
 */

// Come back and explain what this function does step by step. 

function stringifyNumbers(obj) {
    let copyObj = JSON.parse(JSON.stringify(obj))
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            copyObj[key] = obj[key].toString()
        } else if (typeof obj[key] === "object") {
            copyObj[key] = stringifyNumbers(obj[key])
        }
    }
    return copyObj
}
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj))