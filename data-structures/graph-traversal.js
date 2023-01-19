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
    BFS(vertex){
        let q = [vertex]; 
        let result = []; 
        let visited = {}; 
        visited[vertex] = true; 
        let current 
        while(q.length){
            current = q.shift(); 
            result.push(current); 
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){ 
                    visited[neighbor] = true 
                    q.push(neighbor)
                }
            })
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
console.log(g.DFSIterative("A"))
console.log(g.BFS("A"))

