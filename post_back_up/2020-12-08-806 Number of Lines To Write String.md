---
title: Number of Lines To Write String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 806> Number of Lines To Write String

```c++
class Solution {
public:
    vector<int> numberOfLines(vector<int>& widths, string S) {
         int W = 0, L = 1;
        for(auto i:S) {
            W += widths[i - 'a'];
            if(100 < W) { 
                W = widths[i - 'a']; 
                L++; 
            }
        }
        return {L, W};
    }
};
```

