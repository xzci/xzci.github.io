---
title: Determine Whether Matrix Can Be Obtained By Rotation
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1886> Determine Whether Matrix Can Be Obtained By Rotation


```c++
class Solution {
public:
    bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& tar) {
        if(mat == tar)
            return true;
        int d = 3;
        while(d--){
            
            for(int i = 0; i < mat.size(); i++)
                for(int j = i + 1; j < mat.size(); j++)
                    swap(mat[i][j], mat[j][i]);
                    
            for (int i = 0; i < mat.size(); i++) 
                reverse(mat[i].begin(), mat[i].end());
        if(mat == tar)
            return true;
        }
        return false;
    }
};
```

