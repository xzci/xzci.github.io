---
title: Special Positions in a Binary Matrix
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1582> Special Positions in a Binary Matrix

```c++
class Solution {
public:
    bool isSingle(const vector<vector<int>>& mat,int row,int col) {
        int count=0;
        for(auto i:mat[row])
            if(i and ++count>1) return false;
            
        count=0;
        for(const auto& i:mat)
            if(i[col] and ++count>1) return false;
        
        return true;
    }
    
    int numSpecial(const vector<vector<int>>& mat) {
        int count=0;
        for(int i=0; i<mat.size(); ++i)
            for(int j=0; j<mat[0].size(); ++j)
                if(mat[i][j] and isSingle(mat,i,j)) ++count;
        return count;
    }
};
```

