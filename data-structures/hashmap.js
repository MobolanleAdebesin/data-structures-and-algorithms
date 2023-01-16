let total = 0; 

total += "hello".charCodeAt(0) - 96 
total += "hello".charCodeAt(1) - 96 
total += "hello".charCodeAt(2) - 96 
total += "hello".charCodeAt(3) - 96 
total += "hello".charCodeAt(4) - 96

let string = "hello"

function hash(string, arrayLen){
    let total = 0; 
    let WEIRD_PRIME = 31; 
    // hash functions almost always take advantage of prime numbers to spread data out, avoid collisions, and make data easier to access. 
    for(let i = 0; i < Math.min(string.length, 100); i++){
        let val =  string.charCodeAt(i) - 96;
        total = (total * WEIRD_PRIME + val) % arrayLen
    }
    return total 
}


class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size); 
    }
    _hash(key){
        let total = 0; 
        let WEIRD_PRIME = 31; 
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96; 
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total;
    }
    set(key, value){
        let newHash = this._hash(key);
        if(this.keyMap[newHash] === undefined){
            this.keyMap[newHash] = []; 
        }
        this.keyMap[newHash].push([key, value])
        return newHash
    }
    get(key){
        let newHash = this._hash(key);
        let position = this.keyMap[newHash]; 
        if(position === undefined)return position; 
        if(position.length === 1) return position[0]; 
            for(let i =0; i < position.length; i++){
                if(position[i][0] === key){
                    return position[i][1]; 
                }
        }
        return undefined; 
    }
    // nested for loop solution for retrieving keys 
    keys(){
     let keys = []; 

     for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
            if(this.keyMap[i].length === 1){
                keys.push(this.keyMap[i][0][0])
            
            } else{
                for(let j = 0; j < this.keyMap[i]; j++){
                    if(!keys.includes(this.keyMap([i][j][0]))){
                        keys.push(this.keyMap[i][j][0])
                    }
                  
                }
            }
        }
     }
     return keys    
    }
    values(){
        let values = []; 
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                if(this.keyMap[i].length === 1){
                    values.push(this.keyMap[i][0][1])
                
                } else{
                    for(let j = 0; j < this.keyMap[i].length; j++){
                        if(!values.includes(this.keyMap[i][j][1]))
                        keys.push(this.keyMap[i][j][1])
                    }
                }
            }
         }
        return values; 
      }
  
    // Set - Accepts a key and a value, hash the key, store the key-value pair in the hash table array if there is already data there push, else put an array there and then push the value there 
    // Get accepts a key, hash the value, look up the hash and loop through that position to retrieve the value if there is more than one value at that position. If it is not in the hash table return undefined. 
}

let hashTable= new HashTable(); 
hashTable.set("darkblue", "#00008b"); 

// PseudoCode for keys() 
   /**
        * UEBSL --> Understand, Explore Examples, Break It Down, Simplify/Solve, Look back and refactor
        * UNDERSTAND:  
        * 1. MOW: List all of the unique keys in the keyMap
        * 2. input: none 
        * 3. output: an array of unique keys 
        * 4. The output will be the same each time regardless of the input 
        * 5. Data and labels --> array called keys to push the unique keys into, a recursive function to loop through each of the nested arrays  
        * 
        * Explore Examples: 
        * this.keyMap = 
        *   [
                0: [ [ 'darkblue', '#00008b' ], [ 'purple', '#fa8072' ] ],
                1: [ [ 'red', '#fa8072' ] ],
                2: [
                        [ 'salmon', '#fa8072' ],
                        [ 'pink', '#yay' ],
                        [ 'orange', '#fa8072' ]
                    ],
                3: [ [ 'green', '#fa8072' ] ]
            ]
            output: [darkblue, purple, red, salmon, pink, orange, green ]
        * 
            Break It Down: This nested array needs to be flattened. 
            1. create an array called keys to return at the end of the function  
            2. Loop through this.keyMap and for each index if the element at that index has a length greater than zero, loop through the element and find the value at the 0th index (this is the key); 
            3. check if the element already exists in they keys array and if not push it in. 
            4. repeat until the end of this.keyMap is reached 
            5. Notes: using a recursive call on the elements within this.keyMap makes sense. What will be base case be? 
        * 
        * 
        */





