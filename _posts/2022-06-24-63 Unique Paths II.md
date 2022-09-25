---
title: Unique Paths II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 63> Unique Paths II

```c++
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        const int m = obstacleGrid.size();
        const int n = obstacleGrid.front().size();

        if(obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1])
            return 0;

        vector<int> f(n, 0);
        f[0] = obstacleGrid[0][0] ? 0 : 1;

        for(int i = 0; i < m; i++)
            for(int j = 0; j < n; j++)
                f[j] = obstacleGrid[i][j] ? 0 : (j == 0 ? 0 : f[j - 1]) + f[j];

        return f[n - 1];
    }
};
```
