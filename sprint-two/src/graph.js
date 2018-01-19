

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  
  // create object prototype for graph
  // create this.value
  // create edge 
  graph.nodes = [];
  graph.edge = [];
  // return object created
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (node === this.nodes[i]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  debugger;
  for (var i = 0; i < this.nodes.length; i++) {
    var connection = this.nodes[i];
    if (node === connection) {
      this.nodes.splice(i, 1);
    } else if (this.hasEdge(node, connection)) {
      var loc = this.edge[connection].indexOf(node);
      this.edge[connection].splice(loc, 1);
    }
  }
  this.edge[node].splice(0);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.edge[fromNode].includes(toNode) || this.edge[toNode].includes(fromNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode].push(toNode);
  this.edge[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edge[fromNode].length; i++) {
    if(toNode === this.edge[fromNode][i]) {
      this.edge[fromNode].splice(i, 1);
    }
  }
  for (var i = 0; i < this.edge[toNode].length; i++) {
    if(fromNode === this.edge[toNode][i]) {
      this.edge[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


