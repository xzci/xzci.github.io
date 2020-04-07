---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Number of Steps to Reduce a Number to Zero

```c++
class Solution {
public:
    int numberOfSteps (int num) {
        int i = 0;
        while(num != 0) {
            if(num % 2) 
                num -= 1;
            else
                num /= 2;
            i++;
        }
        return i;
    }
};
```

