---
title: Set Matrix Zeroes
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 73> Set Matrix Zeroes

```c++
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        const int m = matrix.size();
        const int n = matrix[0].size();

        vector<int> row(m, false);
        vector<int> col(n, false);

        for(int i = 0; i != m; i++)
            for(int j = 0; j != n; j++)
                if(matrix[i][j] == 0)
                    row[i] = col[j] = true;

        for(int i = 0; i != m; i++)
            if(row[i])
                fill(&matrix[i][0], &matrix[i][0] + n, 0);

        for(int i = 0; i != n; i++)
            if(col[i])
                for(int j = 0; j != m; j++)
                    matrix[j][i] = 0;

    }
};
```
