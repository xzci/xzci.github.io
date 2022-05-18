---
title: Monotonic Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 896> Monotonic Array

```c++
class Solution {
public:
    bool isMonotonic(vector<int>& A) {
        if(A.size() < 2)
            return true;
        bool increasing =false;
        bool decreasing =false;
        for(int i = 1; i!= A.size(); i++) {
            if(A[i] - A[i - 1] > 0)
                increasing = true;
            else if (A[i] - A[i - 1] < 0)
                decreasing = true;
            if(increasing && decreasing)
                return false;
        }
        
        return true;
    }
};
```

