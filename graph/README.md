# Graph

A graph is a way to representing relationships that exist between pairs of objects.

That is, a ghrph is simply a set V of objects, called vertices or nodes, and a collection E of pairs of vertices from V, called edges.

Edges in a graph are either directed or undirected.

Notation: we use (u, v) to represent an edge of a graph.

### Degree of Vertices
* The degree (or valency) of a vertex of a graph is the number of edges that are incident to the vertex, and in a multigraph, loops are counted twice.

Notation: we use deg(v) to denote the degree of a vertex v of a graph.

### Undirected Graph
* An undirected graph is a graph in which edges have no orientation.

The edge (u, v) is identical to the edge (v, u).

### Directed Graph
* A directed graph(or digraph) is a graph in which edges have orientations.

The edge (u, v) represent a directed edge from node u to node v.

### Weighted Graph
* A weighted graph is a graph in which each edge is given a numerical weight.

Notation: we use (u, v, w) to represent an edge (u, v) with weight w in weighted graph.

### Path
* A path is a sequence of alternating vertices and edges that starts at a vertex and ends at a vertex such that each edge is incident to its predecessor and successor vertex.

### Cycle
* A cycle is a path that the first node of the path corresponds to the last.

### Directed Path and Directed Cycle
* A directed path is a path such that all edges are directed and are traversed along their direction.

* A directed cycle is similarly defined.

### Subgraph
* A subgraph of a graph G is a graph H whose vertices and edges are subsets of the vertices and edges of G, respectively.

### Spanning subgraph
* A spanning subgraph of G is a subgraph of G that contains all the vertices of the graph G.

### Connected graph
* A graph is connected if, for any two vertices, there is a path between them.

If a graph G is not connected, its maximal connected subgraphs are called the connected components of G.

### Forest, Tree(free tree), and Spanning tree
* A forest is a graph without cycles.

* A tree(or free tree) is a connected forest, that is, a connected graph without cycles.

* A spanning tree of a graph is a spanning subgraph that is a tree.

### Directed Acyclic Graph (DAG)
* An directed acyclic graph is a directed graph with no cycles.

### Rooted Trees
* A rooted tree is a directed acyclic graph with a special node, called the root of the tree, such that every other node is joined by a directed path to the root, all nodes either point away(out-tree) or towards(in-tree) the root.

### Bipartite Graph
A bipartite graph is one whose vertives can be split into two independent groups U and V, such that every edge connects between U and V. (two colourable, no odd length cycle)

### Complete graph
A complete graph is one where there is a unique edge between every pair of nodes.

Notation: A complete graph with n vertices is denoted as the graph K_n.

# The graph abstract data type (ADT)
The graph ADT defines two types: Vertex and Edge. (See reference [1])

It also provides two list types for storing lists of vertices and edges, called VertexList and EdgeList, respectively.

### Vertex 
Each Vertex object u supports the following operations, which provide access to the vertex’s element and information regarding incident edges and adjacent ver- tices.

* operator*(): Return the element associated with u.
* incidentEdges(): Return an edge list of the edges incident on u.
* isAdjacentTo(v): Test whether vertices u and v are adjacent.

### Edge
Each Edge object e supports the following operations, which provide access to the edge’s end vertices and information regarding the edge’s incidence relation- ships.

* operator*(): Return the element associated with e.
* endVertices(): Return a vertex list containing e’s end vertices.
* opposite(v): Return the end vertex of edge e distinct from vertex v; an error occurs if e is not incident on v.
* isAdjacentTo(f): Test whether edges e and f are adjacent.
* isIncidentOn(v): Test whether e is incident on v.

### Basic operations
The full graph ADT consists of the following operations, which provide access to the lists of vertices and edges, and provide functions for modifying the graph.

* vertices(): Return a vertex list of all the vertices of the graph.
* edges(): Return an edge list of all the edges of the graph.
* insertVertex(x): Insert and return a new vertex storing element x.
* insertEdge(v, w, x): Insert and return a new undirected edge with end vertices v and w and storing element x.
* eraseVertex(v): Remove vertex v and all its incident edges.
* eraseEdge(e): Remove edge e.

# Data Structures for Graphs

### The Edge List Structure
An edge list is a way to represent a graph simply as an unordered list of deges.

### The Adjacency List Structure
An adjacency list is a way to represent a graph as a map from nodes to lists of edges that link to it.

### The Adjacency Matrix Structure
A adjacency matrix m, m[i][j] reperesnts the dege weight of going from node i to node j.

# Common Problems in Graph Theory

### Shortest Path Problem
Given a weighted graph, find the shortest path of deges from node A to node B.

(Algorithms: BFS, Dijkstra's, Bellman-Ford, Floyd-Warshall, A*, ...)

### Connectivity
Does there exist a path between node A and node B?

### Negative cycles
Does the given weighted digraph have any negative cycles? If so, where?

(Algorithms: Bellman-Ford, Floyd-Warshall)

### Stronly Connected Components
Is there any self-contained cycles within a directed graph?

(Algorithms: Tarjan's and Kosaraju's algorithm)

### Traveling Salesman Problem
Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?

(Algorithms: Held-Karp, branch and bound, ...)

### Bridges
A bridge (or cut edge) is an edge in a graph whose removal increases the number of connected components.
How to find out bridges in a graph?

### Minimum Spanning Tree (MST)
A minimum spanning tree is a spanning tree of a connected weighted graph with the minium total edge weight.
How to find the minimum spanning tree of a connected weighted graph?

(Algorithms: Kruskal's, Prim's, Boruvka's algorithm)
(Applications: least cost network, circuit design, transportation networks, ...)

### Network flow: max flow
With an infinite input source, how much "flow" can we push through the network?

Suppose the edges are roads with cars, pipes with water or hallways with packed with people. Flow represents the volume of water allowed to flow through the pipes, the number of cars the roads can sustain in traffic and the maximum amount of people that can navigate through the hallways.

(Algorithms: Ford-Fulkerson, Edmonds-Karp, Dinic's algorithm)


# Reference
[1] Data Structures and Algorithms in C++ (2nd ed), by David Mount, Roberto Tamassia, Michael T. Goodrich

[2] <a href="https://www.youtube.com/watch?v=09_LlHjoEiY">Algorithms Course - Graph Theory Tutorial from a Google Engineer</a> (on YouTube)


