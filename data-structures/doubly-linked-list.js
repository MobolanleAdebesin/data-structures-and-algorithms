class Node{
    constructor(val){
        this.val = val 
        this.next = null 
        this.prev = null 
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null 
        this.tail = null 
        this.length = 0; 
    }
    push(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node 
            this.tail = node 
    
        }else{
            this.tail.next = node 
            node.prev = this.tail 
            this.tail = node 
        }
        this.length++ 
        return this 
    }
    pop(){
        if(this.length === 0) return undefined 
        let removedTail = this.tail 
        if(this.length === 1){
            this.head = null; 
            this.tail = null
        }else{
            this.tail = removedTail.prev;
            this.tail.next = null; 
            removedTail.prev = null; 
        }
       
        this.length--
        return removedTail;  

    }
    shift(){
        if(this.length === 0) return undefined 
        let removedHead = this.head 
        if(this.length === 1){
            this.head = null; 
            this.tail = null
        }else{
           this.head = removedHead.next 
           this.head.prev = null 
           removedHead.next = null
        }
        this.length-- 
        return removedHead

    }
    unshift(val){
        if(this.length === 0) return this.push(val)
        let newNode = new Node(val)
        let currentHead = this.head 
        newNode.next = currentHead 
        currentHead.prev = newNode 
        this.head = newNode 
        this.length++ 
        return this 
    }
    get(idx){
        if(idx < 0 || idx === this.length) return null 
        let mid = this.length / 2
        let currentNode = idx <= mid ? this.head : this.tail 
        if(idx <= mid){
            for(let i=0; i <= mid; i++){
                if(i === idx) return currentNode
                currentNode = currentNode.next 
            }
        }else{
            for(let i = this.length-1; i > mid; i--){
                if(i === idx)return currentNode 
                currentNode = currentNode.prev 
            }
        }
    }
    set(idx, val){
        let oldValue = this.get(idx)
        if(oldValue !== null){
            oldValue.val = val 
            return true 
        }
        return false
        
    }
    insert(idx, val){
        if(idx < 0 || idx === this.length) return false 
        if(idx === 0){
            this.unshift(val)
            return true 
        }else if(idx === this.length){
            this.push(val)
            return true 
        }else{
            let prevNode = this.get(idx-1)
            let newNode = new Node(val)
            if(prevNode !== null){
                newNode.next = prevNode.next 
                newNode.prev = prevNode 
                prevNode.next.prev = newNode 
                prevNode.next = newNode 
                this.length++
                return true 
            }
            return false
        }
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined 
        if(idx === 0) return this.shift()
        if(idx === this.length-1) return this.pop()
        let removedNode = this.get(idx)
        let prevNode = removedNode.prev 
        let nextNode = removedNode.next 

        prevNode.next = nextNode 
        nextNode.prev = prevNode 
        removedNode.next = null 
        removedNode.prev = null 
        this.length-- 
        return removedNode 
    }
}

/**
 * Pseudocode for Pop 
 * If the length is zero return undefined 
 * Take the current tail and store it in a variable so we can return it 
 * If the length is one --> set head and tail to be null because now the list is empty 
 * new Tail = oldTail.prev 
 * newTail.next = null 
 * oldTail.prev = null 
 * return oldTail 
 * subtract 1 from length 
 * return the old tail 

 */


let list = new DoublyLinkedList()
console.log(list)
list.push(12)
console.log(list)
list.push(10)
console.log(list.tail)