#include <iostream>
#include <vector>
#include <map>
#include <set>

using namespace std;

typedef struct g_node
{
	int id;
	void	*data;
	map<int, struct node *> nb;
} g_node;

class graph
{
	private:
		g_node *g;
		map<int, g_node *> id_map;
		map<int, g_node *>::iterator it1;
		map<int, g_node *>::iterator it2;

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
			return n;
		}

		void add_edge(int a, int b)
		{
			g_node *n1;
			g_node *n2;

			it1 = id_map.find(a);
			it2 = id_map.find(b);
			n1 = (it1 == id_map.end()) ? new_graph_node(a) : it1->second;
			n2 = (it1 == id_map.end()) ? new_graph_node(b) : it2->second;
			if ((n1->nb).find(b) == n1->nb.end())
			{
				(n1->nb).insert(pair<int, g_node *>(b, n2));
				(n2->nb).insert(pair<int, g_node *>(a, n1));
			}
		}
};

int main()
{
	graph g;

	cout << "graph" << endl;
	return 0;
}
