---
title: Richest Customer Wealth
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1672> Richest Customer Wealth

```c++
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int ans = -1;
        for(auto i : accounts){
            ans = max(accumulate(i.begin(), i.end(), 0), ans);
        }
        return ans;
    }
};
```

