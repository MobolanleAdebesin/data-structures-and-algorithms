class Graph{
    constructor(){
        this.adjacencyList = {}; 
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = []; 
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2); 
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1)
    }
    removeVertex(vertex){
        while( this.adjacencyList[vertex].length){
            let vertex2 = this.adjacencyList[vertex][0]
            this.removeEdge(vertex, vertex2)
        }
        delete this.adjacencyList[vertex]
    }
    DFSRecursive(vertex){
        let results = []; 
        let visited = {}; 
        
        let helper = (vertex) => {
            if(!vertex) return 
            if(!visited[vertex]){
                visited[vertex] = true 
                results.push(vertex); 
                this.adjacencyList[vertex].forEach((neighbor) => {
                    if(!visited[neighbor]){
                        helper(neighbor)
                    }
                })
            }
        }
        helper(vertex); 
        return results
    }
    DFSIterative(vertex){
        let s = [];
        let result = []; 
        let visited = {}; 
        s.push(vertex); 
       

        while(s.length){
            let current = s.pop(); 
            if(!visited[current]){
                visited[current] = true; 
                result.push(current);
                this.adjacencyList[current].forEach((neighbor) => s.push(neighbor)); 
            }
        }
        return result
    }
}

let g = new Graph(); 
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


console.log(g.DFSRecursive("A"))


/**
 
 * ✅ Function accepts a vertex 
 * ✅ Create a list to store the end result, to be returned at the very end 
 * ✅ Create an object to store visited vertices 
 * ✅ Create a helper function which accepts a vertex 
 * ✅ The hlper function should return early if a vertex is empty 
 * ✅ The helper function should place the vertex it accepts into the visited object and push the vertex into the results array 
 * ✅ Loop over all of the values in the adjacencyList for that vertex 
 * ✅ If any of those values have not been visited, recursively invoke the helper function with that vertex 
 * ✅ Invoke the helper function with the staring vertex
 * Return the results array 
 */