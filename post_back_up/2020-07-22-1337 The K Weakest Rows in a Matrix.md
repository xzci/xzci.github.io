---
title: The K Weakest Rows in a Matrix
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1337> The K Weakest Rows in a Matrix

```c++
class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        multimap<int,int> temp;
        for(int i = 0; i != mat.size(); i++) {
            int account = 0;
            for(int j = 0; j != mat[0].size(); j++) {
                account += mat[i][j];
            }
            temp.insert(pair<int,int>(account,i));
        }
        vector<int> ans;
        auto it = temp.begin();
        for(int i=0;i<k;i++)
        {
            ans.push_back(it->second);
            it++;
        }
        
        return ans;
    }
};
```

