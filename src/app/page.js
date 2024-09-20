import Image from "next/image";
import styles from "./page.module.css";
import Graph from '/utils/Graph';

export default function Home() {

 const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');


console.log(graph.hasEdge('A', 'B'));

console.log(graph.isEmpty());

console.log(graph.hasNode('A'));


  return (
    <></>
  );
}
