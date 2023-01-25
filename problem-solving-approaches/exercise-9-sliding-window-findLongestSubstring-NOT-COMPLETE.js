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

Simplify / Solve 


Look back and refactor 



*/
 
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str){
    let max = 0
    if(!str || !str.length) return max 
    max+= 1; 
    return max
}

module.exports = findLongestSubstring; 