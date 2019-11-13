#include <iostream>
#include <map>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

int main(void)
{
    unordered_map<int, string> m;
    string s = "", s2 = "";

    m[0] = "123";
    m[1] = "hello";

    s = m[1];
    s2 = m[3];

    cout << "s: " << s << endl;
    cout << "s2: " << s2 << endl;

    if (!s2[0])
        cout << "s2 empty" << endl;
    return 0;
}
