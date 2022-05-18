---
title: Find if Path Exists in Graph
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1971> Find if Path Exists in Graph


```c++
// Method 1
class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        vector<bool>b(n+1,false);
        unordered_map<int,vector<int>>m;
        for(auto i : edges) {
            m[i[0]].emplace_back(i[1]);
            m[i[1]].emplace_back(i[0]);
        }
        queue<int>q;
        q.push(source);
        b[source] = true;
        while(!q.empty()) {
            int t = q.front();
            q.pop();
            for(int i = 0; i < m[t].size(); i++) {
                int k = m[t][i];
                if(b[k] == false) {
                    q.push(k);
                    b[k] = true;
                }
            }
            if(b[destination] == true)
                return true;
        }
        return false;
    }
};

// Method 2
class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int start, int end) {
        vector<int> f(n);
        iota(f.begin(), f.end(), 0);
        for(auto& e : edges) {
            int a = find(f, e[0]), b = find(f, e[1]);
            if (a < b) f[b] = a;
            else f[a] = b;
        }
        return find(f, start) == find(f, end);
    }
    
    int find(vector<int>& f, int x) {
        if (f[x] != x) {
            f[x] = find(f, f[x]);
        }
        return f[x];
    }
};
```

