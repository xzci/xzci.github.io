---
title: Find Center of Star Graph

categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1791> Find Center of Star Graph

```c++
//method 1
class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        int a = edges[0][0];
        int b = edges[0][1];
        int c = edges[1][0];
        int d = edges[1][1];
        
        if (a == c || a == d) return a;
        else return b;
    }
};

//method 2
class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        unordered_map <int,int> m;
        for(auto i:edges){
            for(auto j:i){
                if(++m[j] > 1)
                    return j;
            }
        }
        return 0;
    }
};
```

