---
title: Matrix Cells in Distance Order
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1030> Matrix Cells in Distance Order

```c++
class Solution {
public:
    vector<vector<int>> allCellsDistOrder(int R, int C, int r0, int c0) {
        vector<vector<int>> res;
        vector<vector<pair<int, int>>> vec(201);
        for (int i = 0; i < R; ++i) {
            for (int j = 0; j < C; ++j) {
                int dist = dis(i, j, r0, c0);
                vec[dist].push_back(make_pair(i, j));
            }
        }
        for (int i = 0; i < vec.size(); ++i) {
            for (int j = 0; j < vec[i].size(); ++j) {
                res.push_back({vec[i][j].first, vec[i][j].second});
            }
        }
        return res;
    }
    
    int dis(int r1, int c1, int r2, int c2) {
        return abs(r1 - r2) + abs(c1 - c2);
    }
};
```

