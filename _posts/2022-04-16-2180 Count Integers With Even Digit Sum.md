---
title: Count Integers With Even Digit Sum
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2180> Count Integers With Even Digit Sum

```c++
class Solution {
public:
    int findsum(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    int countEven(int num) {
        int r = num % 10;
        int q = num / 10;
        int sum = q * 5 - 1;
        q = findsum(q);
        if (q % 2 == 0 || !(r % 2 == 0))
            sum += r / 2 + 1;
        else
            sum += r / 2;
        return sum;
    }
};
```
