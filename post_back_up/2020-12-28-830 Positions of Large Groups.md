---
title: Positions of Large Groups
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 830> Positions of Large Groups

```c++
class Solution {
public:
    vector<vector<int>> largeGroupPositions(string s) {
        vector<vector<int>> res;
        int start = 0;
        for (int i = 0; i <= s.size(); i++) {
            if (s[start] != s[i]){
                if (i - start >= 3) res.push_back({start , (i - 1) });
                start = i;
            }
        }
        return res;
    }
};
```

