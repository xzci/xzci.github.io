---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Subtract the Product and Sum of Digits of an Integer    

```c++
class Solution {
public:
    
    int subtractProductAndSum(int n) {
        int a = 1;
        int b = 0;
        int x;
        while (n != 0) {
            x = n % 10;
            a *= x;
            b += x;
            n = n / 10;
        }
        return a - b;
    }
    
};
```

