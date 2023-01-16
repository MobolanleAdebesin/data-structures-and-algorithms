// UEBSL
/**
 *  Understand the problem
 *      - Repeat the problem in my own words 
 *      - What are the inputs? 
 *      - What are the outputs? 
 *      - Can I determine the outputs from the inputs? 
 *      - How should I label the important pieces of data that are a part of this problem? 
 * 
 *  Explore examples 
 *      - Start with a simple example 
 *      - Create a more complex example 
 *      - Explore examples with empty inputs 
 *      - Explore examples with invalid inputs 
 *  
 * Break down the problem - pseudocode 
 * 
 * Solve / Simplify 
 * 
 * Look back and refactor *** VERY IMPORTANT *** 
 * 
 */

// Prompt: Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// inputs: two strings to compare 
// outputs: boolean - true if the strings are anagrams and false if they are not. 
// The output can be determined from the inputs 
// labels: str1, str2, str1Obj, result 
// Examples provided below. 

// ✅ 1. Take in two strings 
// ✅ 2. Create an object for str1 that will be used to store the frequency of each letter in string 1 
// ✅ 3. Loop through str1 and store the frequency of each letter in str1Obj. 
// ✅ 4. Loop through str2, if the letter in str2 is not in str1Obj OR the value is false (i.e. 0), than return false 
// ✅ 5. Else,  subtract 1 from the frequency of that letter in str1obj
// ✅ 7. At the end of str2 loop return true 


function validAnagram(str1, str2) {

    if (str1.length != str2.length) {
        return false
    }

    let str1Obj = {}

    for (let i in str1) {
        let letter = str1[i]
        str1Obj[letter] ? str1Obj[letter] += 1 : str1Obj[letter] = 1
    }

    for (let i in str2) {
        let letter = str2[i]

        if (!str1Obj[letter]) {
            return false
        }
        str1Obj[letter] -= 1
    }
    return true
}


// console.log('', validAnagram('', '')) // true
// console.log('aaz', validAnagram('aaz', 'zza')) // false
// console.log('anagram', validAnagram('anagram', 'nagaram')) // true
// console.log('rat', validAnagram("rat", "car"))  // false
// console.log('awesome', validAnagram('awesome', 'awesom')) // false
// console.log('amanaplanacanalpanama', validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
// console.log('qwerty', validAnagram('qwerty', 'qeywrt')) // true
// console.log('texttwisttime', validAnagram('texttwisttime', 'timetwisttext')) // true




// How do you return a map that contains how many characters have a given age? For example: 
// { 29: 2, 59: 1}

// My Own Words: Return an object that counts the frequency of different ages from the list of characters in the character array 
// input: array 
// output: object with frequency of ages 
// The output can be derived from the input and I want to try to do it using a reduce function. 

// break down the problem: 
// the reduce function looks like: arr.reduce(callbackfn, initialValue)
// initial value: empty object 
// callbackfn: (accumulator (the object to be returned), currentValue (the age of the characters)) => 
//      if the accumulator[currentValue] == true accumulator[currentValue] + 1 or else accumulator[currentValue] = 1 


// (method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)

const characters = [
    { name: "Jean-Luc Picard", age: 59 },
    { name: "Will Riker", age: 29 },
    { name: "Deanna Troi", age: 29 }
]
const reducer = (dict, val) => {
    dict[val] ? dict[val] += 1 : dict[val] = 1
    return dict;
}

let ages = characters.map(char => char.age).reduce(reducer, {});

console.log(ages)


// Alternate Solutions for Counting the frequency of letters in a string e.g. charCount: 

function charCount(str) {
    return str.split("").reduce(function (obj, char) {
        char = char.toLowerCase();
        if (/[A-Z0-9]/i.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
        return obj;
    }, {});
}

// .split() --> o(n)
// .reduce() --> o(n) 
//      inside reduce is toLowerCase --> also o(n) which leads to...
// o(n2) ==> not the best complexity 


function charCount(str) {
    return str.toLowerCase()
        .split('')
        .sort()
        .join('')
        .match(/([a-z0-9])\1*/g)
        .reduce(function (prev, cur) {
            return Object.assign(prev, { [cur[0]]: cur.length })
        }, {});
}

// toLowerCase --> o(n) 
// split --> o(n) 
// sort --> o(n * log(n))
// join --> o(n)
// match -- o(n) ? 
// reduce --> o(n)
//  This second solution has a better time complexity 


