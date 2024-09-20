# Graph TAD Implementation for Next.js

This project implements a Graph (Tipo Abstracto de Datos - Abstract Data Type) in JavaScript, designed for use in Next.js applications. The graph structure is versatile and can be used to model various relationships and connections in your data.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Reference](#api-reference)
5. [Examples](#examples)

## Features

- Undirected graph implementation
- Add and remove nodes and edges
- Check for edge existence
- Get adjacent nodes
- Depth-First Search (DFS) traversal
- Easily integrable with Next.js projects

## Installation

1. Create a new file named `Graph.js` in your project's utility folder (e.g., `src/utils/`).
2. Copy the Graph class implementation into this file.
3. Export the class at the end of the file:

```javascript
export default Graph;
```

## Usage

To use the Graph class in your Next.js components or pages:

1. Import the Graph class:

```javascript
import Graph from '../utils/Graph';
```

2. Create a new instance of the Graph:

```javascript
const graph = new Graph();
```

3. Use the graph methods as needed in your component logic.

## API Reference

### `constructor()`

Creates a new instance of the Graph.

### `addNode(node)`

Adds a new node to the graph.

### `addEdge(node1, node2)`

Adds an edge between two nodes. If the nodes don't exist, they are created.

### `removeNode(node)`

Removes a node and all its connections from the graph.

### `removeEdge(node1, node2)`

Removes the edge between two nodes.

### `hasEdge(node1, node2)`

Returns true if there's an edge between the two nodes, false otherwise.

### `getAdjacentNodes(node)`

Returns an array of all nodes connected to the given node.

### `depthFirstSearch(startNode, visited = new Set())`

Performs a depth-first search traversal starting from the given node.

## Examples

Here's a basic example of how to use the Graph class:

```javascript
import Graph from '../utils/Graph';

const MyComponent = () => {
  const graph = new Graph();
  
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'A');

  console.log(graph.hasEdge('A', 'B')); // true
  console.log(graph.getAdjacentNodes('A')); // ['B', 'D']

  graph.depthFirstSearch('A');

  return (
    // Your JSX here
  );
};
```
