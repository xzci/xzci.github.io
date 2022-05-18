---
title: N-th Tribonacci Number
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1137> N-th Tribonacci Number

```c++
class Solution {
public:
    int tribonacci(int n) {
        int f[38];
        f[0]=0;
        f[1]=1;
        f[2]=1;
        for (int i=3;i<=n;i++) {
            f[i]=f[i-1]+f[i-2]+f[i-3];
        }
        return f[n];
    }
};
```

