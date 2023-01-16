class Node{
    constructor(value){
        this.value = value 
        this.left = null 
        this.right = null 
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null; 
    }
    insert(value){
        // start by comparing value to the root. 
        // Choose the node.right or node.left based on the previous comparison. Is there a node there? If no place value. If not compare. 
        // Repeat previous step over and over until you place the node. 

        /**
         * 1. Create a new node. 
         * 2. Check if there is a root? No --> new node becomes the root 
         * 3. If root --> check if the node is greater or less than the root. 
         * 4. Move to the next node based on the previous step and 
         */
        let newNode = new Node(value); 
        let inserted = false; 
        if(this.root === null){
            this.root = newNode; 
            return this; 
        }
        let currentRoot = this.root; 
        while(!inserted){
            if(newNode.value > currentRoot.value){
                // check the right side of the root; 
                if(currentRoot.right === null){
                    currentRoot.right = newNode; 
                    inserted = true; 
                }else{
                    currentRoot = currentRoot.right;
                }

            }
            else if(newNode.value < currentRoot.value){
                // check the left side of the root; 
                if(currentRoot.left === null){
                    currentRoot.left = newNode; 
                    inserted = true; 
                }else{
                    currentRoot = currentRoot.left; 
                }
            }else{
                return "Cannot insert duplicate node value"
            }
            
        }
        return this 

    }
    find(value){
        if(this.root === null){ 
            return false; 
        }
        let currentRoot = this.root; 
        while(currentRoot){
            if(currentRoot.value === value) return true 
            if(value < currentRoot.value){
                if(currentRoot.left === null) return false 
                currentRoot = currentRoot.left; 

            }else{
                if(value > currentRoot.value){
                    if(currentRoot.right === null) return false 
                    currentRoot = currentRoot.right 
                }
            }
        }
    }
    BFS(){
        let q = [];
        let list = [];
        let node = this.root 
        if(node === null) return list;  
        q.push(node); 
        while(q.length > 0){
            node = q.shift()
            list.push(node); 
            if(node.left !== null){
                q.push(node.left); 
            }
            if(node.right !== null){
                q.push(node.right); 
            }
        }
        return list 
    }
    // traverse the node and then visit the node
    PreOrder(){
        let visited = [];
        if(this.root === null) return visited;  

        function traverse(node){
            visited.push(node); 
            if(node.left !== null) traverse(node.left)
            if(node.right !== null) traverse(node.right)
            return 
        }

        traverse(this.root)
        return visited; 

    }
    // traverse the entire the tree and then visit the node 
    PostOrder(){
       let visited = []; 
        if(this.root == null) return visited; 
        function traverse(node){
            if(node.left !== null) traverse(node.left)
            if(node.right !== null) traverse(node.right)
            visited.push(node); 

        }
        traverse(this.root); 
        return visited;
    }
    // traverse the entire left side and then visit the node 
    InOrder(){
        let visited = []; 
        if(this.root === null) return visited; 
        function traverse(node){
            if(node.left !== null) traverse(node.left)
            visited.push(node); 
            if(node.right !== null) traverse(node.right)
        }
        traverse(this.root); 
        return visited; 
    }
}

var tree = new BinarySearchTree(); 

tree.root = new Node(10); 

tree.insert(15); 
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(20); 

// FIFO - push and shift

/**
 * Breadth First Search: 
 * 1. Create a queue and a variable to store the values of nodes visited 
 * 2. Place the root node in the queue 
 * 3. Loop as long as there is anything in the queue. 
 *      3b. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes 
 *      3c. If there is a left property on the node dequeued - add it to the queue. 
 *      3d. If there is a right property on the node dequeued - add it to the queue. 
 * 4. Return the variable that stores the values 
 */
/**
 * Depth First Search PreOrder 
 * 1. Create a variable to store the visited values. 
 * 2. Store the root of the BST in a variable called current.
 * 3. Write a helper function which accepts a node.
 *      3b. Push the value of the node to the variable that stores the values 
 *      3c. if the node has a left property call the helper function with the left property of the node.  
 *      3d. If the node has a right property call the helper function with the right property of the node.
 * 4. Invoke the helper function with the current variable. 
 * 5. Return the visited values variable.
 */
