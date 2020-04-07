---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E>  Find N Unique Integers Sum up to Zero

```c++
class Solution {
public:
    vector<int> sumZero(int n) {
        vector<int> ans;
        if(n % 2) {
            ans.push_back(0);
            
        }
        else ;
        for(int i = 1; i <= n / 2; i++) {
            ans.push_back(i);
            ans.push_back(-i);
        }
        return ans;
    }
};
```

