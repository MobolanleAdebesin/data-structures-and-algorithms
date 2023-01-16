/**
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 * 
 * UEBSL 
 * Understand 
 * 1. MOW: Write a recursive function that loops through an object, finds all the even numbers sums them, and returns the sum. 
 * 2. input: nestedObject 
 * 3. output: integer 
 * 4. The output can be determined from the inputs 
 * 5. Labels --> the sum --> holds the sum of the even numbers, 
 * 
 * Explore Examples 
 * 
 * 
        var obj1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
            }
        }
        }

        var obj2 = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 2}, ee: 'car'}
        };

        nestedEvenSum(obj1); // 6
        nestedEvenSum(obj2); // 10
 * 
 * Break It Down 
 * 1. Base case --> when the end of the object is reached return 0 ? 
 * 2. recursive call --> sum + nestedEvenSum(modifiedObject --> remove the key-object pair?)
 * 3. Access the value in the object and if the value is a number add it to sum. 
 * 4. If the value is an object --> access the inner key-value pairs of the object 
 * 5. If the value is neither an object nor a number, ignore it. 
 * 6. Need to enter inside of nested objects, but still be able to loop through the outer objects too. --> not sure how to do this 
 * 7. Not sure the best way to access the values of the object either 
 * 
 * Simplify/Solve 
 * 
 * Look back and refactor
 * 
 * 
 */


function nestedEvenSum(nestedObject) {

    if (Object.keys(nestedObject).length === 0) return 0

    let sum = 0
    let keys = Object.keys(nestedObject)
    let value = nestedObject[keys[0]]

    if (typeof value === "number" && value % 2 === 0) {
        sum += value

    } else if (typeof value === "object") {
        sum += nestedEvenSum(value)
    }
    let copyObject = JSON.parse(JSON.stringify(nestedObject))
    delete copyObject[keys[0]]
    sum += nestedEvenSum(copyObject)
    return sum

}

// better solution

function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) { // loop through the object 
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key]
        }
    }
    return sum
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10


