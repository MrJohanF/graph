# Implementación de Grafo TAD para Next.js

Este proyecto implementa un Grafo (Tipo Abstracto de Datos) en JavaScript, diseñado para su uso en aplicaciones Next.js. La estructura del grafo es versátil y puede utilizarse para modelar diversas relaciones y conexiones en tus datos.

## Tabla de Contenidos

1. [Características](#características)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Referencia de API](#referencia-de-api)
5. [Ejemplos](#ejemplos)

## Características

- Implementación de grafo no dirigido
- Añadir y eliminar nodos y aristas
- Comprobar la existencia de aristas
- Obtener nodos adyacentes
- Recorrido en profundidad (DFS)
- Fácilmente integrable con proyectos Next.js

## Instalación

1. Crea un nuevo archivo llamado `Graph.js` en la carpeta de utilidades de tu proyecto (por ejemplo, `src/utils/`).
2. Copia la implementación de la clase Graph en este archivo.
3. Exporta la clase al final del archivo:

```javascript
export default Graph;
```

## Uso

Para usar la clase Graph en tus componentes o páginas de Next.js:

1. Importa la clase Graph:

```javascript
import Graph from '../utils/Graph';
```

2. Crea una nueva instancia de Graph:

```javascript
const graph = new Graph();
```

3. Utiliza los métodos del grafo según sea necesario en la lógica de tu componente.

## Referencia de API

### `constructor()`

Crea una nueva instancia del Grafo.

### `addNode(node)`

Añade un nuevo nodo al grafo.

### `addEdge(node1, node2)`

Añade una arista entre dos nodos. Si los nodos no existen, se crean.

### `removeNode(node)`

Elimina un nodo y todas sus conexiones del grafo.

### `removeEdge(node1, node2)`

Elimina la arista entre dos nodos.

### `hasEdge(node1, node2)`

Devuelve true si hay una arista entre los dos nodos, false en caso contrario.

### `getAdjacentNodes(node)`

Devuelve un array de todos los nodos conectados al nodo dado.

### `depthFirstSearch(startNode, visited = new Set())`

Realiza un recorrido en profundidad comenzando desde el nodo dado.

## Ejemplos

Aquí tienes un ejemplo básico de cómo usar la clase Graph:

```javascript
import Graph from '../utils/Graph';

const MiComponente = () => {
  const graph = new Graph();
  
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'A');

  console.log(graph.hasEdge('A', 'B')); // true
  console.log(graph.getAdjacentNodes('A')); // ['B', 'D']

  graph.depthFirstSearch('A');

  return (
    // Tu JSX aquí
  );
};
```