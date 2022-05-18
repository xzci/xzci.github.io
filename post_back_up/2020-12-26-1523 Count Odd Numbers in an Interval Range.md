---
title: Count Odd Numbers in an Interval Range
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1523> Count Odd Numbers in an Interval Range

```c++
class Solution {
public:
    int countOdds(int low,int high) {
        return (high - low + high % 2 + low % 2) / 2;
    }
};
```

