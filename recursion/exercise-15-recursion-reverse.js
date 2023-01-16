// Write a recursive function called reverse which accepts a string and returns a new string in reverse. 

/**
 * UEBSL 
 * 
 * Understand 
 * 1. MOW: Write a recursive function that reverses a string 
 * 2. inputs: string 
 * 3. output: string 
 * 4. the outputs can be determined from the inputs 
 * 5. Labels --> parameter str 
 * 
 * HINT: 
 * For strings and arrays using built in functions like: slice and substr and maybe split. 
 * 
 * Explore Examples 
 * 1. simple example: 'ac' --> 'ca' 
 * 2. simple example: 'abc' --> 'cba' 
 * 3. 
 *  reverse('awesome') // 'emosewa'
 * reverse('rithmschool') // 'loohcsmhtir'
 * 
 * 
 * Break it down 
 * 1. Write a function that accepts a string 
 * 2. Write base case --> at what point should the function stop calling itself 
 * 3. Write a recursive call --> the function should call itself with some modified input 
 * Simplify/Solve 
 * 
 * Look back and refactor 
 */
function reverse(str) {

    // base case 
    if (str.length === 0) return ''
    // recursive call 
    return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1))

}
console.log(reverse('ab'))
console.log(reverse('abc'))
console.log(reverse('awesome'))
console.log(reverse('rithmschool'))
