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
}
let g = new Graph(); 

g.addVertex("Tokyo"); 
g.addVertex("Dallas"); 
g.addVertex("Aspen"); 

g.addEdge("Tokyo", "Dallas")
console.log(g.adjacencyList)