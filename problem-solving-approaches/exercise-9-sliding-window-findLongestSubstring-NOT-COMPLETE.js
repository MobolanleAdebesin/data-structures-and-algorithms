// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.


/*
UEBSL 
Understand 
1. MOW: Write a function that accepts a string and returns the longest sequence of non-repeating characters within that string 
2. input: string 
3. output: number 
4. output can be determined from the input 
5. data labeling: str --> the input/parameter, max --> the current max substring, p1 and p2 to keep track of what part of the string is being accessed 

Explore Examples 
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Break It Down 
1.Write a function that accepts a string 
2. Create a pointer p1 to track position in string, start at zero
3. Create a variable, max, to keep track of the maximum substring, start at zero
4. Create an object, dict, to keep track of the letters in the string 
5. Loop through the string and while p1 is less than the length of the string: 
    5b. if str[p1] is not in dict, add it to dict. 
    5c. if the length of dict is greater than the current max, set max equal to the current length of dict 
    5d. if str[p1] is in dict, clear dict, add str[p1] to dict. 
6. At the end of the while loop return max. 

Simplify / Solve 


Look back and refactor 



*/
 
// Time Complexity - O(n)

function findLongestSubstring(str){
    let max = 0
    let p1 = 0; 
    if(!str || !str.length) return max 
    max+= 1; 
    let dict = {}; 
    while(p1 < str.length){
        if(dict[str[p1]]){
            p1 = dict[str[p1]] + 1; 
            dict = {}
        }
        dict[str[p1]] = p1
        if(Object.keys(dict).length > max){
            max = Object.keys(dict).length
        }
        p1++; 
    }

    return max
}
findLongestSubstring("longestsubstring")
module.exports = findLongestSubstring; 