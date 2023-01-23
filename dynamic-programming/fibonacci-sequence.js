// Recursive solution to the fibonacci sequence 
function fibonacci(position){
    if(position <= 2) return 1; 
    return fibonacci(position-1) + fibonacci(position-2);
}

// Big O Notation O(N^2); 

// Using past knowledge to make solving a future problem simpler. 

// Fibonacci Sequence with Memoization my answer: 
function memoization(position) {

    let dict = {};
  
    function fibonacci(position) {
      if (position <= 2) {
        dict[position] = 1 
        return dict[position]
      };
      let result = fibonacci(position - 1) + fibonacci(position - 2);
  
      if (typeof result === "number") {
        dict[position] = result;
      }
      if(dict[position]){
        return dict[position]
      }
      return result
    }
    return fibonacci(position)
  }
  
  
// Correct Solution: 
function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]; 
    if(n <= 2) return 1 
    let result = fib(n-1, memo) + fib(n-2, memo); 
    memo[n] = result; 
    return result
  }

  /** 
   * My solution doesn't really work because I am updating the dictionary 
   * and *then* checking if the value for the given position is in the dictionary. 
   * This means that the program still runs through the most of the code *before* checking if the 
   * value for the given position has already been calculated. 
   * 
   * Colt's solution has the check at the beginning of the the program so that if the value exists in dict, 
   * nothing else needs to happen it just returns. 
   * 
   * If the value is not stored in dict already, then the value is calculated and then stored in dict. 
   * 
   * 
   */