class WeightedGraph{
    constructor(){
        this.adjacencyList = {}; 
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = []; 
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight}); 
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }

    /**
 * Dijkstra's Pseudocode 
 * 
 * This function should accept a startning and ending vertex 
 * Create an object called distances, we will store the shortest distance from first vertex to current vertex. --> We will initialize these values to infinity. 
 * Make a new priority queue, add each vertex into the priority queue with a priority that is equal to the distance from first vertex
 * Create an object called previous, with a key for every vertex and we intialize it to a value at null, we will update the value for each key as we go 
 * 
 * While there is something in the priority queue, we will dequeue a vertex from the priority queue, is this the vertex I'm trying to get to? If yes we are done, else 
 * loop through all the neighbors and calculate the distance to that vertex from the starting vertex
 * if the distance is less than what is currently stored in our distances object 
 *      update the distances object with new lower distance 
 *  update hte previous object to contain vertex 
 *  enqueue the vertex with the total distance from the start node 
 * 
 */
    DijkstrasAlgorithm(start, end){
        const nodes = new PriorityQueue(); 
        const distances = {};
        const previous = {}; 
        let smallest; 
        let path = []; // to return at end 

        //build up initial state 
          for(let key in this.adjacencyList){
            if(key === start){
                distances[key] = 0; 
                nodes.enqueue(key, 0) 
            }else{
                distances[key] = Infinity; 
                nodes.enqueue(key, Infinity); 
            }
            previous[key] = null; 
        }

        // as long as there is something to visit 
        while(nodes.values.length){
            smallest = nodes.dequeue().val; 
            if(smallest === end){
                // We are done and build path to return 
                while(previous[smallest]){
                    path.push(smallest); 
                    smallest = previous[smallest]
                }    
                break;  
            }
            if(smallest || distances[smallest] !== Infinity){
                for (let neighbor in this.adjacencyList[smallest]){
                    // find neighboring node 
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    //calculate new distance to neighboring node 
                    let candidate = distances[smallest] + nextNode.weight
                    if(candidate < distances[nextNode.node]){
                        // updating new smallest distance to neighbor 
                        distances[nextNode.node] = candidate; 
                        // updating previous - How we got to neighbor 
                        previous[nextNode.node] = smallest; 
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        return path
    }
}

let g = new WeightedGraph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")

g.addEdge("A", "B", 9)
g.addEdge("A", "C", 5)
g.addEdge("C", "B", 7)
console.log(g.adjacencyList) 

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority})
        this.sort(); 
    }
    dequeue(){
        return this.values.shift(); 
    }; 
    sort(){
        this.values.sort((a,b) => a.priority - b.priority); 
    }
    
}

