/**
 * Write a function called collectStrings which accepts an object and 
 * returns an array of all the values in the object that have a typeof string. 
 * 
 * UEBSL 
 * 
 * Understand 
 * 1. Write a function that accepts an object and returns an array with all of the string values from the object 
 * 2. inputs: object 
 * 3. output: array of strings 
 * 4. The outputs can be determined from the inputs 
 * 5. result --> Array of strings 
 * 
 * Explore Examples: 
    
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }

collectStrings(obj) // ["foo", "bar", "baz"])
 

 * Break It Down 
    1. Create an array to hold the strings 
    2. loop through the object and if the value is a string push to the array 
    3. if the value is an object, pass back into the function 
    4. return the array 
 * 
 * Simplify/Solve 
 * 
 * Look Back and Refactor 


 */

function collectStrings(obj) {
    let array = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            array.push(obj[key])
        } else if (typeof obj[key] === "object") {
            array = array.concat(collectStrings(obj[key]))
        }
    }
    return array
}








const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))// ["foo", "bar", "baz"])