---
title: Image Smoother
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 661> Image Smoother

```c++
class Solution {
public:
    vector<vector<int>> imageSmoother(vector<vector<int>>& M) {
       
        vector<int> d{-1, 0, 1};
        vector<vector<int>> res(M.size(), vector<int>(M[0].size(), 0));
        for(int i = 0; i < M.size(); ++i) {
            for(int j = 0; j < M[0].size(); ++j) {
                int sum = 0, count = 0;
                for(int k = 0; k < 3; ++k) {
                    for(int l = 0; l < 3; ++l) {
                        int m = i + d[k], n = j+d[l];
                        if(m >= 0 && m < M.size() && n >= 0 && n < M[0].size()) {
                            ++count; 
                            sum += M[m][n];
                        }
                    }
                }
                res[i][j] = sum/count;
            }
        }
        return res;
    }
};
```

