---
title: Matrix Diagonal Sum
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1572> Matrix Diagonal Sum

```c++
class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int ans = 0;
        for(int i = 0; i != mat.size(); i++) {
            ans += mat[i][i];
            ans += mat[i][mat.size() - i - 1];
        }
        if(mat.size() % 2)
            return ans - mat[mat.size() / 2][mat.size() / 2];
        return ans;
        
    }
};
```

