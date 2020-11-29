---
title: N-Repeated Element in Size 2N Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 961> N-Repeated Element in Size 2N Array

```c++
class Solution {
public:
    int repeatedNTimes(vector<int>& A) {
        for (int i = 2; i < A.size(); ++i){
            if(A[i] == A[i - 1] or A[i] == A[i-2]){
                return A[i];
            }
        }
        return A[0];
    }
};
```

