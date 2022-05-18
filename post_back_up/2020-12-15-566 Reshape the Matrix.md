---
title: Reshape the Matrix
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 566> Reshape the Matrix

```c++
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& nums, int r, int c) {
        int m = nums.size();
        int n = nums[0].size();
        if(r * c != m * n)
            return nums;
       
        vector<vector<int>>res(r,vector<int>(c,0));
        int column = 0;
        int row = 0;
        for(int i = 0; i < m; i++){
            for(int j = 0;j < n; j++) {
                res[row][column] = nums[i][j];
                column++;
                if(column == c){
                    column=0;
                    row++;
                }
            }
        }
        return res;
    }
};
```

