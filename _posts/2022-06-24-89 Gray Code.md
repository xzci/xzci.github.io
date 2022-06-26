---
title: Container With Most Water
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 11> Container With Most Water

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
