#include <iostream>
#include <algorithm>
#include <map>
#include <set>
#include <vector>

using namespace std;

typedef struct g_node
{
	int id;
	void *data;
	map<int, struct g_node *> nb;
} g_node;

class graph
{
private:
	g_node *g;
	map<int, g_node *> id_map;

public:
	graph()
	{
		g = 0;
	}

	g_node *new_vertex(int id)
	{
		g_node *n = new g_node;

		n->id = id;
		id_map[id] = n;
		if (!g)
			g = n;
		return n;
	}

	g_node *add_vertex(int id)
	{
		g_node *n;

		n = id_map[id];
		if (n)
			return n;
		return new_vertex(id);
	}

	void add_edge(int a, int b)
	{
		g_node *n1;
		g_node *n2;

		n1 = id_map[a];
		n2 = id_map[b];
		if (!n1)
			n1 = add_vertex(a);
		if (!n2)
			n2 = add_vertex(b);
		if (!n1->nb[b])
		{
			n1->nb[b] = n2;
			n2->nb[a] = n1;
		}
	}

	void print_graph()
	{
		vector<int> v;

		if (g == 0)
		{
			cout << "graph: (null)" << endl;
			return;
		}
		for (auto it = id_map.begin(); it != id_map.end(); it++)
			v.push_back(it->first);
		sort(v.begin(), v.end());
		cout << "graph:" << endl;
		for (unsigned i = 0; i < v.size(); i++)
		{
			cout << "node (" << v[i] << ") with nbrs:";
			auto n = id_map[v[i]];
			for (auto it = n->nb.begin(); it != n->nb.end(); it++)
				cout << " (" << it->first << ")";
			cout << endl;
		}
	}

	void string_to_graph(string s)
	{
		s = "";
	}
};

int main()
{
	graph g;

	g.add_edge(3, 4);
	g.add_edge(1, 2);
	g.add_edge(1, 3);
	g.print_graph();
	return 0;
}
