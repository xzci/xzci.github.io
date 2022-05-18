---
title: Transpose Matrix
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 867> Transpose Matrix

```c++
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& A) {
        vector<vector<int>> res(A[0].size(), vector<int>(A.size()));
        for(int i = 0; i < A.size(); i++){
            for(int j = 0; j < A[i].size(); j++){
                res[j][i] = A[i][j];
            }
        }
        return res;
    }
};
```

