/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it 
 * is a palindrome (reads the same forward and backward). 
 * Otherwise it returns false.
 */
/**
 * UEBSL
 * 
 * Understand 
 * 1. MOW: Write a recursive function that identifies whether a word is the forwards and backwards 
 * 2. inputs: string 
 * 3. output: boolean 
 * 4. The inputs can be determined from the outputs 
 * 5. Labels: parameter --> str  
 * 
 * Explore Examples 
 * 1. Simple: pop, bib, pimp
    isPalindrome('awesome') // false
    isPalindrome('foobar') // false
    isPalindrome('tacocat') // true
    isPalindrome('amanaplanacanalpanama') // true
    isPalindrome('amanaplanacanalpandemonium') // false
 * Break it down 
    1. Write a function that accepts a string parameter
    2. find the length of the string. 
    3. if the length of the string is odd: 
        3a. divide the length of the string by 2 and use Math.floor to round down store this value as 'mid' 
        3b. if mid-1 and mid+1 are equal, use slice to copy them out of the string and pass the modified string 
            into the function again. Continue until there is only one letter left than return true 
        3c. if mid-1 and mid+1 are not equal, return false 
    4. else if the length of the string is even: 
        4a. divide the length of the string by 2 and store this value as mid, 
        4b. if mid and mid-1 are equal use slice to copy them out of the stirng and pass the modified string
            into the function again. Continue until there are no letters left in the string and return true 
        4c. if mid and mid-1 are not equal, return false 


   Simplify/Solve

   Look back and refactor 
   
   
 */




function isPalindrome(str) {
    let length = str.length
    let mid
    // base case 
    if (length <= 1) return true
    if (length % 2 === 0) {
        mid = length / 2
        if (str[mid] === str[mid - 1]) {
            let newStr = str.slice(0, mid - 1) + str.slice(mid + 1)
            return isPalindrome(newStr)
        }
        return false
    } else {
        mid = Math.floor(length / 2)
        if (str[mid + 1] === str[mid - 1]) {
            let newStr = str.slice(0, mid - 1) + str.slice(mid + 2)
            return isPalindrome(newStr)
        }
        return false
    }
}

console.log(isPalindrome('awesome'))// false
console.log(isPalindrome('foobar'))// false
console.log(isPalindrome('tacocat'))// true
console.log(isPalindrome('amanaplanacanalpanama'))// true
console.log(isPalindrome('amanaplanacanalpandemonium'))// false

