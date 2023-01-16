class Node{
    constructor(val, priority){
        this.val = val 
        this.priority = priority 
    }
 
}

class PriorityQueue{
    constructor(){
        this.values = []; 
    }
    Swap(childIdx, parentIdx){
        let temp = this.values[childIdx]; 
        this.values[childIdx] = this.values[parentIdx]; 
        this.values[parentIdx] = temp 
    }
    enqueue(val, priority){
        let node = new Node(val, priority); 
        this.values.push(node); 
        if(this.values.length === 1) return this; 
        let idx = this.values.length - 1 
        let swap = true 
        while(idx > 0 && swap){
            swap = false
            let parentIdx = Math.floor((idx-1)/2);
            let parentPriority = this.values[parentIdx].priority
            let swap = false 
            if(priority < parentPriority){
                this.Swap(idx, parentIdx); 
                idx = parentIdx; 
                swap = true 
            }
        } 
        return this; 
    }
    dequeue(){
       
        if(!this.values.length) return undefined; 
         // Store the highest priority item in the heap in a variable, then replace it with the last item in the heap. 
        let maxPriority = this.values[0]; 
        let end = this.values.pop(); 
        if(!this.values.length) return maxPriority 
        this.values[0] = end; 

        // Bubble down the item at the top of the heap 
        let idx = 0 
        let priority = this.values[0].priority; 
        let length = this.values.length; 

        while(idx < length){
            let cIdx1 = idx * 2 + 1; 
            let cIdx2 = idx * 2 + 2; 
            let cPriority1, cPriority2; 
            if(cIdx1 < length) cPriority1 = this.values[cIdx1].priority; 
            if(cIdx2 < length) cPriority2 = this.values[cIdx2].priority;

            let maxChildIdx = cPriority1 < cPriority2 ? cIdx1 : cIdx2; 

            if(priority > cPriority1 && cPriority2){
                this.Swap(idx, maxChildIdx); 
                idx = maxChildIdx; 
            }else if(priority > cPriority1){
                this.Swap(idx, cIdx1); 
                idx = cIdx1; 
            }else if(priority > cPriority2){
                this.Swap(idx, cIdx2); 
                idx = cIdx2; 
            }else{
                break; 
            }
        }
        return maxPriority
    }
}
