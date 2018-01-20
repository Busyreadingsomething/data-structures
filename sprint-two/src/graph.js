// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  
  // create object prototype for graph
  // create this.value
  // create edge 
  graph.nodes = {};
  graph.edge = {};
  // return object created
  return graph;
};

// Add a node to the graph, passing in the node's IDENTIFIER.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.nodes[node] = node;
    this.edge[node] = {};
  } else {
    return 'Node already exists';
  }
};

// Return a boolean value indicating if the IDENTIFIER passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return node in this.nodes //old code
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  delete this.edge[node];
  for (var key in this.edge) {
    delete this.edge[key][node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return toNode in this.edge[fromNode] && fromNode in this.edge[toNode]; // old code
  return !!this.edge[fromNode][toNode] && !!this.edge[toNode][fromNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode][toNode] = toNode;
  this.edge[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edge[toNode][fromNode];
  delete this.edge[fromNode][toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
  // loop through this nodes
    // invoke cb on nodes[i];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


