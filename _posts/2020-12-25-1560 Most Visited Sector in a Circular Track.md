---
title: Most Visited Sector in a Circular Track
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1560> Most Visited Sector in a Circular Track

```c++
class Solution {
public:
    vector<int> mostVisited(int n, vector<int>& rounds) {
       vector<int> res; 
        if(rounds[0] <= rounds.back()) {
            for(int i = rounds[0]; i <= rounds.back(); i++) {
                res.push_back(i);
            }
        } else {
            for(int i = 1; i <= n; i++) {
                if(i >= rounds[0] || i <= rounds.back())
                    res.push_back(i);
            }
        }
        return res; 
    }
};
```

