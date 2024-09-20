class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, new Set());
    }
  }

  addEdge(node1, node2) {
    this.addNode(node1);
    this.addNode(node2);
    this.nodes.get(node1).add(node2);
    this.nodes.get(node2).add(node1);
  }

  removeNode(node) {
    if (this.nodes.has(node)) {
      this.nodes.delete(node);
      for (let [key, edges] of this.nodes) {
        edges.delete(node);
      }
    }
  }

  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.get(node1).delete(node2);
      this.nodes.get(node2).delete(node1);
    }
  }

  isEmpty() {
    return this.nodes.size === 0;
  }

  getNodes() {
    return Array.from(this.nodes.keys());
  }

  hasNode(node) {
    return this.nodes.has(node);
  }

  hasEdge(node1, node2) {
    return this.nodes.has(node1) && this.nodes.get(node1).has(node2);
  }

  getAdjacentNodes(node) {
    return Array.from(this.nodes.get(node) || []);
  }

  depthFirstSearch(startNode, visited = new Set()) {
    console.log(startNode);
    visited.add(startNode);

    for (let neighbor of this.getAdjacentNodes(startNode)) {
      if (!visited.has(neighbor)) {
        this.depthFirstSearch(neighbor, visited);
      }
    }
  }
}

export default Graph;
