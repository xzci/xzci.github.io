---
title: Sum of Digits in Base K
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1837> Sum of Digits in Base K


```c++
class Solution {
public:
    int sumBase(int n, int k) {
        int res = 0;

        while(n > 0){
            int r1 = n % k;
            res += r1;
            n /= k;
        }
    return res;
    }
};
```

