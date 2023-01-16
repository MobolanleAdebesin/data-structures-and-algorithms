var stack = []; 
stack.push("google"); 
stack.push("instagram");
stack.push("youtube"); 

stack.pop(); 

// Using push and pop in tandem creates a stack; 


// you can also use shift and unshift in tandem; 

// stack as a singly linked list: 

class Node{
    constructor(value){
      this.val = value; 
      this.next = null; 
    }
  }
  
  class Stack{
    constructor(){
      this.first = null; 
      this.last= null; 
      this.size = 0; 
    }
       pop() {
          if (!this.size) return undefined
          let oldHead = this.first
          this.first = oldHead.next;
          this.size--
          if (!this.size) {
              this.last = null
          }
          oldHead.next = null; 
          return oldHead
      }
      push(val) {
          let newNode = new Node(val)
          if (!this.size) {
              this.first = newNode;
              this.last = newNode;
          } else {
              newNode.next = this.first;
              this.first = newNode;
  
          }
          this.size++
          return this.size;
      }
  }




  // Building a queue with an array 
  let q = []
  // push and shift used in tandem when a queue is created using an array 
  // or you can use unshift and pop in tandem to get First In First Out 


  class Queue{
    constructor(){
      this.first = null; 
      this.last = null; 
      this.size = 0; 
    }
    enqueue(val){
      let node = new Node(val)
      if(this.size === 0){
        this.first = node; 
        this.last = node; 
      }else{
        this.last.next = node 
        this.last = node; 
      }
      return ++this.size
    }
    dequeue(){
      if(this.size === 0) return null; 
      let oldFirst = this.first; 
      if(this.first === this.last){
        this.last = null 
      }
      this.first = this.first.next; 

      this.size--
      return oldFirst.val 

    }

  }
  