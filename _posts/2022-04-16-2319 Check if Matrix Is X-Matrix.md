---
title: Check if Matrix Is X-Matrix
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2319> Check if Matrix Is X-Matrix

```c++
class Solution {
public:
    bool checkXMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if((i == j) || (i + j) == (n - 1)) {
                    if(grid[i][j] == 0)
                        return false;
                }
                else {
                    if(grid[i][j]!=0)
                        return false;
                }
            }
        }
        return true;;
    }
};
```
