---
title: Binary Prefix Divisible By 5
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1018> Binary Prefix Divisible By 5

```c++
class Solution {
public:
    vector<bool> prefixesDivBy5(vector<int>& A) {
        int n=A.size();
        vector<bool>result(n,false);
        int val = 0;
        for(int i = 0; i < n; i++){
            if(!((val= val * 2 + A[i]) %= 5))
                result[i] = true;
        }
        return result;
    }
};
```

