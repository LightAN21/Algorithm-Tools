#include <iostream>
#include <vector>
#include <map>
#include <set>

using namespace std;

typedef struct g_node
{
	int id;
	void	*data;
	map<int, struct g_node *> nb;
} g_node;

class graph
{
	private:
		g_node *g;
		map<int, g_node *> id_map;
		//map<int, g_node *>::iterator it1;
		//map<int, g_node *>::iterator it2;

	public:
		graph()
		{
			g = 0;
		}

		g_node *new_graph_node(int id)
		{
			g_node *n = new g_node;

			n->id = id;
			id_map.insert(pair<int, g_node *>(id, n));
			if (!g)
				g = n;
			return n;
		}

		g_node *add_graph_node(int id)
		{
			g_node *n;

			auto it = id_map.find(id);
			if (it != id_map.end())
				return it->second;
			n = new g_node;
			n->id = id;
			id_map.insert(pair<int, g_node *>(id, n));
			if (!g)
				g = n;
			return n;
		}

		void add_edge(int a, int b)
		{
			g_node *n1;
			g_node *n2;

			auto it1 = id_map.find(a);
			auto it2 = id_map.find(b);
			n1 = (it1 == id_map.end()) ? new_graph_node(a) : it1->second;
			n2 = (it1 == id_map.end()) ? new_graph_node(b) : it2->second;
			if ((n1->nb).find(b) == n1->nb.end())
			{
				(n1->nb).insert(pair<int, g_node *>(b, n2));
				(n2->nb).insert(pair<int, g_node *>(a, n1));
			}
		}

		void	print_graph()
		{
			g_node *n;
			vector<int> v;

			if (g == 0)
			{
				cout << "graph:\n(null)" << endl;
				return ;
			}
			for (auto it = id_map.begin(); it != id_map.end(); it++)
				v.push_back(it->first);
			sort(v.begin(), v.end());
			cout << "graph:" << endl;
			for (unsigned i = 0; i < v.size(); i++)
			{
				cout << "node (" << v[i] << ") with nbrs:";
				auto k = id_map.find(v[i]);
				n = k->second;
				for (auto it = n->nb.begin(); it != n->nb.end(); it++)
					cout << " (" << it->first << ")";
				cout << endl;
			}
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
