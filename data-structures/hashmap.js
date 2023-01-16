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


// console.log(hash("pink", 13))
// console.log(hash("blue", 13))
// console.log(hash("cyan", 13))


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
                    return position[i]; 
                }
        }
        return undefined; 
    }
    // Set - Accepts a key and a value, hash the key, store the key-value pair in the hash table array if there is already data there push, else put an array there and then push the value there 
    // Get accepts a key, hash the value, look up the hash and loop through that position to retrieve the value if there is more than one value at that position. If it is not in the hash table return undefined. 
}

let hashTable= new HashTable(); 
hashTable.set("darkblue", "#00008b"); 
console.log(hashTable.keyMap)

