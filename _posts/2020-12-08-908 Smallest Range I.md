---
title: Smallest Range I
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 908> Smallest Range I

```c++
class Solution {
public:
    int smallestRangeI(vector<int>& A, int K) {
        return max(0, *max_element(A.begin(), A.end()) - K - (*min_element(A.begin(), A.end()) + K));
    }
};
```

