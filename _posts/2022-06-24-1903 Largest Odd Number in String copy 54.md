---
title: Largest Odd Number in String
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1903> Largest Odd Number in String

```c++
class Solution {
public:
    string largestOddNumber(string num) {
        int i = num.size();
        for(;i >= 0; i--)
            if((num[i] - '0') % 2 != 0)
                break;
        return num.substr(0, i+1);
    }
};
```
