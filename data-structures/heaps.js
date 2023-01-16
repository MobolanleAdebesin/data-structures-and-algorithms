class MaxBinaryHeap{
    constructor(){
        this.values = []; 
    }
    insert(value){
        this.values.push(value); 
        if(this.values.length === 1) return this.values 
        let childIndex = this.values.length - 1 
        let parentIndex = Math.floor((childIndex-1)/2)


        while(this.values[parentIndex] < this.values[childIndex] && childIndex > 0){
            this.Swap(childIndex, parentIndex); 
            childIndex = parentIndex 
            parentIndex = Math.floor((childIndex-1)/2)
        }
        return this.values 
    }
    Swap(childIndex, parentIndex){
        let temp = this.values[childIndex];
        this.values[childIndex] = this.values[parentIndex];
        this.values[parentIndex] = temp; 
    }
    MaxHeapExtract(){
        if(!this.values.length) return undefined; 
        this.Swap(0, this.values.length-1); 
        let extraction = this.values.pop();

        let pIdx = 0; 
        let parent = this.values[0]
        while(pIdx < this.values.length){
            let cIdx1 = (pIdx * 2 + 1)
            let cIdx2 = (pIdx * 2 + 2)
            let child1, child2;

            if(cIdx1 < this.values.length){
                child1 = this.values[cIdx1]
            }
            if(cIdx2 < this.values.length){
                child2 = this.values[cIdx2]
            }
            
            let greaterChild = child1 > child2? cIdx1 : cIdx2; 
            
            if(parent < child1 && parent < child2){
                this.Swap(greaterChild, pIdx)
                pIdx = greaterChild 
            }else if(parent < child1){
                this.Swap(cIdx1, pIdx)
                pIdx = cIdx1
            } else if(parent < child2){
                this.Swap(cIdx2, pIdx)
                pIdx = cIdx2
            }else{
                break; 
            }
        }
    
        console.log(this.values)
        return extraction; 
    } 
}




// Add to the end and bubble up to insert into maxBinary Heap 

// Add new node to the end of the heap 
// Compare the child to it's parent and swap it with the parent if it's larger 
// Compare the child to the parent again and swap them again. Do this until the child is no longer larger than the parent. 

/**
 * PseudoCode 
 * Bubble Up: 
 * Create a variable called index which is the length of the values property
 * Create a variable called parentIndex which is the floor of (index-1)/2 
 * Keep looping as long as the values element at the parentIndex is less than the values element at the child index 
 *      Swap the value of the values element at the parentIndex with the value of the element property at the child index
 * Set the index to be the parentIndex and start over  
 */


/*
Remove from the root. 

Replace with the most recently added 

Adjust (sink down)

Pseudocode: 
1. Swap the first value in the values property with th last one 
2. pop from the values property and store the value to return at the end. 
3. Have the new root "sink down" to the correct spot. 

Your parent index starts at 0. 
Find the index of the left child: 2 * index + 1 (make sure this is not out of bounds )
Find the index of the right child" 2 * index + 2 (make sure it is not out of bounds)

If the left or right child is greater than the element...swap if both the left and right child are greater than the element swap the largest child 

The child index you swapped now becomes the new parent Index 
Keep looping and swapping until neither child is larger than the element 
return the old root. 



*/