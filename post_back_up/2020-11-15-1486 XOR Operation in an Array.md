---
title: XOR Operation in an Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1486> XOR Operation in an Array

```c++
class Solution {
public:
    int xorOperation(int n, int start) {
        int ans = start;
    for(int i = 1; i < n; i++){
        ans ^= start + 2 * i;
    }
    return ans;
    }
};
```

