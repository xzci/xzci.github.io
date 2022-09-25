---
title: A Number After a Double Reversal
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2119> A Number After a Double Reversal

```c++
class Solution {
public:
    bool isSameAfterReversals(int num) {
        if(num == 0)
            return true;
        if(num % 10)
            return true;
        else
            return false;
    }
};
```
