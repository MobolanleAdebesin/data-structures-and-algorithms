/**
     * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

    Examples:

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
    Your solution MUST have AT LEAST the following complexities:

    Time Complexity - O(N + M)

    Space Complexity - O(1)
 */

const { is } = require("@babel/types");

/**
 * UEBSL: 
 * Understand 
 * 1. MOW: write a function that takes two strings, determine if the first string makes up a small part of the second string, 
 * same characters in the same order. Letters in between do no matter.
 * 2. Inputs: two strings 
 * 3. Outputs: boolean --> true or false 
 * 4. The output can be determined from the input 
 * 5. Data Labeling --> string1 = substr, string2 = string. 
 * ??? - should I use an array to keep track of the strings in the substr and compare it to the strings in the main string? 
 * ??? - should I use two pointers to keep track ? 
 * 
 * Explore Examples 
 *  isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
 * 
 * Break It Down (Pseudo code)
 * 1. Write a function that accepts two strings: substr and str. 
 * 2. Create a pointer for each substr and str: p1 and p2. 
 * 3. Start p1 at the beginning of substr 
 * 4. Start p2 at the beginning of str
 * 5. Loop through str and substr until p2 reaches the end of str. In the loop: 
 * 5b. If substr[p1] is equal to str[p2], then increase p1 and p2 
 * 5c. If substr[p1] is NOT equal to str[p2] then only increase p2 
 * 6. If at the end of the while loop, p2 is at the end of str, but p1 is not at the end of substr, return false. 
 * Otherwise return true. 
 * 
 * 
 * Solve/Simplify 
 * 
 * Look back & refactor 
 */

function isSubsequence(substr, str){
    let result = false 
    if(substr > str) return result; 
    if(!substr || !str) return result; 

    let p1 = 0; 
    let p2 = 0; 
    let subLetter; 
    let letter; 

    while(p2 < str.length && p1 < substr.length){
        subLetter = substr[p1]; 
        letter = str[p2]; 
        if(subLetter === letter){
            p1++ 
            p2++ 
        }else{
            p2++
        }
    }
    if(p1 === substr.length){
        result = true; 
    }

    return result; 
}

module.exports = isSubsequence; 
