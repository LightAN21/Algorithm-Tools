# Graph

A graph is a way to representing relationships that exist between pairs of objects.

That is, a ghrph is simply a set V of objects, called vertices, and a collection E of pairs of vertices from V, called edges.

Edges in a graph are either directed or undirected.

Notation: we use (u, v) to represent an edge of a graph.

### Undirected Graph
* An undirected graph is a graph in which edges have no orientation.

The edge (u, v) is identical to the edge (v, u).

### Directed Graph
* A directed graph(or digraph) is a graph in which edges have orientations.

The edge (u, v) represent a directed edge from node u to node v.

### Weighted Graph
* A weighted graph is a graph in which each edge is given a numerical weight.

Notation: we use (u, v, w) to represent an edge (u, v) with weight w in weighted graph.

### path
* A path is a sequence of alternating vertices and edges that starts at a vertex and ends at a vertex such that each edge is incident to its predecessor and successor vertex.

### cycle
* A cycle is a path that the first node of the path corresponds to the last.

### directed path and directed cycle
* A directed path is a path such that all edges are directed and are traversed along their direction.

* A directed cycle is similarly defined.

### subgraph
* A subgraph of a graph G is a graph H whose vertices and edges are subsets of the vertices and edges of G, respectively.

### spanning subgraph
* A spanning subgraph of G is a subgraph of G that contains all the vertices of the graph G.

### connected graph
* A graph is connected if, for any two vertices, there is a path between them.

If a graph G is not connected, its maximal connected subgraphs are called the connected components of G.

### forest, tree(free tree), and spanning tree
* A forest is a graph without cycles.

* A tree(or free tree) is a connected forest, that is, a connected graph without cycles.

* A spanning tree of a graph is a spanning subgraph that is a tree.

# The graph abstract data type (ADT)
The graph ADT defines two types: Vertex and Edge.

It also provides two list types for storing lists of vertices and edges, called VertexList and EdgeList, respectively.

### Vertex 
Each Vertex object u supports the following operations, which provide access to the vertex’s element and information regarding incident edges and adjacent ver- tices.

* operator*(): Return the element associated with u.
* incidentEdges(): Return an edge list of the edges incident on u.
* isAdjacentTo(v): Test whether vertices u and v are adjacent.

### Edge
Each Edge object e supports the following operations, which provide access to the edge’s end vertices and information regarding the edge’s incidence relation- ships.



### reference
* Data Structures and Algorithms in C++, by David Mount, Roberto Tamassia, Michael T. Goodrich
* <a herf="https://www.youtube.com/watch?v=09_LlHjoEiY">Algorithms Course - Graph Theory Tutorial from a Google Engineer</a> (on YouTube)

