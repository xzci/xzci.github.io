---
title: Prime Number of Set Bits in Binary Representation
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 762> Prime Number of Set Bits in Binary Representation

```c++
class Solution {
public:
    int countPrimeSetBits(int L, int R) {
        int res = 0;
        for (int num = L; num <= R; num++) {
            int cnt = __builtin_popcount(num);
            res += cnt < 4 ? cnt > 1 : (cnt % 2 && cnt % 3);
        }
        return res;
    }
};
```

